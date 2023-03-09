import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";


const StripeCheckoutForm = ({ price, email }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");  

  useEffect(() => {
    fetch("http://localhost:8080/payment/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price, email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      localStorage.setItem("cardType", paymentMethod?.card.brand);
      localStorage.setItem("paymentMethod", paymentMethod?.type);
    }

    // confirming the payment

    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: 'Halima',
          email: email,
        },
      },
    });

    if (intentError) {
      setCardError(intentError?.message);
      setSuccess("");
    } else {
      setSuccess("Payment Succeed!");
      
      console.log(paymentIntent)

      // Storing data to the database
      const docRef = await addDoc(collection(db, "payments"), {
        tranId: paymentIntent?.id,
        email: paymentIntent?.receipt_email,
        amount: paymentIntent?.amount,
      });      
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "1%", marginTop: "2%" }}>
      <div style={{ background: "white", padding: "10px 5px", borderRadius: "5px" }}>
        <CardElement
          options={{
            style: {
              border: "1px solid black",
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </div>
      <button className=" mt-10" type="submit" style={{ marginTop: "10px", background: "green", padding: "8px 30px", color: "white", border: "none", borderRadius: "5px" }} disabled={!stripe}>
        Pay
      </button>
      {success && <p style={{ color: "green" }}>{success}</p>}
      {cardError && <p style={{ color: "red" }}>{cardError}</p>}
    </form>
  );
};

export default StripeCheckoutForm;

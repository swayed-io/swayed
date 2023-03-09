import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeCheckoutForm from "../components/paymets/StripeCheckoutForm";

const Payment = ({ totalPrice, userTransectionDetailed }) => {
  const stripePromise = loadStripe("pk_test_51MeNjlBnUuL4pMAm5CZ3xP8IqqdGPCYCLRSip0MHwmMXVvHKLqmQsGTnaZabS2EYtQeB27TUKiqAkx1q4RFgpPXL0028NJAQiy");
  let price = totalPrice;

  return (
    <div className="w-1/4 bg-slate-300 text-center mx-auto mt-52 p-9">
      <Elements stripe={stripePromise}>
        <StripeCheckoutForm email="ali@ibne.com" price={5} />
      </Elements>
    </div>
  );
};

export default Payment;

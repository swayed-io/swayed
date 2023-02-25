import React from "react";
import cogoToast from "cogo-toast";
import { useRouter } from "next/router";
import { checkout } from "../../checkout";
const PaymentInfoForm = ({ page, setPage, formData, setFormData, saveShareProject }) => {
  const router = useRouter();
  const plan_cost = router.query.plan_cost;
  const [disable, setDisable] = React.useState(false);
  const [validation, setValidation] = React.useState({
    payment_method: "",
    plan_cost: "",
  });
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-[#413F9D] sm:text-3xl">Payment information</h1>
      </div>
      <div className="mx-auto max-w-lg py-4">
        <h2 className="text-center text-xl font-bold">Total cost</h2>
        <p className="text-center text-2xl text-gray-600">{plan_cost}$</p>
      </div>
      <div className="flex justify-around mx-auto  shadow-md border-1 rounded-md w-1/2  py-2">
        <div className="flex-col">
          <p>Credit card</p>
          <label className="flex items-center gap-2">
            <img src="/img/credit-card.svg" />
            <input
              type="radio"
              name="payment_method"
              value="credit card"
              checked={formData.payment_method === "credit card"}
              onChange={(e) => {
                if (e.target.checked) {
                  setFormData({ ...formData, payment_method: e.target.value, plan_cost: parseInt(plan_cost) });
                }
              }}
            />
          </label>
        </div>
        <div className="flex-col">
          <p>Paypal</p>
          <label htmlFor="" className="flex items-center gap-2">
            <img src="/img/paypal.svg" width={78} height={78} />
            <input
              type="radio"
              name="payment_method"
              value="paypal"
              checked={formData.payment_method === "paypal"}
              onChange={(e) => {
                if (e.target.checked) {
                  setFormData({ ...formData, payment_method: e.target.value, plan_cost: parseInt(plan_cost) });
                }
              }}
            />
          </label>
        </div>
      </div>
      <div className="my-2 w-full">
        <button
          onClick={() => {
            let validate = true;
            let message = "";
            setDisable(true);
            if (formData.payment_method === "") {
              message = "Please choose a payment method";
              validate = false;
              setValidation({
                payment_method: "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500",
              });
            }
            if (isNaN(formData.plan_cost)) {
              message = "Error in plan cost";
              validate = false;
              setValidation({
                plan_cost: "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500",
              });
            }
            if (validate) {
              saveShareProject(formData);
            } else {
              cogoToast.warn(message);
              validate = true;
              setDisable(false);
            }
          }}
          disabled={disable}
          className="w-1/2 mx-auto block rounded-lg bg-secondary-100 px-5 py-3 transition ease-in-out delay-150 active:bg-green-500  hover:-translate-y-1 hover:scale-110 text-sm font-semibold text-white   disabled:opacity-50 border-2 border-gray-200"
        >
          Save
        </button>
      </div>
      <div className="my-2 w-full  ">
        <button
          onClick={() => {
            setPage(page - 1);
          }}
          className=" w-1/2 mx-auto block rounded-lg bg-white px-5 py-3 transition ease-in-out delay-150 active:bg-green-500  hover:-translate-y-1 hover:scale-110 text-sm font-semibold text-black  disabled:opacity-50 border-2 border-gray-200"
        >
          Back
        </button>
      </div>

      <div className="my-2 w-full">

        <button
        className=" w-1/2 mx-auto block rounded-lg bg-white px-5 py-3 transition ease-in-out delay-150 active:bg-green-500  hover:-translate-y-1 hover:scale-110 text-sm font-semibold text-black  disabled:opacity-50 border-2 border-gray-200"
          onClick={() =>
            checkout({
              lineItems: [
                {
                  price: "price_1MeNuFBnUuL4pMAmFYLCJiHR",
                  quantity: 1,
                },
              ],
            })
          }
        >
         Pay
        </button>

      </div>
    </div>
  );
};

export default PaymentInfoForm;

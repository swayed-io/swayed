import React, { useState } from "react";
import FaqListItem from "./FaqListItem";
import { faqData } from "../home/common/Helper";

function Faq() {
  const [view, setView] = useState(null);
  const activeHandler = (value) => {
    if (value === view) {
      setView(null);
    } else {
      setView(value);
    }
  };
  return (
    <div className="bg-[#4DA3F0]/10 pb-[34px] px-2">
      <div>
        <p className="text-[#272727] text-[24px] pt-5 font-black text-center ff-poppins">
          {" "}
          FAQ
        </p>
      </div>
      <section className="max-w-[703px] w-full mx-auto">
        {faqData.map((item, index) => (
          <FaqListItem
            item={item}
            key={index}
            activeHandler={activeHandler}
            index={index}
            view={view}
          />
        ))}
      </section>
    </div>
  );
}

export default Faq;

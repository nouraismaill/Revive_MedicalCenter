import FaqsCard from "./faq";
import { faqsList } from "../assets/data/faqs";
const FaqList = () => {
  return (
    <section className=" p-3 lg:p-5 rounded-[12px] max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
      <div className=" space-y-[-30px] text-center">
        <h2 className="text-[44px] pr-14 leading-[50px] p-4 lg:mx-[-20px] sm:text-[40px]   mt-7 sm:mr-[-30px]    md:mr-[-407px]  text-black font-[700]">
          Most questions by
        </h2>
        <h2 className="text-[44px]  leading-[50px] p-4 lg:mx-[-20px] sm:text-[40px]   mt-7 sm:mr-[-30px]    md:mr-[-407px]  text-black font-[700]">
          <span class="text-bluehavy m ">our beloved patients</span>
        </h2>
      </div>
      <div className=" faq mt-0 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};
export default FaqList;

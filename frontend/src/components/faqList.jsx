import FaqsCard from "./faq";
import { faqsList } from "../assets/data/faqs";
const FaqList = () => {
  return (
    <section className=" p-3 lg:p-5 rounded-[12px] max-w-screen-xl mt-[-9px] mx-auto px-4   md:text-center">
      <div className=" max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};
export default FaqList;

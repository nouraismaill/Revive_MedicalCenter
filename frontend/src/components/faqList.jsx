import FaqsCard from "./faq";
import { faqsList } from "../assets/data/faqs";
const FaqList = () => {
  return (
    <section className=" p-3 lg:p-5 rounded-[12px] max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
      <div className=" flex flex-col col-span-1 space-y-3 text-center">
        <h1 className="text-3xl leading-12 text-black-800 font-bold">
          Most questions by our beloved patients
        </h1>
      </div>
      <div className="mt-14 max-w-2xl mx-auto"></div>{" "}
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};
export default FaqList;

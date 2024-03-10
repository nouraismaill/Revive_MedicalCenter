import { useState } from "react";

const FeedbackForm = () => {
  const [review, setReviewText] = useState("");
  const handleSubmitReview = async (e) => {
    e.preventDefault();
  };
  return (
    <form action="">
      <div>
        <h3 className="text-black text-[16px] leading-6 font-semibold mb-4">
          How would you rate the overall experience?
        </h3>
        <div class="rating float-left">
          <input type="radio" id="star5" name="rate" value="5" />
          <label for="star5" title="text"></label>
          <input type="radio" id="star4" name="rate" value="4" />
          <label for="star4" title="text"></label>
          <input type="radio" id="star3" name="rate" value="3" />
          <label for="star3" title="text"></label>
          <input type="radio" id="star2" name="rate" value="2" />
          <label for="star2" title="text"></label>
          <input checked="" type="radio" id="star1" name="rate" value="1" />
          <label for="star1" title="text"></label>
        </div>
      </div>

      <div className="mt-[90px]">
        <h3 className="text-black text-[16px] leading-6 font-semibold mb-4 mt-0">
          Share your feedback or suggestions
        </h3>
        <textarea
          className="border border-solid border-[#0066ff34] focus:outline outline-blue-500 w-full px-4 py-3 rounded-md"
          placeholder="Write your meesage"
          onChange={(e) => setReviewText(e.target.value)}
          rows="5"
        ></textarea>
      </div>
      <button className="btn" onClick={handleSubmitReview} type="submit">
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;

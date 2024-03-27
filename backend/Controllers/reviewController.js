import Doctor from "../models/DoctorSchema.js";
import Review from "../models/ReviewSchema.js";
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});
<<<<<<< HEAD
    res
      .status(200)
      .json({ success: true, message: "Succesful", data: reviews });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not found" });
=======
    res.status(200).json({ sucess: true, message: "Succesful", data: reviews });
  } catch (error) {
    res.status(404).json({ sucess: false, message: "Not found" });
>>>>>>> 971278fa96aa1cde22d9938e8aa9f5b4e469f6c5
  }
};
export const createReview = async (req, res) => {
  if (!req.body.doctor) req.body.doctor = req.params.doctorId;
  if (!req.body.user) req.body.user = req.userId;
  const newReview = new Review(req.body);
  try {
    const savedReview = await newReview.save();
    await Doctor.findByIdAndUpdate(req.body.doctor, {
      $push: { reviews: savedReview._id },
    });
    res
      .status(200)
<<<<<<< HEAD
      .json({ success: true, message: "Review Submitted", data: savedReview });
=======
      .json({ success: true, message: "Review submitted", data: savedReview });
>>>>>>> 971278fa96aa1cde22d9938e8aa9f5b4e469f6c5
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

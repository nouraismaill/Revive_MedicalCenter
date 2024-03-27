import mongoose from "mongoose";
import Doctor from "./DoctorSchema.js";

const reviewSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "Patient",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);
reviewSchema.pre(/^find/, function (next) {
<<<<<<< HEAD
  this.populate({
    path: "user",
    select: "name photo",
  });
=======
  this.populate({ path: "user", select: "name photo" });
>>>>>>> 971278fa96aa1cde22d9938e8aa9f5b4e469f6c5
  next();
});
reviewSchema.statics.calcAverageRatings = async function (doctorId) {
  const stats = await this.aggregate([
    {
      $match: { doctor: doctorId },
    },
    {
      $group: {
        _id: "$doctor",
        numOfRating: { $sum: 1 },
<<<<<<< HEAD
        averageRating: { $avg: "$rating" },
=======
        avgRating: { $avg: "$rating" },
>>>>>>> 971278fa96aa1cde22d9938e8aa9f5b4e469f6c5
      },
    },
  ]);
  await Doctor.findByIdAndUpdate(doctorId, {
    totalRating: stats[0].numOfRating,
<<<<<<< HEAD
    averageRating: stats[0].averageRating,
=======
    averageRating: stats[0].avgRating,
>>>>>>> 971278fa96aa1cde22d9938e8aa9f5b4e469f6c5
  });
};
reviewSchema.post("save", function () {
  this.constructor.calcAverageRatings(this.doctor);
});
<<<<<<< HEAD

=======
>>>>>>> 971278fa96aa1cde22d9938e8aa9f5b4e469f6c5
export default mongoose.model("Review", reviewSchema);

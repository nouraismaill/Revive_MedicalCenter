import Patient from "../models/PatientSchema.js";
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updateUser = await Patient.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated ",
      data: updateUser,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update " });
  }
};
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await Patient.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Successfully deleted " });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete " });
  }
};
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const User = await Patient.findById(id).select("-password");
    res.status(200).json({ success: true, message: "User found ", data: User });
  } catch (error) {
    res.status(404).json({ success: false, message: "No user found " });
  }
};
export const getAllUser = async (req, res) => {
  try {
    const Users = await Patient.find({}).select("-password");
    res
      .status(200)
      .json({ success: true, message: "Users found ", data: Users });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not found " });
  }
};

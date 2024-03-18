import React, { useState } from "react";
import signupImg from "../assets/images/signup.gif";
import avatar from "../assets/images/doctor-img01.png";
const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",

    role: "patient",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block py-10 rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>
          <div class="flex flex-col items-center justify-center py-5  ">
            <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
              <h2 class="text-3xl font-bold text-blue-900 mb-4">Sign Up</h2>

              <form class="flex flex-col ">
                <input
                  placeholder="Full Name"
                  value={formData.name}
                  name="name"
                  onChange={handleInputChange}
                  class="input-style  p-2 mb-4 "
                  type="text"
                  required
                />

                <input
                  placeholder="Enter your email"
                  value={formData.email}
                  name="email"
                  onChange={handleInputChange}
                  class="input-style p-2 mb-4 "
                  type="email"
                  required
                />

                <input
                  placeholder="Password"
                  value={formData.password}
                  name="password"
                  onChange={handleInputChange}
                  class="input-style p-2 mb-4 "
                  type="password"
                  required
                />
                <label
                  class="text-sm mb-2 text-gray-900 font-bold cursor-pointer"
                  for="role"
                  value={formData.role}
                  onChange={handleInputChange}
                >
                  Are you a
                </label>
                <select
                  class="input-style p-2 mb-4 "
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                >
                  <option value="patient">patient</option>
                  <option value="doctor">doctor</option>
                </select>
                <label
                  class="text-sm mb-2 font-bold text-gray-900 cursor-pointer"
                  for="gender"
                >
                  Gender
                </label>
                <select class="input-style p-2 mb-4" id="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>

                <div className="mb-5 pt-6 flex items-center gap-3">
                  <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-blue-500 flex items-center justify-center">
                    <img src={avatar} alt="" className="w-full rounded-full" />
                  </figure>
                  <div className="relative w-[130px] h-[50px] ">
                    <input
                      type="file"
                      name="photo"
                      id="customFile"
                      accept=".jpg, .png"
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <label
                      htmlFor="customFile"
                      className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#3B59BC] text-white font-semibold rounded-lg truncate cursor-pointer"
                    >
                      Upload Photo
                    </label>
                  </div>
                </div>

                <button
                  class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                  type="submit"
                >
                  Sign Up
                </button>
                <p class="text-gray-900 mt-4 text-center">
                  {" "}
                  Already have an account?{" "}
                  <a
                    class="text-sm text-blue-500 -200 hover:underline mt-4"
                    href="/login"
                  >
                    Login
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Signup;

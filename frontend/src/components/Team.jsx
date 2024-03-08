import { doctorsTeam } from "./../assets/data/doctors";
import Star from "../assets/images/Star.png";

const doctors = () => {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto sm:text-center">
          <h3 className="text-black pt-2 text-3xl font-semibold sm:text-4xl">
            Our Experience Doctors
          </h3>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {doctorsTeam.map((item, idx) => (
              <li key={idx}>
                <img
                  src={item.photo}
                  className=" object-cover rounded-xl aspect-square"
                  alt=""
                />
                <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-black font-[700]">
                  {item.name}
                </h2>
                <div className="mt-2 lg:mt-4 flex items-center justify-between">
                  <span className="bg-heavygreen text-green-900 py-1 px-2 lg:py-2  lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                    {item.specialization}
                  </span>
                  <div className="flex items-center gap-[6px]">
                    <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-black ">
                      <img src={Star} alt="" />
                      {item.avgRating}
                    </span>

                    <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-gray-500">
                      ({item.totalRating})
                    </span>
                  </div>
                </div>
                <div className="mt-[18px] lg:mt-5  flex items-center justify-between"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default doctors;

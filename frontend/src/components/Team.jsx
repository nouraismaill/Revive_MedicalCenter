import doctor1 from "../assets/images/doctor1.jpg";
import doctor2 from "../assets/images/doctor2.jpg";
import doctor3 from "../assets/images/doctor3.jpg";
const Team = () => {
  const team = [
    {
      avatar: doctor3,
      name: " Dr. Martiana dialan",
      specialization: "Surgeon",
    },
    {
      avatar: doctor2,
      name: "Dr. Micheal colorand",
      specialization: "Neurologist",
    },
    {
      avatar: doctor1,
      name: "Dr. Brown Luis",
      specialization: "Dermatologist",
    },
  ];

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
            {team.map((item, idx) => (
              <li key={idx}>
                <img
                  src={item.avatar}
                  className="object-cover rounded-xl aspect-square"
                  alt=""
                />
                <h4 className="text-lg text-gray-700 font-semibold">
                  {item.name}
                </h4>
                <p className="text-indigo-600">{item.specialization}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Team;

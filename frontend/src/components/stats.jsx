const Stats = () => {
  const stats = [
    {
      data: "15K+",
      title: "Patients",
    },
    {
      data: "50",
      title: "Expert Doctors",
    },
    {
      data: "300+",
      title: "Saved Hearts",
    },
    {
      data: "10+",
      title: "Years of Experience",
    },
  ];
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-black pb-5 text-3xl font-semibold sm:text-4xl">
            Our patients are always satisfied with the high-quality healthcare
            services we provide
          </h3>
          <p className="mt-3 ">
            We strive to ensure that every patient has a positive experience at
            our medical center.
          </p>
        </div>
        <div className="mt-12">
          <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
            {stats.map((item, idx) => (
              <li key={idx} className="text-center px-12 md:px-16">
                <h4 className="text-5xl text-indigo-600 font-bold">
                  {item.data}
                </h4>
                <p className="mt-3 font-medium">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Stats;

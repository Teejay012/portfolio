import React from "react";

const stats = [
  { label: "Years of Experience", value: "5+" },
  { label: "Successful Projects", value: "50+" },
  { label: "Reviews", value: "100+" },
];

const testimonials = [
  {
    name: "John Doe",
    feedback: "Absolutely fantastic work! The attention to detail and professionalism was top-notch.",
  },
  {
    name: "Jane Smith",
    feedback: "Delivered exceptional results on time. Highly recommend working together!",
  },
  {
    name: "Alex Johnson",
    feedback: "An amazing experience from start to finish. Will definitely collaborate again!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0b043a]">
      <div className="max-w-6xl mx-auto">
        {/* Stats Container */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white shadow-md rounded-lg p-6 mb-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="">
              <h3 className="text-2xl font-bold text-[#0b043a]">{stat.value}</h3>
              <p className="text-[#0b043a] text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <h2 className="text-3xl font-bold text-center mb-6">What Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <p className="text-lg italic text-[#0b043a]">"{testimonial.feedback}"</p>
              <h4 className="mt-4 font-semibold text-[#0b043a]">- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
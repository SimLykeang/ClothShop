import About from "../../public/about.jpg";

const AboutUs = () => {
  return (
    <div className="w-[80%] p-10 border-2 m-auto my-10 mb-30 shadow-2xl transition-all duration-1000 ease-in-out rounded-tr-[20px] rounded-bl-[20px] flex flex-col gap-3">
      <h1 className="text-2xl font-(family-name:--font-poppin-extrabold) m-auto lg:text-4xl md:">
        About Us
      </h1>

      <p>
        At our store, we believe shopping should be simple, enjoyable, and
        inspiring. We carefully select quality products to fit your lifestyle,
        offering everything you need in one place at fair prices. Whether you
        are looking for everyday essentials or something special, our goal is to
        bring you a smooth shopping experience with fast service and reliable
        support. Thank you for choosing us to be a part of your day.
      </p>
    </div>
  );
};

export default AboutUs;

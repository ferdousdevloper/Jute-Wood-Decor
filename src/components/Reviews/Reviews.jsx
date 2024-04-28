/* eslint-disable react/no-unescaped-entities */

import Marquee from "react-fast-marquee";

const Reviews = () => {
  return (
    <div className="  md:container mx-auto mt-10 mb-20">
      <div className="text-center mb-10">
        <h1 className="font-gilda md:text-5xl text-2xl  font-bold md:font-extrabold mt-10 mb-6">
          TESTIMONIAL
        </h1>
        <p className="max-w-[600px] mx-auto">
        Our customers love us! Hear what they have to say about their experiences. Discover why they trust us for quality products, excellent service, and unbeatable value. Join the satisfied customer community today!
        </p>
      </div>
      <section className=" ">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
              <h2 className="text-4xl font-bold">
              Exceptional Service, Exceeded Expectations
              </h2>
              <p className="dark:text-gray-600">
              Dive into our customer's journey of transformation and discover how our service exceeded their expectations, leaving them thrilled and satisfied beyond measure.
              </p>
            </div>
            <div className="p-6 xl:col-span-3">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md dark:bg-gray-50">
                    <p>
                    Experience testimonials where skepticism transforms into admiration. Customers rave about our quality, service, and value, reflecting our unwavering commitment to excellence. Join us on this transformative journey, where transactions become unforgettable experiences, and connections are forged. Discover why our customers trust us time and again.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://i.ibb.co/9Vgd0Bw/ferdous.jpg"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Ferdous Hossain</p>
                        <p className="text-sm dark:text-gray-600">
                          Owner of Company Co.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md dark:bg-gray-50">
                    <p>
                    Explore a tapestry of testimonials illuminating our steadfast commitment to excellence. From the first interaction to the last, customers extol our superior quality, exemplary service, and unmatched value. Join our loyal community today and immerse yourself in the unparalleled experience that defines our brand.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://i.ibb.co/pZkrQ3d/921.jpg"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Sophia Parker</p>
                        <p className="text-sm dark:text-gray-600">
                          CFO of company Co.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md dark:bg-gray-50">
                    <p>
                    Step into a world of authentic testimonials showcasing our unwavering dedication to excellence. From the initial encounter to the final transaction, our customers' journey is marked by unparalleled quality, exceptional service, and unbeatable value. Join our thriving community today and discover why trust in our brand is unwavering.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://i.ibb.co/sy34wKy/19591.jpg"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Alexander West</p>
                        <p className="text-sm dark:text-gray-600">
                          CTO of Company Co.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md dark:bg-gray-50">
                    <p>
                    Immerse yourself in the heartfelt testimonials of our valued customers, who share their transformative journeys with honesty and enthusiasm. From initial skepticism to overwhelming satisfaction, they recount the exceptional experiences that have left a lasting impression. Our commitment to unparalleled quality, impeccable service, and unbeatable value shines through each testimonial, reflecting our dedication to exceeding expectations. Join our satisfied community of customers and discover why they trust us time and time again. With every testimonial, we reaffirm our promise to deliver nothing short of excellence, ensuring your journey with us is nothing less than extraordinary.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://i.ibb.co/ZTFjt2p/2149271990-1.jpg"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Olivia Taylor</p>
                        <p className="text-sm dark:text-gray-600">
                          CMO of Company Co.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;

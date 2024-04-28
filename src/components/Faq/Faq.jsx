import Lottie from "lottie-react";
import faqAnimation from "../../faq-animation.json"

const Faq = () => {
  // const defaultOptions ={
  //   loop: true,
  //   autoplay: true,
  //   animationData: faqAnimation,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },

  // };
  return (
    <div className="md:container md:mx-auto">
      <h2 className="text-2xl font-semibold sm:text-4xl text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="">
        <section className="flex md:flex-row flex-col-reverse   justify-between items-center">
          <div className=" container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <div className="space-y-4">
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                How do I place an order?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Placing an order is easy! Simply browse our collection, select the items you love, and add them to your cart. Follow the checkout process, provide your shipping and payment details, and your order will be on its way.
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                What payment methods do you accept?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                We accept various payment methods to provide you with convenience and flexibility. You can pay securely using major credit cards, PayPal, and other trusted payment gateways during the checkout process.
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                Can I customize my furniture order?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Absolutely! We understand that everyone has unique preferences. Many of our furniture pieces offer customization options such as fabric choices, finishes, and sizes. Simply contact our customer service team to discuss your customization needs.
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                How long does shipping take?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Shipping times may vary depending on your location and the items you have ordered. Generally, our standard shipping takes between 5 to 7 business days for delivery. For more accurate shipping estimates, please refer to the product page or contact our support team.
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                What is your return policy?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                We want you to be completely satisfied with your purchase. If for any reason you are not happy with your furniture, you can return it within 30 days of delivery for a full refund or exchange. Please note that certain items may be subject to a restocking fee. For more details, please refer to our Returns & Exchanges policy page.
                </p>
              </details>
            </div>
          </div>
          <div className="w-1/2">
            <Lottie 
            animationData= {faqAnimation}
            height={300}
            width={300}
            className=""
            ></Lottie>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Faq;

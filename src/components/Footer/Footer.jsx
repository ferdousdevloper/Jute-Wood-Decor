import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-neutral text-neutral-content">
        <div>
          <h1
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="500"
          className="font-gilda  text-3xl font-extrabold">
          <Typewriter
            words={['JUTE WOOD DECOR']}
            loop={20}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
            
          /></h1>
        </div>
        <div
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="700"
        >
          <h1 className="text-">
            <strong>Address: </strong>Narayanganj, Dhaka, Bangladesh
          </h1>
        </div>
        <fieldset className="w-full space-y-1 dark:text-gray-800">
          <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="900"
          className="flex">
            <input
              type="email"
              name="email"
              placeholder="example@website.com"
              className="flex flex-1 text-left border sm:text-sm rounded-l-md focus:ring-inset dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600"
            />
            <span className="flex items-center px-3 cursor-pointer sm:text-sm rounded-r-md dark:bg-gray-300">
              Subscribe
            </span>
          </div>
        </fieldset>
        <nav className="grid grid-flow-col gap-4">
          <Link to='/login' 
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
          className="link link-hover">Login</Link>
          <Link to='/register' 
          data-aos="fade-up"
          data-aos-duration="1100"
          data-aos-delay="1100"
          className="link link-hover">Register</Link>
          <Link to='/allCraftItems' 
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="1200"
          className="link link-hover">All Art & Craft Item</Link>
          <Link to='/myCraftList' 
          data-aos="fade-up"
          data-aos-duration="1300"
          data-aos-delay="1300"
          className="link link-hover">Your Art & Craft List</Link>
          
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
            data-aos="fade-up"
            data-aos-duration="1400"
            data-aos-delay="1400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="1500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-delay="1600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <div>
          <p>Copyright © 2024 - All right reserved by Jute Wood Decor - Ferdous Developer</p>
        </div>     
      </footer>     
    </div>    
  );
};

export default Footer;

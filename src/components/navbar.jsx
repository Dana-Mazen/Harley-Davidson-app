import { useState, useEffect } from 'react';
import {motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formMode, setFormMode] = useState('signIn');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isFormOpen) setIsFormOpen(false);
  };

  const switchToCreateAccount = () => {
    setFormMode('createAccount');
  };

  const switchToSignIn = () => {
    setFormMode('signIn');
  };

  useEffect(() => {
    if (isFormOpen || isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isFormOpen, isMenuOpen]);

  return (
    <>
      <nav className="top-0 left-0 right-0 bg-black p-5 lg:p-4 px-24">
        <div className="hidden lg:flex container mx-auto justify-end items-center">
          <ul className="flex flex-wrap space-x-4 items-center">
            <li className="px-2 text-sm text-white">Learn to Ride</li>
            <li className="px-2 text-sm text-white">Dealer Locator</li>
            <li className="px-2 text-sm text-white">Test Rider</li>
            <li className="px-2 text-sm text-white">Middle East-English</li>
          </ul>
        </div>
      </nav>
      <nav className="top-0 left-0 right-0 bg-white p-3 lg:p-2 lg:px-24 px-8 md:px-16">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-9">
            <Link to="/">
              <img
                src="https://images.ctfassets.net/5vy1mse9fkav/78rzR89t28gPHAepqNx7kS/75454505e54e4eb8d0ff8b5bff12223f/shield-icon-black.svg"
                alt="Harley-Davidson Logo"
                className="w-12 h-9 lg:w-15 lg:h-12 cursor-pointer"
              />
            </Link>
            <ul className="hidden lg:flex flex-wrap space-x-3 items-center">
              <li>
                <Link to="/bikes/categories" className="px-2 font-bold text-sm text-black hover:text-orange-500">
                  BIKES
                </Link>
              </li>
              <li>
                <Link to="/accessories" className="px-2 font-bold text-sm text-black hover:text-orange-500">
                  PARTS
                </Link>
              </li>
              <li>
                <Link to="/mens-apparel" className="px-2 font-bold text-sm text-black hover:text-orange-500">
                  MENS
                </Link>
              </li>
              <li>
                <Link to="/womens-gear" className="px-2 font-bold text-sm text-black hover:text-orange-500">
                  WOMENS
                </Link>
              </li>
              <li className="px-2 font-bold text-sm text-black hover:text-orange-500">EXPERIENCE H-D</li>
            </ul>
          </div>
          <div className="flex items-center space-x-7">
            <div className="flex flex-col items-center">
              <div className="md:flex lg:hidden sm:flex flex-col items-center">
                <svg
                  className="w-5 h-5 text-black hover:text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.6 3.6a7.5 7.5 0 0013.05 13.05z"
                  />
                </svg>
              </div>
              <div className="relative hidden lg:block">
                <span className="absolute inset-y-0 left-3 flex items-center hover:text-orange-500 text-black">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.6 3.6a7.5 7.5 0 0013.05 13.05z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder=""
                  className="pl-9 pr-3 py-1 w-40 h-9 rounded-sm border border-black focus:outline-none focus:ring focus:border-orange-500 text-sm"
                />
              </div>
            </div>
            <div
              className="hidden md:flex flex-col items-center text-black cursor-pointer hover:text-orange-500"
              onClick={toggleForm}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs font-medium hidden lg:block">Sign In</span>
            </div>
            <button
              className="block lg:hidden text-black hover:text-orange-500"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isFormOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 left-auto h-full custom-form-panel bg-white z-50 overflow-y-auto scrollbar-hide"
            >
              <div className="p-8">
                <button
                  onClick={toggleForm}
                  className="absolute top-4 right-4 text-black hover:text-orange-500"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                {formMode === 'signIn' ? (
                  <>
                    <div className="pt-10"></div>
                    <h2 className="text-4xl text-left font-extrabold text-black mb-6">SIGN IN</h2>
                    <div className="space-y-4">
                      <input
                        type="email"
                        placeholder="Email *"
                        className="w-full p-3 border border-black rounded-sm focus:outline-none focus:ring focus:border-orange-500 text-sm text-black"
                      />
                      <input
                        type="password"
                        placeholder="Password *"
                        className="w-full p-3 border border-black rounded-sm focus:outline-none focus:ring focus:border-orange-500 text-sm text-black"
                      />
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="keep-signed-in"
                          className="mr-2"
                        />
                        <label htmlFor="keep-signed-in" className="text-sm text-black">
                          Keep Me Signed In
                        </label>
                      </div>
                      <div className="text-left underline font-bold">
                        <a href="#" className="text-sm text-black hover:text-orange-500">
                          Forgot Password
                        </a>
                      </div>
                      <p className="text-sm text-left text-black">
                        By logging in, you agree to the{' '}
                        <a href="#" className="underline hover:text-orange-500">
                          terms of use
                        </a>{' '}
                        and{' '}
                        <a href="#" className="underline hover:text-orange-500">
                          privacy policy
                        </a>.
                      </p>
                      <button className="w-full bg-orange-500 text-white py-3 px-4 flex items-center justify-between rounded">
                        <span>Sign in</span>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4 10h12m0 0l-4-4m4 4l-4 4" />
                        </svg>
                      </button>
                      <div className="border-t pb-7 border-black my-4"></div>
                      <div className="text-left font-semibold">
                        <button
                          onClick={switchToCreateAccount}
                          className="text-2xl font-semibold text-black hover:text-orange-500"
                        >
                          Create account →
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="pt-8"></div>
                    <div className="text-left">
                      <h2 className="text-3xl font-extrabold text-black mb-6">CREATE YOUR ACCOUNT</h2>
                      <p className="text-gray-500 text-xs">Required fields *</p>
                    </div>
                    <div className="space-y-4 pt-5">
                      <input
                        type="email"
                        placeholder="Email *"
                        className="w-full p-3 border border-black rounded-sm focus:outline-none focus:ring focus:border-orange-500 text-sm text-black"
                      />
                      <input
                        type="text"
                        placeholder="Country *"
                        className="w-full p-3 border border-black rounded-sm focus:outline-none focus:ring focus:border-orange-500 text-sm text-black"
                      />
                      <input
                        type="text"
                        placeholder="First name *"
                        className="w-full p-3 border border-black rounded-sm focus:outline-none focus:ring focus:border-orange-500 text-sm text-black"
                      />
                      <input
                        type="text"
                        placeholder="Last name *"
                        className="w-full p-3 border border-black rounded-sm focus:outline-none focus:ring focus:border-orange-500 text-sm text-black"
                      />
                      <div className="text-left">
                        <label className="text-md text-black">Enter Your Birthday:</label>
                      </div>
                      <div className="flex space-x-2">
                        <select
                          className="w-1/3 p-3 border border-black rounded-sm focus:outline-none focus:ring focus:border-orange-500 text-sm text-black custom-select"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            MM *
                          </option>
                          {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {(i + 1).toString().padStart(2, '0')}
                            </option>
                          ))}
                        </select>
                        <select
                          className="w-1/3 p-3 border border-black rounded-sm focus:outline-none focus:ring focus:border-orange-500 text-sm text-black custom-select"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            DD *
                          </option>
                          {Array.from({ length: 31 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {(i + 1).toString().padStart(2, '0')}
                            </option>
                          ))}
                        </select>
                        <select
                          className="w-1/3 p-3 border border-black rounded-sm focus:outline-none focus:ring focus:border-orange-500 text-sm text-black custom-select"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            YYYY *
                          </option>
                          {Array.from({ length: 100 }, (_, i) => (
                            <option key={i} value={2025 - i}>
                              {2025 - i}
                            </option>
                          ))}
                        </select>
                      </div>
                      <input
                        type="password"
                        placeholder="Password *"
                        className="w-full p-3 border border-black rounded-sm focus:outline-none focus:ring focus:border-orange-500 text-sm text-black"
                      />
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="dealer-consent"
                          className="mt-1 mr-2"
                        />
                        <label htmlFor="dealer-consent" className="text-xs text-black">
                          By checking this box, I consent that Harley-Davidson, Inc. can share my ecommerce personal and purchased product data with authorized H-D Dealerships so they can market directly to me using the same methods as above. Opting out of marketing through your Harley-Davidson, Inc profile account is not automatically effective with H-D Dealerships. You may need to unsubscribe directly with a dealer who has contacted you.
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="terms-consent"
                          className="mt-1 mr-2"
                        />
                        <label htmlFor="terms-consent" className="text-xs text-black">
                          By checking this box, I confirm that I have read and agree to the{' '}
                          <a href="#" className="underline hover:text-orange-500">
                            Terms of Use
                          </a>{' '}
                          and{' '}
                          <a href="#" className="underline hover:text-orange-500">
                            Privacy Policy
                          </a>.
                        </label>
                      </div>
                      <button className="w-full bg-orange-500 text-white py-3 px-4 flex items-center justify-between rounded">
                        <span>Sign up</span>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4 10h12m0 0l-4-4m4 4l-4 4" />
                        </svg>
                      </button>
                      <div className="border-t border-gray-300 my-4"></div>
                      <div className="text-left">
                        <button
                          onClick={switchToSignIn}
                          className="text-2xl font-semibold text-black hover:text-orange-500"
                        >
                          Sign in →
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 left-auto h-full custom-form-panel bg-white z-50 overflow-y-auto scrollbar-hide"
            >
              <div className="p-8">
                <button
                  onClick={toggleMenu}
                  className="absolute top-4 right-4 text-black hover:text-orange-500"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="pt-9">
                  <div className="border-t border-black my-4 ml-1.5"></div>
                  <div
                    className="flex items-center justify-between py-4 cursor-pointer hover:text-orange-500"
                    onClick={() => {
                      toggleMenu();
                      toggleForm();
                      setFormMode('signIn');
                    }}
                  >
                    <div className="flex text-black hover:text-orange-500 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-5 mr-3"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-md font-bold text-black">Sign In To My Account</span>
                    </div>
                    <svg
                      className="w-5 h-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"></path>
                    </svg>
                  </div>
                  <div className="border-t border-black my-4 ml-1.5"></div>
                  <div className="space-y-4">
                    <Link
                      to="/bikes/categories"
                      className="flex items-center justify-between py-4 text-black hover:text-orange-500"
                      onClick={toggleMenu}
                    >
                      <span className="text-md font-bold">BIKES</span>
                      <svg
                        className="w-5 h-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" />
                      </svg>
                    </Link>
                    <Link
                      to="/accessories"
                      className="flex items-center justify-between py-4 text-black hover:text-orange-500"
                      onClick={toggleMenu}
                    >
                      <span className="text-md font-bold">PARTS</span>
                      <svg
                        className="w-5 h-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" />
                      </svg>
                    </Link>
                    <Link
                      to="/mens-apparel"
                      className="flex items-center justify-between py-4 text-black hover:text-orange-500"
                      onClick={toggleMenu}
                    >
                      <span className="text-md font-bold">MENS</span>
                      <svg
                        className="w-5 h-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" />
                      </svg>
                    </Link>
                    <Link
                      to="/womens-gear"
                      className="flex items-center justify-between py-4 text-black hover:text-orange-500"
                      onClick={toggleMenu}
                    >
                      <span className="text-md font-bold">WOMENS</span>
                      <svg
                        className="w-5 h-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" />
                      </svg>
                    </Link>
                    <Link
                      to=""
                      className="flex items-center justify-between py-4 text-black hover:text-orange-500"
                      onClick={toggleMenu}
                    >
                      <span className="text-md font-bold">EXPERIENCE H-D</span>
                      <svg
                        className="w-5 h-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" />
                      </svg>
                    </Link>
                  </div>
                  <div className="border-t border-black my-4 ml-1.5"></div>
                  <div className="space-y-4">
                    {['Learn to Ride', 'Dealer Locator', 'Test Rider'].map((item) => (
                      <div key={item}>
                        <a
                          href="#"
                          className="flex items-center justify-between py-2 text-black hover:text-orange-500"
                        >
                          <span className="text-md text-black">{item}</span>
                        </a>
                        <div className="border-t border-black my-4 ml-1.5"></div>
                      </div>
                    ))}
                    <div className="flex items-center justify-between py-2 text-black">
                      <span className="text-md">Middle East-English</span>
                      <svg
                        className="w-5 h-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 20 20"
                        clipRule="evenodd"
                      >
                        <path d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
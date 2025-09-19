import { useState } from 'react';
import {motion, AnimatePresence } from 'framer-motion';

function Footer() {
  //initial states for accordion sections
  const [expandedSections, setExpandedSections] = useState({
    learnToRide: false,
    customerSupport: false,
    motorcycleServices: false,
    financing: false,
    aboutUs: false,
  });

  //state of dropdown if visible and lang
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Middle East - English');

  //toggle for accordion secs
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  //toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  //language selecton
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  //language options
  const languages = [
    'North America - English',
    'North America - French',
    'Europe - English',
    'Europe - German',
    'Europe - French',
    'Europe - Spanish',
    'Europe - Italian',
    'Asia Pacific - English',
    'Japan - Japanese',
    'China - Chinese',
    'Australia - English',
    'South America - Spanish',
    'South America - Portuguese',
    'Africa - English',
    'India - English',
    'Middle East - Arabic',
     'Middle East - English',
  ];

  return (
    <>
      <footer id="footer" className="bg-black">
        {/*first Section*/}
        <div className="container flex-wrap py-10 lg:px-30 flex-col flex md:justify-between mx-auto md:items-center md:flex-row space-x-0">
          <div className="flex justify-center sm:m-auto md:justify-start md:m-auto md:w-auto mb-0">
            <img
              src="https://images.ctfassets.net/5vy1mse9fkav/6U7Jz2tOKusbnuimYwAc7x/9dd7dc755198d8adb23f6ed66eec64fb/hd-logo-v2.svg"
              alt="icon"
              className="w-80 h-20"
            />
          </div>
          <div className="w-full sm:ml-auto sm:mr-auto flex md:flex-row m-auto flex-col justify-between items-center md:items-start space-x-28 lg:w-auto space-y-4 md:space-y-0">
            <div className="text-center flex flex-col flex-wrap sm:items-start md:pl-0 m-auto sm:ml-auto sm:mr-auto space-y-0 px-20">
              <p className="text-orange-500 text-sm font-bold tracking-wide">
                NEWSLETTER SIGN-UP
              </p>
              <p className="text-4xl font-extrabold text-white leading-tight">
                Stay in the know
              </p>
            </div>
            <div className="relative">
              <button className="bg-orange-500 sm:ml-auto sm:mr-auto border-transparent mt-2 py-3 px-8 rounded-none text-white text-lg flex items-center justify-between overflow-hidden group">
                <span className="inline-block transform transition-transform duration-300 group-hover:-translate-x-2">
                  SIGN UP FOR EMAIL
                </span>
                <svg
                  className="w-5 h-5 transform translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 10h12m0 0l-4-4m4 4l-4 4" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t-1 border-gray-400 w-[87%] m-auto"></div>

        {/*second Section*/}
        <div className="container pb-10 lg:pb-20 bg-black text-white py-10 px-6 lg:px-48 mx-auto flex flex-col lg:flex-row justify-between items-start gap-6">
          {/*LEARN TO RIDE and CUSTOMER SUPPORT */}
          <div className="text-left w-full lg:w-1/5 space-y-4">
            <div className="flex justify-between items-center lg:hidden">
              <p className="font-bold text-lg">LEARN TO RIDE</p>
              <button
                onClick={() => toggleSection('learnToRide')}
                className="text-white hover:text-orange-500 transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {expandedSections.learnToRide ? (
                    <path d="M5 12h14" />
                  ) : (
                    <>
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </>
                  )}
                </svg>
              </button>
            </div>
            <p className="font-bold text-lg pb-2 hidden lg:block">LEARN TO RIDE</p>
            <div>
              <AnimatePresence>
                {expandedSections.learnToRide && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden lg:hidden"
                  >
                    <a className="hover:underline"><p className="py-1.5">Motorcycle Training</p></a>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="hidden lg:block space-y-1">
                <a className="hover:underline"><p className="pb-2">Motorcycle Training</p></a>
              </div>
            </div>
            <div className="border-t border-gray-400 w-full my-4 lg:hidden"></div>

            <div className="flex justify-between items-center lg:hidden">
              <p className="font-bold text-lg">CUSTOMER SUPPORT</p>
              <button
                onClick={() => toggleSection('customerSupport')}
                className="text-white hover:text-orange-500 transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {expandedSections.customerSupport ? (
                    <path d="M5 12h14" />
                  ) : (
                    <>
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </>
                  )}
                </svg>
              </button>
            </div>
            <p className="font-bold text-lg pb-2 hidden lg:block">CUSTOMER SUPPORT</p>
            <div>
              <AnimatePresence>
                {expandedSections.customerSupport && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden lg:hidden"
                  >
                    <a className="hover:underline"><p className="py-1.5">Contact Us</p></a>
                    <a className="hover:underline"><p className="py-1.5">Offers</p></a>
                    <a className="hover:underline"><p className="py-1.5">Declaration of Conformity</p></a>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="hidden lg:block space-y-1">
                <a className="hover:underline"><p className="pb-2">Contact Us</p></a>
                <a className="hover:underline"><p className="pb-2">Offers</p></a>
                <a className="hover:underline"><p className="pb-2">Declaration of Conformity</p></a>
              </div>
            </div>
            <div className="border-t border-gray-400 w-full my-4 lg:hidden"></div>
          </div>

          {/* MOTORCYCLE SERVICES and FINANCING Section */}
          <div className="text-left w-full lg:w-1/5 space-y-4">
            <div className="flex justify-between items-center lg:hidden">
              <p className="font-bold text-lg pt-0">MOTORCYCLE SERVICES</p>
              <button
                onClick={() => toggleSection('motorcycleServices')}
                className="text-white hover:text-orange-500 transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {expandedSections.motorcycleServices ? (
                    <path d="M5 12h14" />
                  ) : (
                    <>
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </>
                  )}
                </svg>
              </button>
            </div>
            <p className="font-bold text-lg pb-2 hidden lg:block">MOTORCYCLE SERVICES</p>
            <div>
              <AnimatePresence>
                {expandedSections.motorcycleServices && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden lg:hidden"
                  >
                    <a className="hover:underline"><p className="py-1.5">Authorised Service</p></a>
                    <a className="hover:underline"><p className="py-1.5">Owner's Manuals</p></a>
                    <a className="hover:underline"><p className="py-1.5">Maintenance Schedules</p></a>
                    <a className="hover:underline"><p className="py-1.5">Software Updates</p></a>
                    <a className="hover:underline"><p className="py-1.5">Harley Assist</p></a>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="hidden lg:block space-y-1">
                <a className="hover:underline"><p className="pb-2">Authorised Service</p></a>
                <a className="hover:underline"><p className="pb-2">Owner's Manuals</p></a>
                <a className="hover:underline"><p className="pb-2">Maintenance Schedules</p></a>
                <a className="hover:underline"><p className="pb-2">Software Updates</p></a>
                <a className="hover:underline"><p className="pb-2">Harley Assist</p></a>
              </div>
            </div>
            <div className="border-t border-gray-400 w-full my-4 lg:hidden"></div>

            <div className="flex justify-between items-center lg:hidden">
              <p className="font-bold text-lg">FINANCING</p>
              <button
                onClick={() => toggleSection('financing')}
                className="text-white hover:text-orange-500 transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {expandedSections.financing ? (
                    <path d="M5 12h14" />
                  ) : (
                    <>
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </>
                  )}
                </svg>
              </button>
            </div>
            <p className="font-bold text-lg pb-2 hidden lg:block">FINANCING</p>
            <div>
              <AnimatePresence>
                {expandedSections.financing && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden lg:hidden"
                  >
                    <a className="hover:underline"><p className="py-1.5">Motorcycle Financing</p></a>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="hidden lg:block space-y-1">
                <a className="hover:underline"><p className="pb-2">Motorcycle Financing</p></a>
              </div>
            </div>
            <div className="border-t border-gray-400 w-full my-4 lg:hidden"></div>
          </div>

          {/* ABOUT US Section */}
          <div className="text-left w-full lg:w-1/5 space-y-4">
            <div className="flex justify-between items-center lg:hidden">
              <p className="font-bold text-lg">ABOUT US</p>
              <button
                onClick={() => toggleSection('aboutUs')}
                className="text-white hover:text-orange-500 transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {expandedSections.aboutUs ? (
                    <path d="M5 12h14" />
                  ) : (
                    <>
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </>
                  )}
                </svg>
              </button>
            </div>
            <p className="font-bold text-lg pb-2 hidden lg:block">ABOUT US</p>
            <div>
              <AnimatePresence>
                {expandedSections.aboutUs && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden lg:hidden"
                  >
                    <a className="hover:underline"><p className="py-1.5">Our Company</p></a>
                    <a className="hover:underline"><p className="py-1.5">Investors</p></a>
                    <a className="hover:underline"><p className="py-1.5">Sustainability</p></a>
                    <a className="hover:underline"><p className="py-1.5">Become a Dealer</p></a>
                    <a className="hover:underline"><p className="py-1.5">Factory Tours</p></a>
                    <a className="hover:underline"><p className="py-1.5">Museum</p></a>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="hidden lg:block space-y-1">
                <a className="hover:underline"><p className="pb-2">Our Company</p></a>
                <a className="hover:underline"><p className="pb-2">Investors</p></a>
                <a className="hover:underline"><p className="pb-2">Sustainability</p></a>
                <a className="hover:underline"><p className="pb-2">Become a Dealer</p></a>
                <a className="hover:underline"><p className="pb-2">Factory Tours</p></a>
                <a className="hover:underline"><p className="pb-2">Museum</p></a>
              </div>
            </div>
            <div className="border-t border-gray-400 w-full my-4 lg:hidden"></div>
          </div>
        </div>

        <div className="hidden lg:block border-t-1 border-gray-400 w-[87%] m-auto"></div>
        <div className="flex flex-wrap justify-center items-center text-sm text-white space-x-4 p-10 pt-0 md:pt-10">
          <div>
            <span className="text-white mr-20">Sitemap</span>
          </div>
          <div className="flex flex-wrap items-center text-sm text-white space-x-4">
            <a href="#" className="hover:underline">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Cookie Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Manage Cookie Preferences</a>
            <span>|</span>
            <a href="#" className="hover:underline">We Care About You</a>
          </div>
        </div>
        <div className="border-t-1 border-gray-400 w-[87%] m-auto"></div>
        <div className="w-full bg-black text-left text-white px-6 py-10 lg:px-20">
          <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6 lg:flex-row lg:justify-center lg:space-y-0 lg:space-x-14">
            <div className="relative w-[87%] lg:w-auto">
              <button
                onClick={toggleDropdown}
                className="border border-orange-500 text-white py-3 px-8 w-full lg:w-auto button2 flex items-center justify-between"
              >
                <span>{selectedLanguage}</span>
                <svg
                  className={`w-5 h-5 ml-2 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 7l5 5 5-5" />
                </svg>
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: 10 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-full left-0 w-full bg-black border border-orange-500 text-white max-h-[18rem] overflow-y-auto z-10"
                    style={{ height: '18rem' }}
                  >
                    {languages.map((language) => (
                      <div
                        key={language}
                        onClick={() => handleLanguageSelect(language)}
                        className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-sm"
                      >
                        {language}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="text-xs leading-relaxed max-w-md text-center text-gray-400">
              ©2025 H-D or its affiliates. HARLEY-DAVIDSON, HARLEY, H-D, and the Bar and Shield Logo are among the trademarks of Harley-Davidson Motor Company, Inc. Third-party trademarks are the property of their respective owners.
            </div>
            <div className="flex items-center justify-center space-x-7">
              <img
                src="https://s.magecdn.com/social/mw-facebook.svg"
                alt="facebook"
                className="w-6 h-6"
              />
              <img
                src="https://s.magecdn.com/social/mw-instagram.svg"
                alt="instagram"
                className="w-6 h-6"
              />
              <img
                src="https://s.magecdn.com/social/mw-youtube.svg"
                alt="youtube"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
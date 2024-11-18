"use client";

import { useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Dot,
  Facebook,
  Twitter,
  Instagram,
  CalendarClock,
  BriefcaseMedical,
  SquarePlay,
  User,
} from "lucide-react";
import Image from "next/image";

export default function Component() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Refs for scroll targets
  const servicesRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);

  // Smooth scroll function
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const testimonials = [
    {
      name: "Shawn Jones",
      image: "/testimonial.svg",
      rating: 5,
      text: "CareLine Made Consulting With A Doctor Stress-Free!",
    },
    {
      name: "Alfred Bliss",
      image: "/testimonial.svg",
      rating: 4,
      text: "No regrets using this service. I just want to be greedy with the rating!",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              width={186}
              height={91}
              src="/logo.svg"
              alt="CareLine Logo"
              className="w-40"
            />
          </div>
          <nav className="hidden md:flex space-x-4 gap-24 text-xl">
            <a href="#" className="text-black hover:text-blue-600">
              Home
            </a>
            <button
              onClick={() => scrollToSection(servicesRef)}
              className="text-black hover:text-blue-600"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="text-black hover:text-blue-600"
            >
              About Us
            </button>
            <a href="#" className="text-black hover:text-blue-600">
              Sign In
            </a>
          </nav>
          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <button className="bg-black text-white px-4 py-2 hover:bg-gray-700 transition duration-300 rounded-3xl">
            Register
          </button>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden">
              <nav className="flex flex-col p-4">
                <a href="#" className="py-2 text-black hover:text-blue-600">
                  Home
                </a>
                <button
                  onClick={() => {
                    scrollToSection(servicesRef);
                    toggleMobileMenu();
                  }}
                  className="py-2 text-left text-black hover:text-blue-600"
                >
                  Services
                </button>
                <button
                  onClick={() => {
                    scrollToSection(aboutRef);
                    toggleMobileMenu();
                  }}
                  className="py-2 text-left text-black hover:text-blue-600"
                >
                  About Us
                </button>
                <a href="#" className="py-2 text-black hover:text-blue-600">
                  Sign In
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content - Added pt-24 to account for fixed header */}
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-blue-50 p-8 md:p-20 relative">
          <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center gap-10 md:gap-40">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-3xl md:text-5xl lg:text-[64px] lg:leading-[77.45px] font-bold text-gray-900 mb-10">
                Consult{" "}
                <span className="font-normal">
                  Your Doctor Anytime, Anywhere
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Fast, Reliable, Affordable Experience Quality Healthcare From
                The Comfort Of Your Home.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-700 transition duration-300">
                  Get Started
                </button>
                <button className="flex gap-2 items-center justify-center border border-black text-black px-6 py-3 rounded-xl hover:bg-blue-50 transition duration-300">
                  <SquarePlay />
                  Watch Our Video
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 max-w-[429px] relative bg-black h-[300px] md:h-[429px]">
              <Image
                fill
                src="/hero-section.png"
                alt="Doctor"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section ref={servicesRef} className="py-20 relative scroll-mt-24">
          <div className="container mx-auto px-4 relative">
            <h2 className="text-3xl font-bold mb-10">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-black hover:text-white group transition duration-300 transform hover:scale-105">
                <div className="text-black mb-10 mt-10 bg-gray-50 rounded-xl w-[74px] h-[63px] flex items-center justify-center group-hover:bg-white">
                  <User size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-5">Consult A Doctor</h3>
                <p className="text-gray-600 group-hover:text-gray-200">
                  Get Expert Advice Anytime, Anywhere Consult A Healthcare
                  Professional For Proper Diagnosis And Treatment
                </p>
              </div>
              {/* Similar hover effects for other service cards */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-black hover:text-white group transition duration-300 transform hover:scale-105">
                <div className="text-black mb-8 mt-10 bg-gray-50 rounded-xl w-[74px] h-[63px] flex items-center justify-center group-hover:bg-white">
                  <CalendarClock size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Schedule Medical Appointments
                </h3>
                <p className="text-gray-600 group-hover:text-gray-200">
                  Easily Book And Manage Your Healthcare Appointments Online
                  With Available Doctors, Specialists, And Clinics
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-black hover:text-white group transition duration-300 transform hover:scale-105">
                <div className="text-black mb-10 mt-10 bg-gray-50 rounded-xl w-[74px] h-[63px] flex items-center justify-center group-hover:bg-white">
                  <BriefcaseMedical size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-5">
                  Order Medications
                </h3>
                <p className="text-gray-600 group-hover:text-gray-200">
                  Easily Book And Manage Your Healthcare Appointments Online,
                  For Available Doctors, Specialists, And Clinics
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Trust Us Section */}
        <section ref={aboutRef} className="bg-blue-50 py-20 scroll-mt-24">
          <div className="container mx-auto px-4 flex flex-col md:flex-row w-full items-center justify-center">
            <div className="mb-10 md:mb-0 flex flex-col md:flex-row justify-center relative gap-8 md:gap-[100px]">
              <div className="w-full md:w-[503px] h-[300px] md:h-[527px] bg-white rounded-full overflow-hidden shadow-lg flex items-center justify-center">
                <Image
                  src="/choose-us.png"
                  width={500}
                  height={400}
                  alt="Trusted Doctor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="py-8 md:py-[100px]">
                <h2 className="text-3xl font-bold mb-2">Why Choose Us?</h2>
                <h3 className="text-2xl font-semibold mb-6 md:text-[48px] md:leading-[58px]">
                  Your Trusted Partner In <br /> Remote Healthcare.
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-2xl md:text-[48px] md:leading-[58px] space-x-2 group bg-gray-100 p-4 md:p-8 rounded-md">
                    <Dot
                      size={48}
                      className="text-black group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      24/7 Availability Of <br /> Certified Professionals
                    </span>
                  </li>
                  <li className="flex items-center text-2xl md:text-[48px] md:leading-[58px] space-x-2 group bg-gray-100 p-4 md:p-8 rounded-md md:-ml-[25%]">
                    <Dot
                      size={48}
                      className="text-black group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Convenient Access For <br /> The Whole Family
                    </span>
                  </li>
                  <li className="flex items-center text-2xl md:text-[48px] md:leading-[58px] space-x-2 group bg-gray-100 p-4 md:p-8 rounded-md md:-ml-[50%]">
                    <Dot
                      size={48}
                      className="text-black group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Affordable And Secure <br /> Services
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="pb-20 pt-10">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-start gap-8 md:gap-[100px]">
            <div className="md:w-1/3 flex flex-col items-start md:items-start mb-8 md:mb-0">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium text-sm mb-4">
                Testimonials
              </span>
              <h2 className="text-3xl font-bold mb-4 md:text-[48px] md:leading-[58px]">
                What Our Patients
                <br /> Say About Us
              </h2>
              <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300">
                Book Now
              </button>
            </div>

            <div className="md:w-2/3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Image
                    width={500}
                    height={400}
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonials[currentTestimonial].rating)].map(
                        (_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-xl md:text-[32px] md:leading-[39px]">
                  {testimonials[currentTestimonial].text}
                </p>
                <div className="flex justify-between">
                  <button
                    onClick={() =>
                      setCurrentTestimonial((prev) =>
                        prev > 0 ? prev - 1 : testimonials.length - 1
                      )
                    }
                    className="text-black"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentTestimonial((prev) =>
                        prev < testimonials.length - 1 ? prev + 1 : 0
                      )
                    }
                    className="text-black"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className=" text-black pt-20 w-full bg-blue-50 ">
        <div className="px-4 bg-white/40 lg:px-20 py-10 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8  w-full relative place-content-center max-w-[100%]  mx-auto">
            {/* Logo and Newsletter Section */}
            <div className="space-y-6 ">
              <div className="flex items-center space-x-2">
                <Image
                  width={186}
                  height={91}
                  src="/logo.svg"
                  alt="CareLine Logo"
                  className="w-40"
                />
              </div>
              <form className="flex items-center gap-10">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-grow px-4 py-2 border rounded-md max-w-[50%] text-gray-900 focus:outline-blue-500"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-[32px] font-semibold mb-4">Contact Us</h3>
              <p className="text-[20px] mb-4">Phone: +234-8035163339</p>
              <p className="text-[20px] mb-4">Email: Support@Careline.Com</p>
              <p className="text-[20px] mb-4">
                Address: 8, Remy Street, Delta State
              </p>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-[32px] font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-4 text-[20px]">
                <li>
                  <button
                    onClick={() => scrollToSection(servicesRef)}
                    className="text-black"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(aboutRef)}
                    className="text-black"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <a href="#" className="text-black">
                    Blog FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Links */}

          <div className="flex justify-between lg:items-center space-x-4 mb-2 w-full flex-col lg:flex-row gap-10">
            <div className="flex gap-4 flex-col min-w-[35%]">
              <p className="text-xl font-bold mt-10">Follow Us</p>
              <div className="space-x-2 flex">
                
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-black hover:text-blue-700 text-xl"
                >
                  <Facebook />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-black hover:text-blue-700 text-xl"
                >
                  <Instagram />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-black hover:text-blue-700 text-xl"
                >
                  <Twitter />
                </a>
              </div>
            </div>
            <div className="flex lg:justify-start lg:gap-20 lg:grow flex-col lg:flex-row gap-4 items-start">
            <a href="#" className="text-black text-xl font-bold">
              Privacy Policy
            </a>
            <a href="#" className="text-black text-xl font-bold">
              Terms Of Service
            </a>
            <a href="#" className="text-black text-xl font-bold">
              Cookie Policy
            </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

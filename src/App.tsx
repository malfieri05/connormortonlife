// @ts-ignore: PNG import for Vite
import headshot from './assets/Headshot2.png'
// @ts-ignore: PNG import for Vite
import partners from './assets/partners.png'
import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link, Routes, Route, useLocation } from 'react-router-dom'
import ChatbaseWidget from './ChatbaseWidget'

// Page components
function CenteredNotification({ show, message, onClose }: { show: boolean, message: string, onClose: () => void }) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-2xl px-8 py-6 text-center">
        <div className="text-2xl font-bold text-blue-700 mb-2">{message}</div>
        <button
          className="mt-2 px-6 py-2 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
}

function HomePage() {
  const [showNotif, setShowNotif] = useState(false);

  return (
    <>
      {/* Hero Section (Home) */}
      <section id="about" className="bg-gradient-to-br from-blue-700 via-blue-500/90 via-60% to-white py-12 flex items-center justify-center min-h-[40vh]" data-aos="fade-up">
        <div className="flex flex-col md:flex-row items-center justify-center w-full px-4 max-w-5xl mx-auto gap-10 md:gap-16">
          <img src={headshot} alt="Professional Headshot" className="w-56 h-56 rounded-full shadow-2xl border-4 border-white object-cover object-center mb-8 md:mb-0 transform transition-transform duration-300 hover:-translate-y-4" style={{objectPosition: 'center 30%'}} data-aos="zoom-in" data-aos-delay="200" />
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
            <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight mb-2 drop-shadow font-sans">Michael V. Alfieri</h1>
            <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-4 drop-shadow font-sans">Secure Your Future Today.</h2>
            <p className="text-white text-2xl mb-8 font-light drop-shadow max-w-2xl">Work with an industry-leading insurance agent you can trust.</p>
            <Link
              to="/schedule"
              className="inline-block bg-white text-blue-700 px-10 py-4 rounded-full text-lg font-bold shadow-lg border-4 border-blue-700 transition duration-200 transform hover:shadow-2xl hover:scale-150 hover:-translate-y-4 hover:border-blue-900 active:scale-110 active:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="600"
              style={{ textDecoration: 'none' }}
            >
              Schedule Now
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-16 text-blue-700">Our Services</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Whole Life / Term Insurance */}
            <div className="p-10 bg-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition flex flex-col items-center text-center border-t-4 border-blue-600" data-aos="fade-up" data-aos-delay="100">
              <div className="mb-6 text-blue-700">
                {/* Shield Heart Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 4l7 4v4c0 5-3.5 9-7 9s-7-4-7-9V8l7-4z" /><path d="M9.5 13.5l2.5 2.5 2.5-2.5a2 2 0 10-2.5-2.5 2 2 0 10-2.5 2.5z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Whole Life / Term Insurance</h3>
              <p className="text-gray-600">Flexible, lifelong or term-based coverage to protect your loved ones and build financial security.</p>
            </div>
            {/* Final Expense Plans */}
            <div className="p-10 bg-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition flex flex-col items-center text-center border-t-4 border-blue-600" data-aos="fade-up" data-aos-delay="200">
              <div className="mb-6 text-blue-700">
                {/* Two Hands Together Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M8.5 14.5l-3-3a2 2 0 112.8-2.8l2.7 2.7M15.5 14.5l3-3a2 2 0 10-2.8-2.8l-2.7 2.7" /><path d="M12 19v-7" /><path d="M8.5 14.5L12 19l3.5-4.5" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Final Expense Plans</h3>
              <p className="text-gray-600">Affordable plans designed to cover funeral costs and final expenses, easing the burden on your family.</p>
            </div>
            {/* Retirement Planning */}
            <div className="p-10 bg-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition flex flex-col items-center text-center border-t-4 border-blue-600" data-aos="fade-up" data-aos-delay="300">
              <div className="mb-6 text-blue-700">
                {/* Stair Steps Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="4" y="16" width="4" height="4" rx="1" /><rect x="10" y="12" width="4" height="8" rx="1" /><rect x="16" y="8" width="4" height="12" rx="1" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Retirement Planning</h3>
              <p className="text-gray-600">Secure your golden years with our retirement solutions.</p>
            </div>
            {/* Asset Protection */}
            <div className="p-10 bg-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition flex flex-col items-center text-center border-t-4 border-blue-600" data-aos="fade-up" data-aos-delay="400">
              <div className="mb-6 text-blue-700">
                {/* Lock Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="6" y="11" width="12" height="8" rx="2" /><path d="M9 11V7a3 3 0 016 0v4" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Asset Protection</h3>
              <p className="text-gray-600">Protect your wealth and assets from unexpected events with tailored strategies and expert guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-white" data-aos="fade-up">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Proud Partners With:</h2>
          <div className="flex justify-center">
            <div className="transition-all duration-300 rounded-2xl p-1 bg-gradient-to-r from-blue-500 via-blue-300 to-blue-700 shadow-xl hover:shadow-blue-400/60 hover:scale-105">
              <img src={partners} alt="Partner Logos" className="w-full max-w-4xl object-contain rounded-xl bg-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white" data-aos="fade-up">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-blue-700">Contact Me</h2>
          <div className="bg-gray-50 rounded-3xl shadow-xl p-10">
            <p className="text-gray-700 text-center mb-8 text-lg">Your information is 100% confidential. I'll get back to you within 24 hours.</p>
            <form
              className="space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const data = {
                  name: (form.elements.namedItem('name') as HTMLInputElement)?.value,
                  email: (form.elements.namedItem('email') as HTMLInputElement)?.value,
                  message: (form.elements.namedItem('message') as HTMLInputElement)?.value,
                };
                const response = await fetch('https://formspree.io/f/meogwrdk', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data),
                });
                if (response.ok) {
                  setShowNotif(true);
                  form.reset();
                } else {
                  alert('There was a problem submitting your form.');
                }
              }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 text-lg bg-white"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 text-lg bg-white"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 text-lg bg-white"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 font-bold text-lg shadow transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <CenteredNotification
        show={showNotif}
        message="Message sent!"
        onClose={() => setShowNotif(false)}
      />
    </>
  );
}

function ApplyPage() {
  return (
    <section className="min-h-screen bg-white py-16 flex flex-col justify-center">
      <div className="flex justify-center items-center min-h-[70vh]">
        <div className="w-full max-w-3xl bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-3xl border-2 border-blue-100 shadow-xl hover:shadow-blue-300/40 hover:scale-105 transition-all duration-300 p-10 md:p-14 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-6">Book Your Q/A Call With Us.</h1>
          <p className="text-xl md:text-2xl font-bold text-gray-800 mb-8">We have a very simple, 3-step process. Click the button below to talk to our team.</p>
          <div className="text-left text-gray-800 text-lg md:text-xl font-medium mb-8 space-y-4 max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <span className="mt-1 text-2xl text-blue-600">✔️</span>
              <span><b>Step 1:</b> Book your Q/A Call with our team.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 text-2xl text-blue-600">✔️</span>
              <span><b>Step 2:</b> Licensing course provided.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 text-2xl text-blue-600">✔️</span>
              <span><b>Step 3:</b> Run appointments and start protecting families!</span>
            </div>
            <div className="ml-8 mt-2 text-base italic text-blue-500">*Your first few appointments you will be partnered with a senior broker to help you if needed*</div>
          </div>
          <a
            href="https://calendly.com/mikealfieri/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-lg font-bold text-xl shadow hover:scale-105 hover:shadow-blue-400 transition mb-2 inline-block"
          >
            Book Introduction Call
          </a>
        </div>
      </div>
    </section>
  );
}

function ReferralPage() {
  const [showNotif, setShowNotif] = useState(false);

  return (
    <section className="min-h-screen bg-white py-16 flex flex-col justify-center">
      <div className="flex justify-center items-center min-h-[70vh]">
        <div className="w-full max-w-7xl bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-3xl border-2 border-blue-100 shadow-xl transition duration-100 p-4 md:p-10 xl:p-16">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-10">
            {/* Left: Heading and Description */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-6 leading-tight">Referral Form: Tax Free Retirement, Life Insurance, or Final Expense Plans</h1>
              <p className="text-lg md:text-xl mb-4 text-gray-800">Attach the information of the person or the people you would like to refer regarding their life or health insurance, or Tax-Free Retirement options. You will receive $25 per referral that schedules an appointment (A referral = a household).</p>
              <p className="text-lg md:text-xl mb-4 text-gray-800">Please answer each question carefully and thoroughly. If you would like to send more than 5 referrals please complete another form and submit it.</p>
            </div>
            {/* Right: Business Card */}
            <div className="flex-1 max-w-md w-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-lg p-6 flex flex-col items-center">
              <img src={headshot} alt="Your Headshot" className="w-28 h-28 rounded-full border-4 border-white shadow mb-4 object-cover object-center mx-auto" style={{ objectPosition: 'center 30%' }} />
              <div className="text-center">
                <h2 className="text-xl font-bold text-gray-800 mb-1">Michael V. Alfieri</h2>
                <div className="text-gray-500 mb-2">Insurance Broker®</div>
                <div className="flex flex-col gap-1 text-gray-700 text-sm items-center mb-2">
                  <div className="flex items-center gap-2"><span>📞</span> (503) 764-5097 (call or text)</div>
                  <div className="flex items-center gap-2"><span>✉️</span> michaelalfieri.ffl@gmail.com</div>
                </div>
                <div className="mt-4 flex justify-center">
                </div>
              </div>
            </div>
          </div>
          {/* Referral Form */}
          <form
            className="grid md:grid-cols-2 gap-8"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              // Gather all input and textarea values
              const data: Record<string, string> = {};
              Array.from(form.elements).forEach((el) => {
                if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
                  if (el.name) data[el.name] = el.value;
                }
              });
              const response = await fetch('https://formspree.io/f/meogwrdk', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              });
              if (response.ok) {
                setShowNotif(true);
                form.reset();
              } else {
                alert('There was a problem submitting your referral.');
              }
            }}
          >
            {/* Your Info */}
            <div className="bg-gray-200 rounded-xl p-6 shadow transition duration-100 hover:bg-gray-300/80">
              <h3 className="text-2xl font-bold mb-4">Your Information:</h3>
              <label className="block font-semibold mb-1">Your Full Name:</label>
              <input name="yourName" className="w-full mb-4 rounded px-3 py-2 border border-gray-300" placeholder="Full Name" />
              <label className="block font-semibold mb-1">Your Email Address:</label>
              <input name="yourEmail" className="w-full mb-4 rounded px-3 py-2 border border-gray-300" placeholder="Email" />
              <label className="block font-semibold mb-1">Your Phone Number:</label>
              <input name="yourPhone" className="w-full mb-4 rounded px-3 py-2 border border-gray-300" placeholder="Phone" />
              <label className="block font-semibold mb-1">Method of payment ($25 for referral)<br /><span className="font-normal">We only accept CashApp, Zelle, or ApplePay</span></label>
              <input name="paymentMethod" className="w-full mb-4 rounded px-3 py-2 border border-gray-300" placeholder="CashApp, Zelle, or ApplePay" />
              <label className="block font-semibold mb-1">Payment Information for previously selected method of payment (Ex. Cash App user name)</label>
              <input name="paymentInfo" className="w-full mb-4 rounded px-3 py-2 border border-gray-300" placeholder="Payment info" />
            </div>
            {/* Referral #1 */}
            <div className="bg-gray-200 rounded-xl p-6 shadow transition duration-100 hover:bg-gray-300/80">
              <h3 className="text-2xl font-bold mb-4">Referral #1 Information:</h3>
              <label className="block font-semibold mb-1">Referral First & Last Name, Phone Number, and Your Relationship To This Person.</label>
              <textarea name="referral1" className="w-full rounded px-3 py-2 border border-gray-300" rows={5} placeholder="Enter Referral Info Here" />
            </div>
            {/* Referral #2 */}
            <div className="bg-gray-200 rounded-xl p-6 shadow transition duration-100 hover:bg-gray-300/80">
              <h3 className="text-2xl font-bold mb-4">Referral #2 Information:</h3>
              <label className="block font-semibold mb-1">Referral First & Last Name, Phone Number, and Your Relationship To This Person.</label>
              <textarea name="referral2" className="w-full rounded px-3 py-2 border border-gray-300" rows={5} placeholder="Enter Referral Info Here" />
            </div>
            {/* Referral #3 */}
            <div className="bg-gray-200 rounded-xl p-6 shadow transition duration-100 hover:bg-gray-300/80">
              <h3 className="text-2xl font-bold mb-4">Referral #3 Information:</h3>
              <label className="block font-semibold mb-1">Referral First & Last Name, Phone Number, and Your Relationship To This Person.</label>
              <textarea name="referral3" className="w-full rounded px-3 py-2 border border-gray-300" rows={5} placeholder="Enter Referral Info Here" />
            </div>
            {/* Consent and Submit */}
            <div className="md:col-span-2 flex flex-col items-center mt-4">
              <label className="flex items-center mb-4 text-gray-700">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 mr-2" />
                By checking this button you allow [Your Name] to contact you by email, phone call, or text message.
              </label>
              <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-4 rounded-lg font-bold text-lg shadow hover:scale-[1.01] hover:shadow-blue-200/30 transition duration-100">Submit Response</button>
            </div>
          </form>
        </div>
      </div>
      <CenteredNotification
        show={showNotif}
        message="Referral submitted!"
        onClose={() => setShowNotif(false)}
      />
    </section>
  );
}

function SchedulePage() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-8 min-h-[60vh] flex flex-col justify-start bg-gradient-to-l from-blue-100/70 via-white/80 to-blue-200/60" data-aos="fade-up">
      <div className="w-full px-0 text-center">
        <h2 className="text-3xl font-extrabold mb-0 text-blue-700">Schedule a Call</h2>
        <p className="text-lg text-gray-700 mb-0">Schedule a call or video meeting to discuss your needs.</p>
        <div 
          className="calendly-inline-widget mx-auto" 
          data-url="https://calendly.com/mikealfieri/30min"
          style={{ width: '100vw', minWidth: '320px', height: '700px' }}
        />
      </div>
    </section>
  );
}

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/apply', label: 'Apply For A Job' },
  { to: '/referral', label: 'Referral Form' },
  { to: '/schedule', label: 'Schedule a Call' },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const activePath = location.pathname;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <ChatbaseWidget />
      <div className="min-h-screen bg-gray-50 font-sans">
        {/* Navigation */}
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between h-20 items-center">
              <Link to="/" className="text-2xl font-extrabold text-blue-700 tracking-tight hover:text-blue-900 transition flex items-center gap-2" style={{ textDecoration: 'none' }}>
                InsurePro
                {/* Sleek insurance logo: shield with checkmark */}
                <span className="ml-2">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="shieldGradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#2563eb" />
                        <stop offset="1" stopColor="#60a5fa" />
                      </linearGradient>
                    </defs>
                    <path d="M16 4L27 8V15C27 23 16 28 16 28C16 28 5 23 5 15V8L16 4Z" fill="url(#shieldGradient)" stroke="#1e40af" strokeWidth="2"/>
                    <path d="M12 16.5L15 19.5L20 13.5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
              {/* Desktop Nav */}
              <div className="hidden md:flex items-center">
                {NAV_LINKS.map((link, idx) => (
                  <React.Fragment key={link.to}>
                    {idx !== 0 && (
                      <span className="mx-3 text-gray-300 text-lg select-none">|</span>
                    )}
                    <Link
                      to={link.to}
                      className={`font-medium transition px-2 py-1 rounded relative
                        ${activePath === link.to ? 'text-blue-700 bg-blue-100 shadow-md' : 'text-gray-700 hover:text-blue-700 hover:bg-blue-100 hover:shadow-md'}
                        duration-200 ease-in-out
                      `}
                      style={{ display: 'inline-block' }}
                    >
                      {link.label}
                    </Link>
                  </React.Fragment>
                ))}
              </div>
              {/* Mobile Hamburger */}
              <button
                className="md:hidden flex items-center justify-center w-10 h-10 rounded hover:bg-gray-100 focus:outline-none"
                onClick={() => setIsMenuOpen(v => !v)}
                aria-label="Open menu"
              >
                <svg className="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg px-6 py-4 flex flex-col space-y-4">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block font-medium transition px-2 py-2 rounded relative
                    ${activePath === link.to ? 'text-blue-700 bg-blue-100 shadow-md' : 'text-gray-700 hover:text-blue-700 hover:bg-blue-100 hover:shadow-md'}
                    duration-200 ease-in-out
                  `}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ display: 'inline-block' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </nav>
        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/referral" element={<ReferralPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
        </Routes>
        {/* Professional Footer */}
        <footer className="bg-black text-gray-200 border-t border-gray-800 pt-12 pb-8 mt-16">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-0">
            {/* Brand & Tagline */}
            <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <span className="text-3xl font-extrabold text-blue-400 tracking-tight">InsurePro</span>
                <span className="inline-block bg-blue-700 text-white text-xs px-3 py-1 rounded-full font-semibold ml-2">Licensed & Insured</span>
              </div>
              <div className="text-lg text-gray-400 font-medium">Your trusted insurance partner</div>
            </div>
            {/* Contact Info */}
            <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
              <h4 className="text-xl font-bold text-white mb-2">Contact Info</h4>
              <div className="text-gray-300 text-base font-medium">Email: <a href="mailto:michaelalfieri.ffl@gmail.com" className="hover:text-blue-400 transition">michaelalfieri.ffl@gmail.com</a></div>
              <div className="text-gray-300 text-base font-medium">Phone: <a href="tel:5037645097" className="hover:text-blue-400 transition">(503) 764-5097</a></div>
            </div>
            {/* Social & Legal */}
            <div className="flex-1 text-center md:text-right flex flex-col items-center md:items-end">
              <h4 className="text-xl font-bold text-white mb-2">Connect</h4>
              <div className="flex gap-4 mb-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition" aria-label="LinkedIn">
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition" aria-label="Twitter">
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition" aria-label="Facebook">
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.322-.592 1.322-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z"/></svg>
                </a>
              </div>
              <div className="text-xs text-gray-500 mb-2">&copy; {new Date().getFullYear()} InsurePro. All rights reserved.</div>
              <div className="text-xs text-gray-500">Powered by InsurePro Technologies</div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App 
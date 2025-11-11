// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// ────────────────────── NAV DATA ──────────────────────
const navItems = [
  {
    label: "Services",
    to: "/services",
    subItems: [
      { label: "Branding", to: "/services/Branding" },
      { label: "Creative", to: "/services/Creative" },
      { label: "Social", to: "/services/Social" },
      { label: "PR", to: "/services/Pr" },
      { label: "Digital", to: "/services/Digital" },
      { label: "Performance", to: "/services/Performance" },
    ],
  },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Team", to: "/team" },
];
const cta = { label: "Contact Us" };

// ────────────────────── COMPONENT ──────────────────────
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeAll = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  /* -------------------------------------------------
     1. Click handler – navigate **with hash**
     ------------------------------------------------- */
  const goToContact = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      scrollToSection();
      closeAll();
    } else {
      navigate({ pathname: "/", hash: "contact-section" });
      closeAll();
    }
  };

  /* -------------------------------------------------
     2. Re-usable smooth-scroll function
     ------------------------------------------------- */
  const scrollToSection = () => {
    const el = document.getElementById("contact-section");
    if (el) {
      const offset = 80; // adjust based on navbar height
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  /* -------------------------------------------------
     3. Scroll if on Home with hash after mount
     ------------------------------------------------- */
  useEffect(() => {
    if (location.pathname === "/" && location.hash === "#contact-section") {
      const timer = setTimeout(scrollToSection, 200); // small delay ensures DOM is ready
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4 lg:px-30">
        <div className="flex items-center justify-between h-26">

          {/* LOGO (click → home) */}
          <Link to="/" onClick={closeAll} className="shrink-0">
            <h1 className="text-3xl font-bold leading-none">
              <span className="text-black font-montserrat">Stravix</span>
              <span className="text-pink-600 font-poppins">.media</span>
            </h1>
            <p className="text-[10px] text-teal-600 -mt-1 ml-1 font-medium uppercase tracking-widest">
              Marketing Agency
            </p>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navItems.map((item) => {
              if (item.subItems) {
                return (
                  <div key={item.label} className="relative">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex items-center text-gray-900 hover:text-pink-600 text-lg font-medium transition"
                    >
                      {item.label}
                      <ChevronDown
                        className={`ml-1 h-5 w-5 transition-transform ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {servicesOpen && (
                      <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white shadow-lg z-50 rounded-md">
                        <div className="py-1">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.to}
                              to={sub.to}
                              onClick={() => setServicesOpen(false)}
                              className="block px-4 py-2 text-lg font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeAll}
                  className="text-gray-900 hover:text-pink-600 text-lg font-medium transition"
                >
                  {item.label}
                </Link>
              );
            })}

            {/* CTA – SCROLL */}
            <Link
              to="/#contact-section"
              onClick={goToContact}
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg text-lg font-semibold transition shadow-sm"
            >
              {cta.label}
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              if (item.subItems) {
                return (
                  <div key={item.label}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900 hover:text-pink-600 hover:bg-pink-50 rounded-md transition"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {servicesOpen && (
                      <div className="pl-6 space-y-1 mt-1">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.to}
                            to={sub.to}
                            onClick={closeAll}
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-md transition"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeAll}
                  className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-pink-600 hover:bg-pink-50 rounded-md transition"
                >
                  {item.label}
                </Link>
              );
            })}

            {/* MOBILE CTA – SCROLL */}
            <Link
              to="/#contact-section"
              onClick={(e) => {
                goToContact(e);
                closeAll();
              }}
              className="block w-full mt-3 bg-pink-600 hover:bg-pink-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition shadow-sm text-center"
            >
              {cta.label}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

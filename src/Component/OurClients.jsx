import React, { useState, useEffect, useRef } from "react";
import Backgroundlarge from "../assets/pink-bg.jpg";        // <-- large screen
import Backgroundsmall from "../assets/Backgroundsmall.jpg"; // <-- small screen

// -------------------------------------------------
// Tiny media-query hook (no external deps)
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);

    const handler = (e) => setMatches(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return matches;
}
// -------------------------------------------------

const clients = [
  { id: 1, name: "Client 1", logo: "https://via.placeholder.com/150" },
  { id: 2, name: "Client 2", logo: "https://via.placeholder.com/150" },
  { id: 3, name: "Client 3", logo: "https://via.placeholder.com/150" },
  { id: 4, name: "Client 4", logo: "https://via.placeholder.com/150" },
  { id: 5, name: "Client 5", logo: "https://via.placeholder.com/150" },
  { id: 6, name: "Client 6", logo: "https://via.placeholder.com/150" },
  { id: 7, name: "Client 7", logo: "https://via.placeholder.com/150" },
  { id: 8, name: "Client 8", logo: "https://via.placeholder.com/150" },
];

const OurClients = () => {
  // md breakpoint = 768px (Tailwind default)
  const isMdOrLarger = useMediaQuery("(min-width: 768px)");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const hintShown = useRef(false);

  // Show hint only once
  useEffect(() => {
    if (!hintShown.current) {
      hintShown.current = true;
      const timer = setTimeout(() => setShowHint(false), 2000);
      return () => clearTimeout(timer);
    } else {
      setShowHint(false);
    }
  }, []);

  const goToSlide = (idx) => setCurrentIndex(idx);

  return (
    <div
      className="md:min-h-screen bg-cover bg-center bg-no-repeat py-10 md:py-0"
      style={{
        backgroundImage: `url(${isMdOrLarger ? Backgroundlarge : Backgroundsmall})`,
      }}
    >
      <div className="container mx-auto px-4 lg:px-30 lg:py-30">
        {/* Title */}
        <div className="border-b border-black w-full pb-2 mb-10">
          <h1 className="font-bold text-3xl md:text-5xl text-gray-800">Clients Served</h1>
        </div>

        {/* ---------- Desktop Grid (md+) ---------- */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 px-10">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex justify-center items-center p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-32 h-32 object-contain"
              />
            </div>
          ))}
        </div>

        {/* ---------- Mobile Carousel ---------- */}
        <div className="md:hidden relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 50}%)` }}
          >
            {clients.map((client) => (
              <div key={client.id} className="flex-shrink-0 w-1/2 px-2">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 flex justify-center items-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-28 h-28 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right-scroll hint (hand) – shows once */}
          {showHint && (
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none animate-bounce">
              <svg
                className="w-8 h-8 text-pink-600 drop-shadow-md"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          )}

          {/* Navigation dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(clients.length / 2) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx * 2)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx * 2 === currentIndex
                    ? "bg-pink-600 w-8 shadow-md"
                    : "bg-white/70 backdrop-blur"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
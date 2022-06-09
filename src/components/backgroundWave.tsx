const BackgroundWave = () => {
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden">
      <div className="w-full h-[10rem] md:h-[15rem] bg-gradient-to-r from-indigo-500 to-pink-500" />
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6366f1"></stop>
            <stop offset="100%" stopColor="#ec4899"></stop>
          </linearGradient>
        </defs>
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className="shape-fill"
          fill="url(#gradient)"
        ></path>
      </svg>
    </div>
  );
};

export default BackgroundWave;

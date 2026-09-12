import bannerStack from "../assets/banner-stack.png";

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid items-center gap-12 lg:grid-cols-2">

        {/* Hero Content */}
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Build Your Ideal{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Discover the right technologies, tools, and frameworks to build
            powerful modern web applications and create your perfect
            developer stack.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="#technologies"
              className="rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-6 py-3 font-semibold text-white"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Banner */}
        <div>
          <img
            src={bannerStack}
            alt="Developer stack"
            className="w-full"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
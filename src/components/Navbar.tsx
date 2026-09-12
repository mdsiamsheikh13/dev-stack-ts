import logoText from "../assets/logo-text.png";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

        {/* Logo */}
        <a href="#">
          <img
            src={logoText}
            alt="Dev Stack"
            className="h-8 w-auto"
          />
        </a>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-gray-950"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="text-sm font-medium text-gray-700 hover:text-gray-950"
          >
            Technologies
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-gray-950"
          >
            Projects
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-gray-950"
          >
            About
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-gray-950"
          >
            Contact
          </a>
        </div>

        {/* Authentication */}
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-gray-700">
            Sign In
          </button>

          <button className="rounded-full bg-pink-400 px-5 py-2.5 text-sm text-white">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
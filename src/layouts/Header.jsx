import Container from "../components/Container";
import Image from "../components/Image";
import logo from "../assets/webinhor.png";
import Button from "../components/Button";
import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 left-0 z-50 backdrop-blur-lg bg-white/80 shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <div className="shrink-0">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClick();
              }}
            >
              <Image source={logo} className="h-10" />
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          {/* NAV LINKS */}
          <div
            className={`flex-col md:flex-row md:flex items-center gap-4 absolute md:static left-0 w-full md:w-auto bg-white/95 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none shadow md:shadow-none transition-all duration-300 
            ${open ? "top-16 opacity-100" : "top-[-400px] opacity-0 md:opacity-100"}`}
          >
            {["Home", "services", "packages", "contact"].map((id) => (
              <HashLink
                key={id}
                smooth
                to={`/#${id}`}
                className="px-3 py-1 rounded-full text-gray-800 hover:bg-white hover:text-black duration-150"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </HashLink>
            ))}

            <Link
              to="/about"
              className="px-3 py-1 rounded-full text-gray-800 hover:bg-white hover:text-black duration-150"
            >
              About Us
            </Link>

            {/* MOBILE GET STARTED BUTTON */}
            <div className="md:hidden mt-4">
              <HashLink smooth to="/#packages">
                <Button className="w-full">Get started</Button>
              </HashLink>
            </div>
          </div>

          {/* DESKTOP GET STARTED BUTTON */}
          <div className="hidden md:flex">
            <HashLink smooth to="/#packages">
              <Button>Get started</Button>
            </HashLink>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;

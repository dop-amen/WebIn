import Container from "../components/Container";
import Image from "../components/Image";
import logo from "../assets/webinhor.png"
import Button from "../components/Button";
import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router";

const Header = () => {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");              // Go to home page route
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
  };
  return (
    <>
      <nav className="top-0 left-0 w-full sticky z-50 backdrop-blur-lg bg-white/30">
        <Container>
          <div class="flex items-center justify-between px-4 py-2 bg-none ">
            <div class="w-1/4 pr-[158px]">
            
            <a href="#" onClick={(e) => { e.preventDefault(); handleClick(); }}>
      <Image source={logo} />
    </a>
             
            
             
            </div>

            <div class="w-2/4 flex justify-center gap-6">

<HashLink smooth to="/#hero"><a href="#" className="bg-white/40 rounded-full hover:bg-white hover:text-[20px] hover:font-semibold hover:border hover:border-black/60  hover:rounded-full duration-200 px-3 ">Home</a></HashLink>
             
<HashLink smooth to="/#services"><a href="#services" className="bg-white/40 rounded-full hover:bg-white hover:text-[20px] hover:font-semibold hover:border hover:border-black/60  hover:rounded-full duration-200 px-3 ">Services</a></HashLink>
              
<HashLink smooth to="/#packages"><a href="#packages" className="bg-white/40 rounded-full hover:bg-white hover:text-[20px] hover:font-semibold hover:border hover:border-black/60  hover:rounded-full duration-200 px-3 ">Packages</a></HashLink>
              
<HashLink smooth to="/#contact"><a href="#contact" className="bg-white/40 rounded-full hover:bg-white hover:text-[20px] hover:font-semibold hover:border hover:border-black/60  hover:rounded-full duration-200 px-3 ">Contact</a></HashLink>
              
              
                      <Link  to="/about"><a href="#about" className="bg-white/40 rounded-full hover:bg-white hover:text-[20px] hover:font-semibold hover:border hover:border-black/60  hover:rounded-full duration-200 px-3 ">About Us</a></Link>  </div>

            <div class="w-1/4 flex justify-end">
            <HashLink smooth to="/#packages">
              
              <Button className={"bg-white/60"}>
                Get started
              </Button>
            </HashLink>
              
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Header;

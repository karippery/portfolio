import Facebookicon from '../images/facebook.png';
import GithubIcon from '../images/github.png';
import InstagramIcon from '../images/instagram.png';
import LinkedInIcon from '../images/linkedin.png';
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} John Raphy Karippery</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a 
              href="https://github.com/karippery" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-110"
            >
              <img src={GithubIcon} alt="GitHub" className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/john-raphy-karippery-975baa5b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-110"
            >
              <img src={LinkedInIcon} alt="LinkedIn" className="h-6 w-6" />
            </a>
            <a 
              href="https://Instagram.com/john.karippery" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-110"
            >
              <img src={InstagramIcon} alt="Instagram" className="h-6 w-6" />
            </a>
            <a 
              href="https://www.facebook.com/john.karippery/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-110"
            >
              <img src={Facebookicon} alt="Facebook" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
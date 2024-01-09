import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm">
            Copyright &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com/akkiyadav143"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl transition-colors duration-300 hover:text-gray-500"
          >
            <FaGithub className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/akhilesh-yadav-39866184/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl transition-colors duration-300 hover:text-blue-500"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a
            href="https://www.instagram.com/yadav.akhileshsingh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl transition-colors duration-300 hover:text-orange-500"
          >
            <FaInstagram className="w-8 h-8" />
          </a>
          {/* <a
            href="https://wa.me/9594385172"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl transition-colors duration-300 hover:text-green-500"
          >
            <FaWhatsapp className="w-8 h-8" />
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

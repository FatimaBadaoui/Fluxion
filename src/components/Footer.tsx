import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaAt,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-screen bg-emerald-950 pt-20">
      {/* CONTACT US */}
      <div className="flex flex-col gap-16 md:flex-row items-center md:items-start justify-between px-15 md:px-20 py-10 md:py-20">
        <h2 className="text-5xl font-bold max-w-[300px]">Ways to contact us</h2>
        <div className="flex gap-8 md:justify-end  md:gap-20 w-full md:pr-20">
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold">Socials</h3>
            <div>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors"
              >
                <FaFacebook size={20} />
                Facebook
              </a>
            </div>
            <div>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors"
              >
                <FaInstagram size={20} />
                Instagram
              </a>
            </div>
            <div>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors"
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-bold">Contacts</h2>
            <div>
              <a
                href="mailto:"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors"
              >
                <FaAt size={20} />
                mail@example.com
              </a>
            </div>
            <div>
              <a
                href="tel:+1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors"
              >
                <FaPhone size={20} />
                +1 234 567 890
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr />
      {/* NEWSLETTER */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-white px-20 pt-8 md:pt-15">
        <h2 className="text-2xl font-bold">Sign up for our Newsletter</h2>
        <form
          action=""
          className="flex flex-col items-center gap-3 w-full max-w-md"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-md w-full max-w-md outline-1 outline-white focus:outline-emerald-700 transition-all"
          />
          <button
            type="submit"
            className="bg-emerald-700 cursor-pointer w-full text-white px-4 py-2 rounded-md hover:bg-emerald-800 transition-colors mt-3"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;

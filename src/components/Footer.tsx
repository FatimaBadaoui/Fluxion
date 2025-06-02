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
      <div className="flex flex-col gap-16 md:flex-row items-start justify-between px-20 py-10 md:py-20">
        <h2 className="text-5xl font-bold max-w-[300px]">Ways to contact us</h2>
        <div className="flex gap-16">
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
    </div>
  );
};

export default Footer;

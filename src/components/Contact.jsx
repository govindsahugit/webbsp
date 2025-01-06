import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { contackLinks } from "../constants";
import { Link } from "react-router-dom";
import { contactUs } from "../documents/docs";

// template_cr526oe
// service_aad7m5w
// ODpEdukJSEikfJnVp

const Contact = () => {
  return (
    <div id="contact" className="w-full  mt-32">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="h-[400px] bg-black-100 p-8 flex lg:flex-row sm:flex-row xs:flex-col flex-col lg:justify-around sm:justify-around lg:items-center sm:items-center xs:items-start xs:gap-16 gap-8 xs:gap-10 sm:gap-12 lg:gap-14">
        <div>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>
            <a href={`/src/documents/contact-us.pdf`}>Contact.</a>
          </h3>
          <p className={styles.sectionSubText}>
            <a className="text-[12px]" href={`/src/documents/terms-and-conditions.pdf`}>
              Terms and considtions
            </a>
          </p>
        </div>
        <div className="flex flex-col text-[15px] xs:text-[18px] sm:text-[22px] lg:text-[26px] gap-4 lg:gap-8 sm:gap-6 font-[600]">
          {contackLinks.map((link, i) => (
            <a key={i} href={link.url} className={link.styles}>
              <i
                className={`ri-${link.icon}-line text-[22px] xs:text-[25px] sm:text-[28px] lg:text-[32px]`}></i>
              <span>{link.linkName}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;

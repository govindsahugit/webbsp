import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card ">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] overflow-hidden min-h-[300px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-full object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>INTRODUCTION</p> */}
        <h2 className={styles.sectionHeadText}>Our Services.</h2>
      </motion.div>

      

      <motion.div className="cards-container mt-20 mb-20 flex flex-wrap justify-around">
        {services.map((service, index) => {
          return (
            <ServiceCard
              key={service.title}
              index={index}
              icon={service.icon}
              title={service.title}
            />
          );
        })}
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");

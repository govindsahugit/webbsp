import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      key={""}
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full"></div>
      }>
      <div>
        <img src={experience.image} alt="image" className="mb-4" />
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      </div>
      <div className="mt-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <div
            className="flex flex-col gap-2"
            key={`experience-point-${index}`}>
            <span className="text-white-100 text-[14px]">{point}</span>
            <div
              onClick={() => {
                window.open("https://" + experience.link, "_blank");
              }}
              className="flex gap-2 py-1 px-2 inline ">
              <span className="text-[#80C4E9]">visit</span>
              <i className="ri-link-m"></i>
            </div>
          </div>
        ))}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = ({ experience }) => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <h2 className={styles.sectionHeadText}>Work Samples.</h2>
        <br />
        <p className={styles.sectionSubText}>
          NOTE: Websites can take time to fully load, and some elements may not
          load on a few devices because we are using 3D stuff that takes time to
          load on a free website host. It won't happen when you host your site
          on a fast server.
        </p>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company_name}-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

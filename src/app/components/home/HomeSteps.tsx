"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import PageSection from "../ui/PageSection";
import Image, { StaticImageData } from "next/image";

import IcSchedule from "@/app/assets/icons/schedule.svg";
import IcNotes from "@/app/assets/icons/notes.svg";
import IcTime from "@/app/assets/icons/time.svg";
import IcCompleted from "@/app/assets/icons/completed.svg";

import style from "./HomeSteps.module.scss";

const stepVariant = {
  hidden: {
    opacity: 0,
    rotateY: "180deg",
  },
  visible: (i: number) => ({
    opacity: 1,
    rotateY: [
      "180deg",
      "80deg",
      "-30deg",
      "25deg",
      "-20deg",
      "15deg",
      "-10deg",
      "5deg",
      "-3deg",
      "0deg",
    ],
    transition: {
      duration: 2,
      delay: i * 0.3,
      ease: "easeInOut",
    },
  }),
};

const containerVariant = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

interface StepData {
  id: number;
  icon: StaticImageData;
  title: string;
  content: string;
  deadline: string;
}

const stepData: StepData[] = [
  {
    id: 1,
    icon: IcSchedule,
    title: "schedule your free in-home estimate",
    content:
      "Call us at 415-295-4502 to schedule a date and time for a free in-home estimate that works best for you.",
    deadline: "today",
  },
  {
    id: 2,
    icon: IcNotes,
    title: "what to expect during your consultation",
    content:
      "During your consultation, your local Window Station Professional Sales Representative will take measurements, show samples, advise you on material options, and discuss your window or door installation needs. Afterward, you’ll receive your quote.",
    deadline: "in two days",
  },
  {
    id: 3,
    icon: IcTime,
    title: "reliable lead time",
    content:
      "We will order your windows as soon as you review and approve the contract. Upon delivery to our warehouse, quality controlled inspections are employed and we will contact you to arrange an installation date.",
    deadline: "after 3-4 weeks",
  },
  {
    id: 4,
    icon: IcCompleted,
    title: "installation completion",
    content:
      "Upon completion, our certified installers will ensure you’re completely satisfied with the installation and inspect each window/door for proper operation, fit and finish.",
    deadline: "once finished",
  },
];

const HomeSteps = () => {
  const { ref: stepsElemRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <PageSection header="4 easy steps to get started">
      <motion.div
        ref={stepsElemRef}
        className={style.homeSteps}
        variants={containerVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className={style.homeStepsContent}>
          {stepData.map(({ id, icon, title, content, deadline }, i) => (
            <motion.div
              key={id}
              className={style.homeStepsElem}
              custom={i}
              variants={stepVariant}
            >
              <div className={style.homeStepsElemHeader}>
                <div className={style.homeStepsElemIcon}>
                  <Image src={icon} alt={title} />
                </div>
                <div className={style.homeStepsElemTitle}>{title}</div>
              </div>
              <div className={style.homeStepsElemContent}>
                <p>{content}</p>
              </div>
              <div className={style.homeStepsElemDeadline}>{deadline}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageSection>
  );
};

export default HomeSteps;

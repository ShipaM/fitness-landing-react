import { motion } from "framer-motion";
import Heading from "../Heading";
import ClassesSlider from "./ClassesSlider";
import { baseMotion, slideLeft } from "@/utils/motionPresets";

const OurClasses = () => {
  return (
    <section id="ourclasses" className="w-full bg-primaty-100 py-40">
      <div className="mx-auto w-5/6">
        <motion.div
          {...baseMotion}
          variants={slideLeft}
          transition={{ duration: 0.9 }}
          className="md:w-3/5"
        >
          <Heading>Our Classes</Heading>
          <p className="py-5 text-gray-700">
            Fringilla a sed at sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque
            odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.
            Cras consequat.
          </p>
        </motion.div>
      </div>
      <div className="mt-10 w-full">
        <ClassesSlider />
      </div>
    </section>
  );
};

export default OurClasses;

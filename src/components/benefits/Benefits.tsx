import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import { ActionButton } from "../ActionButton";
import Heading from "../Heading";
import { benefits } from "@/utils/benefitData";
import { Benefit } from "./Benefit";

export const Benefits = () => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div className="md:my-5 md:w-3/5">
        <Heading>More Than Just A Gym.</Heading>
        <p className="my-5 text-sm">
          We provide world class fitness equipment, trainers and classes to get
          you to your ultimate fitness goals with ease. We provide true care
          into each and every member.
        </p>
      </motion.div>
      <motion.div className="mt-5 flex items-center justify-between gap-8 md:flex">
        {benefits.map((benefit) => (
          <Benefit key={benefit.title} {...benefit} />
        ))}
      </motion.div>
      <motion.div className="mt-16 md:mt-28 items-center justify-between gap-20 md:mt-28 md:flex">
        <motion.div className="flex-1">
          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
          />
        </motion.div>
        <motion.div className="flex-1 relative">
          <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-(--content-abstractwaves) hidden md:block">
            <Heading>
              Millions of Happy Members Getting{" "}
              <span className="text-primary-500">Fit.</span>
            </Heading>
          </div>
          <div>
            <p className="my-5">
              You will never regret getting started. We are here to help you. We
              have expert and pro trainers to help you get started or to help
              you on your fitness journey.
            </p>
            <p className="mt-5">
              Fringilla a sed at sit. Vulputate mi sit amet mauris. Id diam
              maecenas ultricies mi eget mauris.Rhoncus sed vestibulum rhoncus.
            </p>
          </div>
          <div className="flex mt-16 items-center gap-8 md:justify-between justify-center">
            <ActionButton variant="button">Join Now</ActionButton>
            <div className="relative before:z-[-1] before:content-(--content-sparkles)"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

import { memo, type FC } from "react";
import { motion } from "framer-motion";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import { ActionButton } from "../ActionButton";
import { sponsorImages } from "@/utils/sponsorImages";

export const Home: FC = memo(() => {
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            initial="hidden"
            className="md:-mt-20"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-(--content-evolvetext)">
                <img src={HomePageText} alt="home-page" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            className="mt-8 flex items-center gap-8"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton to="contactus" variant="link">
              Join Now
            </ActionButton>
            <ActionButton
              to="#"
              variant="link"
              className="animation rounded-md bg-primary-500 px-10 py-2 hover:bg-secondary-500 hover:text-white cursor-pointer"
            >
              Learn More
            </ActionButton>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img src={HomePageGraphic} alt="page-graphic" />
        </motion.div>
      </div>
      <div className="h-[150] w-full bg-primary-100 py-10">
        <div className="flex mx-auto w-5/6 items-center justify-between gap-8">
          {sponsorImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <img src={image.src} alt={image.alt} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

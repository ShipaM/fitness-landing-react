import Logo from "@/assets/Logo.png";
import { footerLinks } from "@/utils/footerLinks";
import { baseMotion, slideUp, withDelay } from "@/utils/motionPresets";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto w-5/6 flex flex-col gap-16 md:flex-row md:justify-between">
        <motion.div
          {...baseMotion}
          variants={slideUp}
          transition={withDelay(0)}
          custom={0}
          className="mt-16 basis-1/2 md:mt-0"
        >
          <img src={Logo} alt="Logo" className="w-32" />
          <p className="my-5 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quae.
          </p>
          <p className="text-sm text-gray-500">© Evogym All Rights Reserved.</p>
        </motion.div>
        <motion.div
          {...baseMotion}
          variants={slideUp}
          transition={withDelay(1)}
          custom={1}
          className="mt-16 basis-1/4 md:mt-0"
        >
          <h4 className="font-bold text-lg">Links</h4>
          <div className="mt-3 flex flex-col">
            {footerLinks &&
              footerLinks.length > 0 &&
              footerLinks.map((link, index) => (
                <a
                  href={link.link}
                  key={index}
                  className="block my-3 text-sm text-gray-700 hover:text-primary-500 transition duration-300"
                >
                  {link.label}
                </a>
              ))}
          </div>
        </motion.div>
        <motion.div
          {...baseMotion}
          variants={slideUp}
          transition={withDelay(2)}
          custom={2}
          className="mt-16 basis-1/4 md:mt-0"
        >
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-3 text-sm text-gray-700">
            Tempus metus mattis risus volutpat egestas.
          </p>
          <a
            href="tel:333-333-3333"
            className="text-sm text-gray-700 hover:text-primary-500 transition duration-300 block"
          >
            333-333-3333
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

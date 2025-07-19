import type { BenefitType } from "@/types/type";
import { motion } from "framer-motion";
import { type FC } from "react";
import { ActionButton } from "../ActionButton";

export const Benefit: FC<BenefitType> = ({ icon, title, description }) => {
  return (
    <motion.div className="mt-5 rounded-md border-2 border-2 border-gray-100 px-5 py-16 text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <ActionButton
        to="contactus"
        className="animate text-sm font-bold text-primary-500 underline cursor-pointer hover:text-secondary-500"
        variant="link"
      >
        Learn More
      </ActionButton>
    </motion.div>
  );
};

import { contactSchema, type ContactFormType } from "@/types/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Heading from "../Heading";
import { ContactUsForm } from "./ContactUsForm";
import ContactPageGraphic from "@/assets/ContactUsPageGraphic.png";
import { motion } from "framer-motion";
import { baseMotion, slideLeft, slideRight } from "@/utils/motionPresets";

export const ContactUs = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: ContactFormType) => {
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/shipinomaksim@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      if (result.success === true) {
        reset();
      } else {
        console.error("Form submission failed:", result);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    console.log(data);
    setTimeout(() => {
      alert("Form submitted");
      reset();
    }, 1000);
  };
  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        {...baseMotion}
        transition={{ duration: 0.9 }}
        variants={slideLeft}
        className="my-5"
      >
        <Heading>
          <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
        </Heading>
        <p className="my-5">
          Fringilla a sed at sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque odio
          nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
          consequat.
        </p>
      </motion.div>
      <div className="mt-10 justify-between gap-8 md:flex">
        <motion.div
          {...baseMotion}
          variants={slideLeft}
          transition={{ duration: 0.9 }}
          className="mt-10 basis-3/5 md:mt-0"
        >
          <ContactUsForm
            onSubmit={handleSubmit(onSubmit)}
            register={register}
            errors={errors}
            isSubmitSuccessful={isSubmitSuccessful}
          />
        </motion.div>
        <motion.div
          {...baseMotion}
          variants={slideRight}
          transition={{ duration: 0.9 }}
          className="mt-10 basis-2/5 md:mt-0"
        >
          <div className="w-full relative before:absolute before:-bottom-20 before:-right-10 before:z-[1] md:before:content-(--content-evolvetext)">
            <img
              className="w-full relative z-[2]"
              src={ContactPageGraphic}
              alt="contact-us"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

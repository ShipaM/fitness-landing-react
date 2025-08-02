import type { FC } from "react";
import { TextInput } from "../formComponents/TextInput";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { motion } from "framer-motion";

type ContactUsFormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  register: UseFormRegister<{
    name: string;
    email: string;
    message: string;
  }>;
  errors: FieldErrors<{
    name: string;
    email: string;
    message: string;
  }>;
  isSubmitSuccessful: boolean;
};

export const ContactUsForm: FC<ContactUsFormProps> = ({
  onSubmit,
  register,
  errors,
  isSubmitSuccessful,
}) => {
  return (
    <form className="relative z-[2]" onSubmit={onSubmit}>
      <TextInput
        placeholder="Name"
        type="text"
        register={register("name")}
        error={errors.name}
      />
      <TextInput
        placeholder="Email"
        type="email"
        register={register("email")}
        error={errors.email}
      />
      <TextInput
        className="resize-none"
        placeholder="Message"
        type="textarea"
        register={register("message")}
        error={errors.message}
      />
      <button
        type="submit"
        className="cursor-pointer mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 animate hover:text-white"
      >
        Submit
      </button>
      {isSubmitSuccessful && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-500 text-center font-semibold"
        >
          Your message has been sent successfully
        </motion.p>
      )}
    </form>
  );
};

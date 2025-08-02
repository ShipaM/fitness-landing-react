import type { FC } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type TextInputProps = {
  type?: "text" | "email" | "textarea";
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  className?: string;
};

export const TextInput: FC<TextInputProps> = ({
  type = "text",
  placeholder,
  register,
  error,
  className,
}) => {
  const inputClassName = `baseStyles ${className || ""}`;
  return (
    <div className="relative mb-1">
      {type === "textarea" ? (
        <textarea
          className={inputClassName}
          placeholder={placeholder}
          rows={4}
          {...register}
        />
      ) : (
        <input
          className={inputClassName}
          type={type}
          placeholder={placeholder}
          {...register}
        />
      )}
      {error && (
        <p className="text-red-500 text-sm absolute bottom-0">
          {error.message}
        </p>
      )}
    </div>
  );
};

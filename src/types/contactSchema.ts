import z from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "The name is short" })
    .max(100, { message: "Long name" }),
  email: z.string().email({ message: "Invalid email" }),
  message: z
    .string()
    .min(10, { message: "The message is short" })
    .max(2000, { message: "Message too long" }),
});

export type ContactFormType = z.infer<typeof contactSchema>;

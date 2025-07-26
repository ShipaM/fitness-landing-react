import { type FC } from "react";

type ClassCardProps = {
  title: string;
  image: string;
  description?: string;
};

const ClassCard: FC<ClassCardProps> = ({ title, image, description }) => {
  return (
    <div className="relative cursor pointer mx-auto h-[380px] w-full max-w-[450px] px-4 sm:px-0">
      <div className="absolute z-20 flex h-full w-full flex-col bg-primary-500 text-white items-center justify-center text-center animate opacity-0 hover:opacity-90 focus-within:opacity-90 mobile-show-overlay">
        <p className="text-2xlfont-semibold">{title}</p>
        {description && <p className="mt-5 text-sm">{description}</p>}
      </div>
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover object-center rounded-md shadow-md"
      />
    </div>
  );
};

export default ClassCard;

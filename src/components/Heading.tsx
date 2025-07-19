import { type FC, type ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
};

const Heading: FC<HeadingProps> = ({ children }) => {
  return (
    <h2 className="basis-3/5 font-montserrat text-3xl font-bold">{children}</h2>
  );
};

export default Heading;

"use client";

import { CldImage as CldImageDefault, CldImageProps } from "next-cloudinary";

interface Props extends CldImageProps {}

const CldImage: React.FC<Props> = (props) => {
  return <CldImageDefault {...props} />;
};

export default CldImage;

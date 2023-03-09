import { SSRLocaleContext } from "@/context";
import { FullLocaleContext } from "@/context/types";
import React, { useContext } from "react";

function HeroSection() {
  //DICTIONARY
  const localeContext = useContext(SSRLocaleContext) as FullLocaleContext;
  const dict = localeContext.locale.dict;

  return <div className="w-full border-2">{dict.title}</div>;
}

export default HeroSection;

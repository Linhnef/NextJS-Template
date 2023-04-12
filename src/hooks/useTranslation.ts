import { useRouter } from "next/router";
import en from "../../public/lang/en.js";
import vi from "../../public/lang/vi.js";
import { useEffect, useState } from "react";

export const useTranslation = () => {
  const { locale } = useRouter();

  const translation = locale === "vi" ? vi : en;

  return translation;
};

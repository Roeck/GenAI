"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("d2af8d39-ccb2-44e1-8bbd-41eebdd51434");
  }, []);

  return null;
};

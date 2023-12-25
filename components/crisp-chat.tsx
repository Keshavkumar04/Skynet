"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("d3d97a03-9335-4041-88a1-99d6267fe788");
  }, []);

  return null;
};

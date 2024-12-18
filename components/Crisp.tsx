"use client";
//@ts-ignore

import React, { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispApp = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Crisp.configure(`3984329d-3c67-491c-adf0-bcc896d4d2fe`);
    }
  }, []);

  return null;
};

export default CrispApp;

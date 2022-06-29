import { useEffect } from "react";
import { useState } from "react";
import { getPresVal } from "../models/patient";

export const usePrescriptionVal = (patient) => {
  const [prescription, setPrescription] = useState();
  useEffect(() => {
    const getPres = async () => {
      const pres = await getPresVal(patient);
      console.log(pres);
      if (pres != false) setPrescription(pres);
    };
    if (!prescription) getPres();
  });
  return [prescription, setPrescription];
};

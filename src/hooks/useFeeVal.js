import { useState, useEffect } from "react";
import { getDocFee } from "../models/doctor";

export const useFeeVal = (doctor) => {
  const [fee, setFee] = useState("");
  useEffect(() => {
    const getFees = async () => {
      const fees = await getDocFee(doctor);
      console.log(`fees: ${fees}`);
      if (fees !== false) setFee(fees);
    };
    getFees();
  });
  return [fee, setFee];
};

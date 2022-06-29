import { useState, useEffect } from "react";
import { checkAuth } from "../models/patient";

export const useAuthVal = (doctor, patient) => {
  // console.log(doctor);
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const getAuth = async () => {
      const bin = await checkAuth(doctor, patient);
      // console.log(`bin: ${bin}`);
      if (!bin) {
      } else setAuth(true);
    };
    getAuth();
  });
  return [auth, setAuth];
};

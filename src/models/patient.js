import { PATIENT_ABI, PATIENT_ADDR } from "../contracts/config";
import Web3 from "web3";
import { ReactToast } from "../components/ReactToast";
const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const pat = new web3.eth.Contract(PATIENT_ABI, PATIENT_ADDR);

export const isPatient = async (props) => {
  const res = await pat.methods.isPatient(props).call();
  return res;
};

export const addPatient = async (props) => {
  try {
    const res = await isPatient(props);
    if (!res) {
      await pat.methods.addPatient(props).send({ from: props });
    }
    return true;
  } catch (e) {
    return false;
  }
};

export const checkAuth = async (doctor, patient) => {
  try {
    const isAuth = await pat.methods.isAuthorized(doctor, patient).call();
    console.log(isAuth);
    return isAuth;
  } catch (e) {
    return false;
  }
};

export const addAuth = async (doctor, user, fee) => {
  try {
    const auth = await checkAuth(doctor, user);
    if (!auth) {
      await pat.methods
        .addAuthorization(doctor, user, fee)
        .send({ from: user, value: fee });
    }
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getPresVal = async (patient) => {
  try {
    const pres = await pat.methods.viewPrescription(patient).call();
    console.log(pres);
    return pres;
  } catch (e) {
    return false;
  }
};

export const addPresVal = async (patient, doctor, prescription) => {
  try {
    const d = new Date();
    var datestring =
      d.getDate() +
      "-" +
      (d.getMonth() + 1) +
      "-" +
      d.getFullYear() +
      " " +
      d.getHours() +
      ":" +
      d.getMinutes();

    var Prescription = {
      date: d,
      doctor: doctor,
      pres: prescription,
    };
    const finalPres = JSON.stringify(Prescription);
    await pat.methods
      .setPrescription(finalPres, patient, doctor)
      .send({ from: doctor });
    return true;
  } catch (e) {
    ReactToast("Couldn't set Prescription");
    return false;
  }
};

import { DOCTOR_ABI, DOCTOR_ADDR } from "../contracts/config";
import Web3 from "web3";
const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const doctor = new web3.eth.Contract(DOCTOR_ABI, DOCTOR_ADDR);

export const isDoctor = async (props) => {
  // console.log(props);
  const res = await doctor.methods.isDoctor(props).call();
  //   console.log(res);
  return res;
};
export const getDocFee = async (props) => {
  try {
    const res = await isDoctor(props);

    if (res == true) {
      const ans = await doctor.methods.getFee(props).call();
      // console.log(ans);
      return ans;
    }
    return false;
  } catch (e) {
    return false;
  }
};
export const updateDocFee = async (user, fee) => {
  try {
    await doctor.methods.updateFee(user, fee).send({ from: user });
    return true;
  } catch (e) {
    return false;
  }
};
export const addDoctor = async (props) => {
  try {
    const res = await isDoctor(props);
    if (!res) {
      await doctor.methods.addDoctor(props).send({ from: props });
    }
    return true;
  } catch (e) {
    return false;
  }
};

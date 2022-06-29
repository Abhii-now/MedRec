import React, { useEffect, useState } from "react";
import { DOCTOR_ABI, DOCTOR_ADDR } from "../contracts/config";
import { PATIENT_ABI, PATIENT_ADDR } from "../contracts/config";
import Web3 from "web3";
import { Navigate } from "react-router-dom";
import { useAuthVal } from "../hooks/useAuthVal";
import { useFeeVal } from "../hooks/useFeeVal";
import { ReactForm } from "../components/ReactForm";
import { updateDocFee } from "../models/doctor";
import { Container } from "react-bootstrap";
import { ReactToast } from "../components/ReactToast";
import { addPresVal, checkAuth } from "../models/patient";
function Doctor({ user, redirect }) {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
  const [patient, setPatient] = useState("");
  console.log(patient);
  // const [auth, setAuth] = useAuthVal(user, patient);
  const [auth, setAuth] = useState(false);
  const [fees, setFees] = useFeeVal(user);
  // const [fees, setFees] = useState("");
  if (redirect == true) {
    return <Navigate to="/" />;
  }
  console.log(`auth: ${auth}`);
  async function checkAuthorized(addr) {
    const val = await checkAuth(user, addr);
    console.log(val);
    if (val == true) {
      console.log("HERE");
      setAuth(true);
    }
    setPatient(addr);
  }
  async function handleSubmit(prescription) {
    const val = await addPresVal(patient, user, prescription);
    if (val == true) {
      setAuth(false);
      setPatient("");
      ReactToast("Prescription sent Successfully");
    }
  }
  async function updateFee(fee) {
    const success = await updateDocFee(user, fee);
    if (success == false) console.log("FAILED");
  }
  function getPatient() {
    return (
      <div>
        <div>{ReactForm(checkAuthorized, "ID", patient, "4")}</div>
        <div>{auth == true ? <div>{patient}</div> : <div></div>}</div>
      </div>
    );
  }
  function getFee() {
    return (
      <div>
        <div>Fee : {fees}</div>
        <div>{ReactForm(updateFee, "Fee", auth)}</div>
      </div>
    );
  }

  function conditionalForm() {
    // console.log(auth);
    if (patient != "" && auth == false) {
      setPatient("");
      ReactToast("NOT AUTHORIZED");
    }
    return (
      <div>
        <div>{ReactForm(handleSubmit, "Prescription", !auth)}</div>
        {auth == true ? (
          <div></div>
        ) : patient != "" ? (
          <div>NOT AUTH{console.log("NOT AUTH")}</div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }

  return (
    <Container fluid>
      <h1>Doctor</h1>
      {getPatient()}
      {getFee()}
      {conditionalForm()}
    </Container>
  );
}
export default Doctor;

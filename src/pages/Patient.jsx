import React, { useEffect, useState } from "react";
import { useAuthVal } from "../hooks/useAuthVal";
import { addAuth } from "../models/patient";
import { Navigate } from "react-router-dom";
import { getDocFee, isDoctor } from "../models/doctor";
import { ReactForm } from "../components/ReactForm";
import { useFeeVal } from "../hooks/useFeeVal";
import { usePrescriptionVal } from "../hooks/usePrescriptionVal";
import { ReactToast } from "../components/ReactToast";
import { PresAccordion } from "../components/PrescAccordion";
import { showPrescription } from "../components/ShowPrescription";
import { Container } from "react-bootstrap";
function Patient({ user, redirect }) {
  const [doctor, setDoctor] = useState("");
  const [auth] = useAuthVal(doctor, user);
  console.log(`auth : ${auth}`);
  const [fee] = useFeeVal(doctor);
  const [prescription] = usePrescriptionVal(user);
  console.log(`prescription: ${prescription}`);
  if (redirect == true) {
    return <Navigate to="/" />;
  }
  async function getFee(doc) {
    const exists = await isDoctor(doc);
    if (exists == false) {
    } else {
      setDoctor(doc);
    }
  }
  async function setAuthorization() {
    if (!auth) {
      const val = await addAuth(doctor, user, fee);
      if (val == true) {
        ReactToast("Authorized Successfully");
        setDoctor("");
      } else {
        ReactToast("Can't Authorize");
      }
    }
  }
  function showFee() {
    if (auth == false && doctor != "") {
      return (
        <div>
          <div>FEE : {fee}</div>
          <button onClick={setAuthorization}>Authorize ?</button>
        </div>
      );
    } else if (doctor == "") {
    } else if (doctor != "") {
      ReactToast("Already Authorized");
      setDoctor("");
    }
  }
  function getPrescription() {
    if (prescription) return showPrescription(prescription);
  }
  function getDoctor() {
    return (
      <div>
        <div>{ReactForm(getFee, "ID", !auth && doctor != "", "4")}</div>
        <div>
          {doctor != "" && auth == false ? <div>{doctor}</div> : <div></div>}
        </div>
      </div>
    );
  }
  return (
    <Container fluid>
      <h1>Patient</h1>
      <div>{getDoctor()}</div>
      <div>{showFee()}</div>
      <div className="Prescription">Prescription: {getPrescription()}</div>
    </Container>
  );
}
export default Patient;

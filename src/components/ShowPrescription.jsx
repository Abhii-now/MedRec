import { PresAccordion } from "../components/PrescAccordion";
export function showPrescription(prescription) {
  return (
    <div>
      {prescription.map((Pres, i) => {
        {
          try {
            var truepres = JSON.parse(Pres);
            console.log(truepres.pres);
            return (
              <div key={i}>
                {PresAccordion(truepres.doctor, truepres.pres, truepres.date)}
              </div>
            );
          } catch (e) {}
        }
      })}
    </div>
  );
}

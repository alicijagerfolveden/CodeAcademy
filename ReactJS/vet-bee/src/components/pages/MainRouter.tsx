import { Route, Routes } from "react-router-dom";
import { PetList } from "./PetList";
import { NotFoundPage } from "./NotFoundPage";
import { AddPet } from "./AddPet";
import { Meds } from "./Meds";
import { AddMedications } from "./AddMedications";
import { HealthLog } from "./HealthLog";

export const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PetList />} />
        <Route path="/health-log/:id" element={<HealthLog />} />
        <Route path="/medications" element={<Meds />} />
        <Route path="/add-pet" element={<AddPet />} />
        <Route path="/add-prescription" element={<p>Add Prescription</p>} />
        <Route path="/add-log" element={<p>Add Log</p>} />
        <Route path="/add-medication" element={<AddMedications />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

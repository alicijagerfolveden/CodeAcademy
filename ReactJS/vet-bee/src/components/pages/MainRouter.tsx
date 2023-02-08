import { Route, Routes } from "react-router-dom";
import { PetList } from "./PetList";
import { NotFoundPage } from "./NotFoundPage";

export const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PetList />} />
        <Route path="/health-log/:id" element={<p>Health Log</p>} />
        <Route path="/medications" element={<p>View medications</p>} />
        <Route path="/add-pet" element={<p>Add pet</p>} />
        <Route path="/add-prescription" element={<p>Add Prescription</p>} />
        <Route path="/add-log" element={<p>Add Log</p>} />
        <Route path="/add-medications" element={<p>Add Medications</p>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

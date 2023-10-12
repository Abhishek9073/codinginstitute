import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exampaper from "./components/Screens/Exampaper";
import Homepg from "./components/Screens/Homepg";
import Coursespg from "./components/Screens/Coursespg";
import Feedbackpg from "./components/Screens/Feedbackpg";
import Cbse from "./components/Screens/Cbse";
import Icse from "./components/Screens/Icse";
import Jac from "./components/Screens/Jac";
import Bseap from "./components/Screens/Bseap";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepg />} />
          <Route path="/exampaper" element={<Exampaper />} />
          <Route path="/cbse" element={<Cbse />} />
          <Route path="/icse" element={<Icse />} />
          <Route path="/jac" element={<Jac />} />
          <Route path="/bseap" element={<Bseap />} />

          <Route path="/course" element={<Coursespg />} />

          <Route path="/feedback" element={<Feedbackpg />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

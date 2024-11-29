import {Route, Routes} from "react-router-dom"
import Homepage from "./Pages/Homepage";
import CreateEmployeePage from "./Pages/CreateEmployeePage";

function App() {
  return (
    <div className="">
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/addemployee" element={<CreateEmployeePage />}/>
        </Routes>
    </div>
  );
}

export default App;

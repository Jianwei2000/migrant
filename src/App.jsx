import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Category from "./pages/Category.jsx";
import Skilled from "./pages/Skilled.jsx";
import Boss from "./pages/Boss.jsx";
import Empployer from "./pages/Employer.jsx";
import Parents from "./pages/Parents.jsx";
import Marry from "./pages/Marry.jsx";
import FinalPage from "./pages/FinalPage.jsx";
import "./all.scss";


function App() {




  return (
    <>
      <Router basename="/migrant">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/skilled" element={<Skilled />}></Route>
          <Route path="/boss" element={<Boss />}></Route>
          <Route path="/employer" element={<Empployer />}></Route>
          <Route path="/parents" element={<Parents />}></Route>
          <Route path="/marry" element={<Marry />}></Route>
          <Route path="/final" element={<FinalPage />}></Route>

        </Routes>
      </Router>
    </>
  );

}

export default App

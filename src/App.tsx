import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <QuestionOne />
      <Counter /> */}
      <Header/>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="*" element={<Navigate replace to="" />} />
      </Routes>
    </div>
  );
}

export default App;

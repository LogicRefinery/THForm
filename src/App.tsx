import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/header/Header";
import Meta from "./Meta";
import Index from "./pages/Index";
import SurveyList from "./pages/SurveyList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Meta />
        <Header></Header>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/surveylist" element={<SurveyList />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

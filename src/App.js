import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </Layout>
  );
}

export default App;

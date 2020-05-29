import React, { useState, useEffect } from "react";

import api from "./services/api";

import "./App.css";

import Header from "./components/Header";
import { response } from "express";

export default function App() {
  const [cars, setCars] = useState(["Uno", "Gol", "Palio"]);

  useEffect(() => {
    api.get('/car').then(response =>{

    })
  }, []);

  function handleAddCar() {
    setCars([...cars, `New car ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Homepage" />
      <ul>
        {cars.map((car) => (
          <li key={car}> {car} </li>
        ))}{" "}
      </ul>
      <button type="button" onClick={handleAddCar}>
        Adicionar veículo
      </button>
    </>
  );
}

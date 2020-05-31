import React, { useState, useEffect } from "react";
import { FiTrash2 } from 'react-icons/fi'

import api from "./services/api";

import "./global.css";
import "./Sidebar.css";
import "./Main.css";
import "./App.css";

import Header from "./components/Header";

export default function App() {
  const [cars, setCars] = useState([]);

  const [marca, setMarca] = useState('')
  const [modelo, setModelo] = useState('')
  const [ano, setAno] = useState('')
  const [chassi, setChassi] = useState('')
  const [placa, setPlaca] = useState('')
  const [renavam, setRenavam] = useState('')

  useEffect(() => {
    async function loadCars() {
      const response = await api.get('/car')

      setCars(response.data)
    }

    loadCars()
  }, [])

  async function handleAddCar(e) {
    e.preventDefault()
    // setCars([...cars, `New car ${Date.now()}`]);

    const response = await api.post('/car', {
      placa,
      chassi,
      renavam,
      modelo,
      marca,
      ano
    })

    setMarca('')
    setModelo('')
    setPlaca('')
    setAno('')
    setChassi('')
    setRenavam('')

    const car = response.data

    setCars([...cars, car])

  }

  async function handleDeleteCar(id) {
    try {
      await api.delete(`car/${id}`)

      setCars(cars.filter(car => car.id !== id))
    } catch (err) {
      alert('Erro ao deletar caso, tente novamente.')
    }
  }

  return (
    <>
      <Header title="Info Sistemas" />
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>
          <form onSubmit={handleAddCar}>
            <div className="input-block">
              <label htmlFor="veicle_marca">Marca</label>
              <input
                type="text"
                name="veicle_marca"
                id="veicle_marca"
                value={marca}
                required
                onChange={e => setMarca(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="veicle_nome">Modelo</label>
              <input
                type="text"
                name="veicle_nome"
                id="veicle_nome"
                value={modelo}
                required
                onChange={e => setModelo(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="veicle_ano">Ano</label>
              <input
                type="number"
                name="veicle_ano"
                id="veicle_ano"
                min="1990"
                value={ano}
                required
                onChange={e => setAno(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="veicle_chassi">Chassi</label>
              <input
                type="text"
                name="veicle_chassi"
                id="veicle_chassi"
                value={chassi}
                required
                onChange={e => setChassi(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="veicle_placa">Placa</label>
              <input
                type="text"
                name="veicle_placa"
                id="veicle_placa"
                value={placa}
                required
                onChange={e => setPlaca(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="veicle_renavam">Renavam</label>
              <input
                type="text"
                name="veicle_renavam"
                id="veicle_renavam"
                value={renavam}
                required
                onChange={e => setRenavam(e.target.value)}
              />
            </div>

            <button type="submit">
              Cadastrar
            </button>
          </form>

        </aside>
        <main>

          <ul>
            {cars.map(car => (
              <li key={car.id} className="car-item">
                <header>
                  <div className="car-info">
                    <strong><span>Modelo:  </span>{car.modelo}</strong>
                    <strong><span>Marca:  </span>{car.marca}</strong>
                    <strong><span>Ano:  </span>{car.ano}</strong>
                    <strong><span>Chassi:  </span>{car.chassi}</strong>
                    <strong><span>Placa:  </span>{car.placa}</strong>
                    <strong><span>Renavam:  </span>{car.renavam}</strong>
                  </div>
                </header>
                <button type="button" onClick={() => handleDeleteCar(car.id)} >
                  <FiTrash2 size={20} />
                </button>
              </li>
            ))}
          </ul>

        </main>
      </div>
    </>
  );
}

const express = require('express')
const { uuid, isUuid } = require('uuidv4')

const app = express()

app.use(express.json())

const cars = []

function validateCarId(request, response, next) {
  const { id } = request.params

  if (!isUuid(id)) {
    return response.status(400).json({
      error: 'Invalid veicle ID.'
    })
  }
  return next()
}

app.use('/car/:id', validateCarId)

app.get('/car', (request, response) => {

  return response.json(cars)
})

app.post('/car', (request, response) => {
  const { placa, chassi, renavam, modelo, marca, ano } = request.body

  const car = {
    id: uuid(),
    placa,
    chassi,
    renavam,
    modelo,
    marca,
    ano
  }

  cars.push(car)

  return response.json(car)
})

app.put('/car/:id', (request, response) => {
  const { id } = request.params

  const { placa, chassi, renavam, modelo, marca, ano } = request.body

  const carIndex = cars.findIndex(car => car.id === id)

  if (carIndex < 0) {
    return response.status(400).json({
      error: 'Veicle not found.'
    })
  }


  const car = {
    id,
    placa,
    chassi,
    renavam,
    modelo,
    marca,
    ano
  }

  cars[carIndex] = car

  return response.json(car)
})

app.delete('/car/:id', (request, response) => {
  const { id } = request.params


  const carIndex = cars.findIndex(car => car.id === id)

  if (carIndex < 0) {
    return response.status(400).json({
      error: 'Veicle not found.'
    })
  }

  cars.splice(carIndex, 1)

  return response.status(204).send()
})


app.listen(3333, () => {
  console.log('✅️ Server started on port 3333')
})

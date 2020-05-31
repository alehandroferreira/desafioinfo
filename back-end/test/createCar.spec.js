const assert = require('assert')
const { createCar } = require('../src/index')

const modelo = "Clio"
const marca = "Renault"
const ano = "2015"
const placa = "HJI2821"
const chassi = "87fds-f4ds54f-ds4f54-fsdf4"
const renavam = "fsdf87re54"

describe('createCar', function () {
  it('Após criar o carro o teste irá passar.', function () {
    const result = createCar(
      modelo,
      marca,
      ano,
      placa,
      chassi,
      renavam
    )
    assert.equal(result, car)
  })
})

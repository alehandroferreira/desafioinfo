const assert = require('assert')
const { updateCar } = require('../src/index')

const modelo = "Uno"
const marca = "Fiat"
const ano = "2007"
const placa = "YJO4548"
const chassi = "fs457-dsf85-df454-bv123"
const renavam = "fds57r8"

describe('updateCar', function () {
  it('Após atualizar o carro o teste irá passar.', function (id) {
    const result = updateCar(
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

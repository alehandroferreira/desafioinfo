const assert = require('assert')
const { deleteCar } = require('../src/index')

describe('deleteCar', function () {
  it('Após remover o carro o teste irá passar.', function (id) {
    const result = deleteCar()

    assert.equal(result)
  })
})

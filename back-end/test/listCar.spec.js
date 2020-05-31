const assert = require('assert')
const { listCar } = require('../src/index')

describe('listCar', function () {
  it('Mostrar os carros criados e então o test irá passar.',function() {
    const result = listCar()
    assert.equal(result, cars)
  })
})

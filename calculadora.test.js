const { calculator } = require('../functions/calculator');

test('Função soma deve somar 1 e 2 e retornar 3', () =>  {
    expect(calculator.sum(1, 2)).toBe(3); 
})

test('Função subtração deve subtrair 5 e 4 e retornar 1', () =>  {
    expect(calculator.subtract(5, 4)).toBe(1); 
})

test('Função Dividir deve dividir 4 e 2 e retornar 2', () =>  {
    expect(calculator.divide(4, 2)).toBe(2); 
})

test('Função Multiplicação deve multiplicar 2 e 2 e retornar 4', () =>  {
    expect(calculator.multiply(2, 2)).toBe(4); 
})
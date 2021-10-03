import calculatorAbi from '../abi/calculator-abi.js';

/**
 * Вызывате метод mul контракта-калькулятора
 * @param web3 настроенный экземпляр web3
 * @param contractAddress адрес контракта-калькулятора
 * @param argument аргумент для вызова метода контракта
 * @return {Promise<number>} результат вызова метода
 */
export async function callMul(web3, contractAddress, argument) {
    const calculatorContract = new web3.eth.Contract(calculatorAbi, contractAddress);

    const result = await calculatorContract.methods.mul('15').call();

    return result;
}

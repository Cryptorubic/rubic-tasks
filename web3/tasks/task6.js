import calculatorAbi from '../abi/calculator-abi.js';

/**
 * Изменяет число base контракта-калькулятора
 * @param web3 настроенный экземпляр web3
 * @param contractAddress адрес контракта-калькулятора
 * @param argument аргумент для вызова метода контракта
 * @return {Promise<TransactionReceipt>} чек транзакции
 */
export async function changeBase(web3, contractAddress, argument) {
    const fromAddress = '0x9471D35e8F83e60Cdaa81da1393Eb02ce92596f5';

    const calculatorContract = new web3.eth.Contract(calculatorAbi, contractAddress);

    const createReceipt = await calculatorContract.methods.changeBase(argument).send({
        from: fromAddress,
        gas: '12500000'
    })

    return createReceipt;
}

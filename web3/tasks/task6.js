import calculatorAbi from '../abi/calculator-abi.js';

/**
 * Изменяет число base контракта-калькулятора
 * @param web3 настроенный экземпляр web3
 * @param contractAddress адрес контракта-калькулятора
 * @param argument аргумент для вызова метода контракта
 * @return {Promise<TransactionReceipt>} чек транзакции
 */
export async function changeBase(web3, contractAddress, argument) {
    const fromAddress = web3.eth.accounts.wallet[0].address;

    const calculatorContract = new web3.eth.Contract(calculatorAbi, contractAddress);

    const createReceipt = await calculatorContract.methods.changeBase(argument).send({
        from: fromAddress,
        gas: '40000'
    })

    return createReceipt;
}

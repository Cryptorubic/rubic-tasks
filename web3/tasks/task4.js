import calculatorAbi from '../abi/calculator-abi.js';

/**
 * Деплоит контракт-калькулятор
 * @param web3 настроенный экземпляр web3
 * @param constructorArgument аргемент конструктора контракта
 * @return {Promise<string>} адрес контракта
 */
export async function deployCalculator(web3, constructorArgument) {
    const calculatorContract = new web3.eth.Contract(calculatorAbi);

    const addressFrom = '0x9471D35e8F83e60Cdaa81da1393Eb02ce92596f5';

    const bytecode = '608060405234801561001057600080fd5b506040516101bc3803806101bc8339818101604052602081101561003357600080fd5b810190808051906020019092919050505080600081905550506101618061005b6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063131e2f18146100465780635001f3b514610088578063824127f8146100a6575b600080fd5b6100726004803603602081101561005c57600080fd5b81019080803590602001909291905050506100d4565b6040518082815260200191505060405180910390f35b6100906100e2565b6040518082815260200191505060405180910390f35b6100d2600480360360208110156100bc57600080fd5b81019080803590602001909291905050506100e8565b005b600081600054029050919050565b60005481565b7f668c8891f0e4e84f214af4135d5c42551c43c43fc8348537c00a07e9a9241df16000546040518082815260200191505060405180910390a1806000819055505056fea2646970667358221220824825b38eb39a5bb70693e1cd88f81d4e14cb714be5bb69fd561bc9420f17ed64736f6c634300060c0033';

    const calculatorTx = calculatorContract.deploy({
        data: bytecode,
        arguments: [5]
    });

    const createTransaction = await web3.eth.accounts.signTransaction({
        from: addressFrom,
        data: calculatorTx.encodeABI(),
        gas: '12500000'
    }, process.env.PRIVATE_KEY);

    // Deploy contract
    const createReceipt = await web3.eth.sendSignedTransaction(
      createTransaction.rawTransaction,
    );

    return createReceipt.transactionHash;
}

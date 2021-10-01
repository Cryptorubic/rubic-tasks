/**
 * Отправляет заданную сумму Eth на заданный адрес
 * @param web3 настроенный экземпляр web3
 * @param toAddress адрес получателя
 * @param value сумма для отправки
 * @return {Promise<string>} хеш транзакции
 */
export async function sendEth(web3, toAddress, value) {

    const createTransaction = await web3.eth.accounts.signTransaction({
        to: toAddress,
        value: '12',
        gas: '12500000'
    }, process.env.PRIVATE_KEY);

    const createReceipt = await web3.eth.sendSignedTransaction(
      createTransaction.rawTransaction,
    );

    return createReceipt.transactionHash;
}

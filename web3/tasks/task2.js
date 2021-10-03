/**
 * Отправляет заданную сумму Eth на заданный адрес
 * @param web3 настроенный экземпляр web3
 * @param toAddress адрес получателя
 * @param value сумма для отправки
 * @return {Promise<string>} хеш транзакции
 */
export async function sendEth(web3, toAddress, value) {
  const createReceipt = await web3.eth.sendTransaction({
    from: '0x9471D35e8F83e60Cdaa81da1393Eb02ce92596f5',
    to: toAddress,
    value: '12',
    gas: '12500000'
  });

  return createReceipt.transactionHash;
}

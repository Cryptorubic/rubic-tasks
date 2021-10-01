const miniAbi = [
  // transfer
  {
    constant: false,
    inputs: [
      {
        name: '_to',
        type: 'address'
      },
      {
        name: '_value',
        type: 'uint256'
      }
    ],
    name: 'transfer',
    outputs: [
      {
        name: 'success',
        type: 'bool'
      }
    ],
    payable: false,
    type: 'function'
  },
]

/**
 * Отправляет заданную сумму Weenus на заданный адрес
 * @param web3 настроенный экземпляр web3
 * @param toAddress адрес получателя
 * @param value сумма для отправки
 * @return {Promise<string>} хеш транзакции
 */
export async function sendWeenus(web3, toAddress, value) {

  const fromAddress = '0x9471D35e8F83e60Cdaa81da1393Eb02ce92596f5';

  const tokenAddress = '0xaff4481d10270f50f203e0763e2597776068cbc5';

  const tokenContract = new web3.eth.Contract(miniAbi, tokenAddress, { from: fromAddress});

  const txObject = {
    to: toAddress,
    value: '12',
    gas: '12500000',
    data: tokenContract.methods.transfer(toAddress, '10').encodeABI(),
  }

  const createTransaction = await web3.eth.accounts.signTransaction(txObject, process.env.PRIVATE_KEY)

  const createReceipt = await web3.eth.sendSignedTransaction(
    createTransaction.rawTransaction,
  );

  return createReceipt.transactionHash;
}

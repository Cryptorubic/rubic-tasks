import tokenAbi from '../abi/erc20-abi.js';

/**
 * Отправляет заданную сумму Weenus на заданный адрес
 * @param web3 настроенный экземпляр web3
 * @param toAddress адрес получателя
 * @param value сумма для отправки
 * @return {Promise<string>} хеш транзакции
 */
export async function sendWeenus(web3, toAddress, value) {
  const fromAddress = web3.eth.accounts.wallet[0].address;

  const tokenAddress = '0xaff4481d10270f50f203e0763e2597776068cbc5';

  const tokenContract = new web3.eth.Contract(tokenAbi, tokenAddress);

  const receipt = await tokenContract.methods.transfer(toAddress, '10').send({
    from: fromAddress,
    to: toAddress,
    gas: '40000',
  })

  return receipt.transactionHash;
}

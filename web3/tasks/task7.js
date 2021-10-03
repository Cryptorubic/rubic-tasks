import calculatorAbi from '../abi/calculator-abi.js';

/**
 * Извлекает информацию из чека транзакции
 * @param web3 настроенный экземпляр web3
 * @param receipt чек транзакции
 * @return {Promise<{gasInEth: number, previousBase: number, gas: number}>} извлеченные данные
 */
export async function extractReceipt(web3, receipt) {
  const gasInEth = web3.utils.fromWei(web3.utils.toBN(receipt.cumulativeGasUsed), 'ether');

  return {
    gas: receipt.gasUsed,
    gasInEth,
    previousBase: receipt.events.baseChanged.returnValues.prevBase
  }
}

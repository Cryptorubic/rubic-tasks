const tokenAbi = [
  {
    constant: true,

    inputs: [{ name: "_owner", type: "address" }],

    name: "balanceOf",

    outputs: [{ name: "balance", type: "uint256" }],

    type: "function",
  },

];

/**
 * Функция вычисляет баланс переданного адреса в эфирах и токенах weenus
 * @param address целевой адес для вычисления баланса
 * @param web3 настроенный экземпляр web3
 * @return {Promise<{eth: string, weenus: string}>} балансы
 */
export async function getBalance(web3, address) {
  const tokenAddress = '0xaff4481d10270f50f203e0763e2597776068cbc5';

  const balanceETH = web3.utils.fromWei(await web3.eth.getBalance(address), 'ether');

  const tokenContract = new web3.eth.Contract(tokenAbi, tokenAddress);
  const balanceWeenusInWei = await tokenContract.methods.balanceOf(address).call();
  const balanceWeenus = web3.utils.fromWei(balanceWeenusInWei, 'ether');

  return {
    eth: balanceETH,
    weenus: balanceWeenus
  }
}

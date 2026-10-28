// Sale settings: change here and the whole page follows.
export const SALE = {
  percent: 26,
  startsOn: "October 29",
} as const;

export const salePrice = (price: number) => Math.round(price * (1 - SALE.percent / 100) * 100) / 100;
export const money = (n: number) => `$${n.toFixed(2)}`;

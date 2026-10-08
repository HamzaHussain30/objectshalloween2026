// Sale settings: change here and the whole page follows.
// ponytail: placeholder code (SPOOKY26) - replace with the real coupon before launch.
export const SALE = {
  percent: 26,
  code: "SPOOKY26",
  // local midnight at the end of Oct 31
  endsAt: { year: 2026, monthIndex: 10, day: 1 },
} as const;

export const salePrice = (price: number) => Math.round(price * (1 - SALE.percent / 100) * 100) / 100;
export const money = (n: number) => `$${n.toFixed(2)}`;

export const decoratePrice = (price: any) => {
  let strPrice = String(price);
  if (strPrice.length > 3) {
    strPrice = strPrice.slice(0, -3) + ' ' + strPrice.slice(-3);
  }
  return strPrice;
};

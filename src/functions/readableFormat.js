export default function readableFormat(number) {
  if (isNaN(number) || number < 0) {
    return '$0';
  } else {
    const fixedNum = Number(number).toFixed(2);
    const addComma = fixedNum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    return '$' + addComma;
  }
}

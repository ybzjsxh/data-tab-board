export function formatNumber(value: string | number | any, seperator = ',', digitNum = 0): any {
  const initV = value;
  if (`${value}`.replace(/^\s*|\s*$|,*/g, '').match(/^\d*\.?\d*$/) === null) return initV;
  value = digitNum >= 0 ? `${Number(value).toFixed(digitNum)}` : value;
  const r = [];
  let tl = value.split('.')[0];
  let tr = value.split('.')[1];
  tr = typeof tr !== 'undefined' ? tr : '';
  if (seperator !== null && seperator !== '') {
    while (tl.length >= 3) {
      r.push(tl.substring(tl.length - 3));
      tl = tl.substring(0, tl.length - 3);
    }
    if (tl.length > 0) r.push(tl);
    r.reverse();
    const s = r.join(seperator);
    return tr === '' ? s : `${s}.${tr}`;
  }
  return value;
}

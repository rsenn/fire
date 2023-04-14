export function capitalize(a: string[]): string[] {
  var length = a.length;
  var b = new Array<string>(length);
  for (let i = 0; i < length; ++i) {
    b[i] = a[i].toUpperCase();
  }
  return b;
}

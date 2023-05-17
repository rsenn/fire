//memory.grow(1);

export function fire(width: u16, height: u16): void {
  var p: u32 = 0;

  for (var y: u16 = 0; y < height - 1; ++y) {
    for (var x: u16 = 0; x < width; ++x) {
      var v: u16 =
        load<u8>(p) +
        load<u8>(p + width - 1) +
        load<u8>(p + width) +
        load<u8>(p + width + 1);

      store<u8>(p, (v * 15) / 64);

      ++p;
    }
  }
}

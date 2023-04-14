import {
  clz as builtin_clz,
  ctz as builtin_ctz,
  popcnt as builtin_popcnt,
  rotl as builtin_rotl,
  rotr as builtin_rotr
} from "builtins";

let lo: u32, hi: u32;

export function i64_getLo(): u32 {
  return lo;
}

export function i64_getHi(): u32 {
  return hi;
}

export function i64_clz(loLeft: u32, hiLeft: u32): void {
  var ret = builtin_clz<u64>((<u64>loLeft) | ((<u64>hiLeft) << 32));
  lo = <u32>ret;
  hi = 0;
}

export function i64_ctz(loLeft: u32, hiLeft: u32): void {
  var ret = builtin_ctz<u64>((<u64>loLeft) | ((<u64>hiLeft) << 32));
  lo = <u32>ret;
  hi = 0;
}

export function i64_popcnt(loLeft: u32, hiLeft: u32): void {
  var ret = builtin_popcnt<u64>((<u64>loLeft) | ((<u64>hiLeft) << 32));
  lo = <u32>ret;
  hi = 0;
}

export function i64_eqz(loLeft: u32, hiLeft: u32): void {
  var ret = !((<u64>loLeft) | ((<u64>hiLeft) << 32));
  lo = u32(ret);
  hi = 0;
}

export function i64_add(
  loLeft: u32,
  hiLeft: u32,
  loRight: u32,
  hiRight: u32
): void {
  var ret =
    ((<u64>loLeft) | ((<u64>hiLeft) << 32)) +
    ((<u64>loRight) | ((<u64>hiRight) << 32));
  lo = <u32>ret;
  hi = u32(ret >> 32);
}

export function i64_sub(
  loLeft: u32,
  hiLeft: u32,
  loRight: u32,
  hiRight: u32
): void {
  var ret =
    ((<u64>loLeft) | ((<u64>hiLeft) << 32)) -
    ((<u64>loRight) | ((<u64>hiRight) << 32));
  lo = <u32>ret;
  hi = u32(ret >> 32);
}

export function i64_mul(
  loLeft: u32,
  hiLeft: u32,
  loRight: u32,
  hiRight: u32
): void {
  var ret =
    ((<u64>loLeft) | ((<u64>hiLeft) << 32)) *
    ((<u64>loRight) | ((<u64>hiRight) << 32));
  lo = <u32>ret;
  hi = u32(ret >> 32);
}

export function i64_div_s(
  loLeft: u32,
  hiLeft: u32,
  loRight: u32,
  hiRight: u32
): void {
  var ret = u64(
    i64((<u64>loLeft) | ((<u64>hiLeft) << 32)) /
      i64((<u64>loRight) | ((<u64>hiRight) << 32))
  );
  lo = <u32>ret;
  hi = u32(ret >> 32);
}

export function i64_div_u(
  loLeft: u32,
  hiLeft: u32,
  loRight: u32,
  hiRight: u32
): void {
  var ret =
    ((<u64>loLeft) | ((<u64>hiLeft) << 32)) /
    ((<u64>loRight) | ((<u64>hiRight) << 32));
  lo = <u32>ret;
  hi = u32(ret >> 32);
}

export function i64_rem_s(
  loLeft: u32,
  hiLeft: u32,
  loRight: u32,
  hiRight: u32
): void {
  var ret = u64(
    i64((<u64>loLeft) | ((<u64>hiLeft) << 32)) %
      i64((<u64>loRight) | ((<u64>hiRight) << 32))
  );
  lo = <u32>ret;
  hi = u32(ret >> 32);
}

export function i64_rem_u(
  loLeft: u32,
  hiLeft: u32,
  loRight: u32,
  hiRight: u32
): void {
  var ret =
    ((<u64>loLeft) | ((<u64>hiLeft) << 32)) %
    ((<u64>loRight) | ((<u64>hiRight) << 32));
  lo = <u32>ret;
  hi = u32(ret >>> 32);
}

export function i64_and(
  loLeft: u32,
  hiLeft: u32,
  loRight: u32,
  hiRight: u32
): void {
  var ret =
    ((<u64>loLeft) | ((<u64>hiLeft) << 32)) &
    ((<u64>loRight) | ((<u64>hiRight) << 32));
  lo = <u32>ret;
  hi = u32(ret >>> 32);
}

export function i64_or(
  loLeft: u32,
  hiLeft: u32,
  loRight: u32,
  hiRight: u32
): void {
  var ret =
    (<u64>loLeft) |
    ((<u64>hiLeft) << 32) |
    ((<u64>loRight) | ((<u64>hiRight) << 32));
  lo = <u32>ret;
  hi = u32(ret >>> 32);
}

export function i64_xor(
  loLeft: u32,
  hiLeft: u32,
  loRight: u32,
  hiRight: u32
): void {
  var ret =
    ((<u64>loLeft) | ((<u64>hiLeft) << 32)) ^
    ((<u64>loRight) | ((<u64>hiRight) << 32));
  lo = <u32>ret;
  hi = u32(ret >>> 32);
}

export function i64_shl(
  loLeft: u32,
  hiLeft: u32,
  loRight: u32,
  hiRight: u32
): void {
  var ret =
    ((<u64>loLeft) | ((<u64>hiLeft) << 32)) <<
    ((<u64>loRight) | ((<u64>hiRight) << 32));
  lo = <u32>ret;
  hi = u32(ret >>> 32);
}

export function i64_shr_s(
  loLeft: u32,
  hiLeft: u32,
  loRight: u32,
  hiRight: u32
): void {
  var ret = u64(
    i64((<u64>loLeft) | ((<u64>hiLeft) << 32)) >>
      i64((<u64>loRight) | ((<u64>hiRight) << 32))
  );
  lo = <u32>ret;
  hi = u32(ret >>> 32);
}

export function i64_shr_u(
  loLeft: u32,
  hiLeft: u32,
  loRight: u32,
  hiRight: u32
): void {
  var ret =
    ((<u64>loLeft) | ((<u64>hiLeft) << 32)) >>
    ((<u64>loRight) | ((<u64>hiRight) << 32));
  lo = <u32>ret;
  hi = u32(ret >>> 32);
}

export function i64_rotl(
  loLeft: u32,
  hiLeft: u32,
  loRight: u32,
  hiRight: u32
): void {
  var ret = builtin_rotl<u64>(
    (<u64>loLeft) | ((<u64>hiLeft) << 32),
    (<u64>loRight) | ((<u64>hiRight) << 32)
  );
  lo = <u32>ret;
  hi = u32(ret >>> 32);
}

export function i64_rotr(
  loLeft: u32,
  hiLeft: u32,
  loRight: u32,
  hiRight: u32
): void {
  var ret = builtin_rotr<u64>(
    (<u64>loLeft) | ((<u64>hiLeft) << 32),
    (<u64>loRight) | ((<u64>hiRight) << 32)
  );
  lo = <u32>ret;
  hi = u32(ret >>> 32);
}

export function i64_eq(
  loLeft: u32,
  hiLeft: u32,
  loRight: u32,
  hiRight: u32
): void {
  var ret =
    ((<u64>loLeft) | ((<u64>hiLeft) << 32)) ==
    ((<u64>loRight) | ((<u64>hiRight) << 32));
  lo = u32(ret);
  hi = 0;
}

export function i64_ne(
  loLeft: u32,
  hiLeft: u32,
  loRight: u32,
  hiRight: u32
): void {
  var ret =
    ((<u64>loLeft) | ((<u64>hiLeft) << 32)) !=
    ((<u64>loRight) | ((<u64>hiRight) << 32));
  lo = u32(ret);
  hi = 0;
}

export function i64_lt_s(
  loLeft: u32,
  hiLeft: u32,
  loRight: u32,
  hiRight: u32
): void {
  var ret =
    i64((<u64>loLeft) | ((<u64>hiLeft) << 32)) <
    i64((<u64>loRight) | ((<u64>hiRight) << 32));
  lo = u32(ret);
  hi = 0;
}

export function i64_lt_u(
  loLeft: u32,
  hiLeft: u32,
  loRight: u32,
  hiRight: u32
): void {
  var ret =
    ((<u64>loLeft) | ((<u64>hiLeft) << 32)) <
    ((<u64>loRight) | ((<u64>hiRight) << 32));
  lo = u32(ret);
  hi = 0;
}

export function i64_le_s(
  loLeft: u32,
  hiLeft: u32,
  loRight: u32,
  hiRight: u32
): void {
  var ret =
    i64((<u64>loLeft) | ((<u64>hiLeft) << 32)) <=
    i64((<u64>loRight) | ((<u64>hiRight) << 32));
  lo = u32(ret);
  hi = 0;
}

export function i64_le_u(
  loLeft: u32,
  hiLeft: u32,
  loRight: u32,
  hiRight: u32
): void {
  var ret =
    ((<u64>loLeft) | ((<u64>hiLeft) << 32)) <=
    ((<u64>loRight) | ((<u64>hiRight) << 32));
  lo = u32(ret);
  hi = 0;
}

export function i64_gt_s(
  loLeft: u32,
  hiLeft: u32,
  loRight: u32,
  hiRight: u32
): void {
  var ret =
    <i64>((<u64>loLeft) | ((<u64>hiLeft) << 32)) >
    <i64>((<u64>loRight) | ((<u64>hiRight) << 32));
  lo = u32(ret);
  hi = 0;
}

export function i64_gt_u(
  loLeft: u32,
  hiLeft: u32,
  loRight: u32,
  hiRight: u32
): void {
  var ret =
    ((<u64>loLeft) | ((<u64>hiLeft) << 32)) >
    ((<u64>loRight) | ((<u64>hiRight) << 32));
  lo = u32(ret);
  hi = 0;
}

export function i64_ge_s(
  loLeft: u32,
  hiLeft: u32,
  loRight: u32,
  hiRight: u32
): void {
  var ret =
    i64((<u64>loLeft) | ((<u64>hiLeft) << 32)) >=
    i64((<u64>loRight) | ((<u64>hiRight) << 32));
  lo = u32(ret);
  hi = 0;
}

export function i64_ge_u(
  loLeft: u32,
  hiLeft: u32,
  loRight: u32,
  hiRight: u32
): void {
  var ret =
    ((<u64>loLeft) | ((<u64>hiLeft) << 32)) >=
    ((<u64>loRight) | ((<u64>hiRight) << 32));
  lo = u32(ret);
  hi = 0;
}

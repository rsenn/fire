export const E = Math.E;
export const LN10 = Math.LN10;
export const LN2 = Math.LN2;
export const LOG10E = Math.LOG10E;
export const LOG2E = Math.LOG2E;
export const PI = Math.PI;
export const SQRT1_2 = Math.SQRT1_2;
export const SQRT2 = Math.SQRT2;

export function libm_abs(x: f64): f64 {
  return Math.abs(x);
}

export function libm_acos(x: f64): f64 {
  return Math.acos(x);
}

export function libm_acosh(x: f64): f64 {
  return Math.acosh(x);
}

export function libm_asin(x: f64): f64 {
  return Math.asin(x);
}

export function libm_asinh(x: f64): f64 {
  return Math.asinh(x);
}

export function libm_atan(x: f64): f64 {
  return Math.atan(x);
}

export function libm_atanh(x: f64): f64 {
  return Math.atanh(x);
}

export function libm_atan2(y: f64, x: f64): f64 {
  return Math.atan2(y, x);
}

export function libm_cbrt(x: f64): f64 {
  return Math.cbrt(x);
}

export function libm_ceil(x: f64): f64 {
  return Math.ceil(x);
}

export function libm_clz32(x: f64): f64 {
  return Math.clz32(x);
}

export function libm_cos(x: f64): f64 {
  return Math.cos(x);
}

export function libm_cosh(x: f64): f64 {
  return Math.cosh(x);
}

export function libm_exp(x: f64): f64 {
  return Math.exp(x);
}

export function libm_expm1(x: f64): f64 {
  return Math.expm1(x);
}

export function libm_floor(x: f64): f64 {
  return Math.floor(x);
}

export function libm_fround(x: f64): f64 {
  return Math.fround(x);
}

export function libm_hypot(a: f64, b: f64): f64 {
  return Math.hypot(a, b);
}

export function libm_imul(a: f64, b: f64): f64 {
  return Math.imul(a, b);
}

export function libm_log(x: f64): f64 {
  return Math.log(x);
}

export function libm_log10(x: f64): f64 {
  return Math.log10(x);
}

export function libm_log1p(x: f64): f64 {
  return Math.log1p(x);
}

export function libm_log2(x: f64): f64 {
  return Math.log2(x);
}

export function libm_max(a: f64, b: f64): f64 {
  return Math.max(a, b);
}

export function libm_min(a: f64, b: f64): f64 {
  return Math.min(a, b);
}

export function libm_pow(x: f64, y: f64): f64 {
  return Math.pow(x, y);
}

export function libm_round(x: f64): f64 {
  return Math.round(x);
}

export function libm_sign(x: f64): f64 {
  return Math.sign(x);
}

export function libm_sin(x: f64): f64 {
  return Math.sin(x);
}

export function libm_sinh(x: f64): f64 {
  return Math.sinh(x);
}

export function libm_sqrt(x: f64): f64 {
  return Math.sqrt(x);
}

export function libm_tan(x: f64): f64 {
  return Math.tan(x);
}

export function libm_tanh(x: f64): f64 {
  return Math.tanh(x);
}

export function libm_trunc(x: f64): f64 {
  return Math.trunc(x);
}

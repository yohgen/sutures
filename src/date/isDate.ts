/**
 * Checks whether `value` is coercible to `Date`.
 */
export const isDate = <Type extends string | Date>(value: any): value is Type => {
  if (value instanceof Date) return value.toString() !== 'Invalid Date';
  return typeof value === 'string' && (new Date(value)).toString() !== 'Invalid Date';
};

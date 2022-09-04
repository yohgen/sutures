/**
 * Checks whether `value` is non-empty `string`.
 */
export const isNonEmpty = <Type extends string>(
  value: any,
): value is Type => {
  return typeof value === 'string' && value !== '';
};

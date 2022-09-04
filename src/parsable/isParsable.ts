import { isNonEmpty } from 'nonEmpty/isNonEmpty';

/**
 * Checks whether `value` is coercible to `number`.
 */
export const isParsable = <Type extends string | number>(
  value: any,
): value is Type => {
  return (typeof value === 'number' || isNonEmpty(value)) && !isNaN(value as any);
};

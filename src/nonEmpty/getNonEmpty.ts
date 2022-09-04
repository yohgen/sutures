import { isNonEmpty } from './isNonEmpty';

/**
 * If `value` is non-empty `string`, returns `value`, `defaultValue` otherwise.
 */
export const getNonEmpty = <Type extends string>(
  value: any,
  defaultValue: Type,
): Type => {
  return isNonEmpty<Type>(value) ? value : defaultValue;
};

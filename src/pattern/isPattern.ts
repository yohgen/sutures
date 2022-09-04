import { getPattern } from './getPattern';

/**
 * Checks whether `pattern` is in `values`.
 */
export const isPattern = <Type>(
  pattern: string,
  values: Type[] | Type,
): boolean => {
  return getPattern(pattern, values) !== undefined;
};

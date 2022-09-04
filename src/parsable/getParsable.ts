import { isParsable } from './isParsable';

/**
 * If `value` is coercible to `number`, returns `value`, `defaultValue` otherwise.
 */
export const getParsable = <Type extends number | string>(
  value: any,
  defaultValue: Type,
): Type => {
  const parsableValue = isParsable<Type>(value) ? value : defaultValue;
  if (typeof defaultValue === 'number') return +parsableValue as Type;
  return parsableValue.toString() as Type;
};

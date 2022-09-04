import { isDate } from './isDate';
import { fitToDate, fitToString } from './helpers';

/**
 * If `value` is coercible to `Date`, returns `value`, `defaultValue` otherwise.
 */
export const getDate = <Type extends string | Date>(
  value: any,
  defaultValue: Type,
): Type => {
  const resultValue = isDate<Type>(value) ? value : defaultValue;
  return typeof resultValue === 'string'
    ? fitToString(resultValue) as Type
    : fitToDate(resultValue) as Type;
};

/**
 * If `value` is coercible to `Date`, returns `value`, `defaultValue` otherwise.
 * 
 * Also sets the date to the beginning of the day.
 */
export const getStartDate = <Type extends string | Date>(
  value: any,
  defaultValue: Type,
): Type => {
  const resultValue = isDate<Type>(value) ? value : defaultValue;

  const resultDate = fitToDate(resultValue);
  resultDate.setHours(0, 0, 0, 0);

  return typeof resultValue === 'string'
    ? fitToString(resultDate) as Type
    : resultDate as Type;
};

/**
 * If `value` is coercible to `Date`, returns `value`, `defaultValue` otherwise.
 * 
 * Also sets the date to the end of the day.
 */
export const getEndDate = <Type extends string | Date>(
  value: any,
  defaultValue: Type,
): Type => {
  const resultValue = isDate<Type>(value) ? value : defaultValue;

  const resultDate = fitToDate(resultValue);
  resultDate.setHours(23, 59, 59, 999);

  return typeof resultValue === 'string'
    ? fitToString(resultDate) as Type
    : resultDate as Type;
};

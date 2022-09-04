import { adaptString, isPatternBase } from './helpers';

/**
 * If `pattern` is in `values`, returns matching `value`, `defaultValue`/`undefined` otherwise.
 */
export const getPattern = <Type, DefaultType = undefined>(
  pattern: string,
  values: Type[] | Type,
  defaultValue: DefaultType = undefined as any,
): Type | DefaultType => {
  const aptPattern = adaptString(pattern);

  if (!Array.isArray(values)) {
    return isPatternBase(aptPattern, values) ? values : defaultValue;
  }

  for (let idx = 0; idx < values.length; idx++) {
    const value = values[idx]!;
    if (isPatternBase(aptPattern, value)) return value;
  }

  return defaultValue;
};

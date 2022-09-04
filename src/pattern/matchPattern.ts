import { getPattern } from './getPattern';

/**
 * If `pattern` is in `values`, matches `ok(value)`, `err()`.
 */
export const matchPattern = <Type, OkType, ErrorType>(
  pattern: string,
  values: Type[] | Type,
  { ok, err }: { ok: (value: Type) => OkType, err: () => ErrorType },
): OkType | ErrorType => {
  const value = getPattern(pattern, values);
  return value !== undefined ? ok(value) : err();
};

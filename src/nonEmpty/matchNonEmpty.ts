import { isNonEmpty } from './isNonEmpty';

/**
 * If `value` is non-empty `string`, matches `ok(value)`, `err(value)` otherwise.
 */
export const matchNonEmpty = <Type extends string, OkType, ErrorType>(
  value: any,
  { ok, err }: { ok: (value: Type) => OkType, err: (value: any) => ErrorType },
): OkType | ErrorType => {
  return isNonEmpty<Type>(value) ? ok(value) : err(value);
};

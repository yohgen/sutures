import { isDate } from './isDate';

/**
 * If `value` is coercible to `Date`, matches `ok(value)`, `err(value)` otherwise.
 */
export const matchDate = <OkType, ErrorType>(
  value: any,
  { ok, err }: { ok: (value: string | Date) => OkType, err: (value: any) => ErrorType },
): OkType | ErrorType => {
  const isValueDate = isDate(value);
  return isValueDate ? ok(value) : err(value);
};

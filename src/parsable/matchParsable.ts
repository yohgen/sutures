import { isParsable } from './isParsable';

/**
 * If `value` is coercible to `number`, matches `ok(value)`, `err(value)` otherwise.
 */
export const matchParsable = <O, E>(
  value: any,
  { ok, err }: { ok: (value: string | number) => O, err: (value: any) => E },
): O | E => {
  return isParsable(value) ? ok(value) : err(value);
};

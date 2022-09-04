export const fitToDate = (value: string | Date) => new Date(value);

export const fitToString = (value: string | Date) => value instanceof Date
  ? value.toISOString()
  : value;

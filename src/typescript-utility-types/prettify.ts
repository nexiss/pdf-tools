/**
 * Prettify will flat your complex types making them easier to read and understand
 */
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & object;

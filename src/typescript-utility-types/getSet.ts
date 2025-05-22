/**
 * GetSet type will provide a type object containing one getter and setter for each one of the properties in the generic object provided
 *
 * Example given:
 * type MyGetSet = GetSet<{ a: string; b: number }>
 *
 * {
 *     getA: () => string;
 *     getB(): () => number;
 *     setA: (value: string) => void;
 *     setB: (value: number) => void;
 * }
 */
export type GetSet<T extends object> = {
  [K in Extract<keyof T, string> as `get${Capitalize<K>}`]: () => T[K];
} & {
  [K in Extract<keyof T, string> as `set${Capitalize<K>}`]: (value: T[K]) => void;
};

export type ASDF = GetSet<{ a: string; b: number }>;

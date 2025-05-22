/**
 * Loose autocomplete type will help you defining specific narrowed strings but giving the flexibility to the consumer to also add any other string value without losing the autocomplete support from tsc
 */
// eslint-disable-next-line sonarjs/no-useless-intersection
export type LooseAutocomplete<T extends string> = T | (string & {});

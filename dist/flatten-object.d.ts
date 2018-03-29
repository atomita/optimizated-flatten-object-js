/**
 * Flatten a multi-dimensional object with separators.
 *
 * @typeparam {T extends {}}
 * @param {any} target
 * @param {string} separator
 * @param {T} acc
 * @return Object
 */
export declare function flattenObject<T extends {}>(target: any, separator?: string, acc?: T): T;

/**
 * Flatten a multi-dimensional object with separators.
 *
 * @typeparam {T extends {}}
 * @param {any} target
 * @param {string} separator
 * @param {T} acc
 * @return Object
 */
export function flattenObject<T extends {}>(
  target: any,
  separator: string = '.',
  acc: T = {} as T): T {

  if ('object' !== typeof target) {
    return acc;
  }

  return optimizatedFlattenObjectTailCall([[target]], separator, acc);
}

function optimizatedFlattenObjectTailCall(targets, separator, acc) {
  while (true) {
    if (targets.length < 1) {
      return acc;
    }

    const nexts = [];

    for (const [target, key] of targets) {
      if ('object' === typeof target) {
        const prefix = key ? `${key}${separator}` : '';

        nexts.push.apply(
          nexts,
          Array.isArray(target)
            ? target.map((v, i) => [v, `${prefix}${i}`])
            : Object.entries(target).map(([k, v]) => [v, `${prefix}${k}`])
        );
      } else {
        acc[key] = target;
      }
    }

    targets = nexts;
  }
}

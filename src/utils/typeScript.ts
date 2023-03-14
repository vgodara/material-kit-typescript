
export function getKeys<T>(keysEnum: { [P in keyof Required<T>]: true }) {
    return Object.keys(keysEnum)
}
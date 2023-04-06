export function nonNullOnly<Input, Output>(value: Input | null | undefined, transform: (value: Input, ...other: any[]) => Output, ...other: any[]): Output | undefined {
    if (value != null) {
        return transform(value, other)
    } else return undefined
}

export class NonNull<Input> {
    private readonly value: Input | undefined | null

    constructor(value: Input | undefined | null = null) {
        this.value = value
    }

    transform<Output>(transform: (value: Input, ...other: any[]) => Output, ...other: any[]): Output | undefined {
        if (this.value != null) {
            return transform(this.value, other)
        } else return undefined
    }


}

export const flattenObject = (obj:any, prefix = '') =>
    Object.keys(obj).reduce((acc:any, k) => {
        const pre = prefix.length ? prefix + '.' : '';
        if (typeof obj[k] === 'object') Object.assign(acc, flattenObject(obj[k], pre + k));
        else{
            acc[pre + k] = obj[k];}
        return acc;
    }, {});

export const searchObject=(obj:any,searchTerm='')=>{
    const obj1=flattenObject(obj)
    return Object.keys(obj1).some(key => (obj1[key]?.toString()?.toLowerCase())?.includes(searchTerm.toLowerCase()))
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
export function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}


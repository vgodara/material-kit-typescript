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


export default interface CounterProps {
    initial?: number
    min?: number
    max?: number
    helperText?: string
    setQuantity: (value: number) => void
}
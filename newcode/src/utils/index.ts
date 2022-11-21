export const formatAmount = (value: number, places: number): number => {
    if (!value) return value

    return parseFloat(parseFloat(value.toString()).toFixed(places))
}

export const numberFormat = value => {
    let config = {}
    if(value > 9999) {
        config = {
            notation: 'compact',
            maximumFractionDigits: 1
        }
    }
    return Intl.NumberFormat('en', config).format(value)
}
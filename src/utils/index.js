/**
 * Format People Quantity: followers or subscribers
 * @param {number} n - The number to transform with exponent notation | ex > 11321654
 * @returns {string} | Returns > 11.3K
 */
export const formatQuant = (n) => {
    if (n < 1e6) return n;
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'K';
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + 'M';
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + 'B';
};

/**
 * Format Locale String
 * @param {number} n - The number to transform | ex > 23314
 * @returns {string} | Returns > 23,314
 */
export const localeStr = (n) => {
    return n.toLocaleString('en-US');
}

/**
 * Check if object is empty
 * @param {object} obj - The object to check | ex > {}
 * @returns {boolean} | Returns > true
 */
export const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
}
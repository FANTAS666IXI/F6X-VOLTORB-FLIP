/**
 * Generate Board Values.
 * @param {number} voltorbs - The quantity of voltorbs that must be set.
 * @param {number} count2 - The quantity of numbers 2 that must be set.
 * @param {number} count3 - The quantity of numbers 3 that must be set.
 */
function generateBoard([voltorbs, count2, count3]) {
    /**
     * The List wich will contain all the values.
     * @type {object}.
     */
    const values = []

    // Fill values with the core values.
    values.push(...Array(voltorbs).fill(0))
    values.push(...Array(count2).fill(2))
    values.push(...Array(count3).fill(3))

    // Fill the rest of values with numbers 1.
    while (values.length < 25)
        values.push(1)

    // Shuffle the values.
    values.sort(() => Math.random() - 0.5)

    // Convert values to a matrix 5 x 5.
    const boardValues = []
    for (let i = 0; i < 5; i++)
        boardValues.push(values.slice(i * 5, (i + 1) * 5))

    return boardValues
}

export default generateBoard
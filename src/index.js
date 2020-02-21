module.exports = function toReadable(n) {
    let numbers = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        'hundred': 'hundred'
    }

    let arr = []
    if (n == 0) {
        return 'zero'
    }
    if (n in numbers) {
        return numbers[n]
    } else if (n <= 99) {
        let a = Math.floor(n / 10) * 10;
        let b = n % 10
        return numbers[a] + ' ' + numbers[b]
    } else {
        let a = Math.floor(n / 100);
        let b = n % 100
        let c = n % 10;
        let x = Math.floor((n % 100) / 10) * 10
        if ((b < 20) && (b > 10)) {
            arr.push(numbers[a])
            arr.push(numbers.hundred)
            arr.push(numbers[b]);
        } else {
            arr.push(numbers[a])
            arr.push(numbers.hundred)
            arr.push(numbers[x]);
            arr.push(numbers[c])
        }
    }
    return arr.join(' ').split(' ').filter(el => el != '').join(' ')
}

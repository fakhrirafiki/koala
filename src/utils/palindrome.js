export function isPalindrome(str) {

    function isNumOrAlphabet(charNumber) {
        if (!Number.isInteger(charNumber)) return false
        if (charNumber < 47) return false
        if (charNumber > 58 && charNumber < 65) return false
        if (charNumber > 90 && charNumber < 97) return false
        if (charNumber > 122) return false
        return true
    }

    function strToCharCodeArr(str) {
        let charCodeArr = []

        for (let i = 0; i < str.length; i++) {
            let charCode = str.charCodeAt([i])
            // console.log(charCode)
            if (isNumOrAlphabet(charCode)) {
                charCodeArr.push(charCode)
            }
        }
        return charCodeArr
    }
    if (Number.isInteger(str)) {
        str = str.toString()
    }

    str = str.toLowerCase()
    console.log(str)

    let charCodeArray = strToCharCodeArr(str)

    console.log(charCodeArray)

    let len = charCodeArray.length;

    let mid = Math.floor(len / 2);
    // console.log(mid)
    for (let i = 0; i < mid; i++) {
        if (charCodeArray[i] !== charCodeArray[len - 1 - i]) {
            console.log('nope')
            return false;
        }
    }
    console.log('yesh')
    return true;
}













// console.log('line 62')
// let x = '!@## iki iki???'
// isPalindrome(x)
// console.log('line 69')
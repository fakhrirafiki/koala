export function moneytoFranctions(uangMasuk) {
    const money = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100]
    const fractions = []
    let curentMoney = uangMasuk

    money.forEach(pecahan => {
        const lembarUang = Math.floor(curentMoney / pecahan)
        fractions.push(lembarUang)
        const sisa = curentMoney % pecahan

        curentMoney = sisa
        // console.log(pecahan, curentMoney)
    });

    fractions.push(curentMoney)

    // console.log(fractions)

    return fractions
}
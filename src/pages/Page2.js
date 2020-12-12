import React, { useState } from 'react'
import InputMoney from '../component/InputMoney';
import MoneyItem from '../component/MoneyItem'
import { moneytoFranctions } from '../utils/moneytoFranctions'


export default function Page2() {
    const [fractions, setFractions] = useState([])

    const handleInput = (num) => {
        const result = moneytoFranctions(num)
        setFractions(result)
    }

    return (
        <>
            <div className="page2">
                <h1>Count Your <span>Money</span></h1>
                <InputMoney handleInput={handleInput} />
            </div>
            <div className="moneyItem">
                <MoneyItem name="paper" value={fractions[0]}>100.000</MoneyItem>
                <MoneyItem name="paper" value={fractions[1]}>50.000</MoneyItem>
                <MoneyItem name="paper" value={fractions[2]}>20.000</MoneyItem>
                <MoneyItem name="paper" value={fractions[3]}>10.000</MoneyItem>
                <MoneyItem name="paper" value={fractions[4]}>5.000</MoneyItem>
                <MoneyItem name="paper" value={fractions[5]}>2.000</MoneyItem>
                <MoneyItem name="paper" value={fractions[6]}>1.000</MoneyItem>
                <MoneyItem name="coin" value={fractions[7]}>500</MoneyItem>
                <MoneyItem name="coin" value={fractions[8]}>200</MoneyItem>
                <MoneyItem name="coin" value={fractions[9]}>100</MoneyItem>
                <MoneyItem name="rest" value={fractions[10]}>100</MoneyItem>
            </div>
        </>
    )
}
import React from 'react'
import InputMoney from '../component/InputMoney';
import ButtonRouting from '../component/ButtonRouting'
import MoneyItem from '../component/MoneyItem'

export default function page2() {
    return (
        <>
            <div className="page2">
                <h1>Count Your <span>Money</span></h1>
                <InputMoney />
            </div>
            <div className="moneyItem">
                <MoneyItem name="paper">100.000</MoneyItem>
                <MoneyItem name="paper">50.000</MoneyItem>
                <MoneyItem name="paper">20.000</MoneyItem>
                <MoneyItem name="paper">10.000</MoneyItem>
                <MoneyItem name="paper">5.000</MoneyItem>
                <MoneyItem name="paper">2.000</MoneyItem>
                <MoneyItem name="paper">1.000</MoneyItem>
                <MoneyItem name="coin">500</MoneyItem>
                <MoneyItem name="coin">200</MoneyItem>
                <MoneyItem name="coin">100</MoneyItem>
                <MoneyItem name="rest">100</MoneyItem>
            </div>
            <ButtonRouting />
            <div className="footer"></div>
        </>
    )
}
import React from 'react'

export default function MoneyItem(props) {
    return (
        <>
            <div className="moneyItem__container">
                <div className={`moneyItem__${props.name}`}>
                    Rp{props.name === 'rest' ? props.value : props.children}
                </div>
                <div className="moneyItem__countInfo">
                    {props.name !== 'rest' ? `X ${props.value}` : 'money rest'}
                </div>
            </div>
        </>
    )
}

MoneyItem.defaultProps = {
    name: 'paper'
};
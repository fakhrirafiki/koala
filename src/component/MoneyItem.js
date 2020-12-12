import React from 'react'

export default function MoneyItem(props) {
    return (
        <>
            <div className="moneyItem__container">
                <div className={`moneyItem__${props.name}`}>Rp{props.children}</div>
                <div className="moneyItem__countInfo">X 5</div>
            </div>
        </>
    )
}

MoneyItem.defaultProps = {
    name: 'paper'
};
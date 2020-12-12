import React from 'react'
import TextArea from '../component/TextArea';
import ButtonRouting from '../component/ButtonRouting'

export default function page1() {
    return (
        <>
            <div className="page1">
                <h1>PALINDROME <span>TEXT</span></h1>
                <TextArea />
                <p className="page1__emoji">🥳 🥳 🤔</p>
                <p className="page1__info">You found a Palindrome!</p>
            </div>
            <ButtonRouting />
            <div className="footer"></div>
        </>
    )
}
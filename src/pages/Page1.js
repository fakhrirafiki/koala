// import React, { useState } from "react"
import React, { useState } from "react"
import TextArea from '../component/TextArea';
import { isPalindrome } from '../utils/palindrome'

export default function Page1(props) {
    const [palindrome, setPalindrome] = useState(true)
    const [text, setText] = useState('')

    const handleInput = (str) => {
        setText(str)
        const result = (isPalindrome(str))
        setPalindrome(result)
    }

    return (
        <>
            <div className="page1">
                <h1>PALINDROME <span>TEXT</span></h1>
                <TextArea handleInput={handleInput} />
                <p className="page1__emoji" onClick={() => setPalindrome(!palindrome)}>
                    {palindrome ? '🥳' : '🤔'}
                </p>
                <p className="page1__info">
                    {palindrome ? 'You found a Palindrome!' : `it is not a palindrome`}
                </p>
            </div>
        </>
    )
}

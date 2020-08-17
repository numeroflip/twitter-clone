import React, { useState } from 'react';

export default function NewTweet (props) {

    const [text, setText] = useState('')

    const handleChange = (e) => {
        const text = e.target.value 
        setText(text)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // TODO add tweet to store

        console.log('New Tweet: ', text)
        setText('')
    }

    const tweetLeft = 280 - text.length

    return(
        <div>
            <h3>Compose New Tweets</h3>
            <form onSubmit={handleSubmit}>
                <textarea   
                    placeholder="What's happening?"
                    value={text}
                    onChange={handleChange}
                    maxLength={280}
                />
                {tweetLeft <= 100 && (
                    <div>
                        {tweetLeft}
                    </div>
                )}
                <button
                    type='submit'
                    disabled={text === ''}
                >Submit
                </button>

            </form>
        </div>
    )
}
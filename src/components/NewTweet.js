import React, { useState } from 'react';
import { connect } from 'react-redux'
import { handleAddTweet } from '../actions/tweets'


function NewTweet ({dispatch, id}) {

    const [text, setText] = useState('')

    const handleChange = (e) => {
        const text = e.target.value 
        setText(text)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(handleAddTweet(text, id))

        console.log('New Tweet: ', text)
        setText('')
    }

    const tweetLeft = 280 - text.length

    // TODO : Redirect to the home view when submitted

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

export default connect()(NewTweet)
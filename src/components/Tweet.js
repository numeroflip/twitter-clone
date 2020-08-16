import React from 'react'
import { connect } from 'react-redux'
import { formatTweet } from '../utils/helpers'
import styled from 'styled-components'

const TweetWrapper = styled.article`
    width: 80%;
    margin: 1rem auto;
    height: 2rem;
    border: 1px solid black;

`

const Tweet = ({id, tweet}) => {

    if (tweet === null) {
        return <p>This tweet doesn't exist</p>
    } else {
        console.log(tweet)
        return (
            <TweetWrapper>
                {tweet.name}
            </TweetWrapper>
        )

    }

}

const mapStateToProps = ({authedUser, users, tweets}, { id }) => {
    const tweet = tweets[id]
    const parentTweet =  tweet ? tweets.replyingTo : null

    return {
        authedUser,
        tweet: tweet 
            ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
            : null
    }
}

export default connect(mapStateToProps)(Tweet)
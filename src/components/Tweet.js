import React from 'react'
import { connect } from 'react-redux'
import { formatTweet, formatDate } from '../utils/helpers'
import styled from 'styled-components'
import { TiArrowBackOutline } from 'react-icons/ti'
import { TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti'
import { handleToggleTweet } from '../actions/tweets'


const TweetWrapper = styled.article`
    width: 80%;
    margin: 1rem auto;
    border: 1px solid black;
    display: flex;
    align-items: center;
    padding: 1rem;

`

const Avatar = styled.img`
    border-radius: 800px;
    overflow: hidden;
    height: 4rem;
    margin-right: 1rem;
`

const TweetInfo = styled.div`


`

const TweetIcons = styled.div`

`


const Tweet = (props) => {
    const { tweet } = props

    const handleLike = (e) => {

        e.preventDefault()

       const { dispatch, tweet, authedUser } = props

       dispatch(handleToggleTweet({
           id: tweet.id,
           hasLiked: tweet.hasLiked,
           authedUser
       }) )
    }

    const toParent = (e, id) => {
        e.preventDefault()
        //TODO: redirect to parent tweet.
    }

    const {
        name, avatar, timestamp, text, hasLiked, likes, replies, parent
    } = tweet

    if (tweet === null) {
        return <p>This tweet doesn't exist</p>
    } else {
        return (
            <TweetWrapper>
                <Avatar
                    src={avatar}
                    alt={`Avatar of ${name}`}
                />
                <TweetInfo> 
                    <span>{name}</span>
                    <div>{formatDate(timestamp)}</div>
                    {parent && (
                        <button onClick={(e) => this.toParent(e, parent)}>
                            Replying to @{parent.author}
                        </button>
                    )}
                    <p>{text}</p>
                    <TweetIcons>
                        <TiArrowBackOutline />
                        <span>{replies !== 0 && replies} </span>
                        <button onClick={(e) => handleLike(e)}>
                            {hasLiked === true
                                ? <TiHeartFullOutline color='#e0245e' />
                                : <TiHeartOutline /> 
                            }
                            <span>{likes !== 0 && likes}</span>
                        </button>
                    </TweetIcons>
                </TweetInfo>
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
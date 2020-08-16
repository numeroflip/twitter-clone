import React from 'react'
import { connect } from 'react-redux'
import { _getTweets } from '../utils/_DATA'
import Tweet from './Tweet'
import styled from 'styled-components'

const TweetWrapper = styled.li`
    list-style: none;    
`

const Dashboard = ({tweetIds}) => {

    return (
        <div>
            <h3> Your Timeline</h3>
            <ul>
                {tweetIds.map(id => (
                    <TweetWrapper key={id}>
                        <Tweet id={id} />
                    </TweetWrapper>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = ({tweets}) => {
    console.log( tweets )
    return (
        {
            tweetIds: Object.keys(tweets)
                .sort((a, b) => tweets[b]
                .timestamp - tweets[a].timestamp)
        }

    )
}

export default connect(mapStateToProps)(Dashboard)
import React from 'react'
import { connect } from 'react-redux'
import { _getTweets } from '../utils/_DATA'

const Dashboard = ({tweetIds}) => {

    return (
        <div>
            <h3> Your Timeline</h3>
            <ul>
                {tweetIds.map(id => (
                    <li key={id}>
                        <div>Tweet ID: {id}</div>
                    </li>
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
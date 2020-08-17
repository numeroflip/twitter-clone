import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receiveTweets } from './tweets'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {

    return async (dispatch) => {
        dispatch(showLoading())
    
        let data = await getInitialData()
        let { users, tweets } = data;
        dispatch(receiveUsers(users));
        dispatch(receiveTweets(tweets));
        dispatch(setAuthedUser(AUTHED_ID));
        dispatch(hideLoading())

    }
}
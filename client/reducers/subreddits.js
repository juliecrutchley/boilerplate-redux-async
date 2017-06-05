import {RECEIVE_POSTS} from '../actions'

function subreddits (state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts

// 4. because the receive posts action has been sent out, this reducer then returns action.posts..??
    default:
      return state
  }
}

export default subreddits

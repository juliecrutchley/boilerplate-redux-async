import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(function (post) {
      console.log(post.data.title)
      console.log(post.data.created)
      return post.data
    })
  }
}

    // posts: posts.map(post => post.data)

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function fetchPosts (subreddit) {
  return (dispatch) => {
    dispatch(requestPosts())
    request
      .get(`/api/reddit/subreddit/${subreddit}`)
      .end((err, res) => {
        if (err) {
          dispatch(showError(err.message))
          return
        }
        dispatch(receivePosts(res.body))
        // 3. this function dispatches the action requestPosts which the waiting reducer picks up and changes waiting to true
        // it then uses superagent to call the api
        // if there is an error, it shows error
        // otherwise it dispatches the action receivePosts which takes the response from the api and does whatever we want with it - then go to subreddits reducer
      })
  }
}

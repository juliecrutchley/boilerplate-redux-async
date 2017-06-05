import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class LoadSubreddit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      subreddit: ''
    }
    this.fieldChanged = this.fieldChanged.bind(this)
  }

  fieldChanged (e) {
    console.log(this.state)
    this.setState({
      subreddit: e.target.value
    })
  }

  render () {
    return (
      <div className='LoadSubreddit'>
        <input placeholder='enter subreddit here' name='subreddit' onChange={e => this.fieldChanged(e)} value={this.state.subreddit} />

        <button className='button' onClick={() => this.props.dispatch(fetchPosts(this.state.subreddit))}>Fetch Posts</button>
      </div>
    )
  }
}

export default connect()(LoadSubreddit)

// let LoadSubreddit = ({dispatch}) => (
//   <div>
//     <input type='text' placeholder='enter subreddit here' name='subreddit' onchange={e => this.fieldChanged(e)} value={this.state.subreddit} />
//
//     <button className='button' onClick={() => dispatch(fetchPosts('newzealand'))}>Fetch Posts</button>
//   </div>
// )

    // <input placeholder='enter subreddit here' name='name' onChange={e => this.fieldChanged(e)} value={this.state.name} />

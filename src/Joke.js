import React, { Component } from "react";
import "./Joke.css";


class Joke extends Component {
  constructor(props){
    super(props)
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
    this.toggleLock = this.toggleLock.bind(this);
  
  }
  upVote = () => {
    console.log('wemade it in upvote')
    console.log(this.props.id)
    console.log(this.props.votes)
    this.props.vote(this.props.id, + 1);
  };
  // const downVote = () => vote(id, -1);
  downVote = () => {
    this.props.vote(this.props.id, - 1);
  };

  toggleLock() {
    this.props.toggleLock(this.props.id);
  }
  render() {
    return (
      <div className={`Joke ${this.props.locked ? "Joke-locked" : ""}`}>
        <div className="Joke-votearea">
          <button onClick={this.upVote}>
            <i className="fas fa-thumbs-up" />
          </button>

          <button onClick={this.downVote}>
            <i className="fas fa-thumbs-down" />
          </button>

          {this.props.votes}
        </div>

        <div className="Joke-text">{this.props.text}</div>
      </div>
    );
  }

}

export default Joke;

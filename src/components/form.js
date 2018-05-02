import React from 'react';

class Form extends React.Component{
  render(){
    return(
      <form onSubmit={this.props.getLyrics}>
        <input type="text" name="artist" placeholder="Artist...."/>
        <input type="text" name="song" placeholder="Song...."/>
        <button>Get Lryics!!</button>
      </form>
    );
  }
};

export default Form;

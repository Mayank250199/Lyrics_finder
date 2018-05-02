import React from 'react';

class Lyrics extends React.Component{
  render(){
    return(

      <div className="lyrics_info">

        {this.props.lyrics && <p  className="lyrics__key">lyrics:<br />
        <span className="lyrics__value">{this.props.lyrics}</span>
      </p>
        }
        {this.props.error && <h1  className="lyrics__key">
          <span className="lyrics__value">{this.props.error}</span>
        </h1>
      }
      </div>
    );
  }
};

export default Lyrics;

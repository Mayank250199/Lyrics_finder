import React from 'react';
import Lyrics from './components/lyrics';
import Form from './components/form';
import Titles from './components/titles';


class App extends React.Component {
  state={
    lyrics:undefined,
    error: undefined
  }
  getLyrics = async (e) => {
    e.preventDefault();
    const artist = e.target.elements.artist.value;
    const song = e.target.elements.song.value;
    const api_call= await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
if(artist && song){
    const data = await api_call.json();
    console.log(data);
    this.setState({
      lyrics:data.lyrics,
      error:data.error
    });
  }else{
    this.setState({
      lyrics:undefined,
      error:"Fill Above details!! "
    });

  }
}
  render(){
    return(
      <div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
                <div className="col-sm-5 title-container">

                </div>
                <div className="col-sm-7 form-container">
  <Titles />
                  <Form getLyrics={this.getLyrics}/>

                    <Lyrics
                      lyrics={this.state.lyrics}
                      error={this.state.error}
                      />
                    </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
};

export default App;

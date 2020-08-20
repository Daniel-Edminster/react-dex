import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './scanlines.css';
import Mew from './img/mew.png';

import axios from 'axios';
import Spritebox from './components/SpriteBox/Spritebox';

class App extends Component {
  constructor(){
    super();
    this.state = {
        dex: [],
        dexFetched: false,
    };
  }

  componentDidMount(){
      this.fetchDex();
  }

  fetchDex = () => {
      let baseURL = 'https://pokeapi.co/api/v2/pokemon/';

      for(let i=1;i<252;i++)
      {
        let url = baseURL + i;
        axios({
            method: 'get',
            url: url,
        })
        .then(res => {
            let dexArray = this.state.dex;
            dexArray.push(res.data);
            this.setState({ dex: dexArray }, this.sortDex);

            // if(i === 251) {
            //   dexArray.sort((e1, e2)=> {
            //       return parseInt(e1.id) - parseInt(e2.id);
            //   });
            //   this.setState({ dex: dexArray, dexFetched: true });
            // }

          }
        ).then(res  => console.log(this.state.dex));
      }

  }

  sortDex = () => {
      if(this.state.dex.length === 251) {
          let dexArray = this.state.dex;
          dexArray.sort((e1, e2)=> {
            return parseInt(e1.id) - parseInt(e2.id);
          });
          this.setState({ dex: dexArray, dexFetched: true });
      }
  }


  setDisplayCallback = event => {
      console.log(event.currentTarget);
      let id = event.currentTarget.getAttribute("data-dexnum");
      this.setState({activePokemon: parseInt(id) });
  }
  render() {
    return (
      <div className="App">
          This is where my dex goes.
          <div className="DexContainer">

            {this.state.dexFetched ? 
              <>
              <div className="DexLeftHandle"></div>
              <div className="DexLeftScreen scanlines">
                  <div className="DexLeftScreen__SpriteGrid">
                  
                  {this.state.dex.map((pokemon, i) => {

                  return <Spritebox click={this.setDisplayCallback} key={i} pokemon={pokemon} />

                  })
                }


                  </div>
               </div>
              <div className="DexRightScreen"></div>
              <div className="DexRightHandle"></div>
              </>
              : 
              'not fetched'
            
            }

          </div>

              <div className="MewFooter"><img height="75" src={Mew} /></div>
      </div>
    );
  }
}

export default App;

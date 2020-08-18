import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
        dex: [],
        dexFetched: false
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
            this.setState({ dex: dexArray });

            if(i === 251) {
              dexArray.sort((e1, e2)=> {
                  if (e1.id < e2.id) return -1;
                  else if (e1.id > e2.id) return 1;
                  else return 0;
              });
              this.setState({ dex: dexArray, dexFetched: true });
            }
          }
        ).then(res  => console.log(this.state.dex));
      }

  }

  render() {
    return (
      <div className="App">
          This is where my dex goes.
          <div className="DexContainer">

            {this.state.dexFetched ? 
              <>
              <div className="DexLeftHandle"></div>
              <div className="DexLeftScreen">
                  <div className="DexLeftScreen__SpriteGrid">
                  
                  {this.state.dex.map((pokemon, i) => {
                    console.log(pokemon, i); 
                    return <div className="DexLeftScreen__SpriteGrid__Sprite"><img key={i} className="DexLeftScreen__SpriteGrid__img" src={pokemon.sprites.front_default} />  </div>
                  }) }
                  </div>
              </div>
              </>
              : 
              'not fetched'
            
            }

          </div>

      </div>
    );
  }
}

export default App;

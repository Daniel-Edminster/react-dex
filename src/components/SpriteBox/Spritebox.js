import React, { Component } from 'react';

class Spritebox extends Component {
    render() {
        return (
            <div className="SpriteBox DexLeftScreen__SpriteGrid__Sprite" data-dexnum={this.props.pokemon.id}>
                <img className="DexLeftScreen__SpriteGrid__img" src={this.props.pokemon.sprites.front_default} />
                
            </div>
        );
    }
}

export default Spritebox;
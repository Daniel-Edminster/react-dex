import React, { Component } from 'react';

const Spritebox = (props) => {
    
        return (
            <div className="SpriteBox DexLeftScreen__SpriteGrid__Sprite" data-dexnum={props.pokemon.id} onClick={props.click} data-dexnum={props.pokemon.id}>
                <img className="DexLeftScreen__SpriteGrid__img" src={props.pokemon.sprites.front_default} />
                
            </div>
        );

}

export default Spritebox;
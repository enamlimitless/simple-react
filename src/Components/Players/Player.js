import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Player.css'

const Player = (props) => {
   const  {name, img, salary} = props.player;
    const handleAddPlayer = props.handleAddPlayer;

    return (
        // used Bootstrap Classes and Fontawesome For Bonus Marks
        <div className="card mt-5 d-flex justify-content-center">
            <div className="player-img">
                <img class="card-img-top" src={img} alt=""/>
            </div>
            <div className="player-data card-body">
                <h1 className="card-title">{name}</h1>
                <h4 className="my-3">$ {salary} Million USD</h4>
                <button onClick={() => handleAddPlayer(props.player)} className="btn btn-success"><FontAwesomeIcon icon={ faUser} />  Add To Player</button>
            </div>        
        </div>        
    );
};

export default Player;
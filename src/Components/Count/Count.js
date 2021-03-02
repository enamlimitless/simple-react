import React from 'react';
import './Count.css';

const Count = (props) => {
    console.log(props)
   const count = props.count;
   let total = 0;
   for (let i = 0; i < count.length; i++) {
       const salary = count[i];
       total = total + count.salary;
   }
    return (
        <div class="countStyle">
            <h1 className="bg-light">Player Added: {count.length}</h1>
            <h5>Total Budget: {total}</h5>
            <ul className="player-names">
                <h5 className="mr-3">Player name: {props.count}</h5>
            </ul>
        </div>
    );
};

export default Count;
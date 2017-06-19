import React from 'react';

export default function Alt(props){
    return(
        <div>
            <h2>This is some other page.</h2>
            <button onClick={props.e}>Go home</button>
        </div>
    );
}

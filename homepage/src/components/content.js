import React from 'react';

export default function Content(props) {

        return(

            <div id="outerContent">
							{props.children}
                {/* Here comes content */}
            </div>

        );
}

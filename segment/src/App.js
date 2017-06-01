import React from 'react';
import { Motion, spring } from 'react-motion';
import './index.css'

/* new function that determines settings for spring() */
const animate = (val) => spring(val, {
    stiffness: 53,
    damping: 27
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            /* Demo state initialization */
            boxes: [
                {
                    top: 12,
                    left: 70,
                    width: 20,
                    height: 10
                },
                {
                    top: 12,
                    left: 6,
                    width: 30,
                    height: 30
                },
                {
                    top: 75,
                    left: 15,
                    width: 40,
                    height: 20
                },
                {
                    top: 30,
                    left: 40,
                    width: 40,
                    height: 40
                },
            ]
        };
    }

    render() {
        return(
            <div className="segmenter">
                <div className="segmenter-background"></div>
                <div className="segmenter-pieces" style={{
                    perspective: '400px' // Sets virtual view distance
                }}>

                { this.state.boxes.map(({ top, left, width, height }, key) => // Used like foreach-loop, goes through each item in
                                                                              // boxes and does the following for them.
                    /* defaultStyle determines starting point for animation, style sets the desired animation and endpoint */
                    <Motion key={key} defaultStyle={{ z: 0 }} style={{ z: animate(20) }}>
                        {({ z }) => // Motion needs to be inserted with a function
                            <div className="segmenter-wrap" style={{
                                transform: `translateZ(${z}px)` // Notice how variable z is used
                            }}>
                            {/* Different animation defined for shadows */}
                                <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: animate(1) }}>
                                    {({ opacity }) =>
                                        <div className="segmenter-shadow" style={{ // takes the variables from array boxes, see above
                                            top: `${top}%`,
                                            left: `${left}%`,
                                            width: `${width}%`,
                                            height: `${height}%`,
                                            opacity
                                        }}></div>
                                    }
                                </Motion>
                                <div className="segmenter-box" style={{
                                    clipPath: 'polygon(70% 12%, 90% 12%, 90% 22%, 70% 22%)' // used to clip a section of background image
                                }}></div>
                            </div>
                        }
                    </Motion>
                )}
                </div>
                <div className="segmenter-body">
                    <Motion
                        defaultStyle={{
                            letterSpacing: 31,
                            opacity: 0
                        }}
                        style={{
                            letterSpacing: animate(12),
                            opacity: animate(1)
                        }}>
                        {({ letterSpacing, opacity }) =>
                            <h1 style={{
                                letterSpacing,
                                opacity
                            }}>SEGMENT EFFECT!</h1>
                        }
                    </Motion>
                </div>
            </div>
        );
    }
}

export default App;

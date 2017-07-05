import React from 'react';
import { Motion, spring, presets } from 'react-motion';

export default function Home(props) {

    return(
				<Motion defaultStyle={{x: -500, y: 0}} style={{x: spring(0), y: spring(1), config: presets.gentle}}>
				{({x, y}) =>

					<div id="homeView" style={{transform: `translate3d(${x}px, 0px ,0px)`, opacity: y}}>
						<h2>This is home!</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget tortor non elit bibendum vulputate nec non leo. Suspendisse elementum quis ex eu viverra. Donec cursus felis ac ligula congue vehicula. Sed vulputate porta risus a mattis. Quisque nisi velit, tincidunt ut tortor ut, dictum dictum elit. Quisque quis orci nibh. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nulla quam, dapibus eu massa non, volutpat malesuada odio. Suspendisse interdum pharetra elementum. Vestibulum tincidunt, orci vitae aliquet fringilla, ipsum nisi viverra lorem, nec interdum ex dolor in nulla. Aenean at varius sapien, euismod ornare metus.
						ncidunt sem sed.</p>
					</div>
				}
				</Motion>
    );
}

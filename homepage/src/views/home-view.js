import React from 'react';
import { Motion, spring } from 'react-motion';

export default function Home(props) {

    

    return(
			<Motion defaultStyle={{x: -500, y: 0}} style={{x: spring(0), y: spring(1)}}>
			{({x, y}) =>

        <div className="content" style={{transform: `translate3d(${x}px, 0px ,0px)`, opacity: y}}>
        	<h2>This is home!</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget tortor non elit bibendum vulputate nec non leo. Suspendisse elementum quis ex eu viverra. Donec cursus felis ac ligula congue vehicula. Sed vulputate porta risus a mattis. Quisque nisi velit, tincidunt ut tortor ut, dictum dictum elit. Quisque quis orci nibh. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nulla quam, dapibus eu massa non, volutpat malesuada odio. Suspendisse interdum pharetra elementum. Vestibulum tincidunt, orci vitae aliquet fringilla, ipsum nisi viverra lorem, nec interdum ex dolor in nulla. Aenean at varius sapien, euismod ornare metus.

Sed eget ligula nunc. Duis consequat mauris orci, vel scelerisque mi tincidunt at. Ut vitae ex leo. Aliquam eu urna pharetra, pulvinar sem vel, facilisis elit. Pellentesque suscipit nunc eget ornare imperdiet. Nunc et tellus in ante rhoncus sagittis. Cras nec nulla et arcu pellentesque faucibus. Suspendisse euismod ligula nulla, ac laoreet magna hendrerit semper. Donec justo lectus, convallis id sem venenatis, varius feugiat mi. Nulla maximus eros sed vehicula pretium.

Mauris porttitor ligula eu augue commodo, sed lobortis arcu interdum. Praesent tempor tempor metus, eget eleifend orci pharetra vel. Aliquam ac urna commodo, aliquet eros ut, cursus diam. Vivamus a pharetra lorem. Suspendisse lacus nulla, tincidunt sit amet aliquam eget, cursus et ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi et tortor quis nisl eleifend elementum. Vestibulum a eleifend lacus, quis lobortis diam. Proin ut accumsan augue. Nulla id maximus diam, ut bibendum erat. Nulla facilisi. Integer ultrices vestibulum feugiat. Nullam ultricies lobortis diam dictum varius. Donec aliquam diam vel velit rhoncus sodales. Etiam ut vestibulum ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Aliquam in sapien velit. Maecenas sed iaculis orci. Morbi ac mi pharetra, malesuada libero ut, molestie dui. Duis et cursus urna. Pellentesque mollis nibh ut nisi ullamcorper pretium. Cras et enim dui. Suspendisse egestas magna tempus viverra commodo. Etiam consectetur laoreet purus, nec convallis turpis imperdiet in. Suspendisse porta imperdiet lorem, ut euismod neque ullamcorper ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec vehicula gravida felis, placerat facilisis ante pharetra ac. Quisque vitae sodales dui, a eleifend ante. In dignissim eros id tincidunt vestibulum. Sed dictum convallis massa id suscipit.

Duis sit amet sapien enim. In consequat, massa nec dignissim aliquet, diam velit aliquam nisi, quis egestas elit mi eget augue. Quisque dolor nunc, vehicula at ligula sed, gravida aliquam lectus. Fusce purus magna, hendrerit eget massa nec, pellentesque sagittis urna. Etiam enim quam, facilisis ac est pharetra, ultricies commodo mi. Donec aliquam nisl ex, sed commodo eros interdum id. In ornare tellus sollicitudin mattis convallis. Vivamus tincidunt sapien ipsum, nec vehicula elit tincidunt id. Cras id quam metus. Integer eleifend euismod eros ac fringilla. Curabitur tincidunt nisi eget leo euismod, nec efficitur nibh maximus. Integer vitae faucibus lacus. Curabitur vel mi augue. Sed quis nibh consectetur, porta mauris id, hendrerit ligula. Curabitur tincidunt sem sed.</p>
        </div>
			}
			</Motion>
    );
}

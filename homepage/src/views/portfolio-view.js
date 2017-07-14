import React from 'react';
import { Motion, spring, presets } from 'react-motion';

export default function Portfolio(props){
	return(
		<Motion defaultStyle={{x: -500, y: 0}} style={{x: spring(0, {stiffness: 39, damping: 9}), y: spring(0.9), config: presets.gentle}}>
		{({x, y}) =>
			<div className="view" style={{transform: `translate3d(${x}px, 0px, 0px)`, opacity: y}}>
				<h2 className="center">Linkit</h2>
				<a href="https://docs.google.com/document/d/1wQ9QszVk0JQK4iGqov96_qgQ6GOQKMZ_jRwGC8QCwAQ/edit?usp=sharing" target="_blank" className="pfLink">Curriculum Vitae</a>
				<h2>Työhistoria</h2>
				<p>Junior Front-End Developer, Wimma Lab (JAMK), 5/2017 - 7/2017</p>
				<p>Levyseppä, Jokilaakson Asennusyhtymä Ky, 10/2014 - 10/2016</p>
				<p>Lukkoseppä, Flexim Security Oy, 1/2014 - 10/2014</p>
				<p>Lomittaja, UPM-Kymmene Oyj, 5/2011 - 9/2011</p>
				<p className="smallText">Ja muita pienempiä tehtäviä, kts. CV</p>
				<br />
				<h2>Koulutukset</h2>
				<p>Ohjelmistoinsinööri, Jyväskylän Ammattikorkeakoulu, aloitettu 2016</p>
				<p>Kunnossapitoasentaja, Jyväskylän Aikuisopisto, valmistunut 2014</p>
				<p><strike>Automaatioinsinööri, Jyväskylän Ammattikorkeakoulu</strike>, keskeytynyt 1/2013</p>
				<p>Ylioppilas, Cygnaeus-lukio, Musiikkilinja, valmistunut 2007</p>
				<br />
				<h2>Osaamiset</h2>
				<p>Ohjelmointikielet: C++, HTML5, CSS3, C#, Java, Python, Javascript, PHP</p>
				<p>Kielet: Suomi, Englanti</p>
				<p>Ohjelmat: Office365, AutoCad, Blender, Unity, Visual Studio</p>
				<p>Muut: MIG/MAG-hitsaus, Puikkohitsaus</p>
				<br />
				<h2>Valtuutukset</h2>
				<p>Työturvallisuuskortti, 4/2020</p>
				<p>Tulityökortti, 4/2017</p>
				<p>Turvasuojaajakortti, 1/2019</p>
				<p>Sähkötyöturvallisuuskortti, vanhentunut 2/2015</p>
				<p>Järjestyksenvalvojakortti, 5/2020</p>
				<p>Ajokortti, B-luokka, 8/2058</p>
				<p>Nostosuojaintarkastajakortti, 6/2018</p>
			</div>
		}</Motion>
	);
}


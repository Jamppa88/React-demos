import React from 'react';
import { getAge } from '../functions/functions.js';
import { Motion, spring, presets } from 'react-motion';

export default function Home(props) {

	return(
		<Motion defaultStyle={{x: -500, y: 0}} style={{x: spring(0), y: spring(0.9), config: presets.gentle}}>
		{({x, y}) =>

			<div id="homeView" style={{transform: `translate3d(${x}px, 0px ,0px)`, opacity: y}}>
				<h2>Tervetuloa!</h2>
				<p>Olen {getAge()}-vuotias ohjelmistotekniikan opiskelija, ja aloitin opinnot 2016 Jyväskylän Ammattikorkeakoulussa. Olen jo aikasemminkin opiskellut samassa oppilaitoksessa, automaatiotekniikkaa vuosina 2008-2013.</p>
				<br />
				<h2>Kuka olen</h2>
				<p>Olen yhden lapsen isä, ja asun perheeni kanssa Jyväskylässä. Olen luonteeltani rehti mies jolla on todella hurtti huumorintaju. Pienestä pitäen olen ollut tekniikan kanssa tekemisissä, sekä käsin että koneellísesti.</p>
				<p>Olen kokenut julkinen puhuja, joka saa kaikenkokoisista yleisöistä otteen. Osaan tehdä töitä sekä aivoillani että käsillä, joka heijastuu enimmäkseen ohjelmointiin ja erinäisiin kädentaitoihin. Ohjelmoinnissa käytössä on pääasiallisesti Javascript, PHP, C#, C++ sekä monia muita.</p>
				<br />
				<h2>Harrastukset</h2>
				<p>Harrastuksiini kuuluu kitaran soitto, laulanta, sulkapallo, frisbeegolf, videopelit, D&D ja pulkkamäki.</p>

				<h3>Musiikki</h3>
				<p>Aikoinaan aloitin musiikin parissa laulamisella, joskus 7-9 vuoden iässä. Sen ei ollut silloin vielä kovin suuri ja tärkeä asia itselleni, mutta yläasteen puolella löysin innon opetella kitaran soittoa. Perustettiin bändejä, vedettiin pikkukeikkoja ja käyttäydyttiin huonosti. Lukiota valitseassani päätin kokeilla hakea musiikkilukioon, ja sattumalta sain sinne opiskelupaikan.</p>
				<p>Nykyisellään musisoin omaksi ja lapseni iloksi. Suurin saavutus mitä tästä sain, oli se että vahingossa löysin itseni Sonisphere 2009 -päälavalta laulamassa 42 000 ihmiselle.</p>

				<h3>Liikunta</h3>
				<p>Kaikenlaista liikuntaa on elämän aikana tullut kokeiltua, ja niistä on sulkapallo ja frisbeegolf jäänyt elämään. Sulkapalloa pelaan kun kiireiltäni kerkeän. Sulkapalloa on tullut n. 10 vuotta pelattua, harrastemielessä. Aikoinaan myös harrastanut monta vuotta kamppailulajeja, jotka ovat nykyisellään jääneet nuoruusmuistoiksi.</p>
				<p>Frisbeegolf taas puolestaan on nuorempi tuttavuus, innostuin lajista 2012. Ajatus pelissä on täysin sama kuin perinteisessä golffissa, paitsi pallo ja mailat on korvattu frisbeekiekoilla. Kuulun Jyväskylän Liitokiekkoilijoihin, vaikka oma osaamiseni onkin kovin heikkoa ollut kisoissa.</p>

				<h3>Videopelit</h3>
				<p>Näistä voisinkin kertoa vaikka maailman tappiin asti, mutta käydään lyhyesti. Innostunut jo ihan vaahtosammuttimen kokoisena kun isoveli opetti pelaamaan Leisure Suit Larrya vanhalla 486 -tietokoneella. Siitä asti pelit ovat olleet aina lähellä sydäntä, monta erilaista pelikonsolia on ollut, tietokonetta vaihdettu ja päivitetty usein ajan hermolle yms. Olen aina ollut kaikkiruokainen pelien suhteen, mutta mieleisimpiä ovat roolipelit ja seikkailupelit.</p>

				<h3>D&D eli Dungeons And Dragons</h3>
				<p>Pyötäroolipeli, kutsutaan myös pen-and-paper, on tuorein harraste. Keräännymme ystäväporukan kanssa viikoittain istumaan pöydän ääreen ja pidämme hauskaa lahdaten milloin mitäkin, mitä vastaan tulee. Peli on itsessään kovin monimutkainen, joten en ala avaamaan sitä sen enempää. Tarkoituksena on irtaantua harmaasta arjesta ja olla joku muu, kuin normaalisti on.</p>

				<h3>Pulkkamäki</h3>
				<p>Käydään kummitytön ja muksun kanssa laskemassa pulkalla :)</p>
			</div>
		}
		</Motion>
	);
}

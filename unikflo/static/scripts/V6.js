

$('button#Spec').click(function(){
	console.log('clicked!')
	$('ul#detail').html("	<li><p><strong>Head Range :</strong> 13 To 245 Meters(Radial Flow)<br> 9 to 216 Meters(Mix Flow)</p></li><li><p><strong>Discharge Range :</strong> 70 To 450 LPM(Radial Flow)<br> 200 to 1150 LPM(Mix Flow)</p></li><li><p><strong>Motor Rating :</strong> 3.0HP to 5.0HP,220V,50Hz,AC Supply<br>3.0HP to 30.0HP in 3Phase 380V/415V,50Hz, AC Supply</p></li><li><p><strong>Voltage Range :</strong> 160 To 250V(1 Phase)<br>200V to 440V(3 Phase)</p></li>")
	})
$('button#feat').click(function(){
	console.log('clicked1!')
	$('ul#detail').html("<li>Robust construction to ensure durability of pumpset</li><li>Winding wires are wrapped with superior polymer to withstand wide voltage fluctuation</li><li>All the rotating parts are dynamically balanced to reduce vibration & noise</li><li>Rotors are painted with special epoxy paint for long life</li>")
	})
$('button#App').click(function(){
	console.log('clicked2!')
	$('ul#detail').html("	<li>Domestic water supply in Apartments</li><li>Fountains, Canals & rivers</li><li>Agriculture Use</li><li>Fire Fighting System</li><li>Unshaped and crossed borewell</li>")
	})
$('button#Download').click(function(){
	console.log('clicked3!')
	$('ul#detail').html("<li><a href='static/images/V6-1.jpg'>Download Page1</a></li><li><a href='static/images/V6-2.jpg'>Download Page2</a></li><li><a href='static/images/V6-3.jpg'>Download Page3</a></li><li><a href='static/images/V6-4.jpg'>Download Page4</a></li>")
	})
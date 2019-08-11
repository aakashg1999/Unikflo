

$('button#Spec').click(function(){
	console.log('clicked!')
	$('ul#detail').html("	<li><p><strong>Head Range :</strong> 4 To 335 Meters</p></li><li><p><strong>Discharge Range :</strong> 10 To 480 LPM</p></li><li><p><strong>Motor Rating :</strong> 1.0HP to 5.0HP,220V,50Hz,AC Supply<br>1.0HP to 5.0HP in 3Phase 380V/415V,50Hz, AC Supply</p></li><li><p><strong>Voltage Range :</strong> 150 To 250V(1 Phase)<br>200V to 440V(3 Phase)</p></li>")
	})
$('button#feat').click(function(){
	console.log('clicked1!')
	$('ul#detail').html("<li>Special star impeller motor available</li><li>Rotors are dynamically balanced to minimise noise and vibration</li><li>Pump & motors are in fully stainless steel design</li><li>All the pumps are supplied with guide bush at suction end along with sand protection</li>")
	})
$('button#App').click(function(){
	console.log('clicked2!')
	$('ul#detail').html("	<li>Domestic water supply</li><li>Fountains, Canals & rivers</li><li>Replacement of hand pump</li><li>Fire Fighting System</li><li>Unshaped and crossed borewell</li>")
	})
$('button#Download').click(function(){
	console.log('clicked3!')
	$('ul#detail').html("<li><a href='static/images/V3nV4.jpg'>Download Page1</a></li><li><a href='static/images/V4-2.jpg'>Download Page2</a></li>")
	})
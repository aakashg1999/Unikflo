

$('button#Spec').click(function(){
	console.log('clicked!')
	$('ul#detail').html("	<li><p><strong>Head Range :</strong> 0 To 112 Meters</p></li><li><p><strong>Discharge Range :</strong> 600 To 2200 LPM</p></li><li><p><strong>Motor Rating :</strong> 3.0HP to 25.0HP in 3Phase 380V/415V,50Hz, AC Supply</p></li><li><p><strong>Voltage Range :</strong> 200V to 440V(3 Phase)</p></li>")
	})
$('button#feat').click(function(){
	console.log('clicked1!')
	$('ul#detail').html("<li>All pumps are provided with suction guide support</li><li>Motor design for wide voltage range</li><li>Pumps are designed for maximum water discharge</li><li>Rotor are painted with special epoxy paint for long life</li>")
	})
$('button#App').click(function(){
	console.log('clicked2!')
	$('ul#detail').html("	<li>Domestic water supply in Apartments</li><li>Fountains, Canals & rivers</li><li>Agriculture Use</li><li>Fire Fighting System</li><li>Unshaped and crossed borewell</li>")
	})
$('button#Download').click(function(){
	console.log('clicked3!')
	$('ul#detail').html("<li><a href='static/images/V8-1.jpg'>Download Page1</a></li>")
	})
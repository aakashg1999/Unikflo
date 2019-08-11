

$('button#Spec').click(function(){
	console.log('clicked!')
	$('ul#detail').html("	<li><p><strong>Head Range :</strong> 9 To 120 Meters</p></li><li><p><strong>Discharge Range :</strong> 600 To 1700 LPM</p></li><li><p><strong>Motor Rating :</strong> 3.0HP to 5.0HP,220V,50Hz,AC Supply<br>3.0HP to 25.0HP in 3Phase 380V/415V,50Hz, AC Supply</p></li><li><p><strong>Voltage Range :</strong> 150 To 250V(1 Phase)<br>200V to 440V(3 Phase)</p></li>")
	})
$('button#feat').click(function(){
	console.log('clicked1!')
	$('ul#detail').html("<li>Motor design for wide voltage range</li><li>Carbon v/s Stainless steel thrust bearing are provided to withstand high thrust load</li><li>Pumps are provided with suction guide support</li><li>Top and suction guide bushes are well protected by sand guards</li>")
	})
$('button#App').click(function(){
	console.log('clicked2!')
	$('ul#detail').html("	<li>Domestic water supply in Apartments</li><li>Fountains, Canals & rivers</li><li>Agriculture Use</li><li>Fire Fighting System</li><li>Unshaped and crossed borewell</li>")
	})
$('button#Download').click(function(){
	console.log('clicked3!')
	$('ul#detail').html("<li><a href='static/images/V7-1.jpg'>Download Page1</a></li>")
	})
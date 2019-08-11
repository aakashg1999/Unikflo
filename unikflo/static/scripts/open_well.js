

$('button#Spec').click(function(){
	console.log('clicked!')
	$('ul#detail').html("	<li><p><strong>Head Range :</strong> 6 To 68 Meters</p></li><li><p><strong>Discharge Range :</strong> 50 To 2344 LPM</p></li><li><p><strong>Motor Rating :</strong> 0.5HP to 5.0HP,220V,50Hz,AC Supply<br>0.5HP to 20.0HP in 3Phase 380V/415V,50Hz, AC Supply</p></li><li><p><strong>Voltage Range :</strong> 140 To 250V(1 Phase)<br>200V to 440V(3 Phase)</p></li>")
	})
$('button#feat').click(function(){
	console.log('clicked1!')
	$('ul#detail').html("<li>Fully Stainless Steel stator tube as well as stainless steel shaft</li><li>Design for wide voltage range</li><li>Design for underwater application</li><li>Light weight and easy to instal</li>")
	})
$('button#App').click(function(){
	console.log('clicked2!')
	$('ul#detail').html("	<li>Domestic water supply</li><li>Fountains, Canals & rivers</li><li>Replacement of hand pump</li><li>Fire Fighting System</li><li>Unshaped and crossed borewell</li>")
	})

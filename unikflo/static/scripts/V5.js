

$('button#Spec').click(function(){
	console.log('clicked!')
	$('ul#detail').html("	<li><p><strong>Head Range :</strong> 24 To 268 Meters</p></li><li><p><strong>Discharge Range :</strong> 60 To 420 LPM</p></li><li><p><strong>Motor Rating :</strong> 3.0HP to 5.0HP,220V,50Hz,AC Supply<br>3.0HP to 15.0HP in 3Phase 380V/415V,50Hz, AC Supply</p></li><li><p><strong>Voltage Range :</strong> 160 To 250V(1 Phase)<br>200V to 440V(3 Phase)</p></li>")
	})
$('button#feat').click(function(){
	console.log('clicked1!')
	$('ul#detail').html("<li>Highly efficient investment casting process diffusers are used with AISI304 Material</li><li>All guide bushes are protected with sand guards</li><li>Upper thrust provision provided in each model</li><li>Bearing sleeves are provided with hard chrome plating </li>")
	})
$('button#App').click(function(){
	console.log('clicked2!')
	$('ul#detail').html("	<li>Domestic water supply in Apartments</li><li>Fountains, Canals & rivers</li><li>Agriculture Use</li><li>Fire Fighting System</li><li>Unshaped and crossed borewell</li>")
	})
$('button#Download').click(function(){
	console.log('clicked3!')
	$('ul#detail').html("<li><a href='static/images/V5-1.jpg'>Download Page1</a></li><li><a href='static/images/V5-2.jpg'>Download Page2</a></li>")
	})


$('button#Spec').click(function(){
	console.log('clicked!')
	$('ul#detail').html("	<li><p><strong>Head Range :</strong> 15 To 80 Meters</p></li><li><p><strong>Discharge Range :</strong> 10 To 90 LPM</p></li><li><p><strong>Motor Rating :</strong> 0.5HP to 1.5HP,220V,50Hz,AC Supply</p></li><li><p><strong>Voltage Range :</strong> 140 To 240V</p></li>")
	})
$('button#feat').click(function(){
	console.log('clicked1!')
	$('ul#detail').html("<li>Fully Stainless Steel stator tube</li><li>All the diffusers and impellers are glass filled engineer</li><li>Rotor are grinded & burnished to give better surface finish which ensure long life</li><li>Starts easily at low voltage</li>")
	})
$('button#App').click(function(){
	console.log('clicked2!')
	$('ul#detail').html("	<li>Domestic water supply</li><li>Fountains, Canals & rivers</li><li>Replacement of hand pump</li><li>Fire Fighting System</li><li>Unshaped and crossed borewell</li>")
	})
$('button#Download').click(function(){
	console.log('clicked3!')
	$('ul#detail').html("<li><a href='static/images/V3nV4.jpg'>Download</a></li>")
	})
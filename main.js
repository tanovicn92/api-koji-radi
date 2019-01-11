const rezultat = document.getElementById("rezultat")
const url = `https://baza-filmova.herokuapp.com/filmovi/`
fetch (url)
.then (response => response.json())
.then (data => {
	console.log(data);
	  let sablon = ``;
	for(let i=0; i<data.length; i++){
		sablon += 
		`
		<div class="divRez"> 
		<h2> ${data[i].naziv} </h2> </br>
		<h3> ${data[i].godina} </h3> </br>
		<img src="${data[i].slika}" width="240px/>
		</div>
		`
		
	}
	rezultat.innerHTML = sablon;
});
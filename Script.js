var css = document.querySelector("h3"); 
var color1 = document.querySelector(".color1"); 
var color2 = document.querySelector(".color2"); 
var body = document.getElementById("gradient"); 
var randomBtn = document.getElementById("randomBtn"); 
var copybtn = document.getElementById("copybtn");

css.textContent = "linear-gradient(to right, rgb(0, 255, 0), rgb(255, 0, 0))" 
                  + ";"; 

function setGradient() {
		body.style.background = 
	"linear-gradient(to right," 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";"; 
}

// Functie om random hex-kleur te generen 
function getRandomColor() {
	let letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

// Eventlistener voor de randomknop
randomBtn.addEventListener("click", function() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient(); // update de achtergrond
});

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// de kleur-inputs krijgen dezelfd achtergrond die overeenkomt met de waarde 
color1.style.background = color1.value;
color2.style.background = color2.value;

copybtn.addEventListener("click", function() {
	// Tekst uit het h3-element ophalen
	let cssCode = css.textContent;

	// Tekst naar het klembord kopiëren
	navigator.clipboard.writeText(cssCode)
		.then(function() {
			// Succesbericht (optioneel)
			copybtn.textContent = "Copied!";
			setTimeout(() => copybtn.textContent = "Copy CSS", 1500);
		})
		.catch(function(err) {
			console.error("Kopiëren mislukt:", err);
		});
});



//Newer modern way to write the code (this new syntax will be explored in Advanced JS section)
// const css = document.querySelector('h3');
// const [color1, color2] = document.querySelectorAll('.color')
// const body = document.querySelector('#gradient');

// setGradient = () => {
// 	body.style.background = _linearGradient();
// 	css.textContent = `${body.style.background};`;
// }

// _linearGradient = () => {
// 	return `linear-gradient(to right, ${color1.value}, ${color2.value})`;
// }

// color1.addEventListener('input', setGradient);

// color2.addEventListener('input', setGradient);


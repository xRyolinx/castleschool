const textData = ["Community","Growth", "Excellence","Acheivement"];
let index = 0;

const updateTextAnimation = (textContainer) => {
	textContainer.classList.remove("appear"); // Remove the 'appear' class
	setTimeout(() => {
		textContainer.innerText = textData[index];
		textContainer.classList.add("appear"); 
		index =  (index + 1) % textData.length; 
	}, 1500); // Delay to match the animation duration
};


document.addEventListener('DOMContentLoaded', function () {
	// animation titre
	setTimeout(function() {
		$('.the-castle-school').addClass('animate-slide');
	}, 100);

	// animation sous titre
	const textContainer = document.querySelector(".Animated-text h1");
	updateTextAnimation(textContainer);
	setInterval(()=> {updateTextAnimation(textContainer)}, 3000);

	let lang_switch = document.querySelector('.language-switch');
	let dropdown = document.querySelector('.dropdown-content');

	window.addEventListener('resize', () => {
		lang_switch.removeAttribute("style");
		dropdown.removeAttribute("style");
	})

	lang_switch.addEventListener('mouseover', ()=> {
		let nav = document.querySelector('nav');
		let radius = "24px";
		if (nav.clientHeight == 100)
		{
			radius = "20px";
		}
		lang_switch.style.borderRadius = `${radius} ${radius} 0 0`;
		dropdown.style.display = "block";
		dropdown.style.top = lang_switch.clientHeight.toString() + "px";
		dropdown.style.width = lang_switch.clientWidth.toString() + "px";
	});

	lang_switch.addEventListener('mouseout', ()=> {
		lang_switch.removeAttribute("style");
		dropdown.removeAttribute("style");
	});
});



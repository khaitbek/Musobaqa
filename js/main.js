var elTabLink = document.querySelectorAll(".features-section__text");
var elTabItem = document.querySelectorAll(".features-section__item-top");
var elPanelItem = document.querySelectorAll(".choose-car__bottom-item");

elTabLink.forEach(function (link) {
	link.addEventListener("click", function (evt) {
		evt.preventDefault();

		elTabItem.forEach(function (item) {
			item.classList.remove("choose-car__top-item--active");
		});

		link.parentElement.classList.add("choose-car__top-item--active");

		elPanelItem.forEach(function (panel) {
			panel.classList.remove("choose-car__bottom-item--active");
		});

		document.querySelector(link.getAttribute("href")).classList.add("choose-car__bottom-item--active");
	});
});

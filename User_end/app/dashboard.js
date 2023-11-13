window.addEventListener("load", function (event) {
	const sliderEl = document.querySelector("#range");
	const tempSliderValue = sliderEl.value;
	const progress = (tempSliderValue / sliderEl.max) * 100;
	sliderEl.style.background = `linear-gradient(to right, rgb(103, 50, 255) ${progress}%, rgb(83, 84, 82) ${progress}%)`;

	sliderEl.addEventListener("input", (event) => {
		const tempSliderValue = event.target.value;
		const progress = (tempSliderValue / sliderEl.max) * 100;
		sliderEl.style.background = `linear-gradient(to right, rgb(103, 50, 255) ${progress}%, rgb(83, 84, 82) ${progress}%)`;
	});
});

window.addEventListener("load", function () {
    sessionStorage.clear("Local");
	const tabs = this.document.querySelectorAll(".tab");
	const tabContainer = this.document.querySelectorAll(".tab_container");
	const searchBar = this.document.querySelector("#search_input");
	const searchContainer = this.document.querySelector("#search_container");
	var i;
	for (i = 0; i < tabs.length; i++) {
		const current = i;
		tabs[i].addEventListener("click", function () {
			var j;
			for (j = 0; j < tabs.length; j++) {
				tabs[j].classList.remove("active-tab");
				tabContainer[j].classList.add("hide");
				if (j == current) {
					tabs[current].classList.add("active-tab");
					tabContainer[j].classList.remove("hide");
				}
			}
		});
	}

	searchBar.addEventListener("input", function () {
		if (searchBar.value.length > 0) {
			searchContainer.classList.remove("hide");
            current=getElementIndexByClass(tabs, "active-tab");
			sessionStorage.setItem("currentTab",JSON.stringify(current));
			var j;
			for (j = 0; j < tabs.length; j++) {
				tabContainer[j].classList.add("hide");
			}
		} else {
            searchContainer.classList.add("hide");
            tabContainer[JSON.parse(sessionStorage.getItem("currentTab"))].classList.remove("hide");
        }
	});
});


function getElementIndexByClass(arr, className) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].classList.contains(className)) {
        return i;
      }
    }
    return -1;
  }

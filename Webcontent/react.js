var tabs = document.querySelectorAll(".frame5-frame5");
var today = document.querySelector(".frame5-frame5:focus-visible");
var month = document.querySelector(".frame5-text");
var year = document.querySelector(".frame5-zenseact1");
var items = document.querySelectorAll(".frame5-text01");

tabs.forEach(function(tab){
	tab.addEventListener("click", function(){
		var currenttab = tab.getAttribute(".frame5-frame5");
		
		tabs.forEach(function(tab){
			tab.classList.remove("active");
		})

		tab.classList.add("active");

		items.forEach(function(item){
			item.style.display = "none";
		})

		if(currenttab == "today"){
			today.style.display = "block";
		}
		else if(currenttab == "month"){
			month.style.display = "block";
		}
		else{
			year.style.display = "block";
		}

	})
})
function searchFunction() {
    const input = document.getElementById("search-bar");
    const filter = input.value.toUpperCase();
    const ul = document.getElementById("item-list");
    const li = ul.getElementsByTagName("li");
  
    for (let i = 0; i < li.length; i++) {
      let item = li[i];
      if (item.innerHTML.toUpperCase().indexOf(filter) > -1) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    }
  }
  
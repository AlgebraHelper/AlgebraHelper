window.addEventListener("load",()=>{
  let navbarContainer = document.getElementById("navbar");
  navbarContainer.classList.add("w3-top");
  
  let computerNav = document.createElement("div");
  computerNav.setAttribute("class","w3-bar w3-black w3-card w3-left-align w3-large");
  
  let hamburgerMenu = document.createElement("a");
  hamburgerMenu.setAttribute("class","w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red");
  hamburgerMenu.setAttribute("href","javascript:void(0);");
  hamburgerMenu.setAttribute("onclick","myFunction();");
  hamburgerMenu.setAttribute("title","Toggle Navigation Menu");
  computerNav.appendChild(hamburgerMenu);
  
  let hamburgerIcon = document.createElement("i");
  hamburgerIcon.setAttribute("class", "fa fa-bars");
  hamburgerIcon.setAttribute("aria-hidden","true");
  
  let homeButton = document.createElement("a");
  homeButton.setAttribute("class", "w3-bar-item w3-button w3-padding-large w3-hover-white");
  homeButton.setAttribute("href", "/");
  homeButton.innerText = "Home";
  
  let gamesButton = document.createElement("a");
  gamesButton.setAttribute("class", "w3-bar-item w3-button w3-padding-large w3-hover-white");
  gamesButton.setAttribute("href", "/games/");
  gamesButton.innerText = "Games";
  
  let sitesButton = document.createElement("a");
  sitesButton.setAttribute("class", "w3-bar-item w3-button w3-padding-large w3-hover-white");
  sitesButton.setAttribute("href", "/sites/");
  sitesButton.innerText = "Sites";
  
  let chatButton = document.createElement("a");
  chatButton.setAttribute("class", "w3-bar-item w3-button w3-padding-large w3-hover-white");
  chatButton.setAttribute("href", "/chat/");
  chatButton.innerText = "Chat";
  
  let aboutButton = document.createElement("a");
  aboutButton.setAttribute("class", "w3-bar-item w3-button w3-padding-large w3-hover-white");
  aboutButton.setAttribute("href", "/about/");
  aboutButton.innerText = "About";
  /*
  <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large">
        <a href="/games" class="w3-bar-item w3-button w3-padding-large">Games</a>
        <a href="/sites" class="w3-bar-item w3-button w3-padding-large">Sites</a>
        <a href="/chat" class="w3-bar-item w3-button w3-padding-large">Chat</a>
        <a href="/about" class="w3-bar-item w3-button w3-padding-large">About</a>
      </div>
  */
  
  let mobileNav = document.createElement("div");
  mobileNav.setAttribute("class","w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large");
  mobileNav.setAttribute("id","navDemo");
  
  let MgamesButton = document.createElement("a");
  MgamesButton.setAttribute("class", "w3-bar-item w3-button w3-padding-large");
  MgamesButton.setAttribute("href", "/games/");
  MgamesButton.innerText = "Games";
  
  let MsitesButton = document.createElement("a");
  MsitesButton.setAttribute("class", "w3-bar-item w3-button w3-padding-large");
  MsitesButton.setAttribute("href", "/sites/");
  MsitesButton.innerText = "Sites";
  
  let MchatButton = document.createElement("a");
  MchatButton.setAttribute("class", "w3-bar-item w3-button w3-padding-large");
  MchatButton.setAttribute("href", "/chat/");
  MchatButton.innerText = "Chat";
  
  let MaboutButton = document.createElement("a");
  MaboutButton.setAttribute("class", "w3-bar-item w3-button w3-padding-large");
  MaboutButton.setAttribute("href", "/about/");
  MaboutButton.innerText = "About";
  
  /*
  <div class="search-container">
    <input type="text" placeholder="Search.." name="search">
    <button type="submit"><i class="fa fa-search"></i></button>
  </div>
  */
  let searchContainer = document.createElement("div");
  searchContainer.setAttribute("class", "search-container");
  
  let searchForm = document.createElement("form");
  
  
  let searchInput = document.createElement("input");
  searchInput.setAttribute("placeholder", "Search..");
  searchInput.setAttribute("type", "text");
  searchInput.setAttribute("id","searchInput");
  
  let searchButton = document.createElement("button");
  searchButton.setAttribute("type", "submit");
  searchButton.setAttribute("id","searchButton");
  
  let searchIcon = document.createElement("i");
  searchIcon.setAttribute("class", "fa fa-search");
  searchIcon.setAttribute("aria-hidden","true");
  
  searchButton.appendChild(searchIcon);
  
  searchForm.addEventListener("submit",searchHandler);
  
  searchContainer.appendChild(searchForm);
  searchForm.appendChild(searchInput);
  searchForm.appendChild(searchButton);

  navbarContainer.appendChild(computerNav);
  computerNav.appendChild(homeButton);
  computerNav.appendChild(gamesButton);
  computerNav.appendChild(sitesButton);
  computerNav.appendChild(chatButton);
  computerNav.appendChild(aboutButton);
  if (window.location.pathname.slice(0,14)!="/games/search/"){
    computerNav.appendChild(searchContainer);
  } else{
    let searchBox = document.getElementById("search-box");
    searchBox.value = decodeURI(new URL(window.location).search.slice(3));
  }
  hamburgerMenu.appendChild(hamburgerIcon);
  navbarContainer.appendChild(mobileNav);
  mobileNav.appendChild(MgamesButton);
  mobileNav.appendChild(MsitesButton);
  mobileNav.appendChild(MchatButton);
  mobileNav.appendChild(MaboutButton);
  
  switch (window.location.pathname.split("/")[1]) {
    case "games":
      //w3-bar-item w3-button w3-padding-large w3-white
      gamesButton.setAttribute("class","w3-bar-item w3-button w3-padding-large w3-white");
      break;
    case "":
      homeButton.setAttribute("class","w3-bar-item w3-button w3-padding-large w3-white");
      break;
    case "sites":
      sitesButton.setAttribute("class","w3-bar-item w3-button w3-padding-large w3-white");
      break;
    case "about":
      aboutButton.setAttribute("class","w3-bar-item w3-button w3-padding-large w3-white");
      break;
    default:
      //stuff
      console.log('uhhh something wrong with navbar! path: '+window.location.pathname);
  }
});

function searchHandler(el) {
  el.preventDefault();
  console.log(el);
  let searchTerm = el.srcElement[0].value;
  window.location.assign("/games/search/?q="+encodeURI(searchTerm));
}

function myFunction() {
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
      } else {
        x.className = x.className.replace(" w3-show", "");
      }
    }
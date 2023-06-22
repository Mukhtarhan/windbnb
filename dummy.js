  const butt = document.getElementsByClassName(".buttons");
  const white_page =document.getElementById("halfPageOverlay");
  

  function setup(){
    white_page.style.display = "block";
    white_page.getElementsByClassName("button-white-page");
  }


  function show_cities(){
    document.querySelector(".button-add-guests").style.display = "none";
    document.querySelector(".button-cities").style.display = "block";
    white_page.getElementsByClassName("button-cities");
  }


  function change_city(text){
    document.getElementById("city-location").textContent = text;
  }


  function set_guests(){
    document.querySelector(".button-add-guests").style.display = "flex";
    document.querySelector(".button-cities").style.display = "none";

  }

  
  function incr_guest(current){
    let a = document.querySelector("."+`${current}`).textContent;
    a++;
    document.querySelector("."+`${current}`).textContent = a;
    if(document.getElementById("num-guests").textContent=="Add guests"){
      document.getElementById("num-guests").textContent = a.toString();
    }
    else{
      let num = Number(document.getElementById("num-guests").textContent);
      num++;
      document.getElementById("num-guests").textContent = num.toString();
    }
  }


  function decr_guest(current){
    let num = Number(document.getElementById("num-guests").textContent);
    let a = document.querySelector("."+`${current}`).textContent;
    if(document.getElementById("num-guests").textContent=="Add guests"){
      
    }
    else if(num>=1 && a>0 ){
      num--;
      document.getElementById("num-guests").textContent = num.toString();
    }
    if(a>0){
      a--;
    }
    document.querySelector("."+`${current}`).textContent = a;

  }


  document.addEventListener("click", function(event) {
    const closing = document.getElementById("halfPageOverlay");
    if (!event.target.classList.contains("buttons") && !closing.contains(event.target)) {
      document.querySelector(".button-cities").style.display = "none";
      closing.style.display = "none";
    }
  });
  
  

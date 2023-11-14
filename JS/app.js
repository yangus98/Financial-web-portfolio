var n_img = 4;
var corrente = 1;

function succ(){
    corrente++;
    if(corrente > n_img){
        corrente = 1;
    }
  
    for(var i = n_img; i > 0; i--){
        document.querySelector("#img_slider img:nth-child(" + i + ")").style.display = "none";
      }
    document.querySelector("#img_slider img:nth-child(" + corrente + ")").style.display = "block";
}

function prec(){
    corrente--;
    if(corrente == 0){
        corrente = n_img;
    }
  
    for(var i = n_img; i > 0; i--){
        document.querySelector("#img_slider img:nth-child(" + i + ")").style.display = "none";
    }
    document.querySelector("#img_slider img:nth-child(" + corrente + ")").style.display = "block";
}

setInterval(succ, 5000);

var n_img_smart = 4;
var corrente_smart = 1;

function succ_smart(){
    corrente_smart++;
    if(corrente_smart > n_img_smart){
        corrente_smart = 1;
    }
  
    for(var j = n_img_smart; j > 0; j--){
        document.querySelector("#img_slider-smart img:nth-child(" + j + ")").style.display = "none";
      }
    document.querySelector("#img_slider-smart img:nth-child(" + corrente_smart + ")").style.display = "block";
}

function prec_smart(){
    corrente_smart--;
    if(corrente_smart == 0){
        corrente_smart = n_img_smart;
    }
  
    for(var j = n_img_smart; j > 0; j--){
        document.querySelector("#img_slider-smart img:nth-child(" + j + ")").style.display = "none";
    }
    document.querySelector("#img_slider-smart img:nth-child(" + corrente_smart + ")").style.display = "block";
}

setInterval(succ_smart, 5000);

document.addEventListener('DOMContentLoaded', function() {
  var toggleBtn = document.getElementById('toggleBtn');
  var toggleDivs = document.querySelectorAll('.toggleDiv');

  toggleBtn.addEventListener('click', function () {
    toggleDivs.forEach(function (div) {
      div.classList.toggle('visible');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var toggleBtn2 = document.getElementById('toggleBtn2');
  var toggleDivs2 = document.querySelectorAll('.toggleDiv2');

  toggleBtn2.addEventListener('click', function () {
    toggleDivs2.forEach(function (div) {
      div.classList.toggle('visible');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
    var toggleBtn3 = document.getElementById('toggleBtn3');
    var toggleDivs3 = document.querySelectorAll('.toggleDiv3');

    toggleBtn3.addEventListener('click', function () {
      toggleDivs3.forEach(function (div) {
        div.classList.toggle('visible');
      });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var toggleBtn4 = document.getElementById('toggleBtn4');
    var toggleDivs4 = document.querySelectorAll('.toggleDiv4');

    toggleBtn4.addEventListener('click', function () {
      toggleDivs4.forEach(function (div) {
        div.classList.toggle('visible');
      });
    });
});





const navss = document.getElementById('navLinks');
let hamburger = document.getElementById('hamburger');
let yo = document.getElementById('yo');
function openNav() {
    navss.style.right = '0'
    hamburger.style.opacity = '0'
}   
let query = window.matchMedia("(max-width: 639px)");
function closeNav() {
   if (query.matches){
    navss.style.right = '-100%'
    hamburger.style.opacity = '1'
   }
}
const navLinks = document.getElementById("navLinks");
const rdy = document.getElementById("rdy");
         function navOpen(){
         navLinks.style.right = "0"
         rdy.style.display = "none"
         }
         function navClose(){
         navLinks.style.right = "-100%"
         rdy.style.display = "block"
         }
        let navs = document.getElementById("navs");
        let css_of_after = getComputedStyle(navs, '::after');
        let navs2 = document.getElementById("navs2");
        let css_of_after2 = getComputedStyle(navs, '::after');
        let navs3 = document.getElementById("navs3");
        let css_of_after3 = getComputedStyle(navs, '::after');
        let change1 = document.getElementById("info_Wrapper1");
        let change2 = document.getElementById("info_Wrapper2");
        let change3 = document.getElementById("info_Wrapper3");
        let act = document.getElementById("act");
        navs.style.setProperty('--afterback', 'scale(1)');
        navs.style.color = '#ff597a'
        function openExp(){
           change2.style.opacity = "1";
           change1.style.opacity = "0";
           change3.style.opacity = "0";
           navs2.style.setProperty('--afterback', 'scale(1)');
           navs.style.setProperty('--afterback', 'scale(0)');
           navs3.style.setProperty('--afterback', 'scale(0)');
           navs2.style.color = "#ff597a"
           navs.style.color = "#cacaca"
           navs3.style.color = "#cacaca"
        }
        function openSkills(){
           change1.style.opacity = "1";
           change2.style.opacity = "0";
           change3.style.opacity = "0";
           navs.style.setProperty('--afterback', 'scale(1)');
           navs2.style.setProperty('--afterback', 'scale(0)');
           navs3.style.setProperty('--afterback', 'scale(0)');
           navs.style.color = "#ff597a"
           navs3.style.color = "#cacaca"
           navs2.style.color = "#cacaca"
        }
        function openEduc(){
           change3.style.opacity = "1";
           change1.style.opacity = "0";
           change2.style.opacity = "0";
           navs3.style.setProperty('--afterback', 'scale(1)');
           navs2.style.setProperty('--afterback', 'scale(0)');
           navs.style.setProperty('--afterback', 'scale(0)');
           navs3.style.color = "#ff597a"
           navs.style.color = "#cacaca"
           navs2.style.color = "#cacaca"
        }
        const copy = document.getElementById('copy');
        copy.addEventListener('click', function() {
          copy.style.setProperty('--afterback', 'scale(1)');
          setTimeout(function(){
            copy.style.setProperty('--afterback', 'scale(0)');
          },900);
        });
        const copy2 = document.getElementById('copy2');
        copy2.addEventListener('click', function() {
          copy2.style.setProperty('--afterback', 'scale(1)');
          setTimeout(function(){
            copy2.style.setProperty('--afterback', 'scale(0)');
          },900);
        });
        var loader_wrapper = document.getElementById("loader_wrapper");
        setTimeout(function () {
        loader_wrapper.style.opacity = "0";
        loader_wrapper.style.zIndex = "-1"
       }, 3000);
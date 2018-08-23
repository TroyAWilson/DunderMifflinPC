dunderLogo = document.getElementById('dunderLogo');
nav = document.getElementById('hide-list');



dunderLogo.addEventListener("click",()=>{
  if(nav.style.opacity === '1'){
  nav.style.opacity = '0';
  nav.style.transform = 'translateX(1000px)';
  }
  else{
    nav.style.opacity = '1';
    nav.style.transform ='translateX(0)';

  }
});

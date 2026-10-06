(function(){var b=document.getElementById('lb');var l=(navigator.language||'en').indexOf('he')==0?'he':'en';
function s(x){l=x;document.querySelectorAll('[data-l]').forEach(function(e){e.classList.toggle('hidden',e.getAttribute('data-l')!=x)});
document.documentElement.lang=x;document.documentElement.dir=x=='he'?'rtl':'ltr';b.textContent=x=='he'?'English':'עברית'}
b.onclick=function(){s(l=='he'?'en':'he')};s(l)})();

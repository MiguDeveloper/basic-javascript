const miModulo=(()=>{"use strict";let e=[],t=[];const r=["C","D","H","S"],n=["A","J","Q","K"],a=document.querySelector("#btnPedir"),o=document.querySelectorAll("small"),s=document.querySelector("#btnDetener"),c=document.querySelector("#btnNuevo"),l=document.querySelectorAll(".div-cartas"),d=(r=2)=>{e=u(),t=[];for(let e=0;e<r;e++)t.push(0);o.forEach(e=>e.innerText=0),l.forEach(e=>e.innerHTML=""),a.disabled=!1,s.disabled=!1},u=()=>{e=[];for(let t=2;t<11;t++)for(const n of r)e.push(`${t}${n}`);for(const t of n)for(const n of r)e.push(`${t}${n}`);return _.shuffle(e)},i=()=>{if(0===e.length)throw"No hay cartas en la baraja";return e.pop()},f=(e,r)=>{t[r]+=(e=>{const t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t})(e),o[r].innerText=t[r];const n=document.createElement("img");return n.src=`assets/cartas/${e}.png`,n.classList.add("carta"),l[r].append(n),t[r]},m=e=>{let r=0;do{const e=i();r=f(e,t.length-1)}while(r<e&&e<=21);(()=>{const[e,r]=t;setTimeout(()=>{r===e?alert("Nadie gana :("):e>21?alert("Computadora gana"):r>21?alert("Jugador gana"):alert("Computador gana")},1e3)})()};a.addEventListener("click",()=>{const e=i();f(e,0),t[0]>21?(g(),m(t[0])):21===t[0]&&(g(),m(t[0]))});const g=()=>{a.disabled=!0,s.disabled=!0};return s.addEventListener("click",()=>{a.disabled=!0,s.disabled=!0,m(t[0])}),c.addEventListener("click",()=>{d(2)}),{nuevoJuego:d}})();
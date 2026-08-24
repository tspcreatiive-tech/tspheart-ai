const items=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
items.forEach(i=>observer.observe(i));
document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.querySelector('.menu');
const nav=document.querySelector('nav');
menu.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='78px';nav.style.left='0';nav.style.right='0';nav.style.padding='20px 7vw';nav.style.background='#080808';nav.style.flexDirection='column';nav.style.alignItems='flex-start'});

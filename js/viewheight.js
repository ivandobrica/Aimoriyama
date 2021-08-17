// 100vh on mobile when adress bar is present
function appHeight() {
    const doc = document.documentElement
    doc.style.setProperty('--vh', (window.innerHeight*.01) + 'px');
}
window.addEventListener('resize', appHeight);
appHeight();

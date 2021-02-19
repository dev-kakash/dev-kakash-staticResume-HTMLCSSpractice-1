const a = document.querySelector(".a");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img")
const imgText = document.querySelector(".caption")

previews.forEach(preview => {
    preview.addEventListener('click',() =>{
        a.classList.add("open");
        original.classList.add("open");
        //change text and image
        const originalSrc =preview.getAttribute('data-original');
        original.src = `./c/${originalSrc}`;
    });


});

a.addEventListener('click',(e) => {
    if(e.target.classList.contains('a')){
        a.classList.remove('open');
        original.classList.remove('open');
    }
    a.classList.remove('open');
        original.classList.remove('open');
})
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});


document.getElementById('homeLink').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


document.getElementById('footer').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        bottom: 0,
        behavior: 'smooth'
    });
});


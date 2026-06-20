async function load(id, file) {
    const res = await fetch(file);
    document.getElementById(id).innerHTML = await res.text();
}

load("navbar", "HTML/navbar.html");
load("hero", "HTML/hero.html");
load("featured", "HTML/featured.html");
load("adoption", "HTML/adoption.html");
load("review", "HTML/review.html");
load("footer", "HTML/footer.html");
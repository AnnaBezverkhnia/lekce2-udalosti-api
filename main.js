// tady je místo pro náš program

let nadpis = document.querySelector("h1");
nadpis.classList.add("zluty");
nadpis.classList.remove("zluty");
nadpis.classList.toggle("zluty");

function secti(a,b) {
    console.log(a + b)
}

function ztucni() {
    document.querySelector(".odstavec").style.fontWeight = "bold";
}
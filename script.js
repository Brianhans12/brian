/* =========================================
   LOADING SCREEN
========================================= */

const loader = document.getElementById("loader");

function hideLoader() {

    loader.classList.add("hide");

    document.body.style.overflow = "auto";

}


/*
   Maksimal loading 1.8 detik.
   Jadi tidak akan stuck walaupun ada
   resource tertentu yang lambat.
*/

window.addEventListener("load", () => {

    setTimeout(() => {

        hideLoader();

    }, 800);

});


/*
   FALLBACK

   Jika event load mengalami masalah,
   loader tetap akan hilang.
*/

setTimeout(() => {

    if (!loader.classList.contains("hide")) {

        hideLoader();

    }

}, 1800);


/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menu-btn");
const navigation = document.getElementById("nav");


menuButton.addEventListener("click", () => {

    navigation.classList.toggle("active");

});


/*
   Tutup menu ketika link ditekan
*/

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   NAVBAR ACTIVE LINK
========================================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            window.scrollY >= sectionTop
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.style.color = "";

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.style.color = "#d3ad5b";

        }

    });

});
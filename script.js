/* =====================
   OPEN INVITATION + MUSIC
===================== */
function openInvitation() {
    document.getElementById("cover").style.display = "none";
    document.getElementById("bgMusic").play();

    document.querySelectorAll(".hidden").forEach(el => {
        el.classList.add("show");
    });
}

/* =====================
   SCROLL ANIMATION
===================== */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

/* =====================
   STORY BOOK PAGE FLIP
===================== */
const pages = document.querySelectorAll(".book");
const bookContainer = document.querySelector(".book-container");
const nextBtn = document.querySelector(".next-page-btn");

let currentPage = 0;

// fungsi flip
function flipPage() {
    pages[currentPage].classList.remove("active");

    currentPage++;

    if (currentPage >= pages.length) {
        currentPage = 0;
    }

    pages[currentPage].classList.add("active");
}

// klik tombol
nextBtn.addEventListener("click", flipPage);

// klik buku
bookContainer.addEventListener("click", flipPage);

/* =====================
   RSVP SUBMIT
===================== */
document.getElementById("rsvpForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Terima kasih atas doa dan konfirmasinya 🤍");
    this.reset();
});

document.querySelectorAll(".gallery-item img").forEach(img => {
    img.addEventListener("click", () => {
        const preview = document.createElement("div");
        preview.classList.add("gallery-preview");

        const image = document.createElement("img");
        image.src = img.src;

        preview.appendChild(image);
        document.body.appendChild(preview);

        preview.addEventListener("click", () => {
            preview.remove();
        });
    });
});

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(item => {
        item.classList.remove("active");
        if (item.getAttribute("href") === `#${current}`) {
            item.classList.add("active");
        }
    });
});

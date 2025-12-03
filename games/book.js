let currentPage = 0;

const bookPages = [
    "../imgs/book_page3.jpg",
    "../imgs/book_page4.jpg",
    "../imgs/book_page5.jpg",
    "../imgs/book_page6.jpg",
    "../imgs/book_page7.jpg",
    "../imgs/book_page8.jpg",
    "../imgs/book_page9.jpg",
    "../imgs/book_page10.jpg",
    "../imgs/book_page11.jpg",
    "../imgs/book_page12.jpg",
    "../imgs/book_page13.jpg",
    "../imgs/book_page14.jpg"
]

function progressBook() {
    var img = document.querySelector(".book img");
    var bar = document.getElementById("progressBar");

    var total = bookPages.length;
    var page = currentPage + 1;
    var percent = (page / total) * 100;

    img.src = bookPages[currentPage];
    bar.style.width = percent + "%";
}

function nextPage() {
    var last = bookPages.length - 1;

    if (currentPage < last) {
        currentPage = currentPage + 1;
        progressBook();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage = currentPage - 1;
        progressBook();
    }
}

progressBook();
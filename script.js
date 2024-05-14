window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');
    if (window.scrollY > 0) {
        navbar.style.background = 'rgba(255, 255, 255, 0.5)'; // Ubah warna latar belakang navbar saat di-scroll
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.8)'; // Kembalikan warna latar belakang saat ke atas
    }
});

function handleAboutClick() {
    alert('Halaman tidak tersedia saat ini!');
    // Prevent default link behavior to avoid actual page navigation
    event.preventDefault();
}

window.addEventListener('scroll', function() {
    var stickyAside = document.querySelector('.sticky-aside'); // Use querySelector for class
    var headerHeight = document.getElementsByTagName('header')[0].offsetHeight || 0; // Handle cases without header
    var scrollTop = window.pageYOffset;

    if (scrollTop > headerHeight) {
        showStickyAside();
    } else {
        hideStickyAside();
    }
});

let timeoutId;

window.addEventListener('mousemove', function() {
    showStickyAside();
    clearTimeout(timeoutId);

    timeoutId = setTimeout(function() {
        hideStickyAside();
    }, 8000); // Hide after 3 seconds of inactivity
});

function showStickyAside() {
    const stickyElement = document.querySelector('.sticky-aside'); // Use querySelector for class
    stickyElement.classList.add('show');
}

function hideStickyAside() {
    const stickyElement = document.querySelector('.sticky-aside'); // Use querySelector for class
    stickyElement.classList.remove('show');
}

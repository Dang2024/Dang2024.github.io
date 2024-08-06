document.addEventListener('DOMContentLoaded', function () {
    const collapseBtn = document.getElementById('collapse-btn');
    const nav = document.querySelector('header nav ul');
    
    collapseBtn.addEventListener('click', function () {
        nav.classList.toggle('show');
    });
});

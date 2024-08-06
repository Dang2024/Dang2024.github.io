document.addEventListener('DOMContentLoaded', function () {
    const collapseBtn = document.getElementById('collapse-btn');
    const sidebar = document.getElementById('sidebar');
    
    collapseBtn.addEventListener('click', function () {
        sidebar.classList.toggle('collapsed');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const resourcesLink = document.getElementById('resourcesLink');
    const dropdownMenu = document.getElementById('dropdownMenu');

    function updateDropdownPosition() {
        const rect = resourcesLink.getBoundingClientRect();
        const linkCenterX = rect.left + (rect.width / 2);
        dropdownMenu.style.left = linkCenterX + 'px';
        dropdownMenu.style.transform = 'translateX(-50%)'; // Center the dropdown menu horizontally
    }

    const dropdown = document.querySelector('.dropdown');

    dropdown.addEventListener('mouseenter', function () {
        dropdownMenu.style.display = 'block';
        updateDropdownPosition(); // Update position on hover
    });

    dropdown.addEventListener('mouseleave', function () {
        dropdownMenu.style.display = 'none';
    });

    window.addEventListener('resize', updateDropdownPosition); // Update position on window resize

    updateDropdownPosition(); // Initial position update
});
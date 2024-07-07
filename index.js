document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth > 840) {
        const resourcesLink = document.getElementById('resourcesLink');
        const dropdownMenu = document.getElementById('dropdownMenu');
        dropdownMenu.style.display="none"

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

        window.addEventListener('resize', function () {
            if (window.innerWidth> 840) {
                updateDropdownPosition();
            } else {
                dropdownMenu.style.display = 'none'; // Hide the dropdown if the window is resized to be more than 840px wide
            }
        });

        updateDropdownPosition(); // Initial position update
    }
});
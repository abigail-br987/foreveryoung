document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth > 840) {
        const resourcesLink = document.getElementById('resourcesLink');
        const dropdownMenu = document.getElementById('dropdownMenu');
        dropdownMenu.style.display="none"

        function updateDropdownPosition() {
            const rect = resourcesLink.getBoundingClientRect();
            const linkCenterX = rect.left + (rect.width / 2);
            dropdownMenu.style.left = linkCenterX + 'px';
            dropdownMenu.style.transform = 'translateX(-50%)'; 
        }

        const dropdown = document.querySelector('.dropdown');

        dropdown.addEventListener('mouseenter', function () {
            dropdownMenu.style.display = 'block';
            updateDropdownPosition(); 
        });

        dropdown.addEventListener('mouseleave', function () {
            dropdownMenu.style.display = 'none';
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth> 840) {
                updateDropdownPosition();
            } else {
                dropdownMenu.style.display = 'none'; 
            }
        });

        updateDropdownPosition(); 
    }
});
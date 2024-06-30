export const handleSmoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });

        // Set focus to the target element for accessibility
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus();
    }
};
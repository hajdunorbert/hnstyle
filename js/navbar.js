//Apply the color scheme changes

const nav = document.querySelector('nav');

function applyColorScheme(nav, color) {
    // Apply color to the <nav> element and its descendants
    nav.style.color = color;

    // Loop through the top-level children of nav
    Array.from(nav.children).forEach(child => {
        // Apply color to all children, including nested ones
        applyColorScheme(child, color);
    });
}

// Apply the color scheme changes based on the class
if (nav.classList.contains('nav-dark')) {
    applyColorScheme(nav, '#fff');
}

if (nav.classList.contains('nav-light')) {
    applyColorScheme(nav, '#000');
}

if (nav.classList.contains('nav-blue')) {
    applyColorScheme(nav, '#fff');
}

if (nav.classList.contains('nav-green')) {
    applyColorScheme(nav, '#000');
}
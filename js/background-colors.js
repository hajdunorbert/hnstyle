//Background color changer
let backgroundColorByHex = document.querySelectorAll('[class*=bg-]');
    
backgroundColorByHex.forEach(element => {
    const className = element.className;
    const colorCode = className.split('-')[1];

    // Apply the extracted color code as the background color
    element.style.backgroundColor = `${colorCode}`;
});
//Background color changer END
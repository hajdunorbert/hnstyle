 //Text color changer
 let textColorByHex = document.querySelectorAll('[class*=tc-]');
    
 textColorByHex.forEach(element => {
     const className = element.className;
     const colorCode = className.split('-')[1];

     // Apply the extracted color code as the background color
     element.style.color = `${colorCode}`;
 });
 //Text color changer END
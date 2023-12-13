const rootFolder = "js/";

//List all the js files that has been created so far

const jsFiles = ['text-color.js',
                'background-colors.js',
                'navbar.js'];


//Loop through all the js files to import them into the main project
jsFiles.forEach(file => {
    const script = document.createElement('script');
    script.src = rootFolder + file;
    document.head.appendChild(script);
});
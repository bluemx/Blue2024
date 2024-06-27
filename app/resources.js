// Configuration JSON
const importsConfig = {
    css: [
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
      "https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/css/glide.core.min.css",
      "https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/css/glide.theme.min.css",
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css",
      "https://fonts.googleapis.com/css?family=Muli:400,700|Open+Sans+Condensed:700",
      "https://cdn.plyr.io/3.7.8/plyr.css",
      "app/css/style.css",
      "app/css/estilos-blue.css"
      
    ],
    js: [
      "https://code.jquery.com/jquery-3.7.1.min.js",
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
      "https://cdn.jsdelivr.net/npm/@glidejs/glide",
      "https://unpkg.com/microlang/MicroLang.min.js",
      "https://unpkg.com/@bluemx/blue-components",
      "https://cdn.plyr.io/3.7.8/plyr.js",
      "app/js/importer.js",
      "app/js/app.js",
      "app/js/form.js",
    ]
  };
  
  // Function to dynamically import CSS files
  function importCSS(url) {
    return new Promise((resolve, reject) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = url;
      link.onload = resolve;
      link.onerror = reject;
      document.head.appendChild(link);
    });
  }
  
// Function to dynamically import JavaScript files with sequential loading
function importJS(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;

    // Append the script to the document body
    document.body.appendChild(script);
  });
}

// Import all CSS files
Promise.all(importsConfig.css.map(importCSS))
  .then(() => {
    // All CSS files are loaded, proceed to load JS files sequentially
    return importsConfig.js.reduce((chain, url) => {
      return chain.then(() => importJS(url));
    }, Promise.resolve());
  })
  .then(() => {
    // All JS files are loaded
    console.log("All resources loaded successfully.");
  })
  .catch((error) => {
    console.error("Error loading resources:", error);
  });
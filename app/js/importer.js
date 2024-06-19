function loadImports() {
    return new Promise((resolve, reject) => {
        const importers = document.querySelectorAll('importer');
        const promises = [];

        function loadNestedImports(element) {
            const nestedImporters = element.querySelectorAll('importer');
            nestedImporters.forEach(nestedImporter => {
                const nestedSrc = nestedImporter.getAttribute('src');
                if (nestedSrc) {
                    promises.push(
                        fetch(nestedSrc)
                            .then(response => response.text())
                            .then(nestedHtml => {
                                nestedImporter.innerHTML = nestedHtml;
                                executeScripts(nestedImporter);
                                loadNestedImports(nestedImporter);
                            })
                            .catch(error => console.error(`Error loading component from ${nestedSrc}:`, error))
                    );
                }
            });
        }

        function executeScripts(element) {
            const scripts = element.querySelectorAll('script');
            scripts.forEach(oldScript => {
                const newScript = document.createElement('script');
                newScript.textContent = oldScript.textContent;
                Array.from(oldScript.attributes).forEach(attr => {
                    newScript.setAttribute(attr.name, attr.value);
                });
                oldScript.replaceWith(newScript);
            });
        }

        importers.forEach(importer => {
            const src = importer.getAttribute('src');
            if (src) {
                promises.push(
                    fetch(src)
                        .then(response => response.text())
                        .then(html => {
                            importer.innerHTML = html;
                            executeScripts(importer);
                            loadNestedImports(importer);
                        })
                        .catch(error => console.error(`Error loading component from ${src}:`, error))
                );
            }
        });

        Promise.all(promises)
            .then(() => resolve())
            .catch(error => reject(error));
    });
}

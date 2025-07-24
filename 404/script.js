document.body.addEventListener('dblclick', function() {
    const newTab = window.open('about:blank', '_blank');
    newTab.document.write(`
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>body,html{margin:0;padding:0;height:100%;overflow:hidden;}</style>
        </head>
        <body>
            <iframe frameborder="0" style="overflow:hidden; height:100%; width:100%; position:absolute; top:0; left:0; right:0; bottom:0" src="https://apptos.pages.dev/"></iframe>
        </body>
        </html>
    `);
});

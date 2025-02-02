document.body.addEventListener('dblclick', function() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const newTab = window.open('about:blank', '_blank');
    if (isMobile) {
        newTab.document.write('<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body><iframe frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0%;left:0px;right:0px;bottom:0px" height="100%" width="100%" src="https://apptos.pages.dev/Mobile/"></iframe></body></html>'); // Lien pour mobile
    } else {
        newTab.document.write('<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body><iframe frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0%;left:0px;right:0px;bottom:0px" height="100%" width="100%" src="https://apptos.pages.dev/"></iframe></body></html>'); // Lien pour ordinateur
    }
});

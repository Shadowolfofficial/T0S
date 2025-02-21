document.getElementById('copyEmailButton').addEventListener('dblclick', function(event) {
    event.preventDefault();
    const emailText = document.getElementById('emailAddress').innerText;
    const textarea = document.createElement('textarea');
    textarea.value = emailText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Adresse e-mail copiée : ' + emailText);
});

function addDoubleClickListener(elementId, url) {
    var element = document.getElementById(elementId);
    if (element) {
        element.addEventListener('dblclick', function(e) {
            if (e.ctrlKey) {
                return;
            } else {
                var newTab = window.open('about:blank', '_blank');
                newTab.document.write('<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body><iframe frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0%;left:0px;right:0px;bottom:0px" height="100%" width="100%" src="' + url + '"></iframe></body></html>');
            }
        });
    }
}

// Vérification si le dispositif est mobile ou non, et ajout des événements de double-clic
if (/Mobi|Android|iPad|iPhone/i.test(navigator.userAgent)) {
    document.getElementById('2.securityboot').addEventListener('dblclick', function() {
        window.location.href = 'https://thunderos.glitch.me/app';
    });
} else {
    addDoubleClickListener('2.securityboot', 'https://apptos.pages.dev/');
}

addDoubleClickListener('1.securityboot', 'https://apptos.pages.dev/');
addDoubleClickListener('3.securityboot', 'https://raw.githack.com/Shadowolfofficial/Tos/main/peb.html');
addDoubleClickListener('4.securityboot', 'https://raw.githack.com/Shadowolfofficial/appshop/main/thunderbrows.html?baseUrl=s9age');

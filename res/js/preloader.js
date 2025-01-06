const commandText = document.getElementById('commandText');
        var loader = document.getElementById("glitchloader");

            window.addEventListener("DOMContentLoaded", function () {
            setTimeout(function () {
                const responseSpan = document.createElement('span');
                responseSpan.textContent = 'SYSTEM:  BASE CONTENT LOADED...';
                commandText.parentNode.appendChild(responseSpan);
            }, 2000);
        });

        window.addEventListener("load", function () {
            setTimeout(function () {
                const responseSpan = document.createElement('span');
                responseSpan.textContent = 'SYSTEM:  RESOURCES LOADED...';
                commandText.parentNode.appendChild(responseSpan);

                const loadedSpan = document.createElement('span');
                loadedSpan.textContent = 'SYSTEM:  BIENVENUE SUR DASHOVERFLOW :)';
                commandText.parentNode.appendChild(loadedSpan);

                setTimeout(function () {
                    loader.style.display = 'none';
                }, 2000);
            }, 2000);
        });


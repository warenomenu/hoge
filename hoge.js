(function () {
    'use strict';
    const pushButton = document.getElementById('btn');
    const clearButton = document.getElementById('clear');
    const mainDiv = document.getElementById('main');
    const headDiv = document.getElementById('header');

    var count = 0;

    pushButton.onclick = () => {
        const anchor = document.createElement('p');
        count++;
        anchor.innerText = count + " times.";
        mainDiv.appendChild(anchor);
        headDiv.innerText = "push count:" + count;
    };

    clearButton.onclick = () => {
        while(mainDiv.firstChild){
            mainDiv.removeChild(mainDiv.firstChild);
        }
        count = 0;
        mainDiv.innerText = "main";
        headDiv.innerText = "push count:" + count;
    };
})();

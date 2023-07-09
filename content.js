chrome.runtime.onMessage.addListener(
    function(request, _, _) {
        let weeks = request.weeks;
        let shouldUpdateInstantly = request.instantUpdate;
        let elements = document.getElementsByClassName('week interactive');

        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove('clicked');
        }

        for(let i = 0; i < weeks && i < elements.length; i++) {
            if (shouldUpdateInstantly) {
                elements[i].classList.add('clicked');
            } else {
                setTimeout(() => {
                    elements[i].classList.add('clicked');
                }, i * 10);
            }
        }
    }
);


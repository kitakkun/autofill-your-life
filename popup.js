document.getElementById('submit').addEventListener('click', () => {
    let birthday = document.getElementById('birthday').value;

    let birthDate = new Date(birthday);
    // advance 1 year because it starts with 1 year old
    birthDate.setFullYear(birthDate.getFullYear() + 1);

    let currentDate = new Date();
    
    let diffMs = currentDate - birthDate;
    let weeks = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 7));

    let instantUpdate = document.getElementById('instantUpdate').checked;

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {weeks: weeks, instantUpdate: instantUpdate})
            .then(_ => { window.close(); })
            .catch(err => { console.log(err); });
    });
});


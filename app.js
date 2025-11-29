function saveData(e) {
    e.preventDefault();

    const nameValue = document.getElementById('parentName').value.trim();
    const emailValue = document.getElementById('email').value.trim();
    const passwordValue = document.getElementById('password').value.trim();

    localStorage.setItem('parentName', nameValue);
    localStorage.setItem('email', emailValue);
    localStorage.setItem('password', passwordValue);

    console.log('reg info added to localstorage');

    window.location.href = 'home.html';
}

function selectBtn(btn) {
    const current = btn.style.border;

    if (current === "2px solid #FFD372" || current === "2px solid rgb(255, 211, 114)") {
        btn.style.border = "1px solid #DFDFDF";
    }
    else {
        btn.style.border = "2px solid #FFD372";
    }
}

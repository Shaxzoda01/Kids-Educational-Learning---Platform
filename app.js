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


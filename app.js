function saveData(e) {
    e.preventDefault()

    var nameValue = document.getElementById('parentName').value.trim()
    var emailValue = document.getElementById('email').value.trim()
    var passwordValue = document.getElementById('password').value.trim()

    localStorage.setItem('parentName', nameValue)
    localStorage.setItem('email', emailValue)
    localStorage.setItem('password', passwordValue)

    console.log('reg info added to localstorage')

    window.location.href = 'home.html'
}
window.addEventListener("DOMContentLoaded", function () {
    var usernameField = document.getElementById('user-name')
    var username2Field = document.getElementById('user-name2')

    var emailField = document.getElementById('user-email')
    var email2Field = document.getElementById('user-email2')

    var userPassword = document.getElementById('user-password')

    var name = localStorage.getItem('parentName')
    var email = localStorage.getItem('email')
    var password = localStorage.getItem('password')
    var masked = "•".repeat(password.length)

    usernameField.textContent = name
    username2Field.textContent = name
    emailField.textContent = email
    email2Field.textContent = email
    userPassword.textContent = masked
})

function selectBtn(btn) {
    var current = btn.style.border

    if (current === "2px solid #FFD372" || current === "2px solid rgb(255, 211, 114)") {
        btn.style.border = "1px solid #DFDFDF"
    }
    else {
        btn.style.border = "2px solid #FFD372"
    }
}


function editName() {
    var username = document.getElementById('user-name2')
    var oldValue = localStorage.getItem('parentName')

    username.innerHTML = `<input id="editNameInput" type="text" class="edit-inputs" value="${oldValue}">`

    var input = document.getElementById('editNameInput')

    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            var newName = input.value

            localStorage.setItem("parentName", newName)

            username.textContent = newName
        }
    })
}

function editEmail() {
    const wrapper = document.getElementById('user-email2')
    const oldValue = localStorage.getItem('email')

    wrapper.innerHTML = `<input id="editEmailInput" class="edit-inputs" type="email" value="${oldValue}" >`

    const input = document.getElementById('editEmailInput')

    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            const newValue = input.value
            localStorage.setItem('email', newValue)
            wrapper.textContent = newValue
        }
    })
}

function editPassword() {
    const wrapper = document.getElementById('user-password')
    const oldValue = localStorage.getItem('password')

    wrapper.innerHTML = `<input id="editPasswordInput" class="edit-inputs" type="password" value="${oldValue}">`

    const input = document.getElementById('editPasswordInput')

    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            const newValue = input.value
            localStorage.setItem('password', newValue)

            wrapper.textContent = "•".repeat(newValue.length)
        }
    })
}

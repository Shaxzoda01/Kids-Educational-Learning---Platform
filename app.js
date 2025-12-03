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


var first = null;
var completedGames = 0;
var totalGames = 4;

var currentGame = 1;
var totalGameStages = 5;

function updateProgress() {
    var bar = document.getElementById("progressBar");

    var progress = (completedGames / totalGames) * 100;
    bar.style.width = progress + "%";

    if (completedGames === totalGames) {
        document.getElementById("nextBtn").style.display = "block";
    }
}

function selectBtn(btn) {
    if (first === null) {
        first = btn;
        first.style.border = "2px solid #FFD372";
        return
    }

    var second = btn;
    second.style.border = "2px solid #FFD372";


    var f = first;
    var s = second;

    const fText = f.textContent;
    const sText = s.textContent;

    if (f.textContent.length === Number(second.textContent) * 2 ||
        s.textContent.length === Number(first.textContent) * 2) {

        f.style.backgroundImage = "url('../imgs/green.svg')";
        s.style.backgroundImage = "url('../imgs/green.svg')";

        f.textContent = "";
        s.textContent = "";

        f.disabled = true;
        s.disabled = true;

        completedGames++;
        updateProgress();

        f.style.border = "";
        s.style.border = "";

        first = null;
    } else {
        f.style.backgroundImage = "url('../imgs/red.svg')";
        s.style.backgroundImage = "url('../imgs/red.svg')";

        f.textContent = "";
        s.textContent = "";

        setTimeout(function () {
            f.style.backgroundImage = "";
            s.style.backgroundImage = "";
            f.style.border = "";
            s.style.border = "";

            f.textContent = fText;
            s.textContent = sText;
        }, 500);

        first = null;
    }
}

function nextGame() {
    document.getElementById("game" + currentGame).style.display = "none";

    currentGame++;
    if (currentGame > totalGameStages) {
        document.getElementById("game" + currentGame).textContent = `
            <img src="../imgs/Group 66.svg" alt="">
        `
        document.getElementById("nextBtn").style.display = "none";
        return
    }

    document.getElementById("game" + currentGame).style.display = "grid";

    completedGames = 0;
    totalGames = 4;
    document.getElementById("progressBar").style.width = "0%";

    document.getElementById("nextBtn").style.display = "none";
}


let cookiesCondition = document.getElementById("cookiesCondition")
let accept = document.querySelector("#accept")
let leaveSite = document.querySelector("#leaveSite")
let myBody = window.body;
let signup = document.querySelector("#signup");
let signin = document.querySelector("#signin");
let loginSection = document.querySelector("#loginSection")
let forgotPwd = document.querySelector("#forgotPwd");
let closeSignin = document.querySelector("#closeSignin")
let profile = document.querySelector("#profile")
let profileIsOpen = false;
let aside = document.querySelector("aside");
let chatLink = document.querySelector("#chatLink")
let chatPhoto = document.querySelector("#chatholder")
let chatPhoto_hover = false;
let profileField = document.querySelector("#profileField")
let img3 = document.querySelector("#img3")
let profileTopHidden = document.querySelector("#profileTopHidden")
let closeBtns = document.getElementsByClassName("closeSignin")

for (let i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener("click", ()=> {
        closeBtns[i].parentElement.style.display="none"
    })
}

accept.addEventListener("click", ()=> {
    cookiesCondition.classList.toggle("bg-success")
    cookiesCondition.firstElementChild.textContent = "Thank you for accepting our policies!"
    cookiesCondition.firstElementChild.style.color = "white"
    accept.style.display = "none"
    leaveSite.style.display = "none"
    setTimeout(()=> {
        cookiesCondition.classList.toggle("d-none")
    }, 2000)
})

leaveSite.addEventListener("click", ()=> {
    cookiesCondition.style.backgroundColor = "red"
    cookiesCondition.firstElementChild.textContent = "Hope to see you soon again!"
    cookiesCondition.firstElementChild.style.color = "white"
    accept.style.display = "none"
    leaveSite.style.display = "none"
    setTimeout(()=> {
        myBody.classList.toggle = "bg-warning"
        alert("Bye!")
    }, 1000)
})

signin.addEventListener("click", ()=> {
    signin.style.visibility = "hidden"
    signup.style.visibility = "hidden"
    loginSection.style.display = "flex"
    forgotPwd.style.display = "block"
})

closeSignin.addEventListener("click", ()=> {
    loginSection.style.display = "none"
    signin.style.visibility = "initial"
    signup.style.visibility = "initial"
})

profile.addEventListener("click", ()=> {
    profileIsOpen = !profileIsOpen
    if (profileIsOpen) {
        aside.style.width = "480px"
        profile.textContent = "Channel v"
        profileField.style.display = "flex"
    } else {
        aside.style.width = "120px"
        profile.textContent = "Channel >"
        profileField.style.display = "none"
    }
})

chatPhoto.addEventListener('mouseover', () => {
    chatPhoto_hover = true
    if (chatPhoto_hover) {
        chatLink.style.right = "70px";
    }
})

chatPhoto.addEventListener("mouseout", ()=> {
    chatPhoto_hover = false;
    chatLink.style.right = "-200px"
})

img3.addEventListener("mouseover", ()=> {
    profileTopHidden.style.display = "flex"
})
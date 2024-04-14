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
let ifNot = document.querySelector("#ifNot")
let img3 = document.querySelector("#img3")
let profileTopImgHidden = document.querySelector("#profileTopImgHidden")
let profileTopImgHidden_isHover = false;


accept.addEventListener("click", ()=> {
    cookiesCondition.classList.toggle("bg-success")
    cookiesCondition.firstElementChild.textContent = "Thank you for accepting our policies!"
    ifNot.textContent = ""
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
    ifNot.textContent = ""
    cookiesCondition.firstElementChild.style.color = "white"
    accept.style.display = "none"
    leaveSite.style.display = "none"
    setTimeout(()=> {
        myBody.classList.toggle = "bg-warning"
        alert("Bye!")
    }, 1000)
})

signin.addEventListener("click", ()=> {
    signin.style.display = "none"
    signup.style.display = "none"
    loginSection.style.display = "flex"
    forgotPwd.style.display = "block"
})

closeSignin.addEventListener("click", ()=> {
    loginSection.style.display = "none"
    signin.style.display = "initial"
    signup.style.display = "initial"
})

profile.addEventListener("click", ()=> {
    profileIsOpen = !profileIsOpen
    if (profileIsOpen) {
        aside.style.width = "480px"
        profile.textContent = "Profile v"
        profileField.style.display = "flex"
    } else {
        aside.style.width = "120px"
        profile.textContent = "Profile >"
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

// img3.addEventListener("mouseover", ()=> {
//         profileTopImgHidden.style.display = "flex"
// })
// img3.addEventListener("mouseout", ()=> {
//     profileTopImgHidden.style.display = "none"

// })

let password = document.querySelector("#myPassword");
let show = document.querySelector(".show");
let container = document.querySelector(".container");

document.addEventListener("keyup", function(e){
    let passwordValue = password.value;
    let strengthValue = strength(passwordValue);
    
    if (strengthValue <= 2){
        container.classList.add("weak");
        container.classList.remove("medium");
        container.classList.remove("strong");
    } else if (strengthValue <= 4){
        container.classList.remove("weak");
        container.classList.add("medium");
        container.classList.remove("strong");
    } else {
        container.classList.remove("weak");
        container.classList.remove("medium");
        container.classList.add("strong");
    }
});

show.onclick = function(){
    if (password.type === "password"){
        password.setAttribute("type", "text");
        show.classList.add("hide");
    } else {
        password.setAttribute("type", "password");
        show.classList.remove("hide");
    }
};

// Password strength calculation (Use NIST password guidelines)
// https://blog.netwrix.com/2022/11/14/nist-password-guidelines/
function strength(password){
    let i = 0;
    if (password.length > 6){
        i++;
    }
    if (password.length >= 10){ 
        i++;
    }
    if (/[A-Z]/.test(password)){
        i++;
    }
    if (/[0-9]/.test(password)){
        i++;
    }
    if (/[A-Za-z0-9]/.test(password)){ 
        i++;
    }
    return i;
}

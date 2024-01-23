let underDiv3 = document.querySelector(".underDiv3");
let cloneUnderDiv3 = underDiv3.cloneNode(true);
let ajouter = document.querySelector(".firstBtn"); 
let div3 = document.querySelector(".div3");
let firstText = document.querySelector(".firstText");
let secondText = document.querySelector(".secondText");
let valider = document.querySelector(".btnValider")
let btnModif = document.querySelector(".btnModif")
let btnSuppr = document.querySelector(".btnSuppr")
let fini = document.querySelector(".btnFini")


function Supprimer() {
    let allButtonSuppr = div3.querySelectorAll(".underDiv3")[1].querySelectorAll(".divText2")
    
    allButtonSuppr.forEach(element=>{
    element.querySelector(".btnSuppr").addEventListener("click", () =>{
    element.parentElement.remove();
    
});
});
}


function Valider() {
    let allButtonValider = div3.querySelectorAll(".underDiv3")[1].querySelectorAll(".divText2")
    
    allButtonValider.forEach(element=>{
    element.querySelector(".btnValider").addEventListener("click", () =>{
        element.parentElement.classList.toggle("green")
    })
});
}





ajouter.addEventListener("click", () => {
    cloneUnderDiv3 = underDiv3.cloneNode(true); 
    cloneUnderDiv3.querySelector(".secondText").value = firstText.value 
    if (firstText.value == "") {
        return false;
    } else{
        div3.appendChild(cloneUnderDiv3);
        
    }

    
Valider();
Supprimer();

})








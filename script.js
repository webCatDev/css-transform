const kutu= document.getElementById("kutu")
const menu = document.getElementById("menu-btn");
const radioButtons= document.querySelectorAll("input")
const labels= document.querySelectorAll("label")
const secenekler = document.querySelector("aside");

menu.addEventListener("click", ()=>{
secenekler.classList.toggle("aktif")
})

for(const label of labels){
    label.addEventListener("input", ()=>{
        console.log(label.previousElementSibling)
        kutu.style.transform=label.children[0].innerText;
    })
}

for(const checkedRadioButton of radioButtons){
    checkedRadioButton.addEventListener("click", ()=>{
        console.log("clicked")
        kutu.style.transform=checkedRadioButton.value;
        checkedRadioButton.nextElementSibling.children[0].innerText=checkedRadioButton.value
    })
}
function createBox() {
    let wrapper = document.getElementById("wrapper");
    let box = document.createElement("div");
    box.id = "box";
    let text = document.createTextNode("JS");
    box.appendChild(text);
    wrapper.appendChild(box);
}
const inputValue = document.getElementById("input");
const button = document.getElementById("submit");
let xRunFunc;


button.addEventListener("click", () => {
    xRunFunc = inputValue.value;
    for (let i = 0; i <= xRunFunc; i++)
        createBox();
    console.log(`the xRunFunc is ${xRunFunc}`);
    console.log(`the inputValue is ${inputValue}`);
})
const inputValue2 = document.getElementById("input2");
const button2 = document.getElementById("submit2");
let link;

button2.addEventListener("click", () => {
    link = inputValue2.value;
    console.log(link)
    let boxBackGround = document.createElement("img")
    box.style.background = url(link);
})
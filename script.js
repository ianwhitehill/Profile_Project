function changeName() {
    var userName = document.querySelector("#myName")
    userName.innerText = "Ian Whitehill"
}

function removePhil(element) {
    var div = document.querySelector("#Phil")
    element.remove()
    div.remove()
    console.log(element)
}

function removeTod(element) {
    var div = document.querySelector("#Todd")
    element.remove()
    div.remove()
    console.log(element)
}
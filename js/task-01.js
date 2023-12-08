const listWithId = document.querySelector('#categories')
const menuByTagName = listWithId.querySelectorAll(".item")
console.log("Number of categories: ", menuByTagName.length)
console.log("")

for (let item of menuByTagName) {
    const boxTitle = item.querySelector('h2').innerText
    const boxLength = item.querySelectorAll('li').length
    console.log(boxTitle)
    console.log(boxLength)
    console.log("")
}
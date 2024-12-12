


async function getUser() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let myJ = await response.json()
    console.log(typeof(myJ))
    return myJ
}


getUser().then(json => {
    for (let i = 0; i < json.length; i++) {
        let myList = document.createElement("ul")
        let myP = document.createElement("li")
        myP.innerHTML = JSON.stringify(json[i].address.street)
        myList.append(myP)
        document.body.append(myList)
    }
})

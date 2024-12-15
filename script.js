let mainProfileDiv = document.getElementById("profileDiv")

async function getUserData() { // Will take (actual) Name, Username
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let myData = await response.json()
    return myData
}

async function getPostData() { // Will take (actual) Name, Username
    let response = await fetch('https://jsonplaceholder.typicode.com/comments')
    let myData = await response.json()
    return myData
}

async function getPhotoData() { // Will take the profile picture of the user
    let response = await fetch('https://unsplash.it/1920/1080?random')
    let myPhoto = await response.blob()
    return myPhoto
}

async function createProfiles() {
    for (let i = 0; i < 10 ; i++) {
        let myDiv = document.createElement("div")
        let myPfp = document.createElement("img")
        let myName = document.createElement("h2")
        let myUsername = document.createElement("h3")
        let myPostName = document.createElement("p")
        let myPost = document.createElement("p")
        myDiv.setAttribute("class", "profile")
        myPostName.setAttribute("class", "postName")
        myPost.setAttribute("class", "post")
        


        try {
            // Fetch and set user data
            const userData = await getUserData()
            myName.textContent = userData[i].name
            myUsername.textContent = "@" + userData[i].username

            // Fetch and set post data
            const postData = await getPostData();
            myPostName.textContent = postData[i].name;
            myPost.textContent = postData[i].body

            // Fetch and set photo data
            const photoData = await getPhotoData()
            myPfp.setAttribute("src", URL.createObjectURL(photoData))
        } catch (error) {
            console.error("Error fetching data:", error)
        }

        // Append all elements to the div
        myDiv.appendChild(myPfp)
        myDiv.appendChild(myName)
        myDiv.appendChild(myUsername)
        myDiv.appendChild(myPostName)
        myDiv.appendChild(myPost)
        mainProfileDiv.appendChild(myDiv)
    }
}

createProfiles()
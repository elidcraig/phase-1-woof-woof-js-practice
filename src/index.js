document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/pups')
    .then(resp => resp.json())
    .then(doggoData => {
        const dogBar = document.querySelector('#dog-bar')
        doggoData.forEach(pup => {
            const newSpanElement = document.createElement('span')
            newSpanElement.textContent = pup.name
            dogBar.appendChild(newSpanElement)
        })        
    })
})

// When a user clicks on a pup's span in the div#dog-bar, that pup's info 
// (image, name, and isGoodDog status) should show up in the div with the id of "dog-info". 

// Display the pup's info in the div with the following elements:

// an img tag with the pup's image url
// an h2 with the pup's name
// a button that says "Good Dog!" or "Bad Dog!" based on whether isGoodDog is true or false.
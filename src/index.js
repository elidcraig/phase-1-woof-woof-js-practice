document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/pups')
    .then(resp => resp.json())
    .then(doggoData => {
        const dogBar = document.querySelector('#dog-bar')
        for(pup of doggoData) {
            const newSpanElement = document.createElement('span')
            newSpanElement.textContent = pup.name
            dogBar.appendChild(newSpanElement)
        }
    })
})
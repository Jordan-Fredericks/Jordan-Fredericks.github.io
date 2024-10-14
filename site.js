// JS Script linking test code

// function test(event)
// {
//     console.log(event.target.closest ('body'))
// }

// const back = document.querySelector('body')
// back.addEventListener('click', test)

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const welcome = document.querySelector('#welcome')

if (isMorning)
    welcome.textContent = 'Good Morning'
else if (isAfternoon)
    welcome.textContent = 'Good Afternoon'
else
    welcome.textContent = 'Good Evening'

localStorage.setItem("It's a secret to everybody.", 'I really hope this is a secret message that no-one can see.')

//Assignment 5 Code
const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

const prevButton = document.querySelector('#prev')
const nextButton = document.querySelector('#next')

prevButton.addEventListener('click', () => {
    currentImage--
    showImages()
})
nextButton.addEventListener('click', () => {
    currentImage++
    showImages()
})

setInterval(() => {
    currentImage++
    showImages()
}, 5000);

//Assignment 6 Code

//Function to render the list when the page is loaded and when a new item is added
const renderTodos = () => {}

//Watch for a button press, then add the item to the array
const todoButton = document.querySelector('#todoButton')

todoButton.addEventListener('click', () => {

})

// Get the list from local storage
const todos = JSON.parse(localStorage.getItem('todo-list')) || []

// Add a new item to the list
todos.push({ text: input.value, completed: false })

// Save the list to local storage
localStorage.setItem('todo-list', JSON.stringify(todos))

// Clear the li's before we recreate them
todoList.innerHTML = ''

// Create and add new list items to the DOM
const li = document.createElement('li')
li.textContent = todo.text
todoList.append(li)

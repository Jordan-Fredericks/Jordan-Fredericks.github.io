function test(event)
{
    const html = document.querySelector('html')
    html.style.backgroundColor = 'white'
    back.style.backgroundColor = 'white'
    console.log(event.target.closest ('body'))
}

const back = document.querySelector('body')
back.addEventListener('click', test)
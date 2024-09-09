function test(event)
{
    //console.log(event.target.parentElement)
    //console.log(event.target.closest ('body'))
    const html = document.querySelector('html')
    html.style.backgroundColor = 'white'
    back.style.backgroundColor = 'white'
}

const back = document.querySelector('body')
back.addEventListener('click', test)
function test(event)
{
    console.log(event.target.closest ('body'))
}

const back = document.querySelector('body')
back.addEventListener('click', test)
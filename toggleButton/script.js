let toggleTrack = document.getElementsByClassName('toggleTrack')[0]
let toggler = document.getElementsByClassName('toggler')[0]
let heading = document.getElementsByTagName('h1')[0]
let body = document.body

toggler.addEventListener('click',(e)=>{
    toggler.classList.toggle('active1')
    toggleTrack.classList.toggle('active')
    body.classList.toggle('dark')
    if(heading.innerText == 'This is Light Mode'){
        heading.innerText = 'This is the Dark Mode'
    }else{
        heading.innerText = 'This is Light Mode'
    }
})
// Get th modal element
var modal = document.getElementById('simpleModal');
// Get open modal buttton
var modalBtn = document.getElementById('modalBtn');
//Get close btn
//Notice here that we used getElementsByClassName which returns the array of instance se we need to specifically say that we want the first element only
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal)
//Listen to close click
closeBtn.addEventListener('click', closeModal)
// Listen for outside click
window.addEventListener('click', clickOutside)

// Function openModal
function openModal(){
    modal.style.display = 'block'
}

//Function closeModal
function closeModal(){
    modal.style.display = 'none'
}

//Function to close modal when clicked outside
// Here we used event in order to make the outside click work on modal only and do not target the other content
function clickOutside(e){
    if(e.target == modal){
        modal.style.display = 'none'
    }
    
}
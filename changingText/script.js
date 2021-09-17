let changer = document.getElementById('changer')

let content = ['Tony Stark','Genius', 'Playboy', 'Philanthropist']

// document.addEventListener('DOMContentLoaded',()=>{
//     console.log(changer)
    let i = 0
    setInterval(()=>{
        if(i < 4){
            // writer Function writer(content[i])
            writer(content[i])
            i++
        }
        else{
            i = 0
        }
    },1500)
// })

function writer(str){
    let i = 0
    let j = str.length - 1
    let writtenChars = str
    setInterval(()=>{
        if(i < str.length){
            
            changer.innerText = writtenChars.slice(0,i+1)
            i++
        }else{
            if(j < 0) return null
            changer.innerText = writtenChars.slice(0,j)
            j--
        }
    },80)
}
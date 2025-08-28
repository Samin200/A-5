let coinBar = document.getElementById('coin-bar')
let coin = 100
const buttons = document.getElementsByClassName('call-btn')
for(let i=0  ; i < buttons.length ; i++){
    buttons[i].addEventListener(
    'click' , function(){
            coin -= 20  
            coinBar.textContent = coin
            const name = this.parentElement.parentElement.parentElement.children[0].children[1].textContent
            const number = this.parentElement.parentElement.parentElement.children[1].children[0].textContent
            
            const callHistory = document.getElementById("call-history")
            let history = document.createElement('div')
            const div = document.createElement('div')
            const div2 = document.createElement('div')
            const div3 = document.createElement('div')
            const div4 = document.createElement('div')
            let now = new Date();
            let currentTime = now.toLocaleTimeString('en-US', { hour:'2-digit', minute: '2-digit', second: '2-digit' })
            history.classList.add("history" ,"flex","justify-between" ,"p-[16px]" ,"items-center" ,"rounded-2xl" ,"bg-[#FAFAFA]")
            history.appendChild(div)
            div.appendChild(div2)
            div.appendChild(div3)
            history.appendChild(div4)
            div2.classList.add("font-bold")
            div3.classList.add("text-gray-500")
            div4.classList.add("text-gray-700")
            div4.innerText = currentTime
            div2.innerText = name
            div3.innerText = number
        if(coin < 20){
            alert("Cancel Call")
            coin +=20
        }
        else{
            
            alert(name + ' ' + number)
            callHistory.append(history)
        }
        document.getElementById('clear-btn').addEventListener("click", function(){
            history.classList.add("hidden")
        })
    }
)
}
let heart = 0
const favBtn = document.getElementsByClassName('fav-btn')
for(let i=0  ; i < favBtn.length ; i++){
    favBtn[i].addEventListener('click' , function(){
        favBtn[i].style.color = 'red'
        heart = heart + 1
        document.getElementById('heart-bar').textContent = heart
        
    })
}
let copy = 0
let copyBtn = document.getElementsByClassName('copy-btn')
for(let i=0  ; i < copyBtn.length ; i++){
        copyBtn[i].addEventListener('click' , function(){
        copy = copy + 1
        const number = this.parentElement.parentElement.parentElement.children[1].children[0].textContent
        document.getElementById('copy-bar').textContent = copy
        navigator.clipboard.writeText(number)
        alert('Copied to Clipboard')
    })
    
}
document.getElementById('clear-btn').addEventListener("click", function(){

})



let coinBar = document.getElementById('coin-bar')
let coin = 100
const buttons = document.getElementsByClassName('call-btn')
for(let i=0  ; i < buttons.length ; i++){
    buttons[i].addEventListener(
    'click' , function(){
        coin = coin - 20
        if(coin < 0){
            alert("Cancel Call")
        }
        else{
            coinBar.textContent = coin
            const number = this.parentElement.parentElement.parentElement.children[0].children[1].textContent
            const name = this.parentElement.parentElement.parentElement.children[1].children[0].textContent
            alert(number + ' ' + name)
        }
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

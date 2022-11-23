const email = document.querySelector('.email')
const password = document.querySelector('.password')
const submit = document.querySelector('.submit')

const steItem = ()=>{
    if (email.value == "" || password.value == "") {
        alert("Iltimos malumotlarni oxirgacha kiriting")    
    }else{
        localStorage.setItem('Username', email.value)
        localStorage.setItem('Password', password.value)
        window.location.pathname = 'https://www.youtube.com/'
    }
}
submit.addEventListener('click' , steItem)
    



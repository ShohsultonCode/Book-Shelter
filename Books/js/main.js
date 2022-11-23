let allImages; 
const viewBooks  = document.querySelector('.viewbooks');

function logOut() {
    window.close()
 }
 const leave = document.querySelector('.leave')
leave.addEventListener('click', logOut)

const getImages = () => {
   fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        allImages = data;
        makeImages(allImages);
    });
    
   }
   const makeImages = (data) => {
       data.forEach((item, index) => {      
          
            const viewDiv = document.createElement('div')
            const imgDiv = document.createElement('div')
            const img = document.createElement('img')
            const descriptions = document.createElement('div')
            
            const booksdescription = document.createElement('div')
            const bookName = document.createElement('h1')
            const bookAuthor = document.createElement('p')
            const extraDiv = document.createElement('div')
            const bookmark = document.createElement('button')
            const moreInfo = document.createElement('button')
            const reload = document.createElement('button')
            
            viewBooks.appendChild(viewDiv)
            viewDiv.appendChild(imgDiv)
            imgDiv.appendChild(img)
            viewDiv.appendChild(descriptions)
            descriptions.appendChild(booksdescription)
            booksdescription.appendChild(bookName)
            booksdescription.appendChild(bookAuthor)
            viewDiv.appendChild(extraDiv)
            extraDiv.appendChild(bookmark)
            extraDiv.appendChild(moreInfo)
            extraDiv.appendChild(reload)
            
            viewDiv.classList = 'viewdiv'
            imgDiv.classList = 'imgdiv'
            img.classList = "photos"
            descriptions.classList = 'descriptions'
            booksdescription.classList = 'bookdescription'
            bookName.classList = 'bookname'
            bookAuthor.classList = 'bookauthor'
            extraDiv.classList = 'extradiv'
            bookmark.classList = 'bookmark'
            moreInfo.classList = 'moreinfo'
            reload.classList = 'reload'
    
            bookmark.innerHTML = 'Bookmark'
            moreInfo.innerHTML = 'More Info'
            reload.innerHTML = 'Read'
            
            img.src = item.image
            bookName.innerHTML = `$${item.price}` 
            bookAuthor.innerHTML = item.title


            
            
        })
        
        
     
     const addBookMarks = document.querySelectorAll('.bookmark')
     const moveName = document.querySelectorAll('.bookname')
     const moveAuthro = document.querySelectorAll('.bookauthor')
     const reload = document.querySelectorAll('.reload')
        

     addBookMarks.forEach((event, i)=>{
         event.addEventListener('click', ()=>{
             const movedElement = document.querySelector('.movelement')
             const savedElements = document.createElement('div')
             const cancel  =document.createElement('img')
             const movedName = document.createElement('h1')
             const movedAuthro = document.createElement('p')
             
             localStorage.setItem('BooksName', JSON.stringify(moveName[i].innerHTML))
             localStorage.setItem('BookAuthro', JSON.stringify(moveAuthro[i].innerHTML))
            
            movedElement.appendChild(savedElements)
            savedElements.appendChild(cancel)
            savedElements.appendChild(movedName)
            savedElements.appendChild(movedAuthro)  
            savedElements.classList = 'savedelements'
            movedName.classList = 'movedname'
            movedAuthro.classList = 'movedauthro'
            cancel.classList = 'cancel'


            
            
            movedName.innerHTML = localStorage.getItem('BooksName')
            movedAuthro.innerHTML = localStorage.getItem('BookAuthro')
            cancel.src = '/Images/660252.png'

            const cancels = document.querySelectorAll('.cancel')
            const removeSaveds = document.querySelectorAll('.savedelements')
            cancels.forEach((e, i)=>{
                e.addEventListener('click' , ()=>{
                    removeSaveds[i].remove()
                })
            })
        })
     })


    reload.forEach((e, i)=>{
        e.addEventListener('click', ()=>{
            const reloadDiv = document.createElement('div')
            const name = document.createElement('h1')
            const partDiv = document.createElement('div')
            const cancel = document.createElement('img')


            document.body.appendChild(reloadDiv)
            reloadDiv.classList = 'reloadDiv'
            reloadDiv.appendChild(name)
            reloadDiv.appendChild(cancel)
            cancel.src = '/Images/660252.png'
            cancel.classList = 'cancels'
            document.body.style.overflow = 'hidden'
            name.innerHTML = moveName[i].innerHTML
            name.classList = 'name'         
            
            cancel.addEventListener('click', ()=>{
                reloadDiv.remove()
            })
        })
    })
   }
   
   getImages()
   setTimeout(() => {
    document.querySelector('.title-container').style.display = 'none'
    document.querySelector('.viewbooks').style.display = 'flex'
   }, 3000);







const sun = document.querySelector('.sun')

sun.addEventListener('click', ()=>{
    if (sun.src == 'https://cdn-icons-png.flaticon.com/512/979/979585.png') {
        document.body.style.background = 'black'
        sun.src = "https://cdn-icons-png.flaticon.com/512/547/547433.png"
        const h1 = document.querySelectorAll('h1')
        const p = document.querySelectorAll('p')
        document.querySelector('h2').style.color ='white'
        h1.forEach((e,i)=>{
            e.style.color = 'white'
        })

        p.forEach((e,i)=>{
            e.style.color = 'white'
        })
        document.querySelector('.logoo').style.cssText = `background:white; border-radius:10px;`
    }else if (sun.src =='https://cdn-icons-png.flaticon.com/512/547/547433.png') {
        sun.src = 'https://cdn-icons-png.flaticon.com/512/979/979585.png'        
        document.body.style.background = 'white'
        document.querySelector('h2').style.color ='black'

        const h1 = document.querySelectorAll('h1')
        const p = document.querySelectorAll('p')
        document.querySelector('.logoo').style.cssText = `background:white; border-radius:10px;`

        h1.forEach((e,i)=>{
            e.style.color = 'black'
        })  

        p.forEach((e,i)=>{
            e.style.color = 'black'
        })  
    }
})


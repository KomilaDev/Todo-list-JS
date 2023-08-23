let coment = document.querySelector('.coment'),
add = document.querySelector('.add'),
lists = document.querySelector('.lists')

add.addEventListener('click', ()=> {
    if(coment.value.length !=0) {
    let list = document.createElement('li')
    let p = document.createElement('p')
    let btnDelete = document.createElement('button')
    btnDelete.className = 'delete'
    btnDelete.innerHTML = 'Delete'
    p.className = 'text'
    p.innerHTML  = coment.value
    list.className = 'list'
    list.appendChild(p)
    list.appendChild(btnDelete)
    lists.appendChild(list)
    coment.value = ''

btnDelete.addEventListener('click', ()=> {
   console.log(lists.removeChild(btnDelete.parentElement));
   })

    }
  }
)
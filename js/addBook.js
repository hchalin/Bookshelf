const submit_btn = document.querySelector('.submit_btn')
const title = document.querySelector('.title')
const author = document.querySelector('.author')
const subject = document.querySelector('.subjects')
const lang = document.querySelector('.lang')




submit_btn.addEventListener('click', ()=>{
    const subjectArr = subject.value.split(',')
    // console.log(subjectArr)
    const bookAdded = new Book(
        author.value,
        lang.value,
        subjectArr,
        title.value
    )

    

    if (!title.value || !author.value || !subject.value || !lang.value ){
        alert(
            'Please fill out the information correctly. Use a "," to separate the subjects.'
        )
    }else {
        console.log(bookAdded)
        newBookShelf.addBook(bookAdded)
        newBookShelf.render()
        title.value = ''
        author.value = ''
        subject.value = ''
        lang.value = ''
    }
})
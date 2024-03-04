let data = [
    {
    "id": 1,
    "title": "Bok 1",
    "body": "quia et suscipitsuscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    "readCount": 10
    },
    {
    "id": 2,
    "title": "Bok 2",
    "body": "est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisqui aperiam non debitis possimus qui neque nisi nulla",
    "readCount": 300
    },
    {
    "id": 3,
    "title": "Bok 3",
    "body": "et iusto sed quo iurevoluptatem occaecati omnis eligendi aut advoluptatem doloribus vel accusantium quis pariaturmolestiae porro eius odio et labore et velit aut",
    "readCount": 80
    },
    {
    "id": 4,
    "title": "Bok 4",
    "body": "ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpaquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    "readCount": 200
    },
    {
    "id": 5,
    "title": "Bok 5",
    "body": "repudiandae veniam quaerat sunt sedalias aut fugiat sit autem sed estvoluptatem omnis possimus esse voluptatibus quisest aut tenetur dolor neque",
    "readCount": 109
    }
]

// Lag default bøker og vis dem på skjermen

let array

function displayBooks(pageCount) {
    document.getElementById("books").innerHTML = ""

    if (pageCount == null) {
        array = data
    } else {
        array = data.filter(function(book) {
            return book.readCount >= pageCount
        })  
    }

    for (let i = 0; i < array.length; i++) {
        let div = document.createElement("div")
    
        let bookTitle = document.createElement("h3")
        bookTitle.innerHTML = array[i].title
        div.appendChild(bookTitle)
    
        let bookBody = document.createElement("p")
        bookBody.innerHTML = array[i].body
        div.appendChild(bookBody)
    
        let pages = document.createElement("p")
        pages.innerHTML = "Sider: " + array[i].readCount
        div.appendChild(pages)
    
        editButton = document.createElement("button")
        editButton.innerHTML = "Edit"
        editButton.addEventListener("click", function () {
            let newTitle = prompt("Hva skal boken hete?")
            if (newTitle !== null) {
                bookTitle.innerHTML = newTitle
                array[i].title = newTitle

                let newBody = prompt("Hva skal det stå i boken?")
                bookBody.innerHTML = newBody
                array[i].body = newBody

                let newPages = Number(prompt("Hvor mange sider i boken?"))
                pages.innerHTML = "Sider: " + newPages
                array[i].readCount = newPages
            }
        })
        div.appendChild(editButton)
    
        deleteButton = document.createElement("button")
        deleteButton.innerHTML = "Delete"
        deleteButton.addEventListener("click", function (){
            array.splice(i, 1)
            displayBooks()
        })
        div.appendChild(deleteButton)
    
        document.getElementById("books").appendChild(div)
    
        // divs.push(div)
    }
}
displayBooks()

// Add article button

function addArticle() {
    // let div = document.createElement("div")

    data.push({
        "title" : prompt("Hva skal boken hete?"),
        "body" : prompt("Hva skal det stå i boken?"),
        "readCount" : Number(prompt("Hvor mange sider i boken?"))
    })

    displayBooks()
}

document.getElementById("addArticleInput").addEventListener("click", function () {
    addArticle()
})

// Reset button

document.getElementById("resetInput").addEventListener("click", function () {
    location.reload()
})

// Search button

document.getElementById("textInput").addEventListener("input", function () {
    let input = Number(document.getElementById("textInput").value)
    console.log(input)

    displayBooks(input)
})
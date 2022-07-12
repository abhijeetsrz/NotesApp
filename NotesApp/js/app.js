

showNotes();
//IF USER ADDS A NOTE, ADD IT TO THE LOCALSTORAGE

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById('addTxt');
    // let addTitle = document.getElementById('addTitle');
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);



    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = '';
    console.log(notesObj);
    showNotes();

})

//FUNCTION TO SHOW ELEMENTS FROM LOCALSTORAGE 

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = '';
    notesObj.forEach(function (element, index) {
    html += `<div class="Card my-2 mx-2" style="width: 18rem;">

    <div class="card-body">
        <h5 class="card-title">${(index + 1)}</h5>
        <p class="card-text"> ${element}</p>
        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
    </div>
</div>
      
    `
    });

    let notesEle = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesEle.innerHTML = html;
    }
    else {
        notesEle.innerHTML = `Nothing to show!.Add a note.`;
        notesEle.style.fontFamily = 'poppins';

    }
}

// FUNCTION TO DELETE NOTE

function deleteNote(index) {
    console.log('I am deleting a note', index);

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }


    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);

    let noteCards = document.getElementsByClassName('Card');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;

        //    console.log(cardTxt);
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }

    })
})


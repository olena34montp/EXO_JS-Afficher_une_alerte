document.getElementById('button').addEventListener('click', function(){
    const nameInput = document.getElementById('nameInput');

    if (nameInput.value == ''){
        alert('le champ est vide');
    } else {
        nameInput.select();
    }
});
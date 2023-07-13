function sumbmitEvent() {
    let Name = document.getElementById('name').value;
    let Email = document.getElementById('email').value;
    let Phone = document.getElementById('phone').value;
    let Website = document.getElementById('website').value;
    let contactphone = document.getElementById('Contact phone').value;
    let contactemail = document.getElementById('Contact email').value;
    let Notes = document.getElementById('notes').value;
    let Activeform = document.getElementById('Active form').value;
    let comisssionpercentage = document.getElementById('comissionpercentage').value;




    console.log(Name);
    localStorage.setItem('name', Name);

    console.log(Email);
    localStorage.setItem('email', Email);

    console.log(Phone);
    localstorage.setitem('Phone', Phone);






}
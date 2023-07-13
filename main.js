function SubmitEvent() {
    var formDetails = {};
    formDetails.Name = document.getElementById('name').value;
    formDetails.Email = document.getElementById('email').value;
    formDetails.Phone = document.getElementById('phone').value;
    formDetails.website = document.getElementById('website').value;
    formDetails.contactphone = document.getElementById('Contact phone').value;
    formDetails.contactemail = document.getElementById('Contact email').value;
    formDetails.notes = document.getElementById('notes').value;
    formDetails.Activeform = document.getElementById('Active Form').value;
    formDetails.logo = document.getElementById('logo').value;
    formDetails.comissionpercentage = document.getElementById('Comission Percentage').value;



    formDetails.type = callType();
    // console.log(formDetails.type);
    function callType() {
        Type = document.getElementsByName('type');
        //value declare 
        var example = "";
        for (var i = 0; i < Type.length; i++) {
            if (Type[i].checked) {
                // after checked to show the value
                example = Type[i].value;
            }

        } return example;
    }



    formDetails.Category = callCategory();
    // console.log(formDetails.Category);
    function callCategory() {
        Category = document.getElementById('Category');
        var gift = [];
        for (var i = 0; i < Category.length; i++) {
            if (Category[i].selected == true) {
                gift.push(Category[i].value);
            }
        } return gift;
    }


    formDetails.paymentmethod = callpaymentmethod();
    // console.log(formDetails.paymentmethod);
    function callpaymentmethod() {
        var paymentmethod = document.getElementsByName('payment');
        var example = [];
        for (var i = 0; i < paymentmethod.length; i++) {
            if (paymentmethod[i].checked == true) {
                example.push(paymentmethod[i].value);
            }
        } return example;

    }
    console.log(formDetails);
    localStorage.setItem('business', JSON.stringify(formDetails));



    var formresponse = localStorage.getItem('business');



}

//     console.log(Name);
//     localStorage.setItem('name', Name);


//     console.log(Email);
//     localStorage.setItem('email', Email);


//     console.log(Phone);
//     localStorage.setItem('phone', Phone);


//     console.log(website);
//     localStorage.setItem('website', website);


//     console.log(contactphone);
//     localStorage.setItem('Contact phone', contactphone);


//     console.log(contactemail);
//     localStorage.setItem('Contact email', contactemail);


//     console.log(notes);
//     localStorage.setItem('notes', notes);


//     console.log(example);
//     localStorage.setItem('type', example);


//     console.log(gift);
//     localStorage.setItem('category', gift);


//     console.log(Activeform);
//     localStorage.setItem('Activeform', Activeform);

//     console.log(logo);
//     localStorage.setItem('logo', logo);

//     console.log(comissionpercentage);
//     localStorage.setItem('Comission Percentage', comissionpercentage);


//     console.log(example);
// } localStorage.setItem('payment', example);



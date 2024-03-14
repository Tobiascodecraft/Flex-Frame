//Log In Script

function MailTest () {
    let name = document.querySelector(".name-js").value;
    let LastName = document.querySelector(".LastName-js").value;
    let Mail = document.querySelector(".Mail-js").value;
    let Password = document.querySelector(".Password-js").value;

    //Checks if the name is correct
    if 
        (name.length <= 3 || 
        typeof name === 'number' && !isNaN(name) || 
        name.includes('@')) 
        {
            document.querySelector(".display-name-js").
            innerHTML = "Incorrect Surname !";
        }
    else {
        document.querySelector(".display-name-js").
        innerHTML = "";
    }


    //Checks if the Lastname is correct
    if 
    (LastName.length <= 3 || 
    typeof LastName === 'number' && !isNaN(LastName)) 
    {
        document.querySelector(".display-lastname-js").
        innerHTML = "Incorrect Last Name !";
    }
    else{
        document.querySelector(".display-lastname-js").
        innerHTML = "";
    } 


    //Checks if the E-Mail is correct
    if (Mail.includes('@') || Mail.includes('.')) {
        document.querySelector(".display-correct-mail").
        innerHTML = "Valid Mail";
    } else if (Mail.length < 10) {
        document.querySelector(".display-Mail-js").
        innerHTML = "Unvalid Mail !";
    }


    //Checks if the Password is correct
    if (Password.length < 8) {
        document.querySelector(".disaply-Password-js").innerHTML = "Your Password is too short!";
    } else if (!/\d/.test(Password)) {
        document.querySelector(".disaply-Password-js").innerHTML = "Your Password needs to contain a number!";
    } else if (!/[A-Z]/.test(Password) || !/[a-z]/.test(Password)) {
        document.querySelector(".disaply-Password-js").innerHTML = "Your Password needs to contain a upper and lowercase character!";
    } else {
        document.querySelector(".disaply-Password-js").innerHTML = "Your Password is valid";
    }
}



//Category Filter
function filterItems(category) {
    const items = document.querySelectorAll('.product.item');
    
    items.forEach(item => {
  
        const categories = (item.dataset.categories || '').split(',');
  
        if (category === 'all' || categories.includes(category)) {
            item.style.display = 'inline-flex';
        } else {
            item.style.display = 'none';
        }
    }); 
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.dataset.category;
            filterItems(category);
        });
    });
  });



//Display Price
let basicPrice = document.querySelector(".basic-price-js");

let TeamPrice = document.querySelector(".team-price-js");

let AgencyPrice = document.querySelector(".agency-price-js");

let WhiteLabelPrice = document.querySelector(".whiteLabel-price-js");


function MonthlyPrice () {
    basicPrice.innerHTML = "$25/mo";
    TeamPrice.innerHTML = "$39/mo";
    AgencyPrice.innerHTML = "$69/mo";
    WhiteLabelPrice.innerHTML = "$199/mo";
}

function AnnualPrice () {
    basicPrice.innerHTML = "$19/mo";
    TeamPrice.innerHTML = "$29/mo";
    AgencyPrice.innerHTML = "$52/mo";
    WhiteLabelPrice.innerHTML = "$149/mo";
}


//Templates
  let webpages = [{
    name: "Hotel Town",
    desktopImg:"../Images/MainPageImages/Template Images/template-hotel-town.jpg",
    ipadImg:"../Images/WebpageViewerImages/hotel-town-ipad.jpg",
    phoneImg:"../Images/WebpageViewerImages/hotel-town-iphone.jpg"
},{
    name: "Church Community",
    desktopImg:"../Images/MainPageImages/Template Images/template-community.jpg",
    ipadImg:"../Images/WebpageViewerImages/hotel-town-ipad.jpg",
    phoneImg:"../Images/WebpageViewerImages/hotel-town-iphone.jpg"
}];


let CorrectDataset = dataset.find(entry => entry.name === webpages[0].name);

localStorage.setItem('CorrectDataset', JSON.stringify(CorrectDataset));

const LocalStorageData = JSON.parse(localStorage.getItem('CorrectDataset'));

if (webpages[0].name === LocalStorageData.name) {
    console.log("Geil");
}
var text = '';
function searchmeal () {
    text = document.getElementById (find-meal).value ;
    connectMeal (text)
}


function connectMeal (text) {
    fetch ('www.themealdb.com/api/json/v1/1/random.php')
    .then (res=> res.json)
    .then (data=> loadMeal (data));
}

connectMeal ();

function loadMeal (data) {
    console.table (data.Meals[0]);
    var container=document.getElementById('main-container');

    var title = data.Meals [0] .strMeal;
    var cat = data.Meals [0] .strCategory;


    //var newDiv = document.createElement("div");


container.innerHTML = '<p><b> ${title} </b></p><p> Name: ${name} </p><p> MealID: ${ID} </p><img src="${/images/media/meals/llcbn01574260722.jpg/preview}" </br><p> Cooking Instruction: ${Instruction} </p>';
container.appendchild (NewDiv);
}


function add() {
    document.getElementById('saved').innerText = JSON.parse(localstorage.getItem('Meals'));
    var typed = document.getElementById ('task').Value;
    document.getElementById('Meals').value="";

    var ui = document.getElementById('display');
    var NewLi = document.createElement('li');
    NewLi.innerText = typed;
    localStorage.setItem ('meals', JSON.stringify(typed));
    ui.appendchild(NewLi);
}

                                                
const searchbtn = document.getElementById('search-btn');
const meallist = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

// event Listner

searchbtn.addEventListener('click',  getMealList);

// get meal list that matches with the ingredient 
function getMealList(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    console.log(searchInputTxt.length);
    fetch('www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt)').then(response => response.JSON()).
    then(data =>{
        console.log(data);
        let html = " ";
        if(data.meals){
            data.meals.forEach(meal => {
                html +=`
                <div class="meal-item" data-id ="${meal.idMeal}">
                     <div class="meal-img">
                             <img  src="./assets/item-1.jpg" alt="Food">
                      </div>
                    <div class="meal-name">
                        <h3> Potato Chips.</h3>
                            <a href="#" class="recipe-btn"> Get Recipe.</a>
                     </div>
                </div>`;
            });
        }
    })

}
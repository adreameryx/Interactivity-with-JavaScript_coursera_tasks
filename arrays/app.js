var fruits = ['Banana', 'Apple', 'Orange','Mango'];

function loadFruits() {
    document.getElementById("fruits").innerHTML = fruits;

}

function myFunction() {
    var fruit = prompt("What is your favorite fruit");
    fruits[fruits.length] = fruit;
    document.getElementById("fruits").innerHTML = fruits;
}

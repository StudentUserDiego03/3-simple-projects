let data = [
    {
        name: "john",
        age: "30"
    },
    {
        name: "Sam",
        age: "25"
    },
    {
        name: "Roy",
        age: "75"
    },
    {
        name: "Adam",
        age: "45"
    },
    {
        name: "Destiny",
        age: "20"
    },
    {
        name: "Ben",
        age: "21"
    },
    {
        name: "Chris",
        age: "35"
    }
];

function register(){    
var nameInput = document.getElementById("input-name").value;
var ageInput = document.getElementById("input-age").value;



data.push(nameInput,ageInput);





const info = document.querySelector("#info");
let details = data.map(function(item){
   

    nameInput= data.name;
    ageInput= data.age;
    
    return "<div>" + item.name + " is " + item.age + " years old" + "</div>";


        
}
)



info.innerHTML = details.join("\n");

 console.log(info);
}
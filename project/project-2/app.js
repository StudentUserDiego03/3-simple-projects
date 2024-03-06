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

const info = document.querySelector("#info");
let details = data.map(function(item){

    return "<div>" + item.name + " is " + item.age + " years old" + "</div>";
    
})

info.innerHTML = details.join("\n");

// first we make sure that faker is actually working
console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));

//we will need pieces of information from our API
function createCard(){
    var randomPic = faker.image.avatar(); 
    document.getElementById("image").src = randomPic;

    var randomName = faker.name.findName();
    document.getElementById("name").innerHTML = randomName;

    var randomJob = faker.company.companyName();
    document.getElementById("job").innerHTML = randomJob;
    //reset buttons
        //hides old buttons
        document.getElementById("accept").style.visibility = "visible";
        document.getElementById("reject").style.visibility = "visible";
    
        //shows new button
        document.getElementById("back").style.visibility = "hidden";
}

function createMatch(){
    //this does a lot of stuff, but nothing to complicated
    //change image
    document.getElementById("image").src = "https://upload.wikimedia.org/wikipedia/commons/4/42/Love_Heart_SVG.svg";
    document.getElementById("image").style.borderRadius = "0%";

    //change text
    document.getElementById("name").innerHTML = "its a match!";
    var randomEmail = faker.internet.email();
    document.getElementById("job").innerHTML = randomEmail;
    document.getElementById("context").innerHTML = "contact info: "

    //hides old buttons
    document.getElementById("accept").style.visibility = "hidden";
    document.getElementById("reject").style.visibility = "hidden";

    //shows new button
    document.getElementById("back").style.visibility = "visible";
}
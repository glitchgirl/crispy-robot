
// first we make sure that faker is actually working
console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));

//we will need pieces of information from our API

var randomPic = faker.image.avatar(); 
document.getElementById("image").src = randomPic;

var randomName = faker.name.findName();
document.getElementById("name").innerHTML = randomName;

var randomJob = faker.company.companyName();
document.getElementById("job").innerHTML = randomJob;
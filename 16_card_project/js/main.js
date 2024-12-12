let container = document.createElement('div');
document.body.appendChild(container);


function createCard(userName, userAge, userPic){
        let card = document.createElement('div');
        let name = document.createElement('h1');
        let age = document.createElement('h3');
        let pic = document.createElement('img');

        let nameContent = document.createTextNode(userName);
        let ageContent = document.createTextNode(userAge);
        pic.src = userPic;

        //append
        name.appendChild(nameContent);
        age.appendChild(ageContent);
        card.appendChild(name);
        card.appendChild(age);
        card.appendChild(pic);
        card.style.cssText = ` width: 200px;
        padding: 2px;
        margin: 10px;
        display:inline-block;
        background-color: #2ff;`
        pic.style.cssText = ` width: 100%;`
        container.appendChild(card);
}

createCard('Hassan Abdelwahid', 25, 'img/1.jpg');
createCard('Mohammad Abdelwahid', 33, 'img/1.jpg');
createCard('Mohammad Abdelwahid', 33, 'img/1.jpg');
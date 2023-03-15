const megaTeacher = {
    name: "Pablo",
    lastname: "Quintana",
    age: 27,
    vegan: false,
    address: {
        street: "Gran Vía",
        number: 73,
        floor: 4
    },
    hobbies: ["basketball", "coding", "music", "reading"],
    books: ["Lord of the Flies", "Books of Blood"],
    films: ["Lord of the Rings", "Die Hard", "Fantastic Beasts"],
    height: 1.98
}

//========================EJERCICIOS========================================

//==============================1===========================================

/*const addHobbie = function (hobbie) {
    megaTeacher.hobbies.push(hobbie);
    return megaTeacher.hobbies;
}
console.log(addHobbie("Surf"));*/

//===============================2============================================

/*megaTeacher.introduceMySelf = function () {
    return `Hola, me llamo ${this.name} ${this.lastname} , tengo ${this.age}  años y vivo en la calle ${this.address.street} , ${this.address.number} . Mis hobbies son: ${this.hobbies}`
} 
console.log(megaTeacher.introduceMySelf());*/

//==============================3================================================

const addHobbie = function (array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (megaTeacher.hobbies.length >= 8) {
            break;
        } else {
            megaTeacher.hobbies.push(array[i])
        }
    }
    return megaTeacher.hobbies
}
console.log(addHobbie(["Surf", "Theatre", "Walking", "Tennis","Softball", "Paddle","Football","Dance"]));

//================================4===============================================

megaTeacher.editPersonalData = function (name, lastname, age, vegan) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.vegan = vegan;
    return this
}
console.log(megaTeacher.editPersonalData("Pedro", "Perez", 25, true));

//=================================5============================================

/*megaTeacher.editAdress = function (street, number, floor) {
    megaTeacher.address.street = street;
    megaTeacher.address.number = number;
    megaTeacher.address.floor = floor;
    return megaTeacher
}
console.log(megaTeacher.editAdress("Calle de Gerona","1","Bj"));*/

//=============================6================================================

megaTeacher.editAdress = function (newStreet, newNumber, newFloor, newAdress) {
    let dirArr = []
    dirArr.push(this.address)
    this.adress = dirArr
    newAdress ? dirArr.push({ "street": newStreet, "number": newNumber, "floor": newFloor }) :
        this.address.street = newStreet;
    this.address.number = newNumber;
    this.address.floor = newFloor;
    return this
}
console.log(megaTeacher.editAdress("Calle de Gerona", "1", "Bj", true))

//==============================7=================================================

megaTeacher.addBook = function (book) {
    if (this.books.includes(book)) {
        return book.toUpperCase()
    } else {
        this.books.push(book)
        return this.books
    }
}
console.log(megaTeacher.addBook("Lord of the Flies"));

//============================8=====================================================

megaTeacher.addMovie = function (film) {
    if (film == undefined || film == null) {
        return this.films.splice([this.films.length / 2])[0]
    } else {
        this.films.push(film)
        return this.films
    }
}
console.log(megaTeacher.addMovie("Terminator"));
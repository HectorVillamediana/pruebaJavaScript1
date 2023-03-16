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
    return `Lista de hobbies: \n${megaTeacher.hobbies.join("\n")}`
}
console.log(addHobbie("Surf"));*/

//===============================2============================================

megaTeacher.introduceMySelf = function () {
    return `Hola, me llamo ${this.name} ${this.lastname} , tengo ${this.age}  años y vivo en la calle ${this.address.street} , ${this.address.number} . Mis hobbies son: ${this.hobbies.join(", ")}`
}
console.log(megaTeacher.introduceMySelf());

//==============================3================================================

const addHobbie = function (array) {
    let hobs = []
    for (let hob of megaTeacher.hobbies) {
        hobs.push(hob.toLowerCase())
    }
    for (let hobbie of array) {
        if (megaTeacher.hobbies.length >= 8) {
            alert('Algunos hobbies de su lista no han podido introducirse por exceder el maximo de parametros (8)');
            break;
        } else {
            if (hobs.includes(hobbie.toLowerCase())) {
                megaTeacher.hobbies = megaTeacher.hobbies
            } else { megaTeacher.hobbies.push(hobbie) }

        }
    }
    return `Lista de hobbies: \n${megaTeacher.hobbies.join("\n")}`
}
console.log(addHobbie(["Music", "Theatre", "Walking", "Tennis", "Softball", "Paddle", "Football", "Dance"]));

//================================4===============================================

megaTeacher.editPersonalData = function (name, lastname, age, vegan, height, weight) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.vegan = vegan;
    this.height = height;
    this.weight = weight;
    return ` Nuevos datos: \n Nombre: ${this.name} \n Apellido: ${this.lastname} \n Edad: ${this.age} \n Vegan: ${this.vegan} \n Altura: ${this.height}cm \n Peso: ${this.weight}kg \n`
}
console.log(megaTeacher.editPersonalData("Pedro", "Perez", 25, true, 1.79, 78));

//=================================5============================================

/*megaTeacher.editAdress = function (street, number, floor) {
    this.address.street = street;
    this.address.number = number;
    this.address.floor = floor;
    return `Direccion: ${this.adress.street}\nNumero: ${this.adress.number}\nPiso: ${this.adress.floor}`
}
console.log(megaTeacher.editAdress("Calle de Gerona","1","Bj"));*/

//=============================6================================================

megaTeacher.editAdress = function (newStreet, newNumber, newFloor, newAdress) {
    let dirArr = []
    dirArr.push(this.address)
    this.adress = dirArr
    if (newAdress) {
        dirArr.push({ "street": newStreet, "number": newNumber, "floor": newFloor })
        return `Direccion 1:\n${this.adress[0].street}\nNumero: ${this.adress[0].number}\nPiso: ${this.adress[0].floor}\nDireccion 2:\n${this.adress[1].street}\nNumero:  ${this.adress[1].number}\nPiso:  ${this.adress[1].floor}`
    } else {
        this.address.street = newStreet;
        this.address.number = newNumber;
        this.address.floor = newFloor;
        return `Direccion: ${this.adress[0].street}\nNumero: ${this.adress[0].number}\nPiso: ${this.adress[0].floor}`
    }
}
console.log(megaTeacher.editAdress("Calle de Gerona", "1", "Bj", true))

//==============================7=================================================

megaTeacher.addBook = function (book) {
    let books = []
    for (let bk of this.books) {
        books.push(bk.toLowerCase())
    }
    if (books.includes(book.toLowerCase())) {
        return `Ya esta disponible el libro: ${book.toUpperCase()}`
    } else {
        this.books.push(book)
        return `Lista de Libros: ${this.books.join("\n ")}`
    }
}
console.log(megaTeacher.addBook("lord of the Flies"));

//============================8=====================================================

megaTeacher.addMovie = function (film) {
    let movies = []
    for (let movie of this.films) {
        movies.push(movie.toLowerCase())
    }
    if (film == undefined || film == null) {
        return `Tiene disponible la pelicula: ${this.films.splice([this.films.length / 2])[0]}`
    } else if (movies.includes(film.toLowerCase())) {
        return `Ya esta disponible la pelicula: ${film}`
    } else {
        this.films.push(film)
        return `Lista de Peliculas: ${this.films.join("\n ")}`
    }
}
console.log(megaTeacher.addMovie('die Hard'));
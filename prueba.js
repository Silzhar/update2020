// Mostrar a usuario :

const array = [1, 2 ,3];
const newArray = [];

for (let index = 0; index < 3; index++) {
    item = item * 2;
    newArray.push(item);
}

// ? resultado : newArray = [2, 4, 6]

// ! Con el anterior ejemplo , monta un ejercicío diferente para 
// ! obtener un resultado similar.


const array = [1, 2, 3];

// C
const newArray = array.map((item) => {return item * 2})

// resultados fallidos para mostrar

// B
const newArray = array.filter((item) =>  item * 2)

// D
const newArray = array.reduce((item) => {return item * 2})

// A
const newArray = array.map((item) => {return item + 2})

//  --------------------------------------------------------------------------

// Mostrar a usuario :



// ! ¿Cual de los cuatro sigientes planteamientos no funciona?



// A 
function isAuthenticated(request, response, next) {
    try {
        (request.user);
        next();
    } catch {
      const error = new Error('You need to be logged in!')
      error.code = 401
      return next(error)
    }
  }

// B
function isAuthenticated(request, response, next) {
switch (request.user) {
    case (!request.user):
        next();
        break;

    case (request.user):
        const error = new Error('You need to be logged in!');
        error.code = 401;
        return next(error);
    }

}

// C
const error = new Error('You need to be logged in!');

function isAuthenticated(request, response, next) {
    (!request.user)  ? error.code = 401 : null
}

// D
function isAuthenticated(request, response, next) {
    if (request.user) {
      next();
    } else {
      const error = new Error('You need to be logged in!');
      error.code = 401;
      return next(error);
    }
  }


  // ? solución (b cambiadas)

// ! hacer ejercicio con for in / for of 
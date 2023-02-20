console.log("Desafios JavaScript puro")
//Desafio 1 ---------------------------------------

 const user = '{"nome": "Pedro", "idade": 30, "profissão": "professor" }';

 const userData = JSON.parse(user);

 const displayData = () => {
    console.log("Desafio 1:")
    console.log(userData)
    console.log("----------------------------------")
 }

 displayData()

//Desafio 2 ---------------------------------------

const students = [
   {
       id: 1,
       nome: "Ricardo", 
       cidade: "Jaguaquara",
      
      },
      {
       id: 2, 
       nome: "Maria", 
       cidade: "Belo Horizonte",
     
      },
      {
       id: 3, 
       nome: "Carlos", 
       cidade: "Vitória da Conquista",
      },
      {
         id: 4, 
         nome: "Pedro", 
         cidade: "São Paulo",
        },
      
]

 const displayStudentsOne = () => {
   students.map((student) => {
      const city = student.cidade;

      if(city === "Belo Horizonte") {
        student.estado = "MG"

         
      }
   })

   return students;
 }
 
 displayStudentsOne()
 console.log("Desafio 2:");
 console.log(students);
 console.log("----------------------------------")


 //Desafio 3 --------------------------------------- 
 
 const displayStudentsTwo = () => {
   students.map((student) => {
      const city = student.cidade;

      if(city === "São Paulo") {
        const studentSaoPaulo = {
         id: student.id,
         name: student.nome,
         cidade: student.cidade
        }
        
        console.log("Desafio 3:")
        console.log(studentSaoPaulo)

       const filterStudents = students.filter(student => student.cidade != "São Paulo")
       console.log("Array filtrado:")
        console.log(filterStudents)
        console.log("----------------------------------")
        
      }
   })
 }

 displayStudentsTwo()


//Desafio 4 --------------------------------------- 
var variavelGlobal = "JavaScript";
const variaveis = () => {
   let variavelLocal = "Python";
   
   console.log("Desafio 4:");
   console.log(variavelGlobal)
   console.log("----------------------------------")
}

variaveis();



//Desafio 5 --------------------------------------- 

const fruits = [
   {
      id: 1,
      name: "apple",
   },
   {
      id: 2,
      name: "strawberry",
   },
   {
      id: 3,
      name: "grape",
   },
   {
      id: 4,
      name: "watermelon",
   }
]

const orderArray = () => {
   const orderFruits = fruits.sort(fruits.name)
   fruits.sort(function(a, b) {
      if(a.name < b.name) {
         return -1;
      } else {
         return true;
      }
   });
}

console.log("Desafio 5:");
console.log(fruits);
console.log("----------------------------------")

orderArray();


//Desafio 6 --------------------------------------- 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const evensNumbers = [];
const evenNumbersVerification = () => {
   numbers.map((number) => {
      const checkNumber = number / 2
      const verificationNumber = Number.isInteger(checkNumber)

      if(verificationNumber === true) {
   
         evensNumbers.push(number);
      }
   })

   
}

evenNumbersVerification();

console.log("Desafio 6:");
console.log(evensNumbers);
console.log("----------------------------------")



//Desafio 7 --------------------------------------- 
const randomNumbers = [2, 10, 33, 22, 47, 7, 14, 95, 32, 91];
const primeNumbers = [];

const primeNumbersVerification = () => {
   randomNumbers.map((number) => {
      const checkPrime = number / 2;
      const primeVerification = Number.isInteger(checkPrime);

      if(number === 2 || primeVerification === false) {
          primeNumbers.push(number);
      }

   })
}

primeNumbersVerification();
console.log("Desafio 7:");
console.log(primeNumbers)
console.log("----------------------------------")



//Desafio 8 --------------------------------------- 
const arrayRandomNumbers  = [];
const primeNumbersRandom  = [];
let limitedPrimeNumbers = [];

const identifyPrimeNumbers = () => {
   randomNumbers.map((number, index) => {
      const checkPrime = number / 2;
      const primeVerification = Number.isInteger(checkPrime);

      if(number === 2 || primeVerification === false) {
          if(index === 4) {
            const filteredList = randomNumbers.filter(numberFilter => numberFilter != number)
      
            console.log("Desafio 8:");
            console.log("Array com o quinto número removido:")
            console.log(filteredList)

            let sum = 0;

            for(var i = 0; i<filteredList.length; i++) {
               sum += filteredList[i];
            }
            console.log("Soma dos numeros do Array:")
            console.log(sum);

          } else {
            const getRandom = (min, max) => {
               return Math.floor(Math.random() * (max - min + 1)) + min;
           }
           
           for (let i = 0 ; i < 30 ; i++){
             arrayRandomNumbers.push(getRandom(1, 60));
             
           }

           arrayRandomNumbers.map((number) => {
            const checkRandomPrime = number / 2;
            const primeRandomVerification = Number.isInteger(checkRandomPrime);

            if(number === 2 || primeRandomVerification === false) {
               primeNumbersRandom.push(number);

               //Limitação do tamanho do array
               limitedPrimeNumbers = primeNumbersRandom.slice(0, 20)
               
            }
           })
         
          }
      }

   })

}

identifyPrimeNumbers();
console.log("Array Randômico:")
console.log(limitedPrimeNumbers);
console.log("----------------------------------")



//Desafio 9 ---------------------------------------

console.log("Desafio 9:(Digite o numero no input)");
const usingInput = (event) => {
   const data = document.getElementById('data').value;
   const dataInt = parseInt(data) 
   
   if(dataInt != typeof(number)) {
      console.log("R$ " + data + ",00")
   } else {
      console.log("Esse valor não é valido!")
   }
  
}




//Desafio 10 ---------------------------------------

const fractionalNumbers = [1.2, 23.3, 45.4, 33.7, 33.4];
const wholeNumbers = [];

const usingNumbers = () => {
   fractionalNumbers.map((number) => {
      const numeroInteiro = parseInt(number);
      wholeNumbers.push(numeroInteiro)
   })
}

usingNumbers();
console.log("Desafio 10:");
console.log(wholeNumbers);
console.log("----------------------------------");




//Desafio 10 ---------------------------------------
const userTwo = {
     name: "Roberto",
     idade: "33",
     formado:"Sim",
     escolaridade:{
     instituicao1:"UNIVERSIDADE MG, UNIVERSIDADE SP, UNIVERSIDADE PR, UNIVERSADE RS",
     instituicao2: "Preencher essa informação",
},
}

const manipulatingUser = () => {
   const instituicao = userTwo.escolaridade.instituicao1;
   //Separando valores da propriedade
   const arrayInstituicao = instituicao.split(",");

   // Adicionando novos items ao array
   const novasInstituicoes = [ " UNIVERSIDADE BA", "UNIVERSIDADE RJ"];
   const totalInstituicoes = arrayInstituicao.concat(novasInstituicoes);
   
   //Adicionando 3 novas propriedades ao objeto
   userTwo.endereco = ["Belém", "Nazaré"," Avenida Governador José Malcher"];
   userTwo.nacionalidade = "Brasileiro"
   userTwo.situacao = "Completo"

   userTwo.instituicao1 = totalInstituicoes;
   console.log("Desafio 10:");
   console.log(userTwo)
   console.log("----------------------------------");
}

manipulatingUser();


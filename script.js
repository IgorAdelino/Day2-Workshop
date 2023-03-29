// function handleChamarLog() {
//   let meuNome = "Wallace";
//   console.log(meuNome);
// }

// // function pegarElementoHtml(){
// //     const h1 = document.getElementById('minhaString')
// //     console.log(h1)
// //     h1.innerText = 'Igor'
// // }
// // 1 criar local para criar o elemento
// // 2 pegar onde criaremos o elemento
// // 3 criar o meu elemento
// // 4 adicionar o elemento criado ao local escolhido

// function handlePegarElementoHtml() {
//   const meuLocal = document.getElementById("meuLocal");
//   const titulo = document.createElement("h1");
//   titulo.innerText = "AAAAAAAAAAAAAAAAAA";

// 	const meuLocal2 = document.getElementById("meuLocal2")
// 	const titulo2 = document.createElement('h1')
// 	titulo2.innerText = "BBBBBBBBBBBBBB"

// 	meuLocal2.appendChild(titulo2)
//   meuLocal.appendChild(titulo);

// }
// // for(CONST ITEM OF MEUARRAY){CONSOLE.LOG(ITEM)} PERCORRE O ARRAY

async function minhaFuncao(){
	const meuContent = document.getElementById('meuContent')
	const response = await fetch('https://api.randomuser.me/?results=10'); //REQUISIÇÃO DO TIPO GET
	
	const data = await response.json() //ESPERA A RESPONSE E TRANSFORMA EM JSON 
	console.log(data)

	const meuArray = data.results

	for(const item of meuArray){
		const name = item.name.first
		const email = item.email
		const secondname = item.name.last
		console.log(`Meu nome é ${name} ${secondname} e meu email é ${email}`)
		const h5 = document.createElement('h5')
		const p = document.createElement('p')
		h5.innerText = `Meu nome é ${name} ${secondname}`
		h5.style.color='Red'
		p.innerText = email

		meuContent.append(h5,p)
	}

}
function criaCard(){

}
minhaFuncao()
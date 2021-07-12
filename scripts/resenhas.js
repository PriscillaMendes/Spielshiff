let listaResenhas = [
					["user@","img1",'God of War marca o retorno de uma das franquias mais famosas do mundo dos jogos. \
					Exclusivo para PS4, o título traz de volta Kratos que, agora em uma versão mais velha, precisa lidar \
					com a paternidade e antigos problemas que ressurgem do passado. Confira o review completo:\
					"O Senhor da Guerra não gosta de crianças" \
					Desde que foi anunciado, o novo God of War chama atenção por mostrar um lado mais humano de Kratos. \
					Além da aparência mais velha, a presença de Atreus, seu filho, causou um enorme impacto, uma vez que \
					o protagonista sempre carregou a fama de cruel e insensível nos outros títulos da saga.'],
					
					["user$","", 'Durante toda a (longa) jornada, o Deus da Guerra mostra, por muitas vezes, um lado \
					paternal que entra em confronto com seu ego brutamontes - o que acaba ajudando na formação do \
					"caráter de guerreiro" de seu filho. O seu jeito rude e impaciente é fundamental para que Atreus \
					aflore seus instintos de sobrevivência e, ao mesmo tempo, descubra suas habilidades hereditárias. \
					Ao contrário do pai, Atreus mostra que a bondade é algo presente em seu sangue. A generosidade do \
					garoto está presente desde a forma como ele lida com questionamentos até o jeito que trata outros \
					personagens. A característica do filho acaba servindo de espelho para Kratos enfrentar situações de \
					maneiras diferentes - se sozinho, o Deus da Guerra não agiria da mesma forma.'],
					
					["user%","img2", 'Isso é apenas o pano de fundo de uma trama que, embora demore muito para começar \
					a se desenrolar, deixa os jogadores apreensivos a todo momento. É impossível não criar e recriar \
					teorias, principalmente para aqueles que jogaram todos os títulos da franquia. \
					Essa jornada também é responsável por responder uma série de perguntas sobre o passado recente \
					do espartano. Entretanto, para evitar spoilers, não iremos nos alongar no assunto. Já nas primeiras \
					notícias sobre o seu lançamento, era possível ver que a relação de pai e filho não ficava apenas na \
					história. O game traz um inédito sistema de cooperação nunca antes visto na saga, fazendo com que a \
					participação do pequeno guerreiro seja fundamental em praticamente todos os momentos. No sistema de \
					combate, do qual falaremos mais adiante, Atreus age como seu braço direito. Graças a uma dificuldade \
					um pouco mais elevada que os títulos anteriores (como God of War 3 e God of War: Ascension), a todo \
					momento será preciso utilizar o garoto para distrair e atordoar inimigos, ou contar com ele para curar \
					e até ressuscitar Kratos.']
					];
					
const diretorio = "../references/imgs/";
let resenhaQuery = document.querySelector(".resenhas, .review");
let reviewQuery = document.querySelector(".review");
let imgQuery = document.getElementById("img-file");
let msgQuery = document.getElementById("msg");
let publicaQuery= document.querySelector(".publica-resenha");
let editaQuery= document.querySelector(".edita-resenha");


for (let res of listaResenhas) {
	let imgsrc = diretorio + res[1] + ".jpg";
	let user = res[0];
	let texto = res[2];
	let imgHtml = "";
	
	if (res[1] !== "") {
		imgHtml = `<img src="${imgsrc}">`;
	}
	
	reviewQuery.innerHTML += `<div class="componente-avaliacao">
									<div>
										<p><strong>${user}:</strong></p>
									</div>
									<div id="comment">
										<p>${texto}</p>
									</div>
									<div>
										${imgHtml}
									</div>
								</div>`;
	
}

function publicaResenha() {
	let minhaResenha = [];
	minhaResenha.push("meu-user");
	
	minhaResenha.push(imgQuery.value);
	
	if(msgQuery.value.length < 50) {
		alert("Preencha a resenha (mínimo de 50 palavras)");
		return;
	}
	
	
	
	minhaResenha.push(msgQuery.value);
	listaResenhas.push(minhaResenha);
	
	console.log(listaResenhas);
	
	imgQuery.setAttribute('disabled', true);
	msgQuery.setAttribute('disabled', true);
	publicaQuery.setAttribute('disabled', true);
	
	
	//aqui vai ficar a lógica no banco de dados para editar o atributo naquele id. Para dados mockado, isso é irrelevante
}

function editaResenha() {
	msgQuery.removeAttribute('disabled');
	imgQuery.removeAttribute('disabled');
	publicaQuery.removeAttribute('disabled');
}

function readImage(event) {
  file = event.target.files[0];
  if (file.type && !file.type.startsWith('image/')) {
    alert('File is not an image.');
    return;
  }

  const reader = new FileReader();
  reader.addEventListener('load', (event) => {
    imgQuery.src = event.target.result;
  });
  reader.readAsDataURL(file);
}

imgQuery.addEventListener('change', readImage);
publicaQuery.addEventListener('click', publicaResenha);
editaQuery.addEventListener('click', editaResenha);
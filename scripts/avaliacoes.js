let avaliacoes = [["userA","SIM","O gráfico do jogo é muito bom!", "Gráfico muito bem pensado, personagens bem feitos, blablbablabla"],
					["userB","SIM","Jogo do ano",
					"Jogo maravilhoso, muito bom. Jogabilidade incrível, discurso de gamer chato insira aqui a sua historinha. Teste com grande texto para ver se meus componentes ficam bonitos no css e html lindos demais."],
					["userC","NAO", "Trava muito", "Eu claramente não jogo."],
					["userD","SIM","Jogabilidade boa", "Insira aqui um textinho enorme sobre jogabilidade e coisas que ninguem liga"]];

let avaliacaoQuery = document.querySelector('.review');
let tituloQuery = document.getElementById('av-titulo');
let comentarioQuery = document.getElementById('msg');
let editarQuery = document.querySelector('.edita-comentario');
let publicarQuery = document.querySelector('.publica-comentario');
let voteQuery = document.querySelector('.fa');
let divVoteQuery = document.querySelector('.upvotes');

for (let av of avaliacoes) {
	let user = av[0];
	let vote = av[1];
	let titulo = av[2];
	let comentario = av[3];
	let htmlVote = "";
	
	if (vote === "SIM") {
		htmlVote = '<i class="fa fa-thumbs-up"></i>';
	}
	else {
		htmlVote = '<i class="fa fa-thumbs-down"></i>';
	}
	
	avaliacaoQuery.innerHTML += `<div class="componente-avaliacao">
									<div>
										<p>${htmlVote} ${user}: <strong>${titulo}</strong></p>
									</div>
									<div id="comment">
										<p>${comentario}</p>
									</div>
								</div>`;
	
}

function myFunction(x) {
  y = x.children[0];
  y.classList.toggle("fa-thumbs-down");
}

function publicaComentario() {
	let meuComentario = [];
	meuComentario.push("meu-user");
	if(voteQuery.classList.contains("fa-thumbs-down")) {
		meuComentario.push("NAO");
	}
	else if(voteQuery.classList.contains("fa-thumbs-up")) {
		meuComentario.push("SIM");
	}
	meuComentario.push(tituloQuery.value);
	meuComentario.push(comentarioQuery.value);
	
	if(comentarioQuery.value.length < 3 || tituloQuery.value.length < 3) {
		alert("Preencha o título e comentários da sua avaliação (mínimo de 3 palavras)");
		return;
	}
	
	avaliacoes.push(meuComentario);
	tituloQuery.setAttribute('disabled', true);
	comentarioQuery.setAttribute('disabled', true);
	publicarQuery.setAttribute('disabled', true);
	divVoteQuery.setAttribute('disabled', true);
	
	console.log(avaliacoes);
	
	//aqui vai ficar a lógica no banco de dados para editar o atributo naquele id. Para dados mockado, isso é irrelevante
}

function editaComentario() {
	tituloQuery.removeAttribute('disabled');
	comentarioQuery.removeAttribute('disabled');
	publicarQuery.removeAttribute('disabled');
	divVoteQuery.removeAttribute('disabled');
}

function readVideo(event) {
  let file = event.target.files[0];
  if (file.type && !file.type.startsWith('video/')) {
    alert('File is not an video.');
    return;
  }

  const reader = new FileReader();
  reader.addEventListener('load', (event) => {
    let meuvideosrc = event.target.result;
  });
  reader.readAsDataURL(file);
}

function salvaVideo() {
	let meuvideosrc2 = diretorio + meuvideosrc;
	meusVideosQuery.innerHTML += `<div class="componente-video"><video width="320" height="240" controls><source src=${meuvideosrc} type="video/mp4"></video></div>`;
}

editarQuery.addEventListener('click', editaComentario);
publicarQuery.addEventListener('click', publicaComentario);
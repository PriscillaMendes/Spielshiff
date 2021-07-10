let listaDeArquivos = ["video1", "video2", "video3", "video4", "video5"];
let secaoQuery = document.querySelector('.video');
let meusVideosQuery = document.querySelector('.meus-videos');
let uploadQuery = document.querySelector('#upload-btn');
const diretorio = "../references/videos/";
let meuvideosrc = "";

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

for (video of listaDeArquivos) {
	let videosrc = diretorio + video + ".mp4";
	secaoQuery.innerHTML += `<div class="componente-video"><video width="320" height="240" controls><source src=${videosrc} type="video/mp4"></video></div>`;
}

uploadQuery.addEventListener('click', salvaVideo);

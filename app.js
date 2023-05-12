const baseEndpoint = 'https://api.github.com'; 
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) { /* Aqui tenemmos que agregar el async  */
  $n.textContent = 'cargando...';
  try{   /* aqui va el try */
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
} catch {} /* se agrega el catch */
}


function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;  /* se agrego $ */
}

displayUser('stolinski').catch(handleError);


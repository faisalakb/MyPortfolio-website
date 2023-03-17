// Get the modal
const modal = document.getElementById('myModal');
const formValid = document.getElementById('form_valid');

// Get the button that opens the modal
// let btn;

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

const projects = {
  id: 1,
  title: 'Keeping track of hundreds of components',
  img1: './images/snapshot.png',
  img2: './images/snapshot2.png',
  live_Link: 'https://faisalakb.github.io/Portfolio-website1/',
  source_link: 'https://github.com/faisalakb/Portfolio-website1',
  d_tags: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  dm_tags: ['Ruby on rails', 'css', 'Javascript'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  mdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
};

// When the user clicks the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
//   cardData();
// }

function cardData() {
  document.getElementById('data').innerHTML += `
  <img class="d_img" src=${projects.img1} alt="No icon found">
  <img class="dm_img" src=${projects.img2} alt="No icon found">
  <h1 class="d_title">${projects.title}<h1/>

  <ul class="d_btn_tag">
    <li class="d_btn_li">${projects.d_tags[0]}</li>
    <li class="d_btn_li">${projects.d_tags[1]}</li>
    <li class="d_btn_li">${projects.d_tags[2]}</li>
    <li class="d_btn_li">${projects.d_tags[3]}</li>
    <li class="d_btn_li">${projects.d_tags[4]}</li>
    <li class="d_btn_li">${projects.d_tags[5]}</li>
  </ul>
  <ul class="dm_btn_tag">
    <li class="dm_btn_li">${projects.dm_tags[0]}</li>
    <li class="dm_btn_li">${projects.dm_tags[1]}</li>
    <li class="dm_btn_li">${projects.dm_tags[2]}</li>
  </ul>
  <p class="desc">${projects.description}</p>
  <p class="mdesc">${projects.mdescription}</p>
  <span class="d_btn">
  <button class="btn_info"><a class="ad" href="${projects.live_Link}">See Live <img class="d_icon" src="./icons/Icon.svg"></a></button>
  <button class="btn_info"><a class="ad" href="${projects.source_link}">See Source <img class="d_icon" src="./icons/Icon -GitHub.svg"></a></button>
  </span>
  `;
}

function handleClick() {
  // get the ID of the clicked button
  modal.style.display = 'block';
  cardData();
}

document.getElementById('myBtn1').addEventListener('click', handleClick);
document.getElementById('myBtn2').addEventListener('click', handleClick);
document.getElementById('myBtn3').addEventListener('click', handleClick);
document.getElementById('myBtn4').addEventListener('click', handleClick);
document.getElementById('myBtn5').addEventListener('click', handleClick);
document.getElementById('myBtn6').addEventListener('click', handleClick);

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
  document.getElementById('data').innerHTML = '';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    document.getElementById('data').innerHTML = '';
  }
};

formValid.addEventListener('submit', (e) => {
  const em = document.getElementById('email').value;
  // const name = document.getElementById('name').value;
  // const txtarea = document.getElementById('txtArea').value;
  const err = document.getElementById('err');
  const myformData = new FormData(e.target);
  const formDataObj = {};
  myformData.forEach((value, key) => {
    formDataObj[key] = value;
  });
  const vaildEmail = em.toLowerCase();
  if (em === vaildEmail) {
    localStorage.setItem('Fdata', JSON.stringify(formDataObj));
  } else {
    e.preventDefault();
    err.textContent = 'Email should be typed in lowercase';
  }
});
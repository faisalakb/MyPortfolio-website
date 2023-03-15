// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

const projects = 
  {
    id: 1,
    title: 'Keeping track of hundreds of components',
    img1: './images/snapshot.png',
    img2: './images/snapshot2.png',
    live_Link: 'https://faisalakb.github.io/Portfolio-website1/',
    source_link: 'https://github.com/faisalakb/Portfolio-website1',
    d_tags: ['Codekit','Github','Javascript','Bootstrap','Terminal','Codepen'],
    dm_tags: ['Ruby on rails','css','Javascript'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    mdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.'
  };

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  cardData();
}

function cardData(){
  document.getElementById('data').innerHTML +=`
  <img class="d_img" src=${projects.img1} alt="No icon found">
  <img class="dm_img" src=${projects.img2} alt="No icon found">
  <h1 class="d_title">${projects.title}<h1/>
  <span class="d_btn">
  <button class="btn_info">See Live</button>
  <button class="btn_info">See Source</button>
  </span>

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
  <p class="mdesc">${projects.mdescription}</p>`;
  }


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.getElementById('data').innerHTML ='';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById('data').innerHTML ='';
  }
}




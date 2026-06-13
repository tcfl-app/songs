const songs=[
{name:'Evaru Sameepinchaleni',file:'songs/Evaru Sameepinchaleni.pdf'},
{name:'Nee Rakthame Nee Rakthame',file:'songs/Nee Rakthame Nee Rakthame.pdf'},
{name:'Neevu Naa Thodu Unnaavayyaa',file:'songs/Neevu Naa Thodu Unnaavayyaa.pdf'},
{name:'Ninne Stuthiyinthunayya Yesayya',file:'songs/Ninne Stuthiyinthunayya Yesayya.pdf'},
{name:'Preminchedan Adhikamugaa',file:'songs/Preminchedan Adhikamugaa.pdf'},
{name:'Yoodaa Sthuthi Gothrapu Simhamaa',file:'songs/Yoodaa Sthuthi Gothrapu Simhamaa.pdf'}
];
const songList=document.getElementById('songList');
const searchBox=document.getElementById('searchBox');
const homePage=document.getElementById('homePage');
const viewerPage=document.getElementById('viewerPage');
const pdfViewer=document.getElementById('pdfViewer');
const songTitle=document.getElementById('songTitle');
function openSong(song){
songTitle.textContent=song.name;
pdfViewer.src='https://mozilla.github.io/pdf.js/web/viewer.html?file='+encodeURIComponent(location.origin+location.pathname.replace(/index.html$/,'')+song.file);
homePage.style.display='none';viewerPage.style.display='flex';
}
function goHome(){viewerPage.style.display='none';homePage.style.display='block';pdfViewer.src='';}
document.getElementById('backBtn').onclick=goHome;
function renderSongs(f=''){songList.innerHTML='';songs.filter(s=>s.name.toLowerCase().includes(f.toLowerCase())).forEach(song=>{const li=document.createElement('li');li.textContent=song.name;li.onclick=()=>openSong(song);songList.appendChild(li);});}
searchBox.addEventListener('input',e=>renderSongs(e.target.value));renderSongs();

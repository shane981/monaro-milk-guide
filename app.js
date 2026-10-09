const STAFF=['Shane Evans','Kirstin Hunter','Ian Brown','Jennifer Clarke','Michael Davis','Warren Fletcher','Brad Frazer','Terese Gumm','Michael Hartas','Benjamin Hayden','Cody Holland','Nolan Holland','Debbie Johnson','Johnny Johnson','Michael Johnson','Steven Kay','Ponlawat Nakyai','Matthew Parry','Ash Stokes','John Sutton','Shukri Wan Zainal Abidin','Jordan Whitchurch'];
const P='https://au.mixtelematics.com/Images/Uploads/Assets/';
const F=[
{id:7,r:'MDJ200',n:'Kenworth K200',k:'Prime mover',photo:P+'1421460211499393024.jpeg'},
{id:8,r:'MDJ201',n:'Kenworth K200',k:'Prime mover',photo:P+'1458814961002385408.jpeg'},
{id:15,r:'909MDJ',n:'Kenworth T909',k:'Prime mover',photo:P+'1689616084568080384.jpeg'},
{id:5,r:'MDJ909',n:'Kenworth T909',k:'Prime mover',photo:P+'1232316186073632768.jpeg'},
{id:4,r:'XO58FN',n:'MAN TGS 26.540',k:'Prime mover',photo:P+'1206960847701995520.jpeg'},
{id:6,r:'MDJ202',n:'DAF CF530',k:'Rigid',photo:P+'1374645604541300736.jpeg'},
{id:12,r:'XO07ZJ',n:'DAF LF290',k:'Rigid',photo:P+'1550875006617583616.jpeg'},
{id:13,r:'XP94DB',n:'DAF LF290',k:'Rigid',photo:P+'1570042966980096000.jpeg'},
{id:10,r:'XN62AF',n:'Hino 500 GH 1832',k:'Rigid',photo:P+'1464560083091173376.jpeg'},
{id:9,r:'BW47XQ',n:'MAN TGM 15.290',k:'Rigid',photo:P+'1464557318726070272.jpeg'},
{id:3,r:'ECW39C',n:'Volkswagen Crafter',k:'Van',photo:P+'1157222700110417920.jpeg'},
{id:14,r:'HJ75MO',n:'HJ Holden Monaro GTS',k:'Light',photo:P+'1689616025701023744.jpeg'},
{id:20,r:'123TBA',n:'Toyota Hilux',k:'Light',note:'No photo saved in MiX.'},
{id:17,r:'YN37NH',n:'FTE FTE396A fridge',k:'Trailer',note:'No photo saved in MiX. Not the quad being built.'},
{id:16,r:'YN91MY',n:'MaxiCube slide-a-side',k:'Trailer',note:'No photo saved in MiX.'},
{id:18,r:'YN94WT',n:'MaxiCube fridge',k:'Trailer',note:'No photo saved in MiX.'},
{id:19,r:'YO39HV',n:'MaxiCube slide-a-side',k:'Trailer',note:'No photo saved in MiX.'}
];
const T=[['fleet','Fleet'],['rules','Rules'],['suite','Suite']];
const S={tab:'fleet',who:'',asset:null};
function tabs(){document.getElementById('tabs').innerHTML=T.map(([id,l])=>`<button data-tab="${id}" class="${S.tab===id?'active':''}">${l}</button>`).join('');document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>{S.tab=b.dataset.tab;S.asset=null;render();});}
function render(){if(!S.who){document.getElementById('tabs').innerHTML='';document.getElementById('view').innerHTML='<div class="panel"><h2>Staff only</h2><div class="row"><select id="who">'+STAFF.map(n=>'<option>'+n+'</option>').join('')+'</select><input id="code" type="password" placeholder="Staff code"><button class="btn" id="go">Open</button></div><p id="err" class="bad"></p></div>';document.getElementById('go').onclick=()=>{if(code.value.trim().toLowerCase()!=='monaro2630'){err.textContent='Wrong code.';return;}S.who=who.value;render();};return;}tabs();const pic=a=>a.photo?'<img class="shot" alt="'+a.r+'" src="'+a.photo+'">':'';if(S.tab==='fleet'){if(S.asset){const a=F.find(x=>String(x.id)===S.asset);document.getElementById('view').innerHTML='<div class="panel"><button class="pill" id="back">All assets</button>'+pic(a)+'<h2>'+a.r+'</h2><p>'+a.n+' · '+a.k+'</p><p>'+(a.note||'Photo from MiX.')+'</p></div>';document.getElementById('back').onclick=()=>{S.asset=null;render();};}else{document.getElementById('view').innerHTML='<div class="cards">'+F.map(a=>'<div class="card" data-asset="'+a.id+'">'+pic(a)+'<div class="kicker">'+a.k+'</div><h3>'+a.r+'</h3><p>'+a.n+'</p></div>').join('')+'</div>';document.querySelectorAll('[data-asset]').forEach(c=>c.onclick=()=>{S.asset=c.dataset.asset;render();});}}else if(S.tab==='rules'){document.getElementById('view').innerHTML='<div class="panel"><h2>Hours</h2><p>Standard 12 h. BFM 14 h only if inducted. Logmaster is the diary. Intellifleet is the pre-start.</p><h2>Load</h2><p>0.8 g forward, 0.5 g sideways and back, 0.2 g up.</p></div>';}else{document.getElementById('view').innerHTML='<div class="panel"><p><a href="https://drive.google.com/drive/folders/1XFatbzdKVjHh28u6zhIQmHze5xZxsZX-" target="_blank">Open the draft suite</a></p></div>';}}
document.getElementById('installBtn').onclick=()=>alert('iPhone: Share, Add to Home Screen.');
render();

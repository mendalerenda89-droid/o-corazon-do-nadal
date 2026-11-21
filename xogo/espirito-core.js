// ════════════════════════════════════════════════════════════════
//  ESPÍRITO DO NADAL — núcleo común (lo usan jugador.html y espirito.html)
// ════════════════════════════════════════════════════════════════
//  CONFIGURACIÓN — edita aquí las pistas (son de EJEMPLO)
// · Cada prueba (1-9, igual que en jugador.html) tiene:
//     pistas:    se dan en orden cada vez que preguntan «¿cómo pasamos?», «danos una pista»…
//     preguntas: preguntas «secretas». Si la pregunta contiene las palabras de TODOS los
//                grupos de «claves» (basta una palabra de cada grupo), responde «resposta».
//     solo_pregunta_clave: true → las pistas normales NO se dan; solo responde a sus «preguntas».
// · Las palabras se comparan sin tildes ni mayúsculas, en gallego y castellano.

export const NOME = ["espirito", "espiritu"];     // tienen que llamarlo por su nombre
export const NOME_OBRIGATORIO = true;              // false = responde aunque no lo nombren
export const MAX_PISTAS = 6;                       // pistas por partida (0 = sin límite)

export const PISTAS = {
  1: { pistas: [
        "O frío agóchase onde ninguén mira. Os copos azuis tamén viven debaixo das cousas.",
        "Non vos quededes nas paredes: mirade debaixo das mesas e dentro dos obxectos do barco.",
        "Contade con calma, que o xeo é traizoeiro: son máis de dez, pero non chegan a quince." ] },
  2: { pistas: [
        "Non todas as luces din a verdade. Só as vermellas guiaban aos piratas.",
        "Contade unha a unha as lanternas vermellas e esquecede as doutras cores.",
        "Mirade tamén as lanternas pequenas. O número que buscades é impar." ] },
  3: { pistas: [
        "Os agasallos que buscades levan ouro no lazo.",
        "Algúns agasallos agóchanse dentro dos baúis abertos.",
        "Contade só os de lazo dourado: son menos dos que pensades." ] },
  4: { pistas: [
        "O papagaio fala en vermello. Escoitade só esas letras.",
        "Lede as letras vermellas en orde, coma quen le un libro.",
        "A palabra sinala cara a onde apuntan as agullas de todos os compases." ] },
  5: { pistas: [
        "O tempo do capitán está xeado. Primeiro, dádelle corda ao reloxo.",
        "Abride a tapa e desmontade as pezas: baixo cada unha hai un número.",
        "Os puntos din a orde: escape, tambor, volante e rodaxe." ],
       preguntas: [
        { claves: [["reloxo","reloj"],["segredo","secreto","garda","guarda"]],
          resposta: "O reloxo do capitán garda catro segredos, un baixo cada peza. Ningún tic-tac é casualidade." } ] },
  6: { pistas: [
        "Un mapa roto non leva a ningures. Xuntade os seus catro anacos.",
        "Seguide a liña de puntos que sae do barco ata onde remata.",
        "A palabra que buscades brilla no ceo cada noite." ],
       preguntas: [
        { claves: [["estrela","estrella"]],
          resposta: "Si... a estrela. Buscádea onde morre a liña de puntos do mapa." } ] },
  7: { pistas: [
        "As runas non son debuxos: cada unha garda unha letra.",
        "No cofre hai unha táboa que traduce as runas. Usádea.",
        "Descifrade só as runas do centro da porta: son seis letras, coma unha luz do norte." ] },
  8: { pistas: [
        "O baúl só entende catro cores: vermello, verde, azul e dourado.",
        "Polo barco hai números pintados desas cores. Buscade un de cada.",
        "A orde é esta: primeiro o vermello, logo o verde, despois o azul e por último o dourado." ] },
  9: { pistas: [
        "O compás quere volver ao seu sitio. Colocádeo onde latexa o barco.",
        "Xirade as catro agullas ata que sinalen letras.",
        "Comezade pola agulla do Norte. A palabra é o que celebramos estes días." ],
       preguntas: [
        { claves: [["agulla","aguja"],["norte"]],
          resposta: "A agulla do Norte é a primeira letra. As demais seguen o camiño do sol." } ] },
  final: { pistas: [
        "Conseguístelo, tripulación! O corazón do Nadal volve latexar. Mirade o vídeo: alí está a última clave." ] }
};

// Preguntas que funcionan en cualquier prueba
export const PREGUNTAS_SEMPRE = [
  { claves: [["quen es","quien eres","como te chamas","como te llamas"]],
    resposta: "Son o Espírito do Nadal. Durmo no corazón deste barco dende que o xeo o atrapou." },
  { claves: [["canto tempo","cuanto tiempo"]],
    resposta: "O tempo corre coma a neve que derrete. Non o perdades preguntándome iso!" }
];

// Palabras que cuentan como «pedir ayuda para avanzar»
export const AVANCE = ["seguinte","siguiente","pasar","pasamos","avanzar","avanzamos","sair","salir","saimos","salimos",
  "pista","pistas","axuda","ayuda","axudanos","ayudanos","como","que facemos","que hacemos","que temos que",
  "que tenemos que","porta","puerta","sala","abrir","abrimos","conseguimos","conseguir","resolver","non sabemos","no sabemos","onde","donde"];

export const FRASES = {
  sen_nome: ["Escoito voces... pero ninguén me chamou polo meu nome.",
             "Quen fala? Se queredes a miña axuda, chamádeme polo meu nome.",
             "Os espíritos só responden a quen os nomea."],
  non_entendo: ["Esa non é a pregunta que abre o meu corazón. Preguntádeme como seguir.",
                "Hmm... as túas palabras pérdense na neve. Pedídeme axuda para avanzar.",
                "Non entendo esa pregunta, tripulación. Probade doutro xeito."],
  saudo: "Ola, tripulación. Son o Espírito do Nadal. Se estades perdidos, preguntádeme como seguir.",
  sen_pistas: "Xa vos dei toda a axuda que podía. Agora o Nadal depende de vós.",
  so_clave: "Para esta proba non abonda con pedir axuda. Buscade a pregunta correcta.",
  repetir_prefixo: "Xa volo dixen: ",
  dormindo: "Shhh... aínda durmo. Espertarei cando comece a aventura.",
  pausado: "O tempo está detido. Agardade un momento.",
  tempo_esgotado: "O xeo gañou esta vez... pero o Nadal sempre volve.",
  // respuestas (panel do xogador)
  // Al acertar. {proba} = nombre de la prueba. Después se añade la frase de celebración de la prueba.
  correcta: ["Clave correcta! Noraboa, tripulación: superastes a proba «{proba}».",
             "Clave correcta! Moi ben! A proba «{proba}» xa é vosa.",
             "Clave correcta! Noraboa por superar «{proba}»."],
  correcta_ultima: "Clave correcta! Noraboa, tripulación: superastes a última proba, «{proba}». O corazón do Nadal volve latexar!",
  incorrecta: ["Clave incorrecta. Volvede probar.",
               "Clave incorrecta. Revisade ben e volvede probar.",
               "Non, non é esa. Volvede probar, tripulación."],
  bloqueada: "Clave incorrecta. Fallastes demasiadas veces: o xeo bloquea esta proba un minuto.",
  xa_bloqueada: "Esta proba segue conxelada. Agardade {s} segundos.",
  xa_resolta: "Esa proba xa a superastes. Seguide coas demais!",
  cal_proba: "De que proba me falades? Dicídeme o seu nome e a solución.",
  sen_solucion: "Non escoitei a solución. Dicídeme, por exemplo: solución da proba 2, sete.",
};
// ════════════════════════════════════════════════════════════════

// ── utilidades ──
export function norm(s){ return (s||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9ñ ]+/g," ").replace(/\s+/g," ").trim(); }
export function ten(t,k){ k=norm(k); return k.length<5 ? (" "+t+" ").includes(" "+k+" ") : t.includes(k); }
export function algunha(t,lista){ return lista.some(k=>ten(t,k)); }
export function casa(t,claves){ return claves.every(g=>algunha(t,g)); }
export function ao_chou(a){ return Array.isArray(a) ? a[Math.floor(Math.random()*a.length)] : a; }
export function nomeado(texto){ return !NOME_OBRIGATORIO || algunha(norm(texto),NOME); }

export function faseActual(D){
  const f=D.espirito_fase;
  if(f && f!=="auto") return f==="final" ? "final" : Number(f);
  const res=D.resueltas||[];
  const orde=Object.keys(PISTAS).filter(k=>k!=="final").map(Number).sort((a,b)=>a-b);
  const p=orde.find(id=>!res.includes(id));
  return p===undefined ? "final" : p;
}

// Decide la respuesta a una pregunta (pistas). faseForzada: prueba concreta si la nombraron.
export function decidirPista(texto, D, ultima, faseForzada){
  const t=norm(texto);
  if(/\b(repite|repitelo|repetir|outra vez|otra vez)\b/.test(t) && ultima) return {r:ultima, tipo:"repetir"};
  if(!D.activo && !(D.resueltas||[]).length) return {r:FRASES.dormindo, tipo:"inactivo"};
  if(D.tiempo_agotado) return {r:FRASES.tempo_esgotado, tipo:"inactivo"};
  if(D.pausado) return {r:FRASES.pausado, tipo:"inactivo"};
  if(!nomeado(texto)) return {r:ao_chou(FRASES.sen_nome), tipo:"sen_nome"};

  const fase=faseForzada ?? faseActual(D), cfg=PISTAS[fase]||{pistas:[]};
  for(const q of [...(cfg.preguntas||[]), ...PREGUNTAS_SEMPRE]) if(casa(t,q.claves)) return {r:q.resposta, tipo:"pregunta", fase};

  if(algunha(t,AVANCE) || faseForzada!=null){
    if(cfg.solo_pregunta_clave) return {r:FRASES.so_clave, tipo:"nada", fase};
    const niveis=D.espirito_nivel||{}, n=niveis[fase]||0, lista=cfg.pistas||[];
    if(!lista.length) return {r:ao_chou(FRASES.non_entendo), tipo:"nada", fase};
    if(n>=lista.length) return {r:FRASES.repetir_prefixo+lista[lista.length-1], tipo:"repetida", fase};
    if(MAX_PISTAS && (D.espirito_pistas||0)>=MAX_PISTAS) return {r:FRASES.sen_pistas, tipo:"limite", fase};
    return {r:lista[n], tipo:"pista", fase, nivel:n+1};
  }
  if(/\b(ola|hola|bos dias|buenos dias|boas tardes|buenas tardes|boas noites|buenas noches)\b/.test(t)) return {r:FRASES.saudo, tipo:"saudo", fase};
  return {r:ao_chou(FRASES.non_entendo), tipo:"nada", fase};
}

// Datos extra que hay que guardar en Firebase tras dar una pista
export function extraPista(d, D){
  if(d.tipo!=="pista") return {};
  return { espirito_nivel:{...(D.espirito_nivel||{}), [d.fase]:d.nivel}, espirito_pistas:(D.espirito_pistas||0)+1 };
}
export function entradaLog(D,p,r,tipo,fase,nivel){
  const log=(D.espirito_log||[]).slice(-39);
  log.push({ts:Date.now(),p,r,tipo,fase:fase??null,nivel:nivel??null});
  return log;
}

// ── preferencias (voz) ──
const store = {
  get(k,d){ try{ const v=localStorage.getItem("espirito."+k); return v===null?d:JSON.parse(v); }catch(e){ return d; } },
  set(k,v){ try{ localStorage.setItem("espirito."+k, JSON.stringify(v)); }catch(e){} }
};

// ════════════════════════════════════════════════════════════════
//  O ESPÍRITO: animación + voz + escoita
//  crearEspirito({canvas, onEstado(estadoTexto,color), onParcial(texto), escala})
// ════════════════════════════════════════════════════════════════
// iPhone/iPad: só Safari pode escoitar (Chrome e Firefox en iOS non teñen recoñecemento de voz)
const IOS=/iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1);
const IOS_NON_SAFARI=IOS&&/CriOS|FxiOS|EdgiOS|OPiOS/.test(navigator.userAgent);

export const ESTADOS = {
  durmindo:{txt:"Durmindo",  col:[127,208,255]},
  esperto: {txt:"Tocádeme e chamádeme polo meu nome", col:[127,208,255]},
  escoita: {txt:"Escoitando…", col:[90,240,160]},
  pensa:   {txt:"O espírito pensa…", col:[226,182,99]},
  fala:    {txt:"O espírito fala", col:[200,235,255]},
  ben:     {txt:"Clave correcta!", col:[63,207,122]},
  mal:     {txt:"Clave incorrecta", col:[255,110,95]}
};

export function crearEspirito({canvas, onEstado=()=>{}, onParcial=()=>{}, ceo=true, escala=0.16, centroY=0.43}){
  const S={estado:"durmindo", level:0, target:0, voz:store.get("voz",null), lingua:store.get("lingua",IOS?"es-ES":"gl-ES"),
           rate:store.get("rate",0.9), pitch:store.get("pitch",0.75)};
  let sel=null;
  const ctx=canvas.getContext("2d");
  let W=0,H=0,DPR=1;
  function resize(){ DPR=Math.min(devicePixelRatio||1,2); const r=canvas.getBoundingClientRect(); W=canvas.width=Math.max(1,r.width*DPR); H=canvas.height=Math.max(1,r.height*DPR); }
  addEventListener("resize",resize); resize(); setTimeout(resize,300);
  const neve=Array.from({length:ceo?110:40},()=>({x:Math.random(),y:Math.random(),z:Math.random()*2+0.6,v:Math.random()*0.04+0.02,o:Math.random()*Math.PI*2}));
  const chispas=Array.from({length:70},()=>({a:Math.random()*Math.PI*2,r:0.9+Math.random()*1.1,s:(Math.random()*0.5+0.15)*(Math.random()<.5?-1:1),z:Math.random()*2+0.8,ouro:Math.random()<0.4}));
  let col=[127,208,255], rot=0, last=performance.now(), analyser=null, micData=null, ac=null;
  const rgba=(a,c=col)=>`rgba(${c[0]|0},${c[1]|0},${c[2]|0},${a})`;

  function setEstado(e){ S.estado=e; const c=ESTADOS[e].col; onEstado(ESTADOS[e].txt,`rgb(${c})`,e); }

  function copo(cx,cy,r,ang,alpha,lw){
    ctx.save(); ctx.translate(cx,cy); ctx.rotate(ang); ctx.strokeStyle=rgba(alpha); ctx.lineWidth=lw; ctx.lineCap="round";
    for(let i=0;i<6;i++){
      ctx.rotate(Math.PI/3);
      ctx.beginPath(); ctx.moveTo(r*0.18,0); ctx.lineTo(r,0); ctx.stroke();
      for(const f of [0.45,0.7]){ const b=r*(1-f)*0.45;
        ctx.beginPath(); ctx.moveTo(r*f,0); ctx.lineTo(r*f+b*0.7,b); ctx.moveTo(r*f,0); ctx.lineTo(r*f+b*0.7,-b); ctx.stroke(); }
    }
    ctx.restore();
  }
  function frame(now){
    const dt=Math.min((now-last)/1000,0.05); last=now;
    if(canvas.clientWidth*DPR!==W && canvas.clientWidth>0) resize();
    const tc=ESTADOS[S.estado].col; for(let i=0;i<3;i++) col[i]+=(tc[i]-col[i])*0.06;
    if(S.estado==="escoita"&&analyser){
      analyser.getByteTimeDomainData(micData); let s=0;
      for(let i=0;i<micData.length;i++){ const v=(micData[i]-128)/128; s+=v*v; }
      S.target=Math.min(1,Math.sqrt(s/micData.length)*7);
    }else if(S.estado==="fala"||S.estado==="ben"||S.estado==="mal"){ if(Math.random()<0.16) S.target=0.35+Math.random()*0.65; S.target*=0.93; }
    else if(S.estado==="pensa"){ S.target=0.3+0.15*Math.sin(now*0.007); }
    else if(S.estado==="durmindo"){ S.target=0.02+0.02*Math.sin(now*0.001); }
    else S.target=0.08+0.05*Math.sin(now*0.0018);
    S.level+=(S.target-S.level)*0.18;
    rot+=dt*(S.estado==="pensa"?1.6:S.estado==="fala"?0.7:0.25);

    ctx.clearRect(0,0,W,H);
    for(const f of neve){
      f.y+=f.v*dt*(0.6+f.z*0.3); f.o+=dt; if(f.y>1.05){f.y=-0.05;f.x=Math.random();}
      ctx.fillStyle=`rgba(255,255,255,${0.15+f.z*0.12})`;
      ctx.beginPath(); ctx.arc((f.x+Math.sin(f.o*0.6)*0.01)*W,f.y*H,f.z*DPR,0,Math.PI*2); ctx.fill();
    }
    const cx=W/2, cy=H*centroY, R=Math.min(W,H)*escala, L=S.level, dim=S.estado==="durmindo"?0.45:1;
    ctx.globalCompositeOperation="lighter";
    let g=ctx.createRadialGradient(cx,cy,0,cx,cy,R*2.6);
    g.addColorStop(0,rgba((0.25+L*0.3)*dim)); g.addColorStop(0.4,rgba((0.07+L*0.1)*dim)); g.addColorStop(1,rgba(0));
    ctx.fillStyle=g; ctx.beginPath(); ctx.arc(cx,cy,R*2.6,0,Math.PI*2); ctx.fill();
    ctx.lineWidth=1.5*DPR; ctx.strokeStyle=rgba(0.35*dim);
    ctx.setLineDash([2*DPR,9*DPR]); ctx.beginPath(); ctx.arc(cx,cy,R*1.6,rot*0.2,rot*0.2+Math.PI*2); ctx.stroke(); ctx.setLineDash([]);
    ctx.strokeStyle=rgba(0.5*dim,[226,182,99]); ctx.lineWidth=2*DPR;
    for(let i=0;i<3;i++){ const a=-rot*0.4+i*Math.PI*2/3; ctx.beginPath(); ctx.arc(cx,cy,R*1.42,a,a+1.3); ctx.stroke(); }
    copo(cx,cy,R*1.18*(1+L*0.06),rot*0.3,0.55*dim,2.2*DPR);
    copo(cx,cy,R*0.8,-rot*0.5+Math.PI/6,0.3*dim,1.2*DPR);
    ctx.beginPath();
    for(let i=0;i<=180;i++){
      const a=i/180*Math.PI*2;
      const n=(Math.sin(a*6+now*0.003)+0.6*Math.sin(a*11-now*0.006)+0.3*Math.sin(a*17+now*0.01))/1.9;
      const r=R*0.62+n*L*R*0.25;
      i?ctx.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r):ctx.moveTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r);
    }
    ctx.strokeStyle=rgba(0.85*dim); ctx.lineWidth=2*DPR; ctx.shadowColor=rgba(1); ctx.shadowBlur=20*DPR; ctx.stroke(); ctx.shadowBlur=0;
    const cr=R*0.48*(1+L*0.4);
    g=ctx.createRadialGradient(cx,cy,0,cx,cy,cr);
    g.addColorStop(0,`rgba(255,255,255,${0.95*dim})`); g.addColorStop(0.3,rgba(0.8*dim)); g.addColorStop(1,rgba(0));
    ctx.fillStyle=g; ctx.beginPath(); ctx.arc(cx,cy,cr,0,Math.PI*2); ctx.fill();
    for(const p of chispas){
      p.a+=p.s*dt*(0.5+L*2.2); const r=R*p.r*(1+L*0.1);
      ctx.fillStyle=p.ouro?`rgba(226,182,99,${(0.35+Math.random()*0.5*L+0.1)*dim})`:rgba((0.3+Math.random()*0.5*L)*dim);
      ctx.beginPath(); ctx.arc(cx+Math.cos(p.a)*r,cy+Math.sin(p.a)*r,p.z*DPR,0,Math.PI*2); ctx.fill();
    }
    ctx.globalCompositeOperation="source-over";
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  // son
  function audioCtx(){ if(!ac) ac=new (window.AudioContext||window.webkitAudioContext)(); if(ac.state==="suspended") ac.resume(); return ac; }
  function campaina(tipo){
    try{
      const a=audioCtx(), t=a.currentTime;
      const notas = tipo==="escoita" ? [1318.5] : tipo==="mal" ? [392,311.1] : tipo==="ben" ? [784,988,1175,1568,2093] : [880,1174.7,1568,2093];
      notas.forEach((f,i)=>{
        const o=a.createOscillator(), g=a.createGain();
        o.type=tipo==="mal"?"triangle":"sine"; o.frequency.value=f;
        const t0=t+i*(tipo==="mal"?0.22:0.09);
        g.gain.setValueAtTime(0,t0); g.gain.linearRampToValueAtTime(0.12,t0+0.01); g.gain.exponentialRampToValueAtTime(0.0001,t0+1.4);
        o.connect(g).connect(a.destination); o.start(t0); o.stop(t0+1.5);
      });
    }catch(e){}
  }
  async function iniciarMic(){
    if(analyser) return;
    try{
      const st=await navigator.mediaDevices.getUserMedia({audio:true});
      const a=audioCtx(), src=a.createMediaStreamSource(st);
      analyser=a.createAnalyser(); analyser.fftSize=1024; micData=new Uint8Array(analyser.fftSize); src.connect(analyser);
    }catch(e){}
  }

  // voz
  let voces=[], epoch=0;
  function cargarVoces(){
    const pv=v=>(/^gl/i.test(v.lang)?10:0)+(/^es[-_]ES/i.test(v.lang)?3:0)+(/natural|online|neural|google/i.test(v.name)?1:0);
    voces=speechSynthesis.getVoices().filter(v=>/^(gl|es)/i.test(v.lang)).sort((a,b)=>pv(b)-pv(a));
    if(!(S.voz&&voces.some(v=>v.name===S.voz)) && voces[0]) S.voz=voces[0].name;
    if(sel) encherVoces();
  }
  if("speechSynthesis" in window){ speechSynthesis.addEventListener?.("voiceschanged",cargarVoces); cargarVoces(); }

  // iOS/Android: a voz hai que «desbloqueala» cunha frase baleira durante un toque na pantalla
  let desbloqueada=false, vozFalla=false;
  const vivas=[];                         // referencias (Chrome pode perder as frases se non se gardan)
  function desbloquearVoz(){
    if(desbloqueada||!("speechSynthesis" in window)) return;
    try{ const u=new SpeechSynthesisUtterance(" "); u.volume=0; u.lang="es-ES"; vivas.push(u); speechSynthesis.speak(u); desbloqueada=true; }catch(e){}
  }
  function falar(texto, tipo="fala", depois){
    const my=++epoch;
    try{ speechSynthesis.cancel(); }catch(e){}
    const frases=texto.match(/[^.!?…]+[.!?…]*/g)||[texto];
    setEstado(tipo==="ben"?"ben":tipo==="mal"?"mal":"fala"); campaina(tipo);
    if(!("speechSynthesis" in window)){ setTimeout(()=>{ if(my===epoch){ setEstado("esperto"); depois&&depois(); } },2500); return; }
    let i=0;
    const dicir=(txt,conVoz)=>{
      const u=new SpeechSynthesisUtterance(txt);
      const v=conVoz&&!vozFalla?voces.find(v=>v.name===S.voz):null;
      if(v){ u.voice=v; u.lang=v.lang; } else u.lang="es-ES";
      u.rate=S.rate; u.pitch=S.pitch; u.volume=1;
      let comezou=false;
      u.onstart=()=>{ comezou=true; };
      u.onboundary=()=>{ comezou=true; S.target=0.5+Math.random()*0.5; };
      u.onend=()=>{ if(my===epoch) seguinte(); };
      u.onerror=e=>{ if(my!==epoch||e.error==="interrupted"||e.error==="canceled") return;
        if(v){ vozFalla=true; dicir(txt,false); } else seguinte(); };
      vivas.push(u); if(vivas.length>20) vivas.splice(0,vivas.length-20);
      try{ speechSynthesis.resume(); }catch(e){}
      speechSynthesis.speak(u);
      // se a voz escollida non arranca (p. ex. voz galega sen descargar), proba coa voz por defecto
      setTimeout(()=>{ if(my===epoch&&!comezou&&v){ vozFalla=true; try{ speechSynthesis.cancel(); }catch(e){} dicir(txt,false); } },2500);
    };
    const seguinte=()=>{
      if(my!==epoch) return;
      if(i>=frases.length){ setEstado("esperto"); depois&&depois(); return; }
      dicir(frases[i++].trim(),true);
    };
    setTimeout(seguinte,tipo==="ben"?700:500);
  }

  // escoita
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  let rec=null;
  function escoitar(onFinal){
    if(IOS_NON_SAFARI){ onParcial(""); onFinal(null,"No iPhone/iPad só funciona en Safari. Abride esta mesma ligazón en Safari."); return; }
    if(!SR){ onParcial(""); onFinal(null,"Este dispositivo non recoñece a voz. Abride a páxina en Chrome (Android) ou Safari (iPhone)."); return; }
    if(rec){ try{rec.stop();}catch(e){} return; }
    desbloquearVoz();
    epoch++; try{ speechSynthesis.cancel(); }catch(e){}
    iniciarMic(); campaina("escoita");
    let final="";
    rec=new SR(); rec.lang=S.lingua; rec.interimResults=true; rec.continuous=false;
    rec.onresult=e=>{
      let parcial="";
      for(let i=e.resultIndex;i<e.results.length;i++){ const r=e.results[i]; if(r.isFinal) final+=r[0].transcript; else parcial+=r[0].transcript; }
      onParcial((final+parcial).trim());
    };
    let erro=null;
    rec.onerror=e=>{
      if(e.error==="not-allowed"||e.error==="service-not-allowed") erro="Necesito permiso para o micrófono.";
      else if(e.error==="network") erro="Sen internet non podo escoitar.";
    };
    rec.onend=()=>{ rec=null; const t=final.trim(); if(t) onFinal(t); else { setEstado("esperto"); if(erro) onFinal(null,erro); } };
    try{ rec.start(); setEstado("escoita"); onParcial(""); }catch(e){ rec=null; }
  }

  // panel de axustes (⚙ abaixo á dereita)
  function encherVoces(){
    sel.innerHTML="";
    voces.forEach(v=>{ const o=document.createElement("option"); o.value=v.name; o.textContent=`${v.name} (${v.lang})`; sel.appendChild(o); });
    if(!voces.length){ const o=document.createElement("option"); o.textContent="Sen voces en galego nin castelán"; sel.appendChild(o); }
    if(S.voz) sel.value=S.voz;
  }
  function engadirAxustes(){
    const css=document.createElement("style");
    css.textContent=`#esp-gear{position:fixed;right:10px;bottom:10px;width:40px;height:40px;border-radius:50%;border:none;background:transparent;color:rgba(169,191,217,.3);font-size:20px;cursor:pointer;z-index:50}
#esp-panel{position:fixed;right:14px;bottom:60px;width:min(340px,92vw);padding:16px;display:none;z-index:51;background:rgba(7,18,42,.97);border:1px solid #2f5088;border-radius:12px;font:13px Manrope,sans-serif;color:#eef4fb}
#esp-panel.open{display:block}
#esp-panel label{display:block;color:#E2B663;font-size:11px;letter-spacing:2px;text-transform:uppercase;margin:12px 0 5px}
#esp-panel label:first-child{margin-top:0}
#esp-panel select,#esp-panel input{width:100%;background:#0c1b3b;color:#eef4fb;border:1px solid #2f5088;border-radius:6px;padding:6px}
#esp-panel .b{margin-top:14px;display:flex;gap:8px}
#esp-panel button{flex:1;padding:9px;border-radius:8px;border:1px solid #2f5088;background:#0c1b3b;color:#eef4fb;cursor:pointer}
#esp-panel p{margin-top:10px;color:#a9bfd9;font-size:12px;line-height:1.5}`;
    document.head.appendChild(css);
    const g=document.createElement("button"); g.id="esp-gear"; g.textContent="⚙"; g.setAttribute("aria-label","Axustes da voz");
    const p=document.createElement("div"); p.id="esp-panel";
    p.innerHTML=`<label>Voz</label><select id="esp-voz"></select>
      <label>Idioma que escoita</label><select id="esp-lingua"><option value="gl-ES">Galego (gl-ES)</option><option value="es-ES">Castelán (es-ES)</option></select>
      <label>Velocidade</label><input type="range" id="esp-rate" min="0.6" max="1.3" step="0.05">
      <label>Ton</label><input type="range" id="esp-pitch" min="0.3" max="1.5" step="0.05">
      <div class="b"><button id="esp-probar">🔊 Probar</button><button id="esp-pechar">Pechar</button></div>
      <p>Para voz galega: Axustes de Android → Texto a voz → Google → instalar «Galego». Se non, usa unha voz en castelán.</p>`;
    document.body.append(g,p);
    sel=p.querySelector("#esp-voz"); encherVoces();
    g.onclick=e=>{ e.stopPropagation(); p.classList.toggle("open"); };
    p.querySelector("#esp-pechar").onclick=()=>p.classList.remove("open");
    sel.onchange=e=>{ S.voz=e.target.value; store.set("voz",S.voz); };
    const l=p.querySelector("#esp-lingua"); l.value=S.lingua; l.onchange=e=>{ S.lingua=e.target.value; store.set("lingua",S.lingua); };
    const r=p.querySelector("#esp-rate"); r.value=S.rate; r.oninput=e=>{ S.rate=+e.target.value; store.set("rate",S.rate); };
    const pi=p.querySelector("#esp-pitch"); pi.value=S.pitch; pi.oninput=e=>{ S.pitch=+e.target.value; store.set("pitch",S.pitch); };
    p.querySelector("#esp-probar").onclick=()=>{ desbloquearVoz(); vozFalla=false; falar(FRASES.saudo); };
  }

  async function espertar(){
    desbloquearVoz(); audioCtx(); iniciarMic();
    try{ if("wakeLock" in navigator){ await navigator.wakeLock.request("screen");
         document.addEventListener("visibilitychange",()=>{ if(document.visibilityState==="visible") navigator.wakeLock.request("screen").catch(()=>{}); }); } }catch(e){}
    setEstado("esperto");
  }

  return { setEstado, falar, escoitar, campaina, espertar, engadirAxustes, get estado(){ return S.estado; } };
}

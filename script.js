// Textos para cada día
const messages = [
  /*1*/'(carta)',
  /*2*/'Hoy solo quiero que sepa que lo quiero bonito, sin condiciones ni prisas. Adoro sus abrazos y cómo me hace sentir segura.',
  /*3*/'Lo quiero porque con usted puedo ser yo misma, sin miedo, sin filtros… y eso es un regalo enorme. Mi corazón se siente en casa cuando estoy con usted.',
  /*4*/'(vale)',
  /*5*/'Me encanta cómo hace que todo sea más divertido y especial.',
  /*6*/'Me gusta su creatividad, esa travesura suya de desarmar todo lo que cae en sus manos, y el ingenio con el que después lo vuelve a dejar mejor que antes.',
  /*7*/'Así nos veríamos si la vida nos hubiera presentado antes. Me encanta pensar que, de una u otra forma, siempre íbamos a encontrarnos. ♥',
  /*8*/'(vale)',
  /*9*/'Me gusta por sus ojitos lindos, por esa voz que me derrite, por su sonrisa, por su risa… y por cada detalle suyo que me encanta.',
  /*10*/'(carta)',
  /*11*/'Me encantan sus besos, la manera en que usted se acerca y cómo logra que todo a mi alrededor se detenga.',
  /*12*/'Me gusta por la paciencia que tiene, por su calma, por su serenidad y por su forma tan sensata de encontrar soluciones.',
  /*13*/'Me gusta cómo hace que todo me dé vueltas; una sonrisa suya basta para que mi día sea lindo, y solo con escuchar su nombre me pongo color fresa',
  /*14*/'(vale)',
  /*15*/'Un abrazo suyo es mi lugar favorito en el mundo. Me encanta cómo me hace sentir segura, amada y protegida al mismo tiempo.',
  /*16*/'Cuando pienso en usted, pienso en alguien especial, alguien que me hace reír, que me escucha y que siempre está ahí para mí. Me gusta su compañía y cómo hace que cada momento juntos sea único.',
  /*17*/'Me gusta por los apodos únicos que se inventa, y me encanta cómo cada uno refleja su ingenio y ternura.',
  /*18*/'(vale)',
  /*19*/'Este fragmento de la canción me hace pensar en usted y en lo mucho que lo quiero',
  /*20*/'La verdad, hay más de una canción que me recuerda a usted. Todas estas canciones hablan de un amor profundo y sincero, justo como el nuestro.',
  /*21*/'(carta)',
  /*22*/'(vale)',
  /*23*/'Quiero que sepa que lo quiero más de lo que las palabras pueden decir, usted es realmente muy especial para mí. Usted es mi Navidad anticipada, mi regalo precioso y la razón por la que este año se siente tan especial.',
  /*24*/'Feliz noche buena, ni niño. Todo esto lo hice porque lo adoro, porque lo quiero, porque siempre está en mi mente, porque lo amo… usted es mi cielo, y quiero que sea mi niño todo el tiempo que podamos.',
  /*25*/'Feliz Navidad, amor. Aunque hoy no podamos estar juntos, quiero que sepa que lo llevo muy presente en mi corazón. La distancia no cambia lo que siento por usted; al contrario, me recuerda lo importante que es para mí. Deseo que esta Navidad le regale paz, calma y una sonrisa, y que sienta mi cariño acompañándolo, incluso desde lejos.'
];

// Imágenes (puede ser string o array para múltiples imágenes)
const dayImages = {
  5: 'img/imagen1.png',
  7: ['img/imagen8.png','img/imagen5.jpg', 'img/imagen6.jpg', 'img/imagen7.jpg'],
  12: 'img/imagen2.png',
  15: 'img/imagen4.png'
};

// Vales canjeables 
const dayVouchers = {
  4: 'Ir a Starbucks juntos y elegir lo que usted quiera',
  8: 'Un chocolate para endulzar su día, así como usted endulza mi vida',
  14: 'Un perdón exprés… válido incluso cuando yo me enoje sin razón',
  18: 'Ir a Llao Llao juntos y elegir lo que usted quiera',
  22: 'Una hamburguesa gigante con todo lo que usted quiera'
};

// Boton para reproducir el video
const dayVideos = {
  19: 'https://youtu.be/tmpfRCa2-_E?t=50',
  20: 'https://youtube.com/playlist?list=PLNFfrS6CHeJB7mhc751qR-LQvHP-Znzah&si=ROw-Et3Au0_vnan3'
};

// Carta especial para el día 1
const dayOneLetter = `
<div class="letter">
  <p class="letter-greeting">Querido amor mío,</p>
  <p class="letter-body">este calendario es mi forma de recordarle cada día lo mucho que lo quiero. Cada día encontrará algo especial hecho con amor para usted.</p>
  <p class="letter-signature">Con mucho cariño,<br>Karen ❤️</p>
</div>
`;

// Carta especial para el día 10
const dayTenLetter = `
<div class="letter">
  <p class="letter-greeting">Mi amor,</p>
  <p class="letter-body">Lo voy a amar cada segundo, entre besos, abrazos y sonrisas…
Y también en esos instantes tranquilos donde simplemente estemos conversando o compartiendo un silencio que se sienta lleno de paz. Quiero que usted sepa que su presencia es un regalo, que me transmite calma, y que cada día encuentro una razón nueva para apreciarlo aún más.</p>
  <p class="letter-body">Deseo cuidar lo que estamos construyendo, paso a paso, sin apresurarnos, con esa ilusión bonita que nace cuando todo se siente genuino. Quiero acompañarlo en sus metas, alegrarme con sus logros y ser apoyo cuando la vida pese un poco más. Porque para mí, usted es alguien especial, alguien que ilumina incluso mis días más rutinarios.</p>
  <p class="letter-body">Y mientras avanzamos, mientras seguimos creciendo juntos, quiero que tenga claro que mi cariño por usted no es pasajero… es constante. Está en los momentos dulces, en los tranquilos y en los que requieren fuerza.</p>
  <p class="letter-body">Quiero que usted sepa que aquí estoy, con el corazón abierto, agradecida por lo que compartimos y por lo mucho que aún nos falta vivir.</p>
  <p class="letter-signature">Con todo mi amor,<br>Karen ❤️</p>
</div>
`;

// Carta especial para el día 21
const dayTwentyOneLetter = `
<div class="letter">
  <p class="letter-greeting">¿Quién es usted para mí?</p>
  <p class="letter-body">Cuando pienso en usted, no solo pienso en la persona que me gusta, sino en todo lo que representa en mi vida. Usted es mi mejor amigo, mi confidente, la persona con quien puedo abrir el corazón y compartir mis pensamientos más sinceros.</p>
  <p class="letter-body">Usted es mi calma, mi sonrisa favorita, mis abrazos preferidos y esos besos que guardo con tanto cariño en el alma.</p>
  <p class="letter-body">Para mí, usted es inspiración, motivación y ternura. Es quien, sin darse cuenta, me está enseñando a amar cada día de una forma más bonita y más honesta. Usted es mi significado de compañía, ese espacio seguro donde todo se siente bien.</p>
  <p class="letter-body">Usted es, simplemente, mi lugar favorito.</p>
  <p class="letter-signature">Con todo mi amor,<br>Karen ❤️</p>
</div>
`;

// Carta especial para el día 24
const dayTwentyFourLetter = `
<div class="letter">
  <p class="letter-greeting">Amor mío,</p>
  <p class="letter-body">Quería escribirle para recordarle algo que a veces las palabras dichas en voz alta no alcanzan a expresar del todo: lo mucho que lo quiero. Usted es una de las personas más bonitas que han llegado a mi vida, no solo por lo que es, sino por todo lo que despierta en mí.</p>
  <p class="letter-body">Me encanta la forma en que su presencia tranquiliza, cómo su voz se vuelve refugio y cómo, sin darse cuenta, logra hacerme sonreír incluso en los días más cansados. Usted tiene ese don de quedarse en mis pensamientos y en mi corazón, de una manera suave pero profunda.</p>
  <p class="letter-body">Quiero que sepa que lo admiro, que valoro cada detalle suyo y que agradezco cada momento compartido. No necesito grandes promesas, me basta con sentir este amor que nace sincero, que se construye con gestos, paciencia y verdad.</p>
  <p class="letter-body">Hoy y siempre, quiero que tenga claro que lo quiero, que me importa y que ocupa un lugar especial en mi vida. Y aunque el tiempo pase, deseo que este sentimiento siga creciendo, tan bonito y tan nuestro como hasta ahora.</p>
  <p class="letter-signature">Con todo mi cariño,<br>Karen 💌</p>
</div>
`;

// Variable global para almacenar el día actual del servidor
let serverDay = 0;

// MODO PRUEBA: cambiar a true para desbloquear todas las puertas
const TEST_MODE = true;

async function getServerDay() {
  if (TEST_MODE) return 25; // Desbloquear todas las puertas en modo prueba
  
  try {
    // Intentar obtener hora del servidor (WorldTimeAPI - zona horaria de Colombia/México)
    const response = await fetch('https://worldtimeapi.org/api/timezone/America/Bogota');
    const data = await response.json();
    const serverDate = new Date(data.datetime);
    
    // Solo en diciembre retornamos el día
    if (serverDate.getMonth() === 11) {
      return serverDate.getDate();
    }
    return 0;
  } catch (error) {
    console.warn('No se pudo obtener hora del servidor, usando hora local como respaldo');
    // Fallback a hora local si falla la API
    const now = new Date();
    if (now.getMonth() === 11) {
      return now.getDate();
    }
    return 0;
  }
}

function createDoor(day){
  const todayDay = serverDay;
  const isUnlocked = day <= todayDay;

  const door = document.createElement('button');
  door.className = 'door' + (isUnlocked ? '' : ' locked');
  
  // Día 25 especial con esferas
  if (day === 25) {
    door.classList.add('door-christmas');
  }
  
  door.setAttribute('aria-label', isUnlocked ? `Abrir puerta ${day}` : `Puerta ${day} bloqueada`);
  const inner = document.createElement('div');
  inner.className = 'inner';

  const front = document.createElement('div');
  front.className = 'front';
  const label = isUnlocked ? 'Abre' : '🔒';
  
  // Agregar esferas colgantes solo al día 25
  let esferasHtml = '';
  if (day === 25) {
    esferasHtml = `
      <div class="esferas-container">
        <img src="img/esfera1.png" class="esfera esfera-1" alt="">
        <img src="img/esfera2.png" class="esfera esfera-2" alt="">
        <img src="img/esfera3.png" class="esfera esfera-3" alt="">
        <img src="img/esfera4.png" class="esfera esfera-4" alt="">
        <img src="img/esfera5.png" class="esfera esfera-5" alt="">
      </div>
    `;
  }
  
  front.innerHTML = `${esferasHtml}<div class="num"><div style="font-size:28px">${day}</div><span>${label}</span></div>`;

  const back = document.createElement('div');
  back.className = 'back';
  back.innerHTML = `<span class="back-heart">💜</span>`;

  inner.appendChild(front);
  inner.appendChild(back);
  door.appendChild(inner);

  // click handler
  door.addEventListener('click', (e)=>{
    if (!isUnlocked) {
      shakeIt(door);
      return;
    }
    if(door.classList.contains('open')) return;
    door.classList.add('open');
    showModal(messages[day-1] || 'Te quiero', day);
  });

  return door;
}

function shakeIt(el) {
  el.classList.add('shake');
  setTimeout(() => el.classList.remove('shake'), 400);
}

function showModal(text, day){
  const overlay = document.getElementById('overlay');
  const content = document.getElementById('modalContent');
  overlay.classList.remove('hidden');
  
  // Día 1: mostrar carta especial
  if (day === 1) {
    content.innerHTML = dayOneLetter;
  }
  // Día 10: mostrar carta especial
  else if (day === 10) {
    content.innerHTML = dayTenLetter;
  }
  // Día 21: mostrar carta especial
  else if (day === 21) {
    content.innerHTML = dayTwentyOneLetter;
  }
  // Día 24: mostrar carta especial
  else if (day === 24) {
    content.innerHTML = dayTwentyFourLetter;
  }
  // Día 25: corazón de fotos especial
  else if (day === 25) {
    const heartImages = [
      // Fila 1: posiciones 2,3 y 5,6 (4 fotos)
      'img/imagen7.jpg', 'img/imagen2.png', 'img/imagen14.jpg', 'img/imagen3.png',
      // Fila 2: posiciones 1-7 (7 fotos)
      'img/imagen13.png', 'img/imagen17.jpg', 'img/imagen15.jpeg', 'img/imagen6.jpg',
      'img/imagen9.png', 'img/imagen19.jpg', 'img/imagen11.png',
      // Fila 3: posiciones 1-7 (7 fotos)
      'img/imagen12.png', 'img/imagen16.jpeg', 'img/imagen20.jpg', 'img/imagen1.png',
      'img/imagen21.jpg', 'img/imagen2.png','img/imagen4.png',
      // Fila 4: posiciones 2-6 (5 fotos)
      'img/imagen3.png', 'img/imagen6.jpg', 'img/imagen11.png', 'img/imagen8.png', 'img/imagen9.png',
      // Fila 5: posiciones 3-5 (3 fotos)
      'img/imagen10.png', 'img/imagen7.jpg', 'img/imagen12.png',
      // Fila 6: punta (1 foto)
      'img/imagen13.png'
    ];
    const imgsHtml = heartImages.map(img => `<img src="${img}" alt="Recuerdo" class="photo-heart-img" onclick="openLightbox('${img}')">`).join('');
    content.innerHTML = `
      <div class="photo-heart-container">
        <p class="photo-heart-title">❤️ Feliz Navidad mi amor ❤️</p>
        <div class="photo-heart">${imgsHtml}</div>
        <p class="photo-heart-message">${text}</p>
      </div>
    `;
  }
  // Si este día tiene vale canjeable
  else if (dayVouchers[day]) {
    content.innerHTML = `
      <div class="coupon">
        <div class="ribbon">Exclusivo</div>
        <div class="coupon-header">
          <p class="coupon-title">✨ Vale de Amor ✨</p>
        </div>
        <div class="coupon-body">
          <p class="coupon-text">${dayVouchers[day]}</p>
          <div class="coupon-heart">💜</div>
        </div>
        <div class="coupon-footer">
          <p class="coupon-tip">📸 Tome captura para canjearlo • Sin fecha de expiración</p>
          <div class="coupon-barcode">
            <span></span><span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span><span></span>
            <span></span><span></span>
          </div>
        </div>
      </div>
    `;
  }
  // Si este día tiene video
  else if (dayVideos[day]) {
    content.innerHTML = `
      <div class="video-surprise">
        <p class="video-text">${text}</p>
        <a href="${dayVideos[day]}" target="_blank" class="video-btn">▶ Escuchar canción</a>
      </div>
    `;
  }
  // Si este día tiene imagen, mostrarla en el modal
  else if (dayImages[day]) {
    const images = dayImages[day];
    if (Array.isArray(images)) {
      // Múltiples imágenes con ancho uniforme
      const imgsHtml = images.map(img => `<img src="${img}" alt="Sorpresa" class="modal-img">`).join('');
      content.innerHTML = `<div class="multi-img-container">${imgsHtml}</div><p>${text}</p>`;
    } else {
      // Una sola imagen
      content.innerHTML = `<img src="${images}" alt="Sorpresa" class="modal-img"><p>${text}</p>`;
    }
  } else {
    content.innerHTML = `<p>${text}</p>`;
  }
  
  // corazones
  for(let i=0;i<6;i++){
    createHeart();
  }
}

function createHeart(){
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = '❤';
  heart.style.left = `${20 + Math.random()*60}%`;
  heart.style.fontSize = `${12 + Math.random()*20}px`;
  heart.style.animationDelay = `${Math.random()*0.6}s`;
  heart.style.top = `${60 + Math.random()*20}%`;
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(), 3000);
}

function closeModal(){
  const overlay = document.getElementById('overlay');
  overlay.classList.add('hidden');
}

// Lightbox para fotos
function openLightbox(imgSrc) {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <img src="${imgSrc}" alt="Foto ampliada">
      <button class="lightbox-close">×</button>
    </div>
  `;
  document.body.appendChild(lightbox);
  
  // Cerrar al hacer clic fuera o en el botón
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
      lightbox.remove();
    }
  });
}

// Recordatorios flotantes para días específicos
const floatingReminders = {
  3: {
    title: '💔❤️‍🩹 Recordatorio',
    text: 'Ayer me dijo culera, me dijo puta y me mandó a comer mierda 😢.'
  },
  4: {
    title: '💝 Recordatorio',
    text: 'lo amo tanto mi cosita bonita ✨'
  },
  6: {
    title: '💝 Recordatorio',
    text: 'Hoy lo quiero más que ayer ♥'
  },
  7: {
    title: '💝 Recordatorio',
    text: 'Usted alegra mis días ♥'
  }
};

function showFloatingReminder(day) {
  const reminder = floatingReminders[day];
  if (!reminder) return;
  
  const reminderEl = document.createElement('div');
  reminderEl.className = 'floating-reminder';
  reminderEl.innerHTML = `
    <button class="reminder-close" aria-label="Cerrar recordatorio">×</button>
    <div class="reminder-title">${reminder.title}</div>
    <div class="reminder-text">${reminder.text}</div>
  `;
  
  document.body.appendChild(reminderEl);
  
  // Cerrar recordatorio
  reminderEl.querySelector('.reminder-close').addEventListener('click', () => {
    reminderEl.style.animation = 'fadeInSlide 0.4s ease-out reverse';
    setTimeout(() => reminderEl.remove(), 400);
  });
}

document.addEventListener('DOMContentLoaded', async ()=>{
  // Obtener día del servidor antes de crear las puertas
  serverDay = await getServerDay();
  
  const grid = document.getElementById('grid');
  for(let d=1; d<=25; d++){
    const door = createDoor(d);
    grid.appendChild(door);
  }

  document.getElementById('closeBtn').addEventListener('click', closeModal);
  document.getElementById('overlay').addEventListener('click', (e)=>{
    if(e.target.id === 'overlay') closeModal();
  });
  
  // Mostrar recordatorio flotante si corresponde al día actual
  showFloatingReminder(serverDay);
});

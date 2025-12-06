// Textos para cada día
const messages = [
  /*1*/'Para mi amor 💋❤️',
  /*2*/'Hoy solo quiero que sepa que lo quiero bonito, sin condiciones ni prisas. Adoro sus abrazos y cómo me hace sentir segura.',
  /*3*/'Lo quiero porque con usted puedo ser yo misma, sin miedo, sin filtros… y eso es un regalo enorme. Mi corazón se siente en casa cuando estoy con usted.',
  /*4*/'(vale)',
  /*5*/'Me encanta cómo hace que todo sea más divertido y especial.',
  /*6*/'Me gusta su creatividad, esa travesura suya de desarmar todo lo que cae en sus manos, y el ingenio con el que después lo vuelve a dejar mejor que antes.',
  /*7*/'Me gusta por sus ojitos lindos, por esa voz que me derrite, por su sonrisa, por su risa… y por cada detalle suyo que me encanta.',
  /*8*/'(vale)',
  /*9*/'Así nos veríamos si la vida nos hubiera presentado antes. Me encanta pensar que, de una u otra forma, siempre íbamos a encontrarnos. ♥',
  /*10*/'Me gusta por la paciencia que tiene, por su calma, por su serenidad y por su forma tan sensata de encontrar soluciones.',
  /*11*/'Me encantan sus besos, la manera en que usted se acerca y cómo logra que todo a mi alrededor se detenga.',
  /*12*/'Navidad siempre es especial, pero este año lo será aún más porque estaré con usted',
  /*13*/'Me gusta cómo hace que todo me dé vueltas; una sonrisa suya basta para que mi día sea lindo, y solo con escuchar su nombre me pongo color fresa',
  /*14*/'(vale)',
  /*15*/'Mañana le llegará un regalito',
  /*16*/'Espero que le haya gustado su regalito, se lo doy con mucho amor',
  /*17*/'Me gusta por los apodos únicos que se inventa, y me encanta cómo cada uno refleja su ingenio y ternura.',
  /*18*/'(vale)',
  /*19*/'Este fragmento de la canción me hace pensar en usted y en lo mucho que lo quiero',
  /*20*/'La verdad, hay más de una canción que me recuerda a usted. Todas estas canciones hablan de un amor profundo y sincero, justo como el nuestro.',
  /*21*/'Espero que no piense que todo esto es demasiado intenso… solo quería recordarle cuánto me importa usted.',
  /*22*/'(vale)',
  /*23*/'Quiero que sepa que lo quiero más de lo que las palabras pueden decir, usted es realmente muy especial para mí. Usted es mi Navidad anticipada, mi regalo precioso y la razón por la que este año se siente tan especial.',
  /*24*/'Feliz noche buena, ni niño. Todo esto lo hice porque lo adoro, porque lo quiero, porque siempre está en mi mente, porque lo amo… usted es mi cielo, y quiero que sea mi niño todo el tiempo que podamos.',
  /*25*/'-----'
];

// Imágenes (puede ser string o array para múltiples imágenes)
const dayImages = {
  5: 'img/imagen1.png',
  9: ['img/imagen5.jpg', 'img/imagen6.jpg'],
  12: 'img/imagen2.png',
  15: 'img/dia16.jpeg',
  24: 'img/imagen4.png'
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

// Variable global para almacenar el día actual del servidor
let serverDay = 0;

// MODO PRUEBA: cambiar a true para desbloquear todas las puertas
const TEST_MODE = false;

async function getServerDay() {
  if (TEST_MODE) return 24;
  
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
  door.setAttribute('aria-label', isUnlocked ? `Abrir puerta ${day}` : `Puerta ${day} bloqueada`);
  const inner = document.createElement('div');
  inner.className = 'inner';

  const front = document.createElement('div');
  front.className = 'front';
  const label = isUnlocked ? 'Abre' : '🔒';
  front.innerHTML = `<div class="num"><div style="font-size:28px">${day}</div><span>${label}</span></div>`;

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
      // Múltiples imágenes
      const imgsHtml = images.map(img => `<img src="${img}" alt="Sorpresa" class="modal-img">`).join('');
      content.innerHTML = `${imgsHtml}<p>${text}</p>`;
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
  for(let d=1; d<=24; d++){
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

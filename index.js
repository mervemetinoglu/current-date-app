const userName = prompt('Lutfen isminizi paylasir misiniz?');
//const userNamee = 'mm';

const welcomeText = document.querySelector('#welcome-text');
const timeText = document.querySelector('#time-text');
const contentText = document.querySelector('#content-text');
const background = document.querySelector('.background');

//prompt yardimi ile alinan kullanici ismini html icerisine eklenmesi
welcomeText.innerHTML = `Merhaba, ${userName}! Hoş geldin!`;

//saatin, gunun guncellenip html icerisine eklenmesini saglayan fonksiyon
function updateTime() {
    let date = new Date();
    let dayName = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'][date.getDay()];
    
    let hour = date.getHours() < 10 ? '0'+date.getHours() : date.getHours();
    let minute = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes();
    let second = date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds();

    timeText.innerHTML = `Günlerden ${dayName}, saat ${hour}:${minute}:${second}  :)`;

    updateBackgroundImage(hour); 
   
}

//saate gore arka plani degistiren fonksiyon
function updateBackgroundImage(hour) {
   
    if(hour >= 20 || hour <= 6) {
        background.classList.remove('noon');
        background.classList.add('night');
    } else if(hour >=6 || hour <= 13) {
        background.classList.remove('night');
        background.classList.add('morning');
    }else {
        background.classList.remove('morning');
        background.classList.add('noon');
    }
}

//belirli araliklarla (1 sn) updateTime() fonksiyonunu cagirmak icin
function initTime() {
    setInterval(()=>{
        updateTime();
    }, 1000);
}

initTime();




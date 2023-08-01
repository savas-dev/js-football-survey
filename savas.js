

const dogruCevaplar = ['E', 'E', 'E', 'E'];

const form = document.querySelector('.question-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e=>{
    e.preventDefault();

    let puan = 0;
    const kullaniciCevaplari = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    kullaniciCevaplari.forEach((cevap, index) => {
        if(cevap === dogruCevaplar[index]){
            puan += 25;
        }
    });

    result.classList.remove('d-none');

    let animasyonPuan = 0;
    const animasyon = setInterval(() =>{
        result.querySelector('span').textContent = `${animasyonPuan}%`;
        if(animasyonPuan == puan){
            clearInterval(animasyon);
        }else{
            animasyonPuan++;
        }
    }, 10);

})
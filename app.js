const btn = document.querySelector('#togbtn');
const tapoff = document.querySelector('.off');
const tapon = document.querySelector('.on');

btn.addEventListener('change', () => {
    if(tapoff.classList.contains('active')){
        tapon.classList.add('active');
        tapoff.classList.remove('active');
        alert("Tap is on");
    }
    else if(tapon.classList.contains('active')){
        tapoff.classList.add('active')
        tapon.classList.remove('active')
        alert("Tap is off");
    }
});
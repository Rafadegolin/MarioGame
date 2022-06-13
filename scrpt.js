const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.clouds');
const cloud2 = document.querySelector('.clouds2');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    } , 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudPosition = +window.getComputedStyle(cloud).bottom.replace('px', '');
    const cloudPosition2 = +window.getComputedStyle(cloud2).bottom.replace('px', '');
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './assets/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        cloud.style.animation = 'none';
        cloud.style.right = `${cloudPosition}px`;
        console.log(cloudPosition);

        cloud2.style.animation = 'none';
        cloud2.style.right = `${cloudPosition2}px`;
        console.log(cloudPosition);

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);
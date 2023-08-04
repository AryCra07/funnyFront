// const loadText = document.querySelector(".loading-text");
const bg_picture = document.querySelector(".bg-picture");

let load = 0;

let int = setInterval(() => {
    load++;

    if (load > 99) {
        clearInterval(int);
    }

    // loadText.innerText = `${load}%`;
    // loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg_picture.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}, 20);

const scale = (num, in_min, in_max, out_min, out_max) => {
    console.log(out_max - out_min);
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

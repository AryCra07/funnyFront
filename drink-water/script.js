const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

updateBigCup();

smallCups.forEach((cup, idx) => {
    cup.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(idx) {
    // idx--的目的是，当所有小水杯都为满时，再次点击最后一个水杯时使其重新变空。
    if (idx === 7 && smallCups[idx].classList.contains("full")) idx--;
    // idx--的目的是，当当前水杯为满且后面的水杯为空时，再次点击此水杯后使其重新变空
    else if (
        smallCups[idx].classList.contains("full") &&
        !smallCups[idx].nextElementSibling.classList.contains("full")
    ) {
        idx--;
    }

    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add("full");
        } else {
            cup.classList.remove("full");
        }
    });

    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    const totalCups = smallCups.length;

    if (fullCups === 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${(fullCups / totalCups) * 320}px`;
        percentage.innerText = `${(fullCups / totalCups) * 100}%`;
    }

    if (fullCups === totalCups) {
        remained.style.visibility = "hidden";
        remained.style.height = 0;
    } else {
        remained.style.visibility = "visible";
        liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
    }
}

const grid = document.getElementById("hymnGrid");

for (let i = 1; i <= 757; i++) {
    let div = document.createElement("div");
    div.className = "box";
    div.innerText = i;

    div.onclick = () => {
        window.location.href = `hymns/${i}.html`;
    };

    grid.appendChild(div);
}

function changeImg() {
    let pic = document.getElementById("img1");

    let x = Math.floor(Math.random() * 3) + 1;

    pic.src = `Images/${x}.jpg`;
}
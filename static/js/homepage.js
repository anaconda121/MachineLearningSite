function init_movement(){
    let background = document.querySelector('section')
    let x, y
    document.onmousemove = (e) => {
        if (x && y) {
            background.style.backgroundPositionX = -x + "px";
            background.style.backgroundPositionY = -y + "px";
        }
        x = e.clientX / 5
        y = e.clientY / 5
    }	
}
const el = document.querySelector("#module");

init_movement()
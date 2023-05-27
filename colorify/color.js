function paint(color) {
    const circle = document.getElementById('circle_id');
//    circle.style = `background-color:${color}`;
    circle.style.backgroundColor=color;
}

function random()
{
    const array = ["red","green","yellow"];
    var val = Math.floor(Math.random()*array.length);
    document.getElementById('circle_id').style.backgroundColor=array[val];
    console.log(val);
}
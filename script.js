let count, count1 = 0;
var duplicate = [];
var index = 0;
var range = 0;
    
const container = document.getElementsByClassName("container");
const generateDivs = () =>{
    
    let randomNumber = Math.floor((Math.random() * (15-5)) + 5);
    
    alert("Number of circles: " + randomNumber);

    for(count = 0; count < randomNumber; count++){
        while(duplicate.includes(range)){
            range = Math.floor((Math.random() * (randomNumber-1)) + 1);
        }
        div = document.createElement('div');
        container[0].appendChild(div);
        div.className = "box";
        div.style.display = "flex";
        div.style.justifyContent = "center";
        div.style.alignItems = "center";
        div.innerText = range + 1;
        duplicate[index] = range;
        index += 1;
    }
}
generateDivs();

const sortedArray = () => {
    duplicate.sort(function(a, b){return a - b});
    duplicate = duplicate.map(function(val){return ++val;});
}

sortedArray();

const box = document.getElementsByClassName('box');
const button = document.getElementsByTagName("button");
const message = document.getElementsByClassName("message");
const time = document.getElementsByClassName("time");
const order = [];
let index1 = 0;

var start = new Date().getTime();

for(let x = 0; x < box.length; x++){
    box[x].addEventListener('click', () => {
        box[x].style.backgroundColor = "green";
        box[x].style.pointerEvents = "none";
        order[index1] = box[x].innerText;
        index1 += 1;
        if(order.length == duplicate.length){
            button[0].style.display = "flex";
            button[0].disabled = false;
        }
    });
}
button[0].addEventListener('click', () => {
    let i = 0;
    let count = 0;
    for(i = 0; i < order.length; i++){
        if(order[i] == duplicate[i]){
            count += 1;
        }
    }
    if(count == duplicate.length){
        message[0].innerHTML = "<h1 class='green'>You did it in correct order!</h1>";
        button[1].style.display = 'flex';
        var end = new Date().getTime();
        var timeTaken = (end - start)/1000;
        time[0].innerHTML = `<h1>Time taken by you: ${timeTaken}s`;
        time[0].style.display = "flex";
        button[0].style.display = "none";
    }else{
        message[0].innerHTML = "<h1 class = 'red'>You failed miserably!!</h1>";
        button[1].style.display = 'flex';
        var end = new Date().getTime();
        var timeTaken = (end - start)/1000;
        time[0].innerHTML = `<h1>Time taken by you: ${timeTaken}s`;
        time[0].style.display = "flex";
        button[0].style.display = "none";
    }
});
button[1].addEventListener('click', () => {
    window.location.reload();
})


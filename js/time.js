function getImage(currentHour){
    console.log(currentHour);
    if(currentHour < 8 || currentHour > 19){
        console.log('night');
        return nightImage; 
    } else {
        console.log('day');
        return dayImage;
    }
}


function setBoxes(currentDay){
   boxes.forEach( box => {

        if(currentDay > box.id){
            box.past = true;
       }
       if(currentDay === box.id){
           box.current = true;
       }
   })


}

const mainImage = document.querySelector('#main-image');
const dayImage = 'img/winter-day-use.png';
const nightImage = 'img/winter-night-use.jpg';
const time = new Date();
const hours = time.getHours();
const day = time.getDate();
// const day = 1;

let currentImage = getImage(hours);
mainImage.src = currentImage;

setBoxes(day);





const baseURL = 'http://www.kitka.org/wintersongsdaily/dec'

stars = [starOffsets[0], starOffsets[1]];


document.body.addEventListener('mousemove', (e)=> {
    const rect = e.target.getBoundingClientRect();
    console.log('x:', e.clientX - rect.x);
    console.log('y:', e.clientY - rect.y);
})


const container = document.querySelector('#container');

boxes.forEach(item => {
    console.log('hi');
    createBorder(item.id, item.x, item.y, item.w, item.h, item.ready, item.pulsing);
})

stars.forEach((star, i) =>{
    createStar(star.x, star.y);
})


function createBorder(id, x, y, w, h, ready, pulsing){
    const anchor = document.createElement('a');
    anchor.className= 'divLink';
    anchor.href = `${baseURL}${id}`;
    const div = document.createElement('div');
    div.appendChild(anchor);
    div.style.left = `${x}px`;
    div.style.top = `${y}px`;
    div.style.width = `${w}px`;
    div.style.height = `${h}px`;
    div.className = 'box';
    if(ready){
        div.className += ' outline';
    }
    if(pulsing){
        div.className += ' pulsing';
        div.addEventListener('click', (e)=>{
            console.log(id);
            console.log(starOffsets[id-1]);
            stars.push(starOffsets[id-1]);
            stars.forEach((star) =>{
                createStar(star.x, star.y);
            e.target.className = 'box outline';    
            })
        })
    }
    container.appendChild(div);
}

function createStar(x,y){
    const star = document.createElement('div');
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.className = 'star';
    const img = document.createElement('img');
    img.src = 'img/star.png';
    star.appendChild(img);
    container.appendChild(star);
}
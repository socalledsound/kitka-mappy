const outlineOffsets = [
    {
        id: 0,
        ready: true,
        pulsing: false,
       
        x: 220, 
        y: 580,
        w: 150,
        h: 100,
    },
    {
        id: 1,
        ready: true,
        pulsing: false,
        
        x: 145, 
        y: 270,
        w: 50,
        h: 50,
    },
    {
        id: 2,
        ready: true,
        pulsing: true,
        x: 522, 
        y: 290,
        w: 60,
        h: 80,
    }
];

const starOffsets = [
    {
        id: 0,
        x: 340,
        y: 620,
    },
    {
        id: 1,
        x: 170,
        y: 260,
    },
    {
        id: 2,
        x: 500,
        y: 270,
    }
];

stars = [starOffsets[0], starOffsets[1]];


// document.body.addEventListener('mousemove', (e)=> {
//     console.log('x:', e.clientX);
//     console.log('y:', e.clientY);
// })


const container = document.querySelector('#container');

outlineOffsets.forEach(item => {
    console.log('hi');
    createBorder(item.id, item.x, item.y, item.w, item.h, item.ready, item.pulsing);
})

stars.forEach((star, i) =>{
    createStar(star.x, star.y);
})


function createBorder(id, x, y, w, h, ready, pulsing){
    const div = document.createElement('div');
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
            console.log(starOffsets[id]);
            stars.push(starOffsets[id]);
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
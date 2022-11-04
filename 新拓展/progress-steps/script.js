// const progress = document.getElementById('progress')
// const prev = document.getElementById('prev')
// const next = document.getElementById('next')
// const circles = document.querySelectorAll('.circle')

// let currentActive = 1

// next.addEventListener('click', () => {
//     currentActive++

//     if(currentActive > circles.length) {
//         currentActive = circles.length
//     }

//     update()
// })

// prev.addEventListener('click', () => {
//     currentActive--

//     if(currentActive < 1) {
//         currentActive = 1
//     }

//     update()
// })

// function update() {
//     circles.forEach((circle, idx) => {
//         if(idx < currentActive) {
//             circle.classList.add('active')
//         } else {
//             circle.classList.remove('active')
//         }
//     })

//     const actives = document.querySelectorAll('.active')

//     progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

//     if(currentActive === 1) {
//         prev.disabled = true
//     } else if(currentActive === circles.length) {
//         next.disabled = true
//     } else {
//         prev.disabled = false
//         next.disabled = false
//     }
// }

const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 0;

prev.addEventListener('click', () => {
    currentActive -= 1;
    if (currentActive < 0) {
        currentActive = 0
    }
    update();
})

next.addEventListener('click', () => {
    currentActive += 1;
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
})

const update = ()=>{
    circles.forEach((circle,index)=>{
        if(index<currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    if(currentActive>0){
        progress.style.width = ((currentActive-1)/3)*100+'%';
    }
    if(currentActive==4){
        next.disabled = true;
    }else if(currentActive == 0){
        prev.disabled = true;
    }else{
        next.disabled = false;
        prev.disabled = false
    }
}
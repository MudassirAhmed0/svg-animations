// const svg = document.querySelector('svg')
const paths = document.querySelectorAll('svg > path')


paths.forEach((path,index)=>{
  const pathSize =    path.getTotalLength()
    path.style.strokeDasharray = `${pathSize}px`
    path.style.strokeDashoffset = `${pathSize}px`
    path.style.animation= 'line-anime 2s ease forwards'
    path.style.animationDelay =`${ index * 0.3}s` 
     
})

// svg.style.animation = 'fill .5s ease forwards'
// svg.style.animationDelay =`${ paths.length   * 0.3}s` 
 
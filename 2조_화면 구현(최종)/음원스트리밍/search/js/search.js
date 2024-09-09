const art_body = document.querySelector('.art_body')
const art_next = document.querySelector('.art_next')
const art_prev = document.querySelector('.art_prev')
const art_over = document.querySelector('.art_over_body')
const art_list = document.querySelector('.art_list')


const art_overW = art_over.clientWidth
const art_listW = art_list.clientWidth
const art_bodyw = art_body.clientWidth
const art_bodyW = art_body.getBoundingClientRect()
const run = art_bodyW.width
const runW = parseFloat(run.toFixed(2))
console.log(runW)


let art_cnt = 1

art_next.addEventListener(('click'), () => {
    const art_over = document.querySelector('.art_over_body')
    const art_overW = art_over.clientWidth
    
    const art_body = document.querySelector('.art_body')
    const art_bodyW = art_body.getBoundingClientRect()
    const art_bodyw = art_body.clientWidth
    
    const run = art_bodyW.width
    const runW = parseFloat(run.toFixed(2))
    // console.log(art_cnt)
    
    // console.log(art_overW / art_bodyw)
    if (art_cnt < 3) {
        console.log(art_cnt)
        art_over.style.transform = `translateX( -${(runW) * art_cnt}px)`
        art_cnt++
        console.log(art_cnt)
    }
       
    
})

art_prev.addEventListener(('click'), () => {
    console.log(art_cnt)
    
    const art_body = document.querySelector('.art_body')
    const art_bodyW = art_body.getBoundingClientRect()
    const run = art_bodyW.width
    const runW = parseFloat(run.toFixed(2))
     
    if (art_cnt >= 1) {
        art_cnt--
        art_over.style.transform = `translateX( -${runW * art_cnt}px)`;
    } 
    
   
})

// ------------------------------------------- music



let music_cnt = 1

const music_next = document.querySelector('.music_next')
const music_prev = document.querySelector('.music_prev')




music_next.addEventListener(('click'), () => {
    const music_over = document.querySelector('.music_over')
    const music_overW = music_over.clientWidth
    
    const music_body = document.querySelector('.music_body')
    const music_bodyW = music_body.getBoundingClientRect()
    const music_bodyw = music_body.clientWidth
    
    const run = music_bodyW.width
    const runW = parseFloat(run.toFixed(2))
   
    if (music_cnt < music_overW / music_bodyw) {
        music_over.style.transform = `translateX( -${(runW) * music_cnt}px)`;
        ++music_cnt;
    }
    
   


})





music_prev.addEventListener(('click'), () => {
    const music_over = document.querySelector('.music_over')
    const music_overW = music_over.clientWidth
    
    const music_body = document.querySelector('.music_body')
    const music_bodyW = music_body.getBoundingClientRect()
    const music_bodyw = music_body.clientWidth
    
    const run = music_bodyW.width
    const runW = parseFloat(run.toFixed(2))
    console.log(music_cnt)

    if (music_cnt > 0) {
        music_cnt--
        music_over.style.transform = `translateX( -${runW * music_cnt}px)`;
    }

})



//-------------------------- 앨범 ----------------------
const album_next = document.querySelector('.album_next')
const album_prev = document.querySelector('.album_prev')


let album_cnt = 1

album_next.addEventListener(('click'), () => {
    const album_over = document.querySelector('.album_over')
    const album_overW = album_over.clientWidth

    const album_body = document.querySelector('.album_body')
    const album_bodyW = album_body.getBoundingClientRect()
    const album_bodyw = album_body.clientWidth
    
    const run = album_bodyW.width
    const runW = parseFloat(run.toFixed(2))
    console.log(album_cnt)
    if (album_cnt < album_overW / album_bodyw) {
        album_over.style.transform = `translateX( -${(runW) * album_cnt}px)`;
        ++album_cnt;
    }


})





album_prev.addEventListener(('click'), () => {
    
    const album_over = document.querySelector('.album_over')
    const album_overW = album_over.clientWidth
    
    const album_body = document.querySelector('.album_body')
    const album_bodyW = album_body.getBoundingClientRect()
    const album_bodyw = album_body.clientWidth
    
    const run = album_bodyW.width
    const runW = parseFloat(run.toFixed(2))
    console.log(album_cnt)

    if (album_cnt > 0) {
        album_over.style.transform = `translateX( -${runW * album_cnt}px)`;
        --album_cnt;
    }
})









//----------------------- 뮤비 -----------------------

const mv_next = document.querySelector('.mv_next')
const mv_prev = document.querySelector('.mv_prev')


let mv_cnt = 1

mv_next.addEventListener(('click'), () => {
    const mv_over = document.querySelector('.mv_over')
    const mv_overW = mv_over.clientWidth
    
    const mv_body = document.querySelector('.mv_body')
    const mv_bodyW = mv_body.getBoundingClientRect()
    const mv_bodyw = mv_body.clientWidth
    
    const run = mv_bodyW.width
    const runW = parseFloat(run.toFixed(2))
    console.log(mv_cnt)
    if (mv_cnt < mv_overW / mv_bodyw) {
        mv_over.style.transform = `translateX( -${(runW) * mv_cnt}px)`;
        ++mv_cnt;
    }
    
})





mv_prev.addEventListener(('click'), () => {
    const mv_over = document.querySelector('.mv_over')
    const mv_overW = mv_over.clientWidth
    
    const mv_body = document.querySelector('.mv_body')
    const mv_bodyW = mv_body.getBoundingClientRect()
    const mv_bodyw = mv_body.clientWidth
    
    const run = mv_bodyW.width
    const runW = parseFloat(run.toFixed(2))
    console.log(mv_cnt)

    if (mv_cnt > 0) {
        mv_cnt--
        mv_over.style.transform = `translateX( -${runW * mv_cnt}px)`;
    }


})
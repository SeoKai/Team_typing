const search = document.querySelector('.sidebar>.search-box>input')

search.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter'){
        console.log('확인')
        window.location.href = "../../search/html/search.html"
    }
})

const slider = document.querySelector(".slider"); 
const list = document.querySelectorAll('.item > .list-item'); 
let currentIndex = 0; 
// 슬라이드 이동
function moveSlide(index) {
    //.item의 자식들 불러오기 (list-song)
    const sliderItem = document.querySelector(".slider > .item").children;
    // 첫번째 자식의 오른쪽 끝의 위치
    let firstItemRight = sliderItem[0].getBoundingClientRect().right;
    // 두번째 자식의 왼쪽 끝의 위치
    let secondItemLeft = sliderItem[1].getBoundingClientRect().left;
    // space-between으로 생기는 사이 공간 계산
    let spaceBetween = secondItemLeft - firstItemRight;
    
    
    let maxIndex = list.length - 3; //default maxIndex
    if(window.innerWidth <= 1260 && window.innerWidth > 900 ){
        maxIndex += 1;  
    }else if(window.innerWidth <= 900){
        maxIndex += 2;
    }
    console.log('맥스인덱스확인용',maxIndex)
    //math.max = 둘중 최댓값 // math.min = 둘중 최솟값
    //index가 0보다 크고 maxIndex보다 작게 만들어줌
    index = Math.max(0, Math.min(index, maxIndex));
    
    let slideWidth = list[0].clientWidth+(spaceBetween);
    
    // console.log("현재인덱스확인용",index)
    // console.log('사이거리확인용:', spaceBetween);
    // console.log("얼마나움직이나",slideWidth)
    slider.style.transform = `translateX(${-slideWidth * index}px)`;
}

// 다음 슬라이드로 이동
document.querySelector(".my-playlist-body > .next").addEventListener('click', () => {
    if (currentIndex < list.length - 1) { 
        currentIndex++; 
        moveSlide(currentIndex); 
    }
    console.log("현재인덱스",currentIndex)
});

// 이전 슬라이드로 이동
document.querySelector(".my-playlist-body > .prev").addEventListener('click', () => {
    if (currentIndex > 0) { 
        currentIndex--; 
        moveSlide(currentIndex); 
    }
    console.log("현재인덱스",currentIndex)
});

// 화면 크기 변경 시 현재 슬라이드에 맞춰 위치 재조정
window.addEventListener('resize', () => {
    moveSlide(currentIndex); // 화면 크기가 변경되면 현재 인덱스에 맞춰 슬라이드 재정렬
});


const heart = document.querySelectorAll('.heart')
heart.forEach((item)=>{
    item.addEventListener('click',()=>{
        //누르면 색깔 바뀌게 하기위해 클래스 추가
        item.classList.toggle('clicked')
        //누르면 likecnt 숫자 1오르게 함
        const likecnt_str = item.parentElement.querySelector(".likecnt")
        let likecnt_num = parseInt(likecnt_str.textContent)

        if(item.classList.contains('clicked')){
            likecnt_num += 1;
        }else{
            likecnt_num -= 1;
        }
        likecnt_str.textContent = likecnt_num
    })
})


// 버튼을 누르면 모든 체크박스를 선택하는 함수
function rec_checkAll() {
    var checkboxes = document.getElementsByClassName("rec-Checkbox"); // 클래스 이름으로 모든 체크박스를 선택
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true; // 각 체크박스를 체크
    }
}
function fav_checkAll() {
    var checkboxes = document.getElementsByClassName("fav-Checkbox"); 
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true; 
    }
}
// 버튼을 누르면 모든 체크박스를 해제하는 함수
function rec_uncheckAll() {
    var checkboxes = document.getElementsByClassName("rec-Checkbox"); // 클래스 이름으로 모든 체크박스를 선택 해제
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false; // 각 체크박스를 해제
    }
}
function fav_uncheckAll() {
    var checkboxes = document.getElementsByClassName("fav-Checkbox"); 
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false; 
    }
}



// 쿠키 확인
console.log('쿠키를 확인해봅시다',document.cookie)

//쿠키가 있으면 쿠키 파일의 value를 미리보기의 back-img에 추가
if (document.cookie != null) {
    const backimg = document.querySelector(".prfe-wrap");
    backimg.style.backgroundImage = `url(${document.cookie})`;
}

// console.log(cookie_Array)
// console.log(cookie_Array[0])
// console.log(cookie_Array[1])
// console.log(cookie_Array[2])
// console.log(cookie_Array[1].substring(1));
// console.log(cookie_Array[0].split("="))
// console.log(cookie_Array[1].split("="))
// console.log(cookie_Array[2].split("="))
// console.log(cookie_Array[2].slice("="))

// const [name0,value0] = cookie_Array[0].split("=");
// const [name1,value1] = cookie_Array[1].split("=");
// const [name2,value2] = cookie_Array[2].split("=");

// console.log(name0)
// console.log(name1)
// console.log(name2)

// console.log(value0)
// console.log(value1)
// console.log(value2)

// const [key,value] = cookie_Array.split("=");
// console.log(key)
// console.log(value)
const cookie_Array = document.cookie.split(';');

for(let i=0;i<cookie_Array.length;i++){

    
    let [key,value]= cookie_Array[i].split("=");
    console.log(key)
    console.log(value)
    value = value.trim();
    key = key.trim();
    const bg_img = document.querySelector(".prfe-wrap");
    
    if(key === "bg_img"){
        bg_img.style.backgroundImage=`url(${value})`
        console.log(bg_img)
    }
    if(key === "intro_text"){
        const intro_text_value = value.trim();

        const intro_text = document.querySelector(".intro_prfe");

        //기존 소개글 제거
        const oldspan = intro_text.querySelector("span"); 
        if(oldspan != null){
            oldspan.remove()
        }
        //intro_text_value를 span태그로 추가
        const newspan = document.createElement("span")
        newspan.innerHTML= intro_text_value;
     
     
        intro_text.appendChild(newspan);
    }
}







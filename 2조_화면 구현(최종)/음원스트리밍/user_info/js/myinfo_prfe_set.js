console.log('cookie ',document.cookie)

const search = document.querySelector('.sidebar>.search-box>input')

search.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter'){
        console.log('확인')
        window.location.href = "../../search/html/search.html"
    }
})


let preview_background = '';  // 백그라운드 정보 저장용
// preview의 백그라운드 설정

document.querySelectorAll('input[name="background"]')
   .forEach(radio => {
       radio.addEventListener('change', (e) => {
           const imageUrl = e.target.value;
           const preview = document.querySelector('.preview');
           preview.style.backgroundImage = `url(${imageUrl})`;

           preview_background = imageUrl // 현재 백그라운드 url을 저장
           console.log("url확인",preview_background)
   });
});


// 배경 이미지 설정의 적용 버튼 클릭시 현재 선택된 배경이미지의 value를 쿠키에 저장함
const back_img_apply = document.querySelector("#back_img_apply")
back_img_apply.addEventListener('click',(e)=>{
    
    document.cookie = `bg_img = ${preview_background}`;
    alert('배경 이미지가 성공적으로 변경되었습니다.')
})


// 소개글 부분의 적용 버튼 클릭시 내용을 그 내용을 쿠키에 저장함
const prfe_intro_apply = document.querySelector("#prfe_intro_apply");
prfe_intro_apply.addEventListener('click',()=>{

    const intro_text = document.getElementById("intro_text").value;
    document.cookie = `intro_text = ${intro_text}`;
    alert('소개글이 성공적으로 변경되었습니다.')
})

// 돌아가기 버튼 클릭시 동의 여부 확인 후, 확인 > 페이지 이동, 취소 > 페이지 이동 X
const back_btn = document.querySelector("#back-btn");

back_btn.addEventListener('click',()=>{
    const check = confirm(`변경 후 적용 버튼을 누르지 않았다면, 변경 사항이 제대로 적용되지 않을 수 있습니다.

돌아가시겠습니까?`)
    if(check){
        window.location.href="./myinfo.html";
    }
    else{}
})






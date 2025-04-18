// mem_fn.js
// 로그인을 위한 로컬스토리지 생성 JS
/************************************ 
    [ 로그인 회원 데이터 구조 ]
    1. 기본키(유일키) : idx
    2. 아이디 : uid
    3. 비밀번호 : pwd
    4. 사용자이름 : unm
    5. 이메일 : eml
************************************/

// [ 로컬쓰 클리어 ] /////////
const clearData = () => {
  localStorage.clear();
  console.log("로컬쓰 클리어!");
}; /////////// clearData //////////////

// [ 로컬쓰 초기체크셋팅! ] ////////////
const initData = () => {
  // 만약 로컬스 "mem-data"가 null이면 만들어준다!
  if (localStorage.getItem("mem-data") === null) {
    localStorage.setItem(
      "mem-data",
      `
      [
          {
              "idx": 1,
              "uid": "admin",
              "pwd": "1111",
              "unm": "Administrator",
              "eml": "admin@dc.com"
          },
          {
              "idx": 2,
              "uid": "tomtom",
              "pwd": "1111",
              "unm": "Tom",
              "eml": "tom@gmail.com"
          },
          {
              "idx": 3,
              "uid": "min",
              "pwd": "1111",
              "unm": "이민경",
              "eml": "min@example.com"
          },{
              "idx": 4,
              "uid": "outfront",
              "pwd": "1111",
              "unm": "아웃프런",
              "eml": "outfront@outfront.com"
          }
      ]
    `
    );
  }
}; ///////////// initData /////////////////

export { clearData, initData };

import {memo, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "../../scss/header.scss";
import $ from "jquery";

const Header = memo(({goPage, loginSts, setLoginSts}) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const eduCate = ["전체", "개발프로그래밍", "게임개발", "데이터사이언스", "인공지능", "보안네트워크", "기타"]; // 강의 카테고리

  useEffect(() => {
    const $mainMenu = $(".main-category > li:eq(0) > a");
    const $subMenu = $(".sub-category");

    // 강의 메뉴 클릭 시 서브메뉴 토글
    $mainMenu.on("click", function (e) {
      e.preventDefault();
      $subMenu.toggleClass("on");
    });
    $subMenu.on("mouseleave", function (e) {
      $subMenu.removeClass("on");
    });

    // 메뉴 외부 클릭 시 서브메뉴 닫기
    $(document).on("click", function (e) {
      if (
        !$mainMenu.is(e.target) && // 강의 메뉴가 아닌 경우
        !$subMenu.is(e.target) && // 서브메뉴 자체가 아닌 경우
        $subMenu.has(e.target).length === 0 // 서브메뉴 자식이 아닌 경우
      ) {
        $subMenu.removeClass("on");
      }
    });

    // 메모리 누수 방지를 위해 이벤트 해제
    return () => {
      $mainMenu.off("click");
      $(document).off("click");
    };
  }, []);

  const handleSearch = () => {
    goPage("search", { state: { keyword: searchKeyword } });
  };

  // 리턴코드구역
  return (
    <header>
      <div className="header">
        <ul>
          <div>
            <h1 className="logo">
              <a href={process.env.PUBLIC_URL}>
                <img src={`${process.env.PUBLIC_URL}/images/main/inflearn_logo.png`} alt="logo" />
              </a>
            </h1>
          </div>
          <div className="top-category">
            <ul className="main-category">
              <li>
                <a href="#">강의</a>
              </li>
              <li>
                <Link to="/board">커뮤니티</Link>
              </li>
            </ul>
            <ul className="sub-category">
              {eduCate.map((category) => (
                <li key={category}>
                  <a href={`${process.env.PUBLIC_URL}/#${category}`}>{category}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="member-nav">
            {!loginSts && (
              <ul>
                <li>
                  <Link to="/login">
                    <i className="fa-solid fa-arrow-right-to-bracket" title="로그인"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/join">
                    <i className="fa-solid fa-user-plus" title="회원가입"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/mypage">
                    <i className="fa-solid fa-user" title="마이페이지"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/cartlist">
                    <i className="fa-solid fa-cart-shopping" title="장바구니"></i>
                  </Link>
                </li>
              </ul>
            )}
            {loginSts && (
              <ul>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setLoginSts(null);
                      sessionStorage.removeItem("minfo");
                      goPage("/");
                    }}
                    className="logout">
                    <i className="fa-solid fa-arrow-up-from-bracket" title="로그아웃"></i>
                  </a>
                </li>
                <li>
                  <Link to="/mypage">
                    <i className="fa-solid fa-user" title="마이페이지"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/cartlist">
                    <i className="fa-solid fa-cart-shopping" title="장바구니"></i>
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div className="search-area">
            <input id="search" className="search" type="text"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            onKeyUp={(e) => {
              e.preventDefault();
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            />
            <button className="sbtn" onClick={handleSearch}>검색</button>
          </div>
        </ul>
      </div>
    </header>
  );
});

export {Header};

import React from 'react';
import '../css/Header.css';

const Header = () => {

  return (
    <div className="headerTop">
        <div className="firstLine">
            <div className="nowStat">현재경보</div><div className="danger">심각</div>
        </div>
        <div className="secondLine">
            <div className="pageTitle">오늘의 코로나</div><div className="smallTitle">Today's Covid19</div>
        </div>
        <div className="thridLine">
            <div className="updatedTime">마지막 업데이트 : 5분 전</div>
        </div>
    </div>
  );
};

export default Header;
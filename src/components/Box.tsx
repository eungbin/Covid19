import React from 'react';
import '../css/Box.css';

interface BoxProps {
  title: string;
  total?: number;
  today?: number;
}

const calSeparator = (value?: number) => {
  if (value !== undefined) {
    let inputValue: string = value.toLocaleString('ko-KR');
    return inputValue;
  }
}

const Box = (props: BoxProps) => {

  return (
    <div>
      {(props.today === undefined) || (props.total === undefined) ? <span>Loading...</span> :
        <div className="box">
          <span className="title">{props.title}<br /></span>
          <span className="today">{calSeparator(props.today)}<br /></span>
          <span className="total">{calSeparator(props.total)}<br /></span>
        </div>
      }
    </div>
  );
};

export default Box;
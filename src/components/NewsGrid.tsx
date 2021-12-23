import React from 'react';
import '../css/NewsGrid.css';
import { DataGrid } from '@material-ui/data-grid';

interface NewsProps {
  data: [{
    title: string;
    link: string;
  }]
}

interface gridRows {
  id: number;
  title: string;
  link: string;
}

const goLink = (e) => {
  window.open(e.row.link, "_blank");
}

const NewsGrid = (props: NewsProps) => {

  const columns = [
    { field: 'id', headerName: "ID", width: 100 },
    { field: 'title', headerName: '제목', width: 800 },
    { field: 'link', headerName: '링크', width: 0 }
  ];
  
  const rows: Array<gridRows> = [];
  for(let i=0; i<props.data?.length; i++) {
    rows.push({id: i, title: props.data[i]?.title, link: props.data[i]?.link});
  }


  return (
    <div className="gridWrapper">
      <div className="newsTitle">실시간 네이버 뉴스: 코로나</div>
      <DataGrid rows={rows} columns={columns} pageSize={10} onRowClick={goLink}/>
    </div>
  );
};

export default NewsGrid;
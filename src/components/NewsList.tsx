import React from 'react';
import '../css/NewsList.css';
import useAxiosGetNaver from '../hooks/useAxiosGetNaver';
import NewsGrid from './NewsGrid';

interface NaverSearchAPI {
  items: [{
    title: string;
    pubDate: string;
    originallink: string;
    link: string;
    description: string;
  }]
}

const News = () => {
  const url = "https://eungbin-cors.herokuapp.com/https://openapi.naver.com/v1/search/news?query=";
  const keyword: string = "코로나";
  const { data } = useAxiosGetNaver<NaverSearchAPI>(url, keyword);

  return (
    <NewsGrid data={data?.items}/>
  );
};

export default News;
import { useEffect, useState } from "react";

function witdhLoading(Component, url) {
  return (props) => {
    const [news, setNews] = useState([]);
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(url);
        const data = await response.json();
        console.log("🚀 ~ file: widthLoading.js ~ line 10 ~ fetchData ~ data", data);
        setNews(data.hits);
      }
      fetchData();
    }, []);
    if (!news || news.length === 0) return <div>Loading..</div>;
    return <Component data={news} {...props}></Component>;
  };
}
export default witdhLoading;
// Hight order funciton: map, filter , some ,every , reduce,
//[1,2,3].map((item,array) => {})

import React from "react";
import witdhLoading from "./widthLoading";

const FetchingData = ({ data }) => {
  console.log("🚀 ~ file: FetchingData.js ~ line 5 ~ FetchingData ~ data", data);
  return (
    <div>
      {/* {data.map((news) => (
        <div key={news}>{news}</div>
      ))} */}
    </div>
  );
};

export default witdhLoading(FetchingData, "https://hn.algolia.com/api/v1/search?query=react");

import React from "react";
import witdhLoading from "./widthLoading";
import WithError from "./WithError";
//Higher Order Component
// connect , loading
const FetchingDataOther = ({ data }) => {
  console.log("🚀 ~ file: FetchingData.js ~ line 5 ~ FetchingData ~ data", data);
  return (
    <div>
      {/* {data.map((news) => (
        <div key={news}>{news}</div>
      ))} */}
    </div>
  );
};

export default WithError(witdhLoading(FetchingDataOther, "https://hn.algolia.com/api/v1/search?query=css"));

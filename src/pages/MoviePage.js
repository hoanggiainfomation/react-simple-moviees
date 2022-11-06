import React, { useEffect, useState } from "react";
import useSWR from "swr";
import MovieCard, { MovieCardSkeleton } from "../components/movie/MovieCard";

import { fetcher, tmdAPI } from "../config";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";
import { v4 } from "uuid";
import Button from "../components/button/Button";
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>

const itemsPerPage = 20;

const MoviePage = () => {
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(tmdAPI.getMoviList("popular", nextPage));
  const filterDebounce = useDebounce(filter, 500);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;
  useEffect(() => {
    if (filterDebounce) {
      setUrl(tmdAPI.getMovieSearch(filterDebounce, nextPage));
    } else {
      setUrl(tmdAPI.getMoviList("popular", nextPage));
    }
  }, [filterDebounce, nextPage]);
  // if (!data) return null;
  const movies = data?.results || [];
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if (!data || !data.total_results) return;

    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;

    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };

  // const { page, total_pages } = data;
  // console.log("🚀 ~ file: MoviePage.js ~ line 33 ~ MoviePage ~ total_pages", total_pages);
  // console.log("🚀 ~ file: MoviePage.js ~ line 33 ~ MoviePage ~ page", page);

  return (
    <div className="py-10 text-white page-container ">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 text-white outline-none bg-slate-800 input"
            placeholder="Type here to search"
            onChange={handleFilterChange}
          ></input>
        </div>
        <button className="p-4 text-white bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      {/* {loading && (
        <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent border-t-4 mx-auto animate-spin"></div>
      )} */}
      {loading && (
        <div className="grid grid-cols-4 gap-10">
          {new Array(itemsPerPage).fill(0).map(() => (
            <MovieCardSkeleton key={v4()}></MovieCardSkeleton>
          ))}
        </div>
      )}

      <div className="grid grid-cols-4 gap-10">
        {!loading && movies.length > 0 && movies.map((item) => <MovieCard key={item.id} item={item}></MovieCard>)}
      </div>
      <div className="mt-10 text-center">
        <Button>Load More</Button>
      </div>
      {/* <div className="mt-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div> */}
      <div className="flex items-center justify-center mt-10 gap-x-5 hidden">
        <span className="cursor-pointer" onClick={() => setNextPage(nextPage - 1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
          </svg>
        </span>
        {new Array(pageCount).fill(0).map((item, index) => (
          <span
            className="cursor-pointer py-2 px-4 leading-none rounded inline-block bg-white text-slate-900"
            onClick={() => setNextPage(index + 1)}
          >
            {index + 1}
          </span>
        ))}

        <span className="cursor-pointer" onClick={() => setNextPage(nextPage + 1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default MoviePage;

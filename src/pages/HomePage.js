import React, { Fragment } from "react";

import MovieList from "../components/movie/MovieList";

const HomePage = () => {
  return (
    <Fragment>
      {/* <Banner></Banner> */}
      <section className="pb-20 movies-layout page-container">
        <h2 className="mb-5 text-3xl font-bold text-white capitalize">Now playing</h2>
        <MovieList type="now_playing"></MovieList>
      </section>
      <section className="pb-20 movies-layout page-container">
        <h2 className="mb-5 text-3xl font-bold text-white capitalize">Top rated</h2>
        {/* <div className="grid grid-cols-4 gap-10 movie-list">
          <div className="p-3 text-white rounded-lg movie-card bg-slate-800">
            <img
              src="https://nld.mediacdn.vn/2019/4/3/avengers-endgame-poster-og-social-crop-15542720808371479664269.jpg"
              alt=""
              className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <h3 className="mb-3 text-xl font-bold text-white ">Spiderman: Homecoming</h3>
            <div className="flex items-center justify-between mb-10 text-sm opacity-50">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="w-full px-6 py-3 capitalize rounded-lg bg-primary">Watch Now</button>
          </div>
        </div> */}
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="pb-20 movies-layout page-container">
        <h2 className="mb-5 text-3xl font-bold text-white capitalize">Trending</h2>
        {/* <div className="grid grid-cols-4 gap-10 movie-list">
          <div className="p-3 text-white rounded-lg movie-card bg-slate-800">
            <img
              src="https://nld.mediacdn.vn/2019/4/3/avengers-endgame-poster-og-social-crop-15542720808371479664269.jpg"
              alt=""
              className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <h3 className="mb-3 text-xl font-bold text-white ">Spiderman: Homecoming</h3>
            <div className="flex items-center justify-between mb-10 text-sm opacity-50">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="w-full px-6 py-3 capitalize rounded-lg bg-primary">Watch Now</button>
          </div>
        </div> */}
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;

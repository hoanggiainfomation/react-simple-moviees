import React from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import { func } from "prop-types";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=ba8fbacddc7266dc1817cb8eb60c560a`,
    fetcher
  );
  const movies = data?.results || [];

  return (
    <section className="h-[800px] mb-20 overflow-hidden banner page-container">
      <Swiper>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ item }) {
  const { title, vote_average, poster_path, release_date, vote_count, original_title, popularity, overview, id } = item;

  const navigate = useNavigate();
  return (
    <div className="relative w-full h-full rounded-lg cursor-pointer select-none">
      <div className="overplay absolute inset-0 bg-gradient-to-t  from=[rgba(0,0,0,0.5)] to-[rgba(0,0,0.5)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="object-cover w-full h-full rounded-lg"
      />
      <div className="absolute bottom-0 w-full text-white left-5">
        <h2 className="mb-5 text-6xl font-bold text-primary">{title}</h2>
        <div className="flex items-center mb-10 gap-x-3">
          <span className="px-4 py-2 text-yellow-500 border border-white rounded-sm">{vote_count}</span>
          <span className="px-4 py-2 border border-white rounded-sm text-primary">{release_date}</span>
          <span className="px-4 py-2 text-green-600 border rounded-sm border-primary">{vote_average}</span>
          <span className="px-4 py-2 text-green-600 border rounded-sm border-primary">{original_title}</span>
          <span className="px-4 py-2 text-green-600 border rounded-sm border-primary">{popularity}</span>
        </div>
        <div className="px-2 py-2 mb-20 rounded-sm border border-white w-[600px] text-2xl h-[200px] text-ellipsis">
          {overview}
        </div>
        {/* <button className="px-6 py-3 mb-2 font-medium text-white rounded-lg bg-primary">Watch Now</button> */}
        <Button bgColor="secondary" onClick={() => navigate(`/movie/${id}`)}>
          Watch Now
        </Button>
      </div>
    </div>
  );
}
export default Banner;

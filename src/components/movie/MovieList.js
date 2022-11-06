import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import useSWR from "swr";
import { fetcher, tmdAPI } from "../../config";
import MovieCard, { MovieCardSkeleton } from "./MovieCard";
import ProTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
// https://api.themoviedb.org/3/movie/550?api_key=ba8fbacddc7266dc1817cb8eb60c560a
// https://api.themoviedb.org/3/search/movie?api_key=ba8fbacddc7266dc1817cb8eb60c560a&query=%27%27
const MovieList = ({ type = "now_playing" }) => {
  const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(tmdAPI.getMoviList(type), fetcher);
  const isLoading = !data && !error;
  useEffect(() => {
    if (data && data.results) {
      setMovies(data.results);
    }
  }, [data]);
  console.log(movies);
  return (
    <div className="movie-list">
      {isLoading && (
        <>
          <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
            <SwiperSlide>
              <MovieCardSkeleton></MovieCardSkeleton>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardSkeleton></MovieCardSkeleton>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardSkeleton></MovieCardSkeleton>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardSkeleton></MovieCardSkeleton>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardSkeleton></MovieCardSkeleton>
            </SwiperSlide>
          </Swiper>
        </>
      )}
      {!isLoading && (
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};
MovieList.propTypes = {
  type: ProTypes.string.isRequired,
};
function FallbackComponent() {
  return <p className="bg-red-500 text-red-500">Something went wrong with this component</p>;
}
export default withErrorBoundary(MovieList, {
  FallbackComponent,
});

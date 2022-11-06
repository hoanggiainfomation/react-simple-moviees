import React from "react";
import { useParams } from "react-router-dom";

import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import { fetcher, tmdAPI } from "../config";
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=

function MovieMeta({ type = "video" }) {
  const { movieId } = useParams();
  const { data } = useSWR(tmdAPI.getMovieMeta(movieId, type), fetcher);
  console.log("asdadasd", data);
  if (!data) return null;
  console.log("🚀 ~ file: MovieDetailsPage.js ~ line 15 ~ MovieMeta ~ data", data);
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;
  if (type === "credits") {
    const { cast } = data;
    if (!cast || cast.length <= 0) return null;
    return (
      <div className="py-10">
        <h2 className="  text-center mb-10 text-3xl">Carst</h2>
        <div className="grid grid-cols-4 gap-5">
          {cast.slice(0, 4).map((item) => (
            <div className="cast-items" key={item.id}>
              <img
                // src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                src={tmdAPI.imageOriginal(item.profile_path)}
                alt=""
                className="w-full h-350px] object-cover rounded-lg mb-3"
              ></img>
              <h3 className="text-2xl font-medium text-center text-white">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    const { results } = data;
    if (!results || results.length <= 0) return null;
    if (type === "videos")
      return (
        <div className="py-10">
          <div className="flex flex-cols gap-10">
            {results.slice(0, 2).map((item) => (
              <div className="" key={item.id}>
                <h3 className="mb-5 text-xl font-medium p-3 bg-secondary inline-block">{item.name}</h3>
                <div key={item.id} className="w-full aspect-video">
                  <iframe
                    width="864"
                    height="486"
                    src={`https://www.youtube.com/embed/${item.key}`}
                    title={item.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full object-cover"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    if (type === "similar")
      return (
        <div className="py-10">
          <h2 className="text-3xl font-medium mb-10">Similar movies</h2>
          <div className="movie-list">
            <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
              {results.length > 0 &&
                results.map((item) => (
                  <SwiperSlide key={item.id}>
                    <MovieCard item={item}></MovieCard>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      );
  }
  return null;
}
const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const { data } = useSWR(tmdAPI.getMoviDetails(movieId), fetcher);
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;
  console.log(" data", data);

  return (
    <div className="py-10">
      <div className="w-full h-[800px] relative mb-10">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div
          className="w-full h-screen bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${tmdAPI.getMoviDetails(backdrop_path)})` }}
        ></div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto  -mt-[200px] relative z-10 pb-10">
        <img
          // src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          src={tmdAPI.imageOriginal(poster_path)}
          className="object-cover w-full h-full rounded-xl"
          alt=""
        ></img>
      </div>
      <h1 className="mb-10 text-3xl text-center text-white text-bold">{title}</h1>
      {genres.length > 0 && (
        <div className="flex items-center justify-center mb-10 gap-x-5">
          {genres.map((item) => (
            <span key={item.id} className="px-4 py-2 rounded border-primary text-primary">
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="leading-relaxed max-w-[600px] text-center mx-auto mb-10">{overview}</p>
      <MovieMeta type="credits"></MovieMeta>
      <MovieMeta type="vides"></MovieMeta>
      <MovieMeta type="similar"></MovieMeta>
    </div>
  );
};

function MovieCredits() {
  // https://api.themoviedb.org/3/movie/{movie_id}?api_key=

  const { movieId } = useParams();

  const { data } = useSWR(tmdAPI.getMovieMeta(movieId, "credits"), fetcher);
  console.log("asdadasd", data);
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;
  return (
    <div className="py-10">
      <h2 className="  text-center mb-10 text-3xl">Carst</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast.slice(0, 4).map((item) => (
          <div className="cast-items" key={item.id}>
            <img
              // src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
              src={tmdAPI.imageOriginal(item.profile_path)}
              alt=""
              className="w-full h-350px] object-cover rounded-lg mb-3"
            ></img>
            <h3 className="text-2xl font-medium text-center text-white">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

function MovieVideos() {
  const { movieId } = useParams();

  const { data } = useSWR(tmdAPI.getMovieMeta(movieId, "videos"), fetcher);

  if (!data) return null;
  console.log(" MovieVideos ~ data", data);
  const { results } = data;
  if (!results || results.length <= 0) return null;
  return (
    <div className="py-10">
      <div className="flex flex-cols gap-10">
        {results.slice(0, 2).map((item) => (
          <div className="" key={item.id}>
            <h3 className="mb-5 text-xl font-medium p-3 bg-secondary inline-block">{item.name}</h3>
            <div key={item.id} className="w-full aspect-video">
              <iframe
                width="864"
                height="486"
                src={`https://www.youtube.com/embed/${item.key}`}
                title={item.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-cover"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* <iframe width="1004" height="565" src="https://www.youtube.com/embed/ws_jBxvYtZ4?list=PLMi_Pyzy0bMzj_JN0iUjdhRywiDTL73-t" title="Bài 216: Trang chi tiết phim - Fetching dữ liệu diễn viên" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */

function MoviSimiler() {
  const { movieId } = useParams();

  const { data, error } = useSWR(tmdAPI.getMovieMeta(movieId, "smilar"), fetcher);
  console.log("🚀 ~ file: MovieDetailsPage.js ~ line 127 ~ MoviSimiler ~ data", data);
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  return (
    <div className="py-10">
      <h2 className="text-3xl font-medium mb-10">Similar movies</h2>
      <div className="movie-list">
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {results.length > 0 &&
            results.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MovieDetailsPage;

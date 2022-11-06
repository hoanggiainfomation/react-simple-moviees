import React from "react";
import { useNavigate } from "react-router-dom";
import { tmdAPI } from "../../config";
import Button from "../button/Button";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import LoadingSkeleton from "../../loading/LoadingSkeleton";
const MovieCard = ({ item }) => {
  const { title, vote_average, poster_path, release_date, id } = item;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800">
      <img
        // src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        src={tmdAPI.image500(poster_path)}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="mb-3 text-xl font-bold text-white ">{title}</h3>
        <div className="flex items-center justify-between mb-10 text-sm opacity-50">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>

        <Button bgColor="secondary" onClick={() => navigate(`/movie/${id}`)}>
          Watch Now
        </Button>
        {/* <button
          onClick={() => navigate(`/movie/${id}`)}
          className="w-full px-6 py-3 mt-auto capitalize rounded-lg bg-primary"
        >
          Watch Now
        </button> */}
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    vote_average: PropTypes.number,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    id: PropTypes.number,
  }),
};

function FallbackComponent() {
  return <p className="bg-red-500 text-red-500">Something went wrong with this component</p>;
}
export default withErrorBoundary(MovieCard, {
  FallbackComponent,
});

export const MovieCardSkeleton = () => {
  return (
    <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800">
      <LoadingSkeleton width="100%" height="250px" radius="8px" className="mb-5"></LoadingSkeleton>
      <div className="flex flex-col flex-1">
        <h3 className="mb-3 text-xl font-bold text-white ">
          <LoadingSkeleton width="100%" height="20px"></LoadingSkeleton>
        </h3>
        <div className="flex items-center justify-between mb-10 text-sm opacity-50">
          <span>
            <LoadingSkeleton width="50px" height="20px"></LoadingSkeleton>
          </span>
          <span>
            <LoadingSkeleton width="30px" height="20px"></LoadingSkeleton>
          </span>
        </div>

        <LoadingSkeleton width="100%" height="45px" radius="6px"></LoadingSkeleton>
        {/* <button
          onClick={() => navigate(`/movie/${id}`)}
          className="w-full px-6 py-3 mt-auto capitalize rounded-lg bg-primary"
        >
          Watch Now
        </button> */}
      </div>
    </div>
  );
};

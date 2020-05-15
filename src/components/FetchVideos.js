import React from "react";
import { useDispatch } from "react-redux";

import { fetchData } from "../state/actions";

const FetchVideos = () => {
  const dispatch = useDispatch();
  return (
    <section className="card mt-5">
      <div className="card-header text-center">
        <button
          className="btn btn-primary"
          onClick={() => dispatch(fetchData())}
        >
          بارگزاری مجدد اطلاعات
        </button>
      </div>
    </section>
  );
};
FetchVideos.defaultName = 'FetchVideos'
export default FetchVideos;

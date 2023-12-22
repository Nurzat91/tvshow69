import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchGetShow } from "../../store/showThunks";
import { selectShow } from "../../store/showSlice";
import { Link } from "react-router-dom";
import { ApiShows } from "../../types";

const ShowForm = () => {
  const [userText, setUserText] = useState<string>('');
  const dispatch = useAppDispatch();
  const shows = useAppSelector(selectShow);

  useEffect(() => {
    dispatch(fetchGetShow(userText));
  }, [dispatch, userText]);

  const showsSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const shows = e.target.value;
    setUserText(shows);
    if (shows.length > 3) {
      dispatch(fetchGetShow(shows));
    }
  };

  return (
    <>
      <form>
        <div className="form-group w-75">
          <input
            type="text"
            name="show"
            required
            className="form-control"
            value={userText}
            onChange={showsSearch}
          />
        </div>
        <div>
          {shows.map((show: ApiShows) => (
            <div key={show.show.id}>
              <Link to={`/shows/${show.show.id}`} style={{ textDecoration: "none", color: "black" }}>
                {show.show.name}
              </Link>
            </div>
          ))}
        </div>
      </form>
    </>
  );
};

export default ShowForm;

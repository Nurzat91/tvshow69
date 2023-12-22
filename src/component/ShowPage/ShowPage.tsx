import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchDataIdShow } from "../../store/showThunks";
import { selectShow } from "../../store/showSlice";
import { useParams } from "react-router-dom";
import { Shows } from "../../types";

const ShowPage = () => {
  const dispatch = useAppDispatch();
  const shows = useAppSelector(selectShow);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      dispatch(fetchDataIdShow(id));
    }
  }, [dispatch, id]);

  return (
    <div>
      <div>
        {shows.map((show: Shows) => (
          <div key={show.id} className="card m-3 p-2">
            <p>Name: {show.show.name}</p>
            <p>{show.show.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowPage;

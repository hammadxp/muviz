import { useQuery } from "react-query";
import axios from "axios";

export default function Temp() {
  const { data } = useQuery("just", () => {
    return axios
      .get("https://api.themoviedb.org/3/movie/now_playing", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWM1NzFhODhhOTcwOTE2ODc1MDAzNjg5MDFmYTUxZSIsInN1YiI6IjVhYTkyMjMwMGUwYTI2M2RkMDAzNWE0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ei8PamuBjcSB0A_gWLFW5aHuSxyNlUDn9c5JJPhFUQg`,
        },
      })
      .then((res) => res.data);
  });

  console.log("data: ", data);

  return <></>;
}

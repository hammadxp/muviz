import axios from "axios";

const client = axios.create();

export default async function axiosTMDB({ ...options }) {
  client.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWM1NzFhODhhOTcwOTE2ODc1MDAzNjg5MDFmYTUxZSIsInN1YiI6IjVhYTkyMjMwMGUwYTI2M2RkMDAzNWE0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ei8PamuBjcSB0A_gWLFW5aHuSxyNlUDn9c5JJPhFUQg`;

  const onSuccess = (response) => response;
  const onError = (error) => error;

  return client(options).then(onSuccess).catch(onError);
}

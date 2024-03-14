import useSWR, { responseInterface } from "swr";

interface UserData {
  username: string;
  designation: string;
}

const useFetch = (url: string): responseInterface<UserData[], Error> => {
  const fetchData = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  };

  const { data, error } = useSWR<UserData[], Error>(url, fetchData, {
    refreshInterval: 1000,
  });

  return { data, error };
};

export default useFetch;

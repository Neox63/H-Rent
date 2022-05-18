import useSWR from "swr";

export const useGetAnnonces = () => {
  const { data, error } = useSWR(`/announces`);

  return {
    announces: data,
    isLoading: !error && !data,
    isError: error,
  };
};

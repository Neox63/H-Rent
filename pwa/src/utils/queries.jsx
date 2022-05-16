import { useMemo } from "react";

import axios from "axios";

import { SWRConfig } from "swr";

export function createFetcher(instance) {
  return async function fetcher(url, config = {}) {
    try {
      const response = await instance({
        url,
        ...config,
      });
      return response.data;
    } catch (error) {
      throw Error(error);
    }
  };
}

const baseConfig = {
  provider: () => new Map(),
};

export function APIProvider({ children, api }) {
  const config = useMemo(() => {
    if (api) {
      const instance = axios.create({
        baseURL: api,
      });
      return {
        ...baseConfig,
        fetcher: createFetcher(instance),
      };
    }

    return null;
  }, [api]);

  if (!config) return null;

  return <SWRConfig value={config}>{children}</SWRConfig>;
}

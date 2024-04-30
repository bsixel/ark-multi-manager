"use client";

import { DEFAULT_GET_OPTIONS } from "../utils/ApiHelper";
import { useCallback, useEffect, useState } from "react";

export type UseQueryConfig<T> = {
  url: RequestInfo | URL;
  options?: RequestInit;
  defaultValue?: T | null;
  manual?: boolean;
  body?: unknown;
};

export type UseQueryOutput<T> = {
  queryResult: T;
  isLoading: boolean;
  error: Error;
  transactionId: string;
  exec?: () => Promise<void>;
};

// Hook which watches a query and returns the result, caching the result until the query and options change at which point the query is rerun.
function useQuery<T>(config: UseQueryConfig<T>) {
  const {
    url,
    options = DEFAULT_GET_OPTIONS,
    defaultValue = null,
    manual = false,
    body,
  } = config;

  const [queryResult, setQueryResult] = useState<T>(defaultValue);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [transactionId, setTransactionId] = useState(null);

  const exec = useCallback(async () => {
    setIsLoading(true);
    try {
      // Build and run query as needed
      if (body) {
        options.body = JSON.stringify(body);
      }
      const result = await fetch(url, options);
      setTransactionId(result.headers.get("x-woven-request-id"));
      if (result.body) {
        const raw = await result.json();
        setQueryResult(raw);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [options, url, body]);

  // Run query on mount and when dependencies change
  useEffect(() => {
    if (!manual) {
      exec();
    }
  }, [exec, manual]);

  const ret = {
    queryResult,
    isLoading,
    error,
    transactionId,
  } as UseQueryOutput<T>;

  ret.exec = exec;
  return ret;
}

export default useQuery;

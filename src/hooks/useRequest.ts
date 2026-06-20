import { useState, useEffect } from "react";

type Service<TData, TParams extends any[]> = (...args: TParams) => Promise<TData>;

const sleep = (ms: number) => {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, ms));
};


interface useRequestOptions {
    manual?: boolean
    delay?: number
}
export function useRequest<TData, TParams extends any[]>(service: Service<TData, TParams>, args: TParams, options?: useRequestOptions) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<TData | null>()
    const [error, setError] = useState<Error | null>(null);
    const { manual=false, delay=0} = options ?? {};
    /**
   * 执行请求的方法
   */
    const fetch = async () => {
        setLoading(true);
        setData(null);
        setError(null);

        try {
            if (delay > 0) {
                await sleep(delay)
            }
            setData(await service(...args));
        } catch (err) {
            setError(err as Error);
        } finally {
            setLoading(false);
        }
    };

    if (true !== manual) {
        useEffect(()=>{
            fetch()
        },[])
    }

    return {loading, fetch, data, error}
}
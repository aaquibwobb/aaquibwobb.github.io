import { useLayoutEffect, useMemo, useState } from "react";
import { useLocation, useRouteMatch } from "react-router";
import qs from "querystring";

export function useUrlQuery(key: string, defaultValue: string){
    const location = useLocation();
    const status = useMemo(() => qs.parse(location.search.replace("?", ""))[key] as string || defaultValue, [location, defaultValue,key]);
    return status;
}

export function useUrlParam(key: string, defaultValue: string){
    const match = useRouteMatch();
    const value = useMemo(() => {
        return (match.params as any)[key] || defaultValue;
    }, [match, key, defaultValue]);
    return value;
}

export function useUrlFilter(defaultValue: string){
    return useUrlQuery("filter", defaultValue);
}
export const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      const updateSize = () => {
        setSize([window.innerWidth, window.innerHeight]);
      };
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  };
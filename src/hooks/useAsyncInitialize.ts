import { useEffect, useState } from "react";

export function useAsyncInitialize<T>(func: () => Promise<T>, deps: any[] = []) {
  const [state, setState] = useState<T | undefined>();
    useEffect(() => {
        console.log("in useAsyncInitialize useEffect");
        (async () => {
            console.log("set state");
        setState(await func());
      })();
  }, deps);

  return state;
}

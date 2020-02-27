import { useRef, useEffect } from 'react';

export function useEffectAfterMount(effect, dependencies) {
  const isMounted = useRef(true);

  useEffect(() => {
    let cleanup;

    if (!isMounted.current) {
      cleanup = effect();
    } else {
      isMounted.current = false;
    }

    return () => cleanup && cleanup();
  }, dependencies); // eslint-disable-line react-hooks/exhaustive-deps
}

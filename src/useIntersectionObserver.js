import { useState, useRef, useEffect, useCallback } from "react";

function useIntersectionObserver({ rootMargin = "0px" }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  const callback = useCallback(
    ([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    },
    [setIsIntersecting]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(callback, { rootMargin });
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [rootMargin, callback]);

  return [ref, isIntersecting];
}

export default useIntersectionObserver;

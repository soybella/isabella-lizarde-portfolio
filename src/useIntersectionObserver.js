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

  //   useEffect(() => {
  //     const observer = new IntersectionObserver(
  //       ([entry]) => {
  //         setIsIntersecting(entry.isIntersecting);
  //       },
  //       { rootMargin }
  //     );

  //     if (ref.current) {
  //       observer.observe(ref.current);
  //     }

  //     return () => {
  //       if (ref.current) {
  //         observer.unobserve(ref.current);
  //       }
  //       observer.disconnect();
  //     };
  //   }, [rootMargin]);

  //   return [ref, isIntersecting];
}

export default useIntersectionObserver;

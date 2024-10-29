import { useEffect, useState } from "react";

export const useIntersection = (ref: React.MutableRefObject<null>, options?: IntersectionObserverInit) => {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      options
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    };
  }, []);

  return inView
}
import clsx from "clsx";
import { useEffect, useState } from "react";

import { Skeleton } from "./Skeleton";
import placeholder from "/Rectangle.png";
import styles from "./Avatar.module.css";

export function Avatar({ url, title, className }) {
  const [imgSrc, setImgSrc] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = url;

    img.onload = () => {
      setImgSrc(url);
      setLoading(false);
    };
    img.onerror = () => {
      setImgSrc(placeholder);
      setLoading(false);
    };
  }, [url]);

  return (
    <div className={clsx(styles.avatar, loading && styles.loading, className)}>
      {loading ? (
        <Skeleton className={styles.avatar__skeleton} />
      ) : (
        <img src={imgSrc} alt={title} title={title} />
      )}
    </div>
  );
}

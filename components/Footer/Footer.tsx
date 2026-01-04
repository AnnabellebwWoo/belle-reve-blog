import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.Footer}>
        <li>
          <h1>Categories</h1>
          <ul className={styles.subList}>
            <li>
              <Link href="/blog/category/STEM">STEM</Link>
            </li>
            <li>
              <Link href="/blog/category/beauty">Beauty</Link>
            </li>
            <li>
              <Link href="/blog/category/clothing">Clothing</Link>
            </li>
            <li>
              <Link href="/blog/category/favourites">Favourites</Link>
            </li>
            <li>
              <Link href="/blog/category/opinion">Opinion</Link>
            </li>
            <li>
              <Link href="/blog/category/misc">Misc</Link>
            </li>
          </ul>
        </li>
        <li>
          <h1>Social</h1>
          <ul className={styles.subList}>
            <li>
              <a href="mailto:bellereveblog@gmail.com">Email</a>
            </li>
            <li>
              <a href="https://www.instagram.com/bellereveblog/">Instagram</a>{" "}
              (@bellereveblog)
            </li>
            <li>
              <a href="https://www.tiktok.com/@bellereveblog">TikTok</a>{" "}
              (@bellereveblog)
            </li>
            <li>
              <a href="https://open.spotify.com/user/annabellewoo911?si=5fbc0531a04d48cd">
                Spotify
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

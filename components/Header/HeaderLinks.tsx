import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const HeaderLinks = () => {
  return (
    <>
      
      <div className={styles.lineWrapper}>
        <hr className={styles.Line} />
      </div>
      <nav className={styles.menuBar}>
        <ul>
          <li>
            <Link href="/blog">Home</Link>
          </li>
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
          <li>
            <Link href="/about-me">About Me</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.lineWrapper}>
        <hr className={styles.Line} />
      </div>
    </>
  );
};

export default HeaderLinks;

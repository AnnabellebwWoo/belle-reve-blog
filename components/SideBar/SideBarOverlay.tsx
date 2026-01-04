import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./SideBarOverlay.module.css";
import type { BlogPostProps } from "../../lib/types";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  recentPosts: BlogPostProps[];
}

export default function SideBarOverlay({
  isOpen,
  onClose,
  recentPosts,
}: Props) {
  return (
    <div className={`${styles.overlay} ${isOpen ? styles.open : ""}`}>
      <button className={styles.closeBtn} onClick={onClose}>
        ×
      </button>

      <nav className={styles.links}>
        <Link href="/" onClick={onClose}>Home</Link>
        <Link href="/blog/category/beauty" onClick={onClose}>Beauty</Link>
        <Link href="/blog/category/clothing" onClick={onClose}>Clothing</Link>
        <Link href="/blog/category/favourites" onClick={onClose}>Favourites</Link>
        <Link href="/blog/category/STEM" onClick={onClose}>STEM</Link>
        <Link href="/blog/category/opinion" onClick={onClose}>Opinion</Link>
        <Link href="/blog/category/misc" onClick={onClose}>Misc</Link>
        <Link href="/about-me" onClick={onClose}>About Me</Link>
      </nav>

      <section>
        <h3>Featured Post</h3>
        <Link href="/blog/post/how-i-built-this-blog" onClick={onClose}>
          <Image
            src="/images/vscode-ss.jpg"
            width={250}
            height={250}
            alt="vscode"
            className={styles.featured}
          />
          <h2>How I Built This Blog</h2>
          <h4>Read more...</h4>
        </Link>
      </section>

      <section>
        <h3>Keep In Touch</h3>
        <ul className={styles.socials}>
          <li>
            <Link href="mailto:bellereveblog@gmail.com">
              <Image
                src="/images/email.png"
                width={40}
                height={40}
                alt="Email"
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/bellereveblog/">
              <Image
                src="/images/instagram.png"
                width={40}
                height={40}
                alt="Instagram"
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.tiktok.com/@bellereveblog">
              <Image
                src="/images/tiktok.png"
                width={40}
                height={40}
                alt="TikTok"
              />
            </Link>
          </li>
          <li>
            <Link href="https://open.spotify.com/user/annabellewoo911?si=5fbc0531a04d48cd">
              <Image
                src="/images/spotify.png"
                width={40}
                height={40}
                alt="Spotify"
              />
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h3>Recent Posts</h3>
        <ul>
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/post/${post.slug}`} onClick={onClose}>
                {post.thumbnail ? (
                  <Image
                    src={post.thumbnail}
                    width={250}
                    height={250}
                    className={styles.featured}
                    alt={post.title}
                  />
                ) : (
                  <div
                    className={styles.placeholder}
                    style={{ width: 250, height: 180 }}
                  />
                )}
                <h2>{post.title}</h2>
                <h4>Read more...</h4>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

import React from "react";
import styles from "./SideBar.module.css";
import Link from "next/link";
import Image from "next/image";
import type { BlogPostProps } from "../../lib/types";

interface SidebarProps {
  recentPosts: BlogPostProps[];
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
}

const Sidebar = ({ recentPosts, isOpen = false, onClose, className }: SidebarProps) => {
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""} ${className || ""}`}>
      <nav className={styles.mobileNav}>
        <Link href="/"onClick={onClose}>Home</Link>
        <Link href="/blog/category/beauty">Beauty</Link>
        <Link href="/blog/category/clothing">Clothing</Link>
        <Link href="/blog/category/favourites">Favourites</Link>
        <Link href="/blog/category/STEM">STEM</Link>
        <Link href="/blog/category/opinion">Opinion</Link>
        <Link href="/blog/category/misc">Misc</Link>
        <Link href="/about">About Me</Link>
      </nav>

      <section>
        <h3>Featured Post</h3>
        <ul>
          <Link href="/blog/post/how-i-built-this-blog">
            <Image
              src="/images/vscode-ss.jpg"
              width={250}
              height={250}
              alt="vscode"
              className={styles.featuredImage}
            />
            <h2>How I Built This Blog</h2>
            <h4>Read more...</h4>
          </Link>
        </ul>
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
          {recentPosts.map((post) => {
            const thumbnail = post.thumbnail?.trim() || null;
            return (
              <li key={post.slug}>
                <Link href={`/blog/post/${post.slug}`}>
                  {thumbnail ? (
                    <Image
                      src={thumbnail}
                      width={250}
                      height={250}
                      alt={post.title + " image"}
                      className={styles.featuredImage}
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
            );
          })}
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;

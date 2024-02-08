"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./links.module.css";

const links = [
  {
    title: "Homepage",
    path: "/",
  },

  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },

  {
    title: "Blog",
    path: "/blog",
  },
];
function Links() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <Link href={link.path}>{link.title}</Link>
        ))}
        <button className={styles.logout}>Logout</button>
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <Link href={link.path}>{link.title}</Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Links;

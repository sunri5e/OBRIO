import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div>
        <h1>Hi! Please take your survey</h1>
        <Link href="/survey/q1">
          <button>Start</button>
        </Link>
      </div>
    </div>
  );
}

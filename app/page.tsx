import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="app-l-main">
      <Header />
      <div className="app-l-container">
        <h1>Hi! Please take your survey</h1>
        <Link href="/survey/q1" className="app-btn">
          <span className="app-btn__text">Start</span>
        </Link>
      </div>
    </div>
  );
}

import Canvas from "../components/Canvas";
import Head from "next/head";
import Link from "next/link";
import HeadInfo from "@/components/HeadInfo";

export default function Home() {
  return (
    <div className="container">
      <HeadInfo />
      <div className="title">별자리 운세</div>
      <div className="canvas">
        <Canvas />
      </div>
      <Link href="/horoscope">
        <button>운세보기</button>
      </Link>
    </div>
  );
}

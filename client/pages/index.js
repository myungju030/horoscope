import Canvas from "../components/Canvas";
import Link from "next/link";
import HeadInfo from "@/components/HeadInfo";
import style from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={style.container}>
      <HeadInfo />
      <div className={style.title}>별자리 운세</div>
      <div className={style.canvas}>
        <Canvas />
      </div>
      <Link href="/horoscope">
        <button className={style.button}>운세보기</button>
      </Link>
    </div>
  );
}

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
      {/* <div className="if">
        <div class="typho">물병자리</div>
        <div class="typho">물고기자리 </div>
        <div class="typho">양자리 </div>
        <div class="typho">황소자리 </div>
        <div class="typho">쌍둥이자리</div>
        <div class="typho">게자리</div>
        <div class="typho">사자자리</div>
        <div class="typho">처녀자리 </div>
        <div class="typho">천칭자리 </div>
        <div class="typho">전갈자리</div>
        <div class="typho">사수자리</div>
        <div class="typho">염소자리 </div>
      </div> */}
      <Link href="/horoscope">
        <button>운세보기</button>
      </Link>
    </div>
  );
}

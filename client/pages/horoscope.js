import Pisces from "../components/Pisces";
import Aquarius from "../components/Aquarius";
import Aries from "../components/Aries";
import Taurus from "@/components/Taurus";
import Gemini from "@/components/Gemini";
import Cancer from "@/components/Cancer";
import Leo from "@/components/Leo";
import Virgo from "@/components/Virgo";
import Libra from "@/components/Libra";
import Scorpio from "@/components/Scorpio";
import Sagittarius from "@/components/Sagittarius";
import Capricorn from "@/components/Capricorn";
import Link from "next/link";

export default function Horoscope() {
  return (
    <div className="horoscope">
      <div className="horoscope_title">
        별자리를 <span className="blink">Click!</span> 해주세요.
      </div>
      <ul>
        <Link href="/물병" style={{ textDecoration: "none" }}>
          <li className="card">
            <Aquarius />
            <span className="card_horoscope">물병자리</span>
            <span>1월 28일 ~ 2월 18일</span>
          </li>
        </Link>
        <Link href="/물고기" style={{ textDecoration: "none" }}>
          <li className="card">
            <Pisces />
            <span className="card_horoscope">물고기자리</span>
            <span>2월 19일 ~ 3월 20일</span>
          </li>
        </Link>
        <Link href="/양" style={{ textDecoration: "none" }}>
          <li className="card">
            <Aries />
            <span className="card_horoscope">양자리</span>
            <span>3월 21일 ~ 4월 19일</span>
          </li>
        </Link>
        <Link href="/황소" style={{ textDecoration: "none" }}>
          <li className="card">
            <Taurus />
            <span className="card_horoscope">황소자리</span>
            <span>4월 20일 ~ 5월 20일</span>
          </li>
        </Link>
        <Link href="/쌍둥이" style={{ textDecoration: "none" }}>
          <li className="card">
            <Gemini />
            <span className="card_horoscope">쌍둥이자리</span>
            <span>5월 21일 ~ 6월 21일</span>
          </li>
        </Link>
        <Link href="/게" style={{ textDecoration: "none" }}>
          <li className="card">
            <Cancer />
            <span className="card_horoscope">게자리</span>
            <span>6월 22일 ~ 7월 22일</span>
          </li>
        </Link>
        <Link href="/사자" style={{ textDecoration: "none" }}>
          <li className="card">
            <Leo />
            <span className="card_horoscope">사자자리</span>
            <span>7월 23일 ~ 8월 22일</span>
          </li>
        </Link>
        <Link href="/처녀" style={{ textDecoration: "none" }}>
          <li className="card">
            <Virgo />
            <span className="card_horoscope">처녀자리</span>
            <span>8월 29일 ~ 9월 23일</span>
          </li>
        </Link>
        <Link href="/천칭" style={{ textDecoration: "none" }}>
          <li className="card">
            <Libra />
            <span className="card_horoscope">천칭자리</span>
            <span>9월 24일 ~ 10월 22일</span>
          </li>
        </Link>
        <Link href="/전갈" style={{ textDecoration: "none" }}>
          <li className="card">
            <Scorpio />
            <span className="card_horoscope">전갈자리</span>
            <span>10월 23일 ~ 11월 22일</span>
          </li>
        </Link>
        <Link href="/사수" style={{ textDecoration: "none" }}>
          <li className="card">
            <Sagittarius />
            <span className="card_horoscope">사수자리</span>
            <span>11월 23일 ~ 12월 24일</span>
          </li>
        </Link>
        <Link href="/염소" style={{ textDecoration: "none" }}>
          <li className="card">
            <Capricorn />
            <span className="card_horoscope">염소자리</span>
            <span>12월 25일 ~ 1월 19일</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}

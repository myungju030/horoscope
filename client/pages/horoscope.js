import Link from "next/link";
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
import HeadInfo from "@/components/HeadInfo";
import style from "../styles/Horoscope.module.css";

export default function Horoscope() {
  return (
    <div className={style.horoscope}>
      <HeadInfo />
      <div className={style.horoscope_title}>
        별자리를 <span className={style.blink}>Click!</span> 해주세요.
      </div>
      <ul className={style.horoscope_list}>
        <Link href="/물병" style={{ textDecoration: "none" }}>
          <li className={style.card}>
            <Aquarius />
            <span className={style.card_horoscope}>물병자리</span>
            <span className={style.card_day}>1월 28일 ~ 2월 18일</span>
          </li>
        </Link>
        <Link href="/물고기" style={{ textDecoration: "none" }}>
          <li className={style.card}>
            <Pisces />
            <span className={style.card_horoscope}>물고기자리</span>
            <span className={style.card_day}>2월 19일 ~ 3월 20일</span>
          </li>
        </Link>
        <Link href="/양" style={{ textDecoration: "none" }}>
          <li className={style.card}>
            <Aries />
            <span className={style.card_horoscope}>양자리</span>
            <span>3월 21일 ~ 4월 19일</span>
          </li>
        </Link>
        <Link href="/황소" style={{ textDecoration: "none" }}>
          <li className={style.card}>
            <Taurus />
            <span className={style.card_horoscope}>황소자리</span>
            <span className={style.card_day}>4월 20일 ~ 5월 20일</span>
          </li>
        </Link>
        <Link href="/쌍둥이" style={{ textDecoration: "none" }}>
          <li className={style.card}>
            <Gemini />
            <span className={style.card_horoscope}>쌍둥이자리</span>
            <span className={style.card_day}>5월 21일 ~ 6월 21일</span>
          </li>
        </Link>
        <Link href="/게" style={{ textDecoration: "none" }}>
          <li className={style.card}>
            <Cancer />
            <span className={style.card_horoscope}>게자리</span>
            <span className={style.card_day}>6월 22일 ~ 7월 22일</span>
          </li>
        </Link>
        <Link href="/사자" style={{ textDecoration: "none" }}>
          <li className={style.card}>
            <Leo />
            <span className={style.card_horoscope}>사자자리</span>
            <span className={style.card_day}>7월 23일 ~ 8월 22일</span>
          </li>
        </Link>
        <Link href="/처녀" style={{ textDecoration: "none" }}>
          <li className={style.card}>
            <Virgo />
            <span className={style.card_horoscope}>처녀자리</span>
            <span className={style.card_day}>8월 29일 ~ 9월 23일</span>
          </li>
        </Link>
        <Link href="/천칭" style={{ textDecoration: "none" }}>
          <li className={style.card}>
            <Libra />
            <span className={style.card_horoscope}>천칭자리</span>
            <span className={style.card_day}>9월 24일 ~ 10월 22일</span>
          </li>
        </Link>
        <Link href="/전갈" style={{ textDecoration: "none" }}>
          <li className={style.card}>
            <Scorpio />
            <span className={style.card_horoscope}>전갈자리</span>
            <span className={style.card_day}>10월 23일 ~ 11월 22일</span>
          </li>
        </Link>
        <Link href="/사수" style={{ textDecoration: "none" }}>
          <li className={style.card}>
            <Sagittarius />
            <span className={style.card_horoscope}>사수자리</span>
            <span className={style.card_day}>11월 23일 ~ 12월 24일</span>
          </li>
        </Link>
        <Link href="/염소" style={{ textDecoration: "none" }}>
          <li className={style.card}>
            <Capricorn />
            <span className={style.card_horoscope}>염소자리</span>
            <span className={style.card_day}>12월 25일 ~ 1월 19일</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}

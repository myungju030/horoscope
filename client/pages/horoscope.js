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
      <div>
        별자리를 <span className="blink">Click!</span> 해주세요.
      </div>
      <ul>
        <Link href="/물병" style={{ textDecoration: "none" }}>
          <li className="card">
            <Aquarius />
            <span>물병자리</span>
          </li>
        </Link>
        <Link href="/물고기" style={{ textDecoration: "none" }}>
          <li className="card">
            <Pisces />
            <span>물고기자리</span>
          </li>
        </Link>
        <Link href="/양" style={{ textDecoration: "none" }}>
          <li className="card">
            <Aries />
            <span>양자리</span>
          </li>
        </Link>
        <Link href="/황소" style={{ textDecoration: "none" }}>
          <li className="card">
            <Taurus />
            <span>황소자리</span>
          </li>
        </Link>
        <Link href="/쌍둥이" style={{ textDecoration: "none" }}>
          <li className="card">
            <Gemini />
            <span>쌍둥이자리</span>
          </li>
        </Link>
        <Link href="/게" style={{ textDecoration: "none" }}>
          <li className="card">
            <Cancer />
            <span>게자리</span>
          </li>
        </Link>
        <Link href="/사자" style={{ textDecoration: "none" }}>
          <li className="card">
            <Leo />
            <span>사자자리</span>
          </li>
        </Link>
        <Link href="/처녀" style={{ textDecoration: "none" }}>
          <li className="card">
            <Virgo />
            <span>처녀자리</span>
          </li>
        </Link>
        <Link href="/천칭" style={{ textDecoration: "none" }}>
          <li className="card">
            <Libra />
            <span>천칭자리</span>
          </li>
        </Link>
        <Link href="/전갈" style={{ textDecoration: "none" }}>
          <li className="card">
            <Scorpio />
            <span>전갈자리</span>
          </li>
        </Link>
        <Link href="/궁수" style={{ textDecoration: "none" }}>
          <li className="card">
            <Sagittarius />
            궁수자리<span></span>
          </li>
        </Link>
        <Link href="/염소" style={{ textDecoration: "none" }}>
          <li className="card">
            <Capricorn />
            <span>염소자리</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}

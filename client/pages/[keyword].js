import axios from "axios";
import Aquarius from "@/components/Aquarius";
import Aries from "@/components/Aries";
import Pisces from "@/components/Pisces";
import Taurus from "@/components/Taurus";
import Gemini from "@/components/Gemini";
import Cancer from "@/components/Cancer";
import Leo from "@/components/Leo";
import Virgo from "@/components/Virgo";
import Libra from "@/components/Libra";
import Scorpio from "@/components/Scorpio";
import Sagittarius from "@/components/Sagittarius";
import Capricorn from "@/components/Capricorn";
import Love from "@/components/Love";
import style from "../styles/Keyword.module.css";
import Link from "next/link";
import HeadInfo from "@/components/HeadInfo";

export default function Horoscope({ data, keyword }) {
  return (
    <div className={style.keyword_container}>
      <HeadInfo
        title={`${keyword}자리 운세`}
        keyword={`${keyword}자리 운세`}
        content={`${keyword}자리 운세`}
      />
      <div className={style.keyword}>
        <div className={style.keyword_title}>{keyword}자리</div>
        <div className={style.keyword_img}>
          {keyword === "물병" ? (
            <Aquarius />
          ) : keyword === "물고기" ? (
            <Pisces />
          ) : keyword === "양" ? (
            <Aries />
          ) : keyword === "황소" ? (
            <Taurus />
          ) : keyword === "쌍둥이" ? (
            <Gemini />
          ) : keyword === "게" ? (
            <Cancer />
          ) : keyword === "사자" ? (
            <Leo />
          ) : keyword === "처녀" ? (
            <Virgo />
          ) : keyword === "천칭" ? (
            <Libra />
          ) : keyword === "전갈" ? (
            <Scorpio />
          ) : keyword === "궁수" ? (
            <Sagittarius />
          ) : (
            <Capricorn />
          )}
        </div>
        <div className={style.keyword_today}>오늘의 운세</div>
        <div className={style.keyword_today_title}>
          {data?.slice(0, data?.indexOf(")") + 1)}
        </div>
        <div className={style.keyword_today_content}>
          {data?.slice(data?.lastIndexOf(")") + 1, data?.indexOf("애정운"))}
        </div>
        <div className={style.keyword_love}>
          <div className={style.keyword_heart}>애정운</div>
          <div className={style.keyword_love_content}>
            {data?.slice(data?.indexOf("애정운") + 4)}
          </div>
          <div className={style.bottom}>
            <Link href="/">
              <button className={style.button}>홈으로</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/${params.keyword}`
    );
    const data = res.data[0];
    return {
      props: { data, keyword: params.keyword },
    };
  } catch (err) {
    console.log(err);
  }
};

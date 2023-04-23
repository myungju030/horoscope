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

export default function Horoscope({ data, keyword }) {
  return (
    <div className="keyword_container">
      <div className="keyword">
        <div className="keyword_left">
          <div className="keyword_title">{keyword}자리</div>
          <div className="keyword_img">
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
        </div>
        <div className="keyword_content">
          <h1>오늘의 운세</h1>
          <div>{data?.slice(0, data?.indexOf(")") + 1)}</div>
          <div>
            {data?.slice(data?.lastIndexOf(")") + 1, data?.indexOf("애정운"))}
          </div>
          <div className="keyword_bottom">
            <Love />
            <div>{data?.slice(data?.indexOf("애정운"))}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { keyword: "물병" } },
      { params: { keyword: "물고기" } },
      { params: { keyword: "양" } },
      { params: { keyword: "황소" } },
      { params: { keyword: "쌍둥이" } },
      { params: { keyword: "게" } },
      { params: { keyword: "사자" } },
      { params: { keyword: "처녀" } },
      { params: { keyword: "천칭" } },
      { params: { keyword: "전갈" } },
      { params: { keyword: "사수" } },
      { params: { keyword: "염소" } },
    ],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
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

import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Aquarius from "@/components/Aquarius";

const getData = async (keyword) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${keyword}`);
  return res.data;
};

export default function Horoscope() {
  const [data, setData] = useState("");
  const router = useRouter();
  const keyword = router.query.keyword;

  useEffect(() => {
    getData(keyword).then((data) => {
      setData(data[0]);
    });
  }, [data]);

  return (
    <div className="keyword_container">
      <div className="keyword_title">물병자리운세</div>
      <div>
        <Aquarius />
      </div>
      <div>1월 20일~2월 18일</div>
      <div className="keyword_content">{data}</div>
    </div>
  );
}

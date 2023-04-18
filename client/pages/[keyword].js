import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const getData = async (keyword) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${keyword}`);
  const data = await res.json();
  return data;
};

export default function Horoscope() {
  const [data, setData] = useState("");
  const router = useRouter();
  const keyword = router.query.keyword;

  useEffect(() => {
    getData(keyword).then((data) => setData(data[0]));
  }, [keyword]);

  return <div>{data}</div>;
}

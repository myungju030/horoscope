import Aquarius from "@/components/Aquarius";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
    <>
      <div>{data}</div>
    </>
  );
}

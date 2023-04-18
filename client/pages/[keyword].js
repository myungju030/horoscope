import { useRouter } from "next/router";

export default function Horoscope() {
  const router = useRouter();
  const keyword = router.query.keyword;
  return <h1>{keyword}</h1>;
}

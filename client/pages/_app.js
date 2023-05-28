import Loading from "@/components/Loading";
import { usePageLoading } from "@/hooks/usePageLoading";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const { isPageLoading } = usePageLoading();

  return <>{isPageLoading ? <Loading /> : <Component {...pageProps} />}</>;
}

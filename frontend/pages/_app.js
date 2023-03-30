import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <script
        src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js"
        defer
      ></script>
      <Component {...pageProps} />
    </>
  );
}

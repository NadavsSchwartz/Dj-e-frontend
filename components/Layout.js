import Head from "next/head";
import styles from "../styles/Layout.module.css";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import { container } from "tailwindcss/defaultTheme";
// import Showcase from "./Showcase";
const Layout = ({ title, keywords, description, children }) => {
  return (
    <div className="w-full h-full">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />{" "}
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "DJ Events | Find the hottest parties",
  description: "Find the latest DJ and other musical events",
  keywords: "music, dj, edm, events",
};

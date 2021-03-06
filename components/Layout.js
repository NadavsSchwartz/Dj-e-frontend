import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div className="">
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
      <div className="relative">{children}</div>
      <Footer />{" "}
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "DJE| Find And Share Events",
  description: "Find the latest events",
  keywords: "music, dj, edm, events, share, socialmedia",
};

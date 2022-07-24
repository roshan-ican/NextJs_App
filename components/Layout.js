import Head from "next/head";
import Header from "./Header";
import styles from "../styles/Layout.module.css";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
    </div>
  );
}
// default props
Layout.defaultProps = {
  title: "Dj Events | Find the hottest parties",
  description: "Find the latest hits and other musical events",
  keywords: "music, dj, edm, events",
};

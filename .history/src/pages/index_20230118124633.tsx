import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Wassim Baghdadi</title>
        <meta
          name="description"
          content="Programmeur avec un parcours académique totalement orienté en
              informatique et 3 ans d’expérience professionnelle. Je profite de ma maitrise, rapidité d’exécution et mon esprit
              d’équipe pour livrer un produit fiable, maintenable et ergonomique."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.content}>
          <div className={styles["image-container"]}>
            <img
              srcSet="
              /assets/images/wassim-baghdadi/wassim-baghdadi-600x900.png 600w,
              /assets/images/wassim-baghdadi/wassim-baghdadi-200x300.png 200w
            "
              sizes="(max-width: 600px) 200px, 600px"
              src="/assets/images/wassim baghdadi/Wassim Baghdadi 600x900.png"
              loading="lazy"
              alt="Wassim Baghdadi Photo"
            />
          </div>
          <div className={styles.info}>
            <h1>Wassim Baghdadi</h1>
            <h2>Programmeur</h2>
            <p>
              Programmeur avec un parcours académique totalement orienté en
              informatique et 3 ans d’expérience professionnelle.
              <br />
              Je profite de ma maitrise, rapidité d’exécution et mon esprit
              d’équipe pour livrer un produit fiable, maintenable et
              ergonomique.
            </p>
            <div className={styles.links}>
              <a
                className={styles.button}
                href="mailto:vvassim.baghdadi@gmail.com"
                download
                target="_blank"
              >
                Email
              </a>
              <a
                className={styles.button}
                href="./assets/files/CV-Wassim Baghdadi.pdf"
                download
                target="_blank"
              >
                CV
              </a>
              <a
                className={styles.button}
                target="_blank"
                href="https://www.linkedin.com/in/wassim-baghdadi"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

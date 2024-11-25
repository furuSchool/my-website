import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "数学",
    Svg: require("@site/static/img/math.svg").default,
    description: (
      <>
        主に高校までの数学の知識を前提として、
        <br />
        工学部からみた数学の記事やメモを書いています。
      </>
    ),
    link: "/docs/math",
  },
  {
    title: "物理",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        特に電気系の科目を中心に、 <br />
        物理の記事やメモを書いています。
      </>
    ),
    link: "/docs/physics",
  },
  {
    title: "情報系",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        いわゆる「情報系」に必要な知識を
        <br />
        中心とした記事やメモを書いています。
      </>
    ),
    link: "/docs/information",
  },
  {
    title: "プログラミング",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        半分メモとして、
        <br />
        プログラミングの記事を書いています。
        <br />
        また、作成したプロダクトの紹介もしています。
      </>
    ),
    link: "/docs/programming",
  },
  {
    title: "気象",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        気象予報士としての知識などを
        <br />
        中心とした記事やメモを書いています。
      </>
    ),
    link: "/docs/weather",
  },
  {
    title: "その他",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>何でも書きます。</>,
    link: "/docs/others",
  },
];

function Feature({ title, Svg, description, link }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Link className="button button--secondary button--lg" to={link}>
          <Svg className={styles.featureSvg} role="img" />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h2" style={{ margin: "10px" }}>
          {title}
        </Heading>
        <p style={{ margin: "10px" }}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

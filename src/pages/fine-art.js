import Head from "next/head";
import Layout from "../components/Layout";
import { Section, SectionTitle, SectionText } from "../styles/GlobalComponents";

export default function FineArt() {
  return (
    <>
      <Head>
        <title>FINE ART | ANDREA WILSON</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Section>
          <SectionTitle>FINE ART</SectionTitle>
          <SectionText>A selection of some of my personal artwork.</SectionText>
        </Section>
      </Layout>
    </>
  );
}

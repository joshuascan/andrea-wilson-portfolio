import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import {
  Section,
  SectionTitle,
  SectionText,
  CopyrightText,
} from "../styles/GlobalComponents";
import { tatchaArt } from "../constants";
import Modal from "../components/Modal";

const ArtContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100rem;
  margin: 8rem 0;
`;

const ImageContainer = styled.div`
  margin: 0.5rem;
  width: 40rem;
  height: 40rem;
  position: relative;
  background-color: black;
`;

const Img = styled(Image)`
  :hover {
    opacity: 0.75;
    cursor: pointer;
  }
`;

export default function Tatcha() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [startingSlide, setStartingSlide] = useState();

  const openModal = (dataArray, index) => {
    setData(dataArray);
    setStartingSlide(index);
    setIsOpen(true);
  };

  return (
    <>
      <Head>
        <title>TATCHA | ANDREA WILSON</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Modal
          isCarousel={true}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          data={data}
          startingSlide={startingSlide}
          imageHeight="90rem"
          containerHeight="90rem"
        />
        <Section>
          <SectionTitle>TATCHA</SectionTitle>
          <SectionText>
            In my current role at Tatcha as a Packaging Production Designer, I
            focus mainly on artwork layout and typography, laying out artwork on
            a variety of skin care and beauty packaging. Here is just a sample
            of products I&apos;ve helped to produce.
          </SectionText>
          <CopyrightText>All artwork © TATCHA, 2021</CopyrightText>
          <ArtContainer>
            {tatchaArt.map(({ image, id }) => (
              <ImageContainer key={id}>
                <Img
                  src={image}
                  alt="Tatcha Products"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 79%"
                  priority
                  onClick={() => openModal(tatchaArt, id)}
                />
              </ImageContainer>
            ))}
          </ArtContainer>
        </Section>
      </Layout>
    </>
  );
}

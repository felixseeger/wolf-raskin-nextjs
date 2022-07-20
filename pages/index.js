import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import Instagram from '../components/Instagram';
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio 2022</title>
        <meta name='description' content='Portfolio of Wolf Raskin 2022' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero heading='Atelier Wolf Raskin' message='Creating inspiring fine art experiences since 1999.' />
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  );
}

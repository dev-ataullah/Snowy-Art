import ArtCraftCategoriesSection from '../../components/ArtCraftCategoriesSection/ArtCraftCategoriesSection';
import Banner from '../../components/Banner/Banner';
import CraftItemsSection from '../../components/CraftItemsSection/CraftItemsSection';
// import { useEffect, useState } from 'react';
import ArtGelary from '../../components/ArtGelary/ArtGelary';
import BannerUnder from '../../components/BannerUnder/BannerUnder';
import Contact from '../Contact/Contact';
import ArtistsintheStudio from '../../components/ArtistsintheStudio/ArtistsintheStudio';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import Loding from '../Loding/Loding';

const Home = () => {
  const {
    data: dta,
    isLoading: dtaLoading,
    isError: dtaError,
  } = useQuery({
    queryKey: ['all-art-craft-items'],
    queryFn: async () => {
      const res = await fetch(
        'https://snowy-art-server-side.vercel.app/all-art-craft-items'
      );
      return res.json();
    },
  });
  const { data, isLoading, isError } = useQuery({
    queryKey: ['art-craft-items-categories'],
    queryFn: async () => {
      const res = await fetch(
        'https://snowy-art-server-side.vercel.app/art-craft-items-categories'
      );
      return res.json();
    },
  });

  if (dtaError) {
    Swal.fire({
      title: 'Ooppsss...!',
      text: 'Sorry, Product data could not be loaded.',
      icon: 'error',
      timer: 2500,
    });
  }
  if (isError) {
    Swal.fire({
      title: 'Ooppsss...!',
      text: 'Sorry, Category data could not be loaded.',
      icon: 'error',
      timer: 2500,
    });
  }
  if (isLoading || dtaLoading) {
    return <Loding />;
  }
  return (
    <div>
      <Banner />
      <BannerUnder />
      <div className="w-11/12 mx-auto">
        <CraftItemsSection dta={dta} />
        <ArtCraftCategoriesSection data={data} />
        <ArtGelary />
        <ArtistsintheStudio />
        <Contact />
      </div>
    </div>
  );
};

export default Home;

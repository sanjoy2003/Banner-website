import React, { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import { getBanner } from './services/api';
import './App.css';

const App = () => {
  const [bannerData, setBannerData] = useState({
    isVisible: false,
    description: '',
    timer: 0,
    link: ''
  });

  useEffect(() => {
    const fetchBannerData = async () => {
      const response = await getBanner();
      setBannerData(response.data);
    };

    fetchBannerData();
  }, []);

  return (
    <div className="app">
      <Banner
        isVisible={bannerData.isVisible}
        description={bannerData.description}
        timer={bannerData.timer}
        link={bannerData.link}
      />
      <Dashboard />
    </div>
  );
};

export default App;

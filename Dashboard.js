import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [bannerData, setBannerData] = useState({
    isVisible: false,
    description: '',
    timer: 0,
    link: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBannerData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/updateBanner', bannerData);
    } catch (error) {
      console.error('Error updating banner data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Banner Visibility:
        <input
          type="checkbox"
          name="isVisible"
          checked={bannerData.isVisible}
          onChange={handleChange}
        />
      </label>
      <label>
        Banner Description:
        <input
          type="text"
          name="description"
          value={bannerData.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Timer (seconds):
        <input
          type="number"
          name="timer"
          value={bannerData.timer}
          onChange={handleChange}
        />
      </label>
      <label>
        Banner Link:
        <input
          type="text"
          name="link"
          value={bannerData.link}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Update Banner</button>
    </form>
  );
};

export default Dashboard;

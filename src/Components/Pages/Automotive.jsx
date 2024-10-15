import React, { useState, useEffect } from 'react';
import { Tabs } from "antd";
import Header from "../Header";
import PageBanner from "../PageBanner";
import Allcupon from "../User/Allcupon";
import axios from 'axios';
import { BaseUrl } from '../BaseURL/BaseUrl';
import Loader from '../Loader';

const Automotive = ({ categoryId, categoryName }) => {
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    axios.post(`${BaseUrl}/getsubcategory.php`, {
      category: categoryId
    })
    .then(response => {
      console.log(response.data.data)
      setSubcategories(response.data.data);
    })
    .catch(error => {
      console.error(error);
    });
  }, [categoryId]);

  return (
    <>
    <Loader/>
      <Header />
      <PageBanner title='Coupons Description' desc={categoryName} />
        <Tabs
          className='coupontab'
          centered
          defaultActiveKey="1"
          items={[
            {
              label: 'All',
              key: '1',
              children: <Allcupon category={categoryId} />,
            },
            ...subcategories.map(subcategory => ({
              label: subcategory.name,
              key: subcategory.id + 1,
              children: <Allcupon category={categoryId}  subcategoryname={subcategory.name} subcategoryId={subcategory.id}/>,
            })),
          ]}
        />
    </>
  );
};

export default Automotive;
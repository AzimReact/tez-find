import { Layout, Space } from 'antd';
import './App.css';
import MyAllCards from './components/MyAllCards';
import { useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import axios from 'axios';

const { Footer } = Layout;

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

const App = () => {
  const [iphones, setIphones] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://catalog-75e49-default-rtdb.asia-southeast1.firebasedatabase.app/iphones.json';
    axios.get(apiUrl).then((resp) => {
      let allIphones = []
      for (const key in resp.data) {
        if (key === "istore" || key === "softech") continue
        else allIphones.push({ ...resp.data[key], model: key, image: resp.data[key]['asia-store'][0].image })
      }
      // for (const key in resp.data) {
      //   allIphones = allIphones.concat(resp.data[key].map(el => ({ ...el, market: key })))
      // }
      setIphones(allIphones);
    });
  }, [setIphones]);
  // const iphones = useSelector(state => [...state.iphones])
  console.log(iphones);
  const [searchQuery, setSearchQuery] = useState('')
  const searchedIphones = useMemo(() => {
    // console.log("useMemo", iphones);
    return iphones.filter(iphone =>
      iphone.model.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery, iphones])

  return (
    < Space
      direction="vertical"
      style={{
        width: '100%',
      }}
      size={[0, 48]}
    >
      <Layout>
        <Header setSearchQuery={setSearchQuery} searchQuery={searchQuery}
          iphonesRender={iphones}
        />
        <MyAllCards searchedIphones={searchedIphones} />
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </ Space>
  )
}


export default App;
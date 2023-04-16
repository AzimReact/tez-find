import { Layout, Space } from 'antd';
import './App.css';
import MyAllCards from './components/MyAllCards';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import EveryIphone from './pages/EveryIphone';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const { Content, Footer } = Layout;
const contentStyle = {
  textAlign: "center",
  minHeight: "100vh",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

const App = () => {
  const dispatch = useDispatch()
  // const [iphones, setIphones] = useState([]);
  useEffect(() => {
    const apiUrl = 'https://catalog-75e49-default-rtdb.asia-southeast1.firebasedatabase.app/iphones.json';
    axios.get(apiUrl).then((resp) => {
      let allIphones = []
      for (const key in resp.data) {
        allIphones.push({ ...resp.data[key], modelName: key, image: resp.data[key]['asia-store'][0].image })
      }
      // setIphones(allIphones);
      dispatch({ type: 'INIT_STATE', payload: allIphones })
    });
  }, []);
  const iphoneModels = useSelector(state => state.allIphones)
  let sortedIphoneModels = [...iphoneModels]

  sortedIphoneModels = sortedIphoneModels.sort(function (a, b) {
    return b.modelName.slice(7, 9) - a.modelName.slice(7, 9)
  });
  const [searchQuery, setSearchQuery] = useState('')
  const searchedIphones = useMemo(() => {
    return sortedIphoneModels.filter(iphone =>
      iphone.modelName.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery, sortedIphoneModels])

  return (
    <BrowserRouter >
      < Space
        direction="vertical"
        style={{
          width: '100%',
        }}
        size={[0, 48]}
      >
        <Layout>
          <Header setSearchQuery={setSearchQuery} searchQuery={searchQuery}
            iphonesRender={iphoneModels}
          />
          <Content style={contentStyle}>
            <Routes>
              <Route path="/" element={<MyAllCards searchedIphones={searchedIphones} />} />
              <Route path="/:title" element={<EveryIphone iphoneModels={iphoneModels} />} />
            </Routes>
          </Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </ Space>
    </BrowserRouter >
  )
}


export default App;
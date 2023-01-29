import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './views/Footer';
import SingleTable from './components/SingleTable';
import Home from './components/Home';
import Header from './views/Header';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import { fetchStatus } from './redux/statusRedux';
import { fetchTables } from './redux/tablesRedux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddTableForm from './components/AddTableForm';
 
function App() {
  const dispatch = useDispatch();
  useEffect(()=>dispatch(fetchStatus()), [dispatch]);
  useEffect(()=> dispatch(fetchTables()), [dispatch]);
  
  return (
    <Container>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<AddTableForm/>}/>
        <Route path="/table/:tableId" element={<SingleTable/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Container>
  )
};

export default App;

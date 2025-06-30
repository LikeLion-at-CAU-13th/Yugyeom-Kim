import Home from './pages/Home';
import Mypage from './pages/Mypage';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ModalProvider from './context/ModalProvider';
import ConfirmModal from './components/modal/ConfirmModal';

function App() {
  return (
    <ModalProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
        <ConfirmModal />
      </Layout>
    </ModalProvider>
  );
}

export default App;

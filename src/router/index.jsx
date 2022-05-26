import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Servicos from '../pages/Servicos';
import QuemSomos from '../pages/QuemSomos';
import AvaliacoesDeImoveis from '../pages/AvaliacoesDeImoveis';
import PericiasJudiciais from '../pages/PericiasJudiciais';
import HomeStaging3D from '../pages/HomeStaging3D';
import ProjetosArquiteturaEDecoracao from '../pages/ProjetosArquiteturaEDecoracao';
import Contato from '../pages/Contato';
import NotFound from '../pages/NotFound';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Router() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Servicos />} />
          <Route path="/inicio" element={<QuemSomos />} />
          <Route path="/avaliacoes-imobiliarias" element={<AvaliacoesDeImoveis />} />
          <Route path="/pericias-judiciais" element={<PericiasJudiciais />} />
          <Route path="/home-staging-3d" element={<HomeStaging3D />} />
          <Route path="/projetos-arquitetura-e-decoracao" element={<ProjetosArquiteturaEDecoracao />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

import { Link } from 'react-router-dom';

export default function HeaderLinks() {
  return (
    <div>
      <Link to="/inicio">Quem Somos</Link>
      {' | '}
      <Link to="/">Serviços</Link>
      {' | '}
      <Link to="/avaliacoes-imobiliarias">Avaliações de Imvóveis</Link>
      {' | '}
      <Link to="/pericias-judiciais">Pericias Judiciais</Link>
      {' | '}
      <Link to="/home-staging-3d">Home Staging 3D</Link>
      {' | '}
      <Link to="/projetos-arquitetura-e-decoracao">Projetos Arquitetura e Decoração</Link>
      {' | '}
      <Link to="/contato">Contato</Link>
    </div>
  );
}

import useTitle from '../helpers/useTitle';
import { texto, detalhes } from '../data/contato';
import GoogleMaps from '../components/GoogleMaps';

export default function Contato() {
  useTitle('Contato | Laudo de Avaliação');
  return (
    <div>
      <h1>Contate-nos</h1>
      <p>{texto}</p>
      <p>{detalhes}</p>
      <GoogleMaps />
    </div>
  );
}

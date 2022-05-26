import { v4 as uuidv4 } from 'uuid';
import { texto, lista } from '../data/avaliacoes-imobiliarias';

export default function AvaliacoesDeImoveis() {
  return (
    <div>
      <p>{texto}</p>
      <ul>
        {lista.map(({ title, text }) => (
          <li key={uuidv4()}>
            <h4>{title}</h4>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

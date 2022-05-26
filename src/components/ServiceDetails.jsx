import { v4 as uuidv4 } from 'uuid';
import servicos from '../data/servicos';

export default function ServiceDetails() {
  return (
    <div>
      {servicos.map(({ title, lista, texto }) => (
        <div key={uuidv4()}>
          <h2>{title}</h2>
          {lista && (
            <ul>
              {lista.map((e) => (
                <li key={uuidv4()}>{e}</li>
              ))}
            </ul>
          )}
          <p>{texto}</p>
        </div>
      ))}
    </div>
  );
}

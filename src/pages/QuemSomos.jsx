import { v4 as uuidv4 } from 'uuid';
import { quemSomos, certificados } from '../data/quem-somos';

export default function QuemSomos() {
  const { images } = certificados;
  return (
    <div>
      <h1>Quem Somos</h1>
      <p>{quemSomos.texto}</p>
      <h2>Certificados</h2>
      <ul>
        {images.map((e) => (
          <li key={uuidv4()}>
            <img alt="Certificado" src={e} />
          </li>
        ))}
      </ul>
    </div>

  );
}

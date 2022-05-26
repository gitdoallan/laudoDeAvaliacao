import periciasJudiciais from '../images/periciasJudiciais.webp';
import texto from '../data/pericias-judiciais';

export default function PericiasJudiciais() {
  return (
    <div>
      <div>
        <img src={periciasJudiciais} alt="Pericias Judiciais" />
      </div>
      <div>
        <h1>Laudo Pericial x Parecer Técnico</h1>
        {texto}
      </div>
    </div>
  );
}

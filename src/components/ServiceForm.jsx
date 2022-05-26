import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ServiceForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [statusMessage, setStatusMessage] = useState('none');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nome, email, telefone, mensagem);
    setNome(''); setEmail(''); setTelefone(''); setMensagem('');
    const serviceId = 'service_41dfdab';
    const templateId = 'template_qa3x0w5';
    const userId = '_Hdz7eeE_5m0IG6qC';
    const templateParams = {
      from_name: nome,
      from_email: email,
      from_phone: telefone,
      message: mensagem,
    };

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => console.log(response))
      .then((error) => console.log(error));
    setStatusMessage('success');
  };
  return (
    <div>
      {statusMessage === 'success'
        ? (
          <p>Sua mensagem foi enviada!</p>
        )
        : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="nome">
              Nome:
              <input value={nome} type="text" id="nome" onChange={(e) => setNome(e.target.value)} />
            </label>
            <label htmlFor="email">
              Email:
              <input value={email} type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label htmlFor="telefone">
              Telefone:
              <input value={telefone} type="tel" id="telefone" onChange={(e) => setTelefone(e.target.value)} />
            </label>
            <label htmlFor="mensagem">
              Mensagem:
              <textarea value={mensagem} id="mensagem" onChange={(e) => setMensagem(e.target.value)} />
            </label>
            <button type="submit">Enviar</button>
            {statusMessage === 'error' && <p>Revise os campos marcados em vermelho.</p>}
          </form>
        )}
    </div>
  );
}

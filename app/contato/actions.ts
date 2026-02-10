'use server';

import { redirect } from 'next/navigation';

const sanitize = (value: FormDataEntryValue | null) =>
  typeof value === 'string' ? value.trim() : '';

export async function submitContact(formData: FormData) {
  const nome = sanitize(formData.get('nome'));
  const whatsapp = sanitize(formData.get('whatsapp'));
  const email = sanitize(formData.get('email'));
  const tipo = sanitize(formData.get('tipo'));
  const mensagem = sanitize(formData.get('mensagem'));

  if (!nome || !whatsapp || !email || !tipo) {
    redirect('/contato?erro=1');
  }

  console.log('Contact lead', {
    nome,
    whatsapp,
    email,
    tipo,
    mensagem
  });

  redirect('/contato?enviado=1');
}


export default function Contact() {
  return (
    <div className="p-10">
      <h2 className="text-4xl font-bold text-center">Contato</h2>
      <form action="" className=" w-2/4 mx-auto">
        <label htmlFor="name-input" className="flex flex-col gap-1 mb-5">
          Nome
          <input
            className="border border-slate-200 p-4 rounded-lg"
            name="name"
            type="text"
            id="name-input"
            placeholder="Digite seu nome"
          />
        </label>
        <label htmlFor="email-input" className="flex flex-col gap-1 mb-5">
          Email
          <input
            className="border border-slate-200 p-4 rounded-lg"
            name="email"
            type="text"
            id="email-input"
            placeholder="Digite seu email"
          />
        </label>
        <label htmlFor="subject-input" className="flex flex-col gap-1 mb-5">
          Assunto
          <input
            className="border border-slate-200 p-4 rounded-lg"
            name="subject"
            type="text"
            id="subject-input"
            placeholder="Digite o assunto"
          />
        </label>
        <label htmlFor="message-input" className="flex flex-col gap-1 mb-5">
          Mensagem
          <textarea
            className="border border-slate-200 p-4 rounded-lg"
            name="message"
            id="message-input"
            cols={30} rows={10}></textarea>
        </label>
        <button
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-12 rounded-lg mx-auto block"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}

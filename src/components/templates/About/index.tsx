import { github, imgRenan, linkedin } from "../../../assets"

export default function About() {
  return (
    <div className="text-slate-100 p-10 flex justify-center items-center gap-4 border-b-2 border-slate-800 ">
      <img
        className='rounded-full w-1/4 divide-solid'
        src={ imgRenan }
        alt="foto Renan"
      />
      <div className='max-w-lg py-20'>
        <h2 className="text-4xl font-bold">Sobre mim</h2>
        <p>Desenvolvedor web full stack</p>
        <p className='mt-10'>
          Sou desenvolvedor web full stack, mobile e UX design, com foco em ReactJS e NodeJS. O que faz gostar de tecnologia é a curiosidade de como as coisas funcionam, e a vontade de criar coisas novas.
        </p>
        <div className='mt-10 flex gap-5'>
          <a
            href="https://www.linkedin.com/in/orenanfernandes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-10"
              src={linkedin}
              alt="ícone LinkedIn"
            />
          </a>
          <a
            href="https://github.com/RenanFernandess"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-10"
              src={github}
              alt="ícone GitHub"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

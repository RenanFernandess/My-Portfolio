import { github, linkedin } from "../../assets";

export default function Footer() {
  return (
    <div className="p-10 bg-slate-900 text-slate-200">
      <div className="flex gap-5 w-16 mx-auto mb-5">
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
      <p className="text-center">RenanDesign © 2023</p>
    </div>
  )
}

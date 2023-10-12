import { ProjectCard } from "../../Cards"
import data from "../../../data"

export default function Portfolio() {
  return (
    <div className="text-slate-100 p-10">
      <h2 className="text-4xl font-bold">Portfólio</h2>
      <div className="p-5 flex flex-wrap gap-5">
        {data.map((item) =>
          <ProjectCard
            key={item.title}
            title={item.title}
            img={item.img}
            href={item.href}
            alt={`imagem do projeto ${item.title}`}
          />
        )}
      </div>
    </div>
  )
}

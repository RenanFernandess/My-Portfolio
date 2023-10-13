import { ProjectCard } from "../../Cards"
import data from "../../../data"

export default function Portfolio() {
  return (
    <div className="p-10 border-b-2 border-slate-200">
      <h2 className="text-4xl font-bold text-center">Portfólio</h2>
      <div className="py-5 px-4 flex flex-wrap gap-5 w-10/12 mx-auto">
        {data.map((item) =>
          <ProjectCard
            key={item.title}
            title={item.title}
            img={item.img}
            href={item.href}
            alt={`imagem do projeto ${item.title}`}
            tag={item.tag}
          />
        )}
      </div>
    </div>
  )
}

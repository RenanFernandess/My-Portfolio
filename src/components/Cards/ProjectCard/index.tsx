interface ProjectCardProps {
  img: string
  alt: string
  title: string
  href: string
}

export default function ProjectCard({ img, alt, title, href }: ProjectCardProps) {
  return (
    <a href={ href } target="_blank" rel="noopener noreferrer">
      <div className="w-80 h-72">
      <img
        className="w-full h-3/4"
        src={ img }
        alt={ alt }
        />
        <p className="">{title}</p>
      </div>
    </a>
  )
}

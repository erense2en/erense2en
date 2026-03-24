import { MainLayout } from 'layouts/MainLayout'
import { v4 as uuidv4 } from 'uuid'
import { ProjectData } from 'data/links'
import { ProjectCard } from 'components/ProjectCard'

const Projects = () => {
  return (
    <MainLayout
      title="Links"
      description="this and that"
    >
      <div className="grid gap-6">
        {ProjectData.map((project) => (
          <ProjectCard
            key={uuidv4()}
            title={project.title}
            description={project.description}
            icon={project.icon}
            href={project.href}
          />
        ))}
      </div>
    </MainLayout>
  )
}

export default Projects

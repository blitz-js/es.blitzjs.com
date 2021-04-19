import {useState} from "react"

import {CodeWindow} from "@/components/CodeWindow"
import {useIsDesktop} from "@/hooks/useIsDesktop"

import tokenize from "../../macros/tokenize.macro.js"

const pageTokenized = tokenize.jsx(
  `// app/pages/projects/new.tsx
import { Link, Routes, useRouter, useMutation, BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
// Mira cómo importamos la función del servidor directamente
import createProject, {CreateProject} from "app/projects/mutations/createProject"
import { ProjectForm } from "app/projects/components/ProjectForm"

const NewProjectPage: BlitzPage = () => {
  const router = useRouter()
  const [createProjectMutation] = useMutation(createProject)

  return (
    <div>
      <h1>Crear Nuevo Proyecto</h1>

      <ProjectForm
        submitText="Crear Proyecto"
        schema={CreateProject}
        onSubmit={async (values) => {
<<<<<<< HEAD
          try {
            // Esto es equivalente a hacer una petición HTTP
            const project = await createProjectMutation(values)
            router.push("/projects/" + project.id)
          } catch (error) {
            return { [FORM_ERROR]: error.toString() }
          }
=======
          // This is equivalent to calling the server function directly
          const project = await createProjectMutation(values)
          // Notice the 'Routes' object Blitz provides for routing
          router.push(Routes.ProjectsPage({projectId: project.id}}))
>>>>>>> 82436ec0678e19c73c9c61ff701e0569a9fe4a67
        }}
      />
    </div>
  )
}

NewProjectPage.authenticate = true
NewProjectPage.getLayout = (page) => <Layout>{page}</Layout>

export default NewProjectPage`,
  true,
)

const mutationTokenized = tokenize.jsx(
  `// app/projects/mutations/createProject.ts
import { resolver } from "blitz"
import db from "db"
import * as z from "zod"

// Esto provee validación en la ejecución + type safety
export const CreateProject = z
  .object({
    name: z.string(),
  })

// resolver.pipe es un pipe funcional
export default resolver.pipe(
  // Valida los datos del input
  resolver.zod(CreateProject),
  // Se asegura que el usuario esté logueado
  resolver.authorize(),
  // Aplica la business logic
  async (input) => {
    const project = await db.project.create({ data: input })
    return project
  }
)`,
  true,
)

const HeroCode = ({className = ""}) => {
  const isDesktop = useIsDesktop()
  const [tabs, setTabs] = useState([
    {
      title: isDesktop ? "mutations/createProject.ts" : "createProject.ts",
      tokens: mutationTokenized.tokens,
      selected: true,
    },
    {
      title: "pages/projects/new.tsx",
      tokens: pageTokenized.tokens,
      selected: false,
    },
  ])
  return (
    <CodeWindow
      className={className}
      tabs={tabs}
      onTabClick={(tabIndex) => {
        setTabs(
          tabs.map((tab, i) => ({
            ...tab,
            selected: i === tabIndex,
          })),
        )
      }}
    >
      <CodeWindow.Code tokens={tabs.find((tab) => tab.selected).tokens} />
    </CodeWindow>
  )
}

export {HeroCode}

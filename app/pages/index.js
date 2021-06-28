import {Octokit} from "@octokit/rest"
import {Image, Link} from "blitz"
import {useEffect, useState} from "react"

import {ButtonLink} from "@/components/ButtonLink"
import {Header} from "@/components/Header"
import {Feature} from "@/components/home/Feature"
import {FeatureIcon} from "@/components/home/FeatureIcon"
import {FeatureIconTitle} from "@/components/home/FeatureIconTitle"
import {Footer} from "@/components/home/Footer"
import {Hand} from "@/components/home/Hand"
import {HeroCode} from "@/components/home/HeroCode"
import {StyledLink} from "@/components/home/StyledLink"
import {VideoPlayer} from "@/components/home/VideoPlayer"
import Scrollbar from "@/components/Scrollbar"
import {SocialCards} from "@/components/SocialCards"
import {SponsorPack} from "@/components/SponsorPack"
import {getGitHubFile} from "@/utils/getGitHubFile"

const Home = ({randomContributors}) => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = navIsOpen ? "hidden" : "unset"
  }, [navIsOpen])

  return (
    <div>
      <SocialCards imageUrl="/social-homepage.png" />
      <div className="overflow-hidden">
        <div>
          <a name="top" aria-hidden>
            {null}
          </a>
          <div className="relative grid grid-cols-1 py-1 md:py-3 gap-y-24 xl:gap-y-44">
            <div className="z-30 text-white col-span-full">
              <Header
                className="px-6 mx-auto max-w-7xl"
                onNavToggle={(isOpen) => {
                  setNavIsOpen(isOpen)
                }}
              />
            </div>
            <div
              className={
                "absolute w-full h-full row-start-1 row-end-5 background-to-video rounded-bl-3xl xl:rounded-bl-4xl bg-gradient-to-b from-purple-mid to-purple-primary dark:from-black dark:to-purple-off-black " +
                (navIsOpen ? "z-20 fixed" : "-z-10")
              }
            ></div>
            <div className="relative -mt-6 text-white col-span-full">
              <div className="grid grid-cols-1 gap-10 px-6 mx-auto max-w-7xl lg:grid-cols-3 xl:grid-cols-2 md:gap-6 xl:-mt-10">
                <div className="z-10 space-y-10 lg:w-full">
                  <h2 className="-mt-8 font-medium text-5xl-squashed lg:-mt-0 font-secondary xl:text-6xl xl:font-medium dark:text-transparent bg-clip-text bg-gradient-to-r from-blue-gradient-white to-blue-gradient-light-blue">
                    El Framework FullStack de React
                  </h2>
                  <p className="text-lg xl:text-xl xl:font-medium text-off-white lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue xl:w-4/5">
<<<<<<< HEAD
                    Blitz es un framework todo en uno y listo para su uso, que está inspirado en
                    Ruby on Rails, construido sobre Next.js y que cuenta con las características de
                    la capa de datos "Zero-API" que elimina la necesidad de usar REST/GraphQL.
=======
                    Blitz is a batteries-included framework that&apos;s inspired by Ruby on Rails,
                    is built on Next.js, and features a &quot;Zero-API&quot; data layer abstraction
                    that eliminates the need for REST/GraphQL.
>>>>>>> ff854e245743eb09067aa71206019988d0ea80bb
                  </p>
                  <div className="flex space-x-4">
                    <ButtonLink className="w-2/3 lg:w-auto rounded-tl-xl" href="/docs/get-started">
                      Prueba Blitz en menos de 5 minutos
                    </ButtonLink>
                    <ButtonLink
                      href="https://github.com/blitz-js/blitz"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      className="w-1/3 lg:w-auto rounded-r-xl"
                    >
                      GitHub
                    </ButtonLink>
                  </div>
                </div>
                <div className="relative lg:col-span-2 xl:col-span-1">
                  <Hand variant="hero-squiggle" className="lg:hidden -right-6 -top-36" />
                  <Hand variant="hero-rightarm" className="hidden lg:block -left-36 top-32" />
                  <Hand
                    variant="hero-righthand"
                    className="z-20 hidden lg:block -left-4"
                    style={{top: "15.2rem"}}
                  />
                  <Hand
                    variant="hero-leftarm"
                    className="hidden lg:block"
                    style={{top: "30rem", right: "-4.8rem"}}
                  />
                  <Hand
                    variant="hero-lefthand"
                    style={{top: "26.6rem", right: "-2.2em"}}
                    className="z-20 hidden lg:block"
                  />
                  <HeroCode className="z-10" />
                </div>
              </div>
            </div>
            <div className="z-10 px-6 mx-auto space-y-12 text-lg text-center text-white lg:space-y-0 lg:space-x-12 lg:flex lg:text-left max-w-7xl xl:font-mediumxl:text-xl">
              <FeatureIcon icon="layers">
                “Zero-API” te permite{" "}
                <strong>importar el código del servidor directamente a tus componentes</strong> en
                lugar de tener que crear cada ruta API, realizar las peticiones desde el cliente y
                manejar el caché.
              </FeatureIcon>
              <FeatureIcon icon="lighteningBolt">
                ¡Las nuevas aplicaciones Blitz vienen con{" "}
                <strong>todas las cosas aburridas previamente configuradas!</strong> Como ESLint,
                Prettier, Jest, registro de usuario, inicio de sesión y restablecimiento de
                contraseña.
              </FeatureIcon>
              <FeatureIcon icon="graphUp">
                Proporciona <strong>convenciones y valores predeterminados útiles</strong> para
                cosas como enrutamiento, estructura de archivos y autentificación, además de ser
                extremadamente flexible.
              </FeatureIcon>
            </div>
            <div className="grid w-full gap-5 px-6 mx-auto text-white xl:gap-10 max-w-7xl lg:grid-cols-2">
              <Link href="/#" passHref>
                <StyledLink className="flex items-center justify-between pb-1 text-lg border-b border-opacity-50 border-blue-mid lg:col-span-2 font-secondary xl:text-xl">
                  <span>Vídeos destacados</span>

                  {/*
                  <span className="flex items-center">
                    <span className="hidden mr-2 lg:block">View News</span>{" "}
                    <BsArrowRight size="1.5rem" />
                  </span>
                    */}
                </StyledLink>
              </Link>
              <VideoPlayer url="https://www.youtube.com/watch?v=UHyx8MtCVVk" />
              <VideoPlayer url="https://www.youtube.com/watch?v=fIexr5UZfhU" />
            </div>

            <div className="relative w-full mx-auto space-y-10 lg:space-y-20 xl:space-y-36 max-w-7xl">
              <h2 className="px-6 text-3xl font-semibold xl:text-5xl xl:w-1/2">
                Todo lo que necesitas para tus aplicaciones en producción
              </h2>
              <div className="w-full">
                <Hand
                  variant="concepts-right"
                  className="hidden lg:block lg:-top-24 lg:-right-96 lg:w-8/12 xl:-top-14"
                />
                <Scrollbar className="lg:hidden" thumbHeight="4px">
                  <div className="grid pb-4 ml-6 features-grid lg:gap-y-14">
                    <Feature title="Fullstack & Monolítico">
                      <p>
                        Incluye todo, desde la base de datos hasta su interfaz, todo dentro de una
                        sola aplicación. Sólo un proyecto para desarrollo, sólo un proyecto para
                        desplegar a producción.
                      </p>
                      <p>Y puedes publicar tu proyecto en tu servidor o serverless.</p>
                    </Feature>
                    <Feature title="Sin necesidad de API">
                      <p>
                        En lugar de obtener los datos del backend, importa el código de tu servidor
                        directamente en tus componentes. En el momento de la compilación, esta
                        función importa e intercambia los datos con una API HTTP generada
                        automáticamente.
                      </p>
                      <p>
                        La API generada también puede ser utilizada por otras aplicaciones y por
                        terceros.
                      </p>
                    </Feature>
                    <Feature title="Opiniones sueltas">
                      <p>
                        Esta novedosa experiencia te guía por un camino perfecto para la mayoría de
                        las aplicaciones. Pero cuando necesitas salir de los caminos marcados, eres
                        totalmente libre de hacerlo.
                      </p>
                      <p>
<<<<<<< HEAD
                        Y casi todo se puede hacer con un plugin. Por ejemplo, no exigimos qué
                        estilos o bibliotecas de formularios utilizar.
=======
                        And nearly everything is pluggable. For example, we don&apos;t mandate which
                        styling or form libraries you use.
>>>>>>> ff854e245743eb09067aa71206019988d0ea80bb
                      </p>
                    </Feature>
                    <Feature title="Convención sobre configuración">
                      <p>
                        Blitz realiza todas las tareas aburridas de configuración y montaje por ti.
                        La estructura común del proyecto y los patrones arquitectóncos hacen que sea
                        más fácil pasar de una aplicación Blitz a otra y sentirse inmediatamente
                        como en casa.
                      </p>
                    </Feature>
                    <Feature title="Fácil de comenzar, fácil de escalar">
                      <p>
                        Fácil para principiantes y fácil de migrar aplicaciones ya existentes de
                        Next.js a Blitz.
                      </p>
                      <p>
                        Fácil de escalar en todas las formas: líneas de código, número de personas
                        que trabajan en la base el código y ejecución del código.
                      </p>
                    </Feature>
                    <Feature title="Estabilidad">
                      <p>
<<<<<<< HEAD
                        Una vez que alcancemos la versión 1.0, cambiaremos a un ciclo de lanzamiento
                        estable y predecible con múltiples canales como stable, LTS y beta.
=======
                        Once we reach version 1.0, we&apos;ll switch to a stable, predictable
                        release cycle with multiple channels like stable, LTS, and beta.
>>>>>>> ff854e245743eb09067aa71206019988d0ea80bb
                      </p>
                      <p>Nos estamos inspirando mucho en Ember en este aspecto.</p>
                    </Feature>
                  </div>
                </Scrollbar>
              </div>
            </div>
            <div className="absolute w-full h-full row-start-6 lg:h-codesandbox lg:mt-80 row-end-10 rounded-bl-3xl rounded-tr-3xl lg:rounded-bl-4xl lg:rounded-tr-4xl bg-gradient-to-b from-purple-mid to-purple-primary dark:from-purple-off-black dark:to-black"></div>
            <div className="relative hidden w-full px-6 mx-auto space-y-10 max-w-7xl lg:block">
              <h3 className="pb-1 text-xs border-b border-opacity-50 font-secondary border-blue-mid">
                Blitz CodeSandbox Example
              </h3>
              <div>
                <Hand variant="sandbox-right" style={{right: "-13.2rem", bottom: "-35rem"}} />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://codesandbox.io/s/flamboyant-meninsky-j63yq?file=/app/projects/mutations/createProject.ts"
                  className="h-sandbox xl:h-xl-sandbox block relative"
                >
                  <Image
                    src="/img/sandbox-pic.png"
                    layout="fill"
                    className="object-cover"
                    alt="Codesandbox placeholder"
                  />
                  <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-70 flex items-center justify-center text-white text-6xl font-bold">
                    Click to Open in New Tab
                  </div>
                </a>
              </div>
            </div>
            <div className="xl:hidden">{/*spacer div*/}</div>
            <div className="relative flex flex-col px-6 mx-auto text-white lg:flex-row max-w-7xl space-y-14 lg:space-x-24 lg:space-y-0 xl:space-x-40">
              <div className="space-y-14 lg:w-1/2">
                <h2 className="z-10 font-medium text-transparent text-5xl-squashed font-secondary bg-clip-text bg-gradient-to-r from-blue-gradient-white to-blue-gradient-light-blue xl:text-6xl">
                  La comunidad de Blitz: nuestro aspecto más importante
                </h2>
                <div className="z-10 grid grid-cols-5 gap-1 md:grid-cols-6 lg:grid-cols-5 grid-rows-8 overflow-clip">
                  {randomContributors.map((contributor, i) => (
                    <a
                      href={`https://github.com/${contributor.login}`}
                      key={i}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        layout="intrinsic"
                        width="100%"
                        height="100%"
                        src={contributor.avatar_url}
                        alt={contributor.name}
                        title={contributor.name}
                        className="w-full"
                      />
                    </a>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 text-lg lg:relative gap-14 md:grid-cols-2 lg:row-span-2 lg:grid-cols-1 xl:text-xl lg:w-1/2">
                <Hand variant="community-squiggle" className="xl:hidden -right-18" />
                <div className="z-10 flex flex-col justify-between space-y-6 lg:justify-end">
                  <div className="flex flex-col space-y-6 lg:h-auto lg:text-transparent text-off-white">
                    <p className="lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue lg:bg-clip-text">
                      ¡Nuestra comunidad es cálida, segura, diversa, inclusiva y divertida! LGBTQ+,
                      mujeres y minorías son especialmente bienvenidos.
                    </p>
                    <p className="lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue lg:bg-clip-text">
                      Por favor lee nuestro{" "}
                      <Link href="/docs/code-of-conduct" passHref>
                        <StyledLink className="underline text-off-white hover:text-blue-light">
                          Código de Conducta
                        </StyledLink>
                      </Link>
                      .
                    </p>
                  </div>
                  <ButtonLink
                    href="https://discord.blitzjs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-bl-none rounded-xl lg:w-max"
                  >
                    Únete a nuestra comunidad de Discord
                  </ButtonLink>
                </div>
                <div className="z-10 flex flex-col justify-between space-y-6 lg:justify-start">
                  <div className="flex flex-col space-y-6 lg:h-auto lg:text-transparent text-off-white lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue">
                    <p className="lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue lg:bg-clip-text">
                      Estamos todos juntos en esto, desde los más jóvenes hasta los más mayores.
                      Tenemos más cosas en común que las que nos diferencian. Nos encanta trabajar
                      juntos.
                    </p>
                    <p className="lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue lg:bg-clip-text">
<<<<<<< HEAD
                      ¡Te invitamos a ayudar a que Blitz sea el mejor framework que hemos tenido!
=======
                      We invite you to help make Blitz the best framework we&apos;ve ever had!
>>>>>>> ff854e245743eb09067aa71206019988d0ea80bb
                    </p>
                  </div>
                  <Link href="/docs/contributing" passHref>
                    <ButtonLink className="rounded-bl-none rounded-xl lg:w-max">
                      Aprende a contribuir
                    </ButtonLink>
                  </Link>
                </div>
              </div>
            </div>
            <div className="z-10 w-full mx-auto text-white space-y-7 max-w-7xl">
              <h2 className="px-6 text-2xl font-medium text-white font-secondary lg:text-3xl">
                Diagrama de la arquitectura
              </h2>
              <div className="w-full">
                <Scrollbar className="lg:hidden" thumbHeight="4px" thumbColor="white">
                  <div className="px-6 architecture-diagram" style={{paddingBottom: "2px"}}>
                    <img src="img/architecture.svg" alt="Diagrama de la Arquitectura" />
                  </div>
                </Scrollbar>
              </div>
            </div>
            <div className="relative col-span-full">
              <Hand variant="features-squiggle" className="-right-6 -top-10 xl:hidden -z-10" />
            </div>
            <div className="absolute w-full h-full row-start-8 row-end-19 xl:row-end-19 -z-20 bg-purple-mid dark:bg-purple-off-black"></div>
            <div className="relative px-6 mx-auto my-6 space-y-12 text-white xl:my-0 max-w-7xl xl:space-y-36">
              <h2 className="text-3xl font-semibold lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue xl:text-5xl">
                End-to-End, <br className="hidden xl:block" />
                desde la base de datos hasta el navegador
              </h2>
              <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
                <Hand
                  variant="features-right"
                  className="hidden xl:block xl:-top-40 xl:-right-52"
                />
                <FeatureIconTitle icon="thumbsUp" title="Autenticación y Autorización">
                  La autenticación integrada es muy fácil y muy segura. Funciona con cualquier
                  proveedor de identidad, incluidos el nombre de usuario y contraseña de tu hosting
                  y terceros como Auth0.
                </FeatureIconTitle>
                <FeatureIconTitle icon="database" title="Cualquier base de datos">
                  Puedes utilizar la base de datos que quieras. Prisma 2 es el cliente de base de
                  datos predeterminado, pero puedes eliminarlo y usar cualquier otro como Fauna o
                  DynamoDB.
                </FeatureIconTitle>
                <FeatureIconTitle icon="fileCode" title="Recetas">
                  Un comando para instalar el código y/o paquetes de tu aplicación blitz. Ejemplos:
                  `blitz install tailwind` o `blitz install chakra-ui`. Cualquiera puede crear una
                  "receta".
                </FeatureIconTitle>
                <FeatureIconTitle icon="plugin" title="Arquitectura Backend">
                  Blitz está configurado para tareas que requieren un uso intensivo del servidor,
                  como enviar emails, cronjobs, procesamiento en segundo plano, generar archivos
                  PDF, etc. Actualmente tenemos pocas guías de backend, pero estamos trabajando para
                  desarrollar más patrones y agregar más documentos.
                </FeatureIconTitle>
                <FeatureIconTitle
                  icon="typescript"
                  title="Soporte para TypeScript de primera clase"
                >
                  Blitz está construido con TypeScript y la capa de datos de Blitz está
                  completamente asegurada por tipos. ¡Todos los tipos son completamente estáticos
                  sin necesidad de un proceso de generación por separado!
                </FeatureIconTitle>
                <FeatureIconTitle icon="scaffolding" title="Código Scaffolding">
                  Es pronto, pero el código de Blitz será extremadamente poderoso, ideal tanto para
                  la creación de prototipos como para la creación de aplicaciones reales. Podrás
                  modificar cualquier plantilla y personalizarla para tu proyecto.
                </FeatureIconTitle>
              </div>
            </div>
            <div className="absolute w-full h-full bg-white dark:bg-black row-start-11 row-end-13 rounded-tr-3xl xl:rounded-tr-4xl -z-10" />
            <div className="relative col-span-full">
              <Hand
                variant="sponsors-squiggle"
                className="-right-24 xl:hidden"
                style={{top: "-5.3rem"}}
              />
            </div>
            <div className="px-6 mx-auto text-center max-w-7xl ">
              <div className="space-y-7 xl:space-y-10">
                <h2 className="relative text-3xl font-semibold xl:text-5xl">
                  <Hand
                    variant="sponsors-left"
                    className="hidden xl:block -left-80 pointer-events-none"
                    style={{top: "-18.05rem"}}
                  />
                  Nuestros Patrocinadores
                </h2>
                <p className="text-lg xl:text-xl">
                  ¡Tus contribuciones financieras ayudan a garantizar que Blitz continúe
                  desarrollándose y <br className="hidden lg:block" />
                  manteniéndose!. Tenemos opciones de patrocinio mensual a partir de $5/mes.
                </p>
                <div>
                  <ButtonLink
                    variant="solid-dark"
                    href="https://github.com/sponsors/blitz-js"
                    className="mx-auto rounded-bl-none rounded-xl lg:w-max md:w-1/3 lg:m-auto lg:mt-4 xl:mt-18"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apoya a Blitz
                  </ButtonLink>
                </div>
              </div>

              <div className="xl:max-w-2xl mx-auto">
                <SponsorPack />
              </div>
            </div>

            <div className="w-full px-6 mx-auto space-y-12 text-white lg:space-x-4 lg:space-y-0 lg:flex lg:items-center max-w-7xl">
              <h2 className="pr-2 text-3xl font-semibold lg:w-full lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue xl:text-5xl">
                ¿Qué debería hacer ahora?
              </h2>
              <div className="flex flex-col w-full space-y-4 md:flex-row md:space-y-0 md:space-x-2">
                <ButtonLink
                  href="/docs/get-started"
                  className="w-full text-lg py-18 rounded-t-2xl md:rounded-tr-none"
                >
                  Prueba Blitz en menos de 5 minutos
                </ButtonLink>
                <ButtonLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://discord.blitzjs.com"
                  className="w-full text-lg py-18 rounded-br-2xl md:rounded-tr-2xl"
                >
                  Únete a Discord
                </ButtonLink>
              </div>
            </div>
            <Footer className="dark:bg-purple-off-black bg-purple-mid text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

const getStaticProps = async () => {
  const MAX_CONTRIBUTORS = 30

  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  })

  const {contributors} = await getGitHubFile({
    octokit,
    owner: "blitz-js",
    repo: "blitz",
    path: ".all-contributorsrc",
    json: true,
  })

  let randomIndexes = []
  while (randomIndexes.length < MAX_CONTRIBUTORS) {
    var r = Math.floor(Math.random() * contributors.length)
    if (randomIndexes.indexOf(r) === -1) randomIndexes.push(r)
  }

  let randomContributors = randomIndexes.map((i) => contributors[i])

  return {
    props: {randomContributors},
    revalidate: 60 * 30, // 30 minutes
  }
}

Home.meta = {
  title: "Blitz.js - El Framework FullStack de React",
  description: `Blitz es un framework fullstack de React hiperproductivo construido sobre Next.js y cuenta con la capa de datos "Zero-API".`,
}

export default Home
export {getStaticProps}

import {Link} from "blitz"
import clsx from "clsx"
import {IoLogoVercel} from "react-icons/io5"

import {Icon} from "@/components/home/Icon"
import {LinkList} from "@/components/home/LinkList"
import {NewsletterForm} from "@/components/home/NewsletterForm"

export function Footer({className, hasDarkMode}) {
  return (
    <footer className={className}>
      <div className="border-t border-gray-300 dark:border-white border-opacity-50">
        <div className="relative mx-auto max-w-7xl">
          <a href="#top" className="absolute right-0 mr-2 -mt-5 xl:mt-24 xl:mr-6">
            <Icon
              name="arrowUp"
              className="icon-expanded"
              variant="custom"
              customBackgroundClassName="text-purple-light dark:text-off-white"
              customColorClassName="text-off-white dark:text-purple-off-black"
            ></Icon>
          </a>
        </div>
        <div className="grid px-6 mx-auto max-w-7xl lg:grid-cols-3 gap-x-24 my-14 lg:mt-24 lg:mb-12 gap-y-7">
          <div className="flex flex-col justify-between space-y-7">
            <p className="text-lg font-semibold">
              ¿Quieres estar al tanto de las últimas noticias de Blitz? ¡Suscríbete a nuestro
              Newsletter!
            </p>
            <div className="pb-5 lg:pb-0">
              <NewsletterForm hasDarkMode={hasDarkMode} />
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-7 lg:col-span-2">
            <div className="grid gap-7 md:grid-cols-3">
              <LinkList title="Documentación">
                <Link href="/docs">
                  <a>Toda la Documentación</a>
                </Link>
                <Link href="/docs/get-started">
                  <a>Primeros Pasos</a>
                </Link>
                <Link href="/docs/contributing">
                  <a>Cómo Contribuir</a>
                </Link>
              </LinkList>

              <LinkList title="Comunidad">
                <Link href="https://discord.blitzjs.com/">
                  <a target="_blank" rel="noopener noreferrer">
                    Discord
                  </a>
                </Link>
                <Link href="https://github.com/blitz-js/blitz/discussions">
                  <a target="_blank" rel="noopener noreferrer">
                    Foro de Discusiones
                  </a>
                </Link>
                <Link href="https://twitter.com/blitz_js">
                  <a target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </Link>
              </LinkList>

              <LinkList title="Otros">
                <Link href="https://github.com/blitz-js/blitz">
                  <a target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Link>
                <Link href="https://github.com/blitz-js/blitz/wiki">
                  <a target="_blank" rel="noopener noreferrer">
                    Wiki
                  </a>
                </Link>
                <Link href="https://store.blitzjs.com">
                  <a target="_blank" rel="noopener noreferrer">
                    Swag
                  </a>
                </Link>
              </LinkList>
            </div>

            <div
              className={clsx("text-xs font-secondary", {
                "text-off-white": !hasDarkMode,
                "dark:text-off-white text-black": hasDarkMode,
              })}
            >
              <Link href="https://vercel.com/?utm_source=blitzjs">
                <a target="_blank" rel="noopener noreferrer">
                  Alojado en <IoLogoVercel className="inline" /> Vercel
                </a>
              </Link>
              <br />
              Copyright &copy; {new Date().getFullYear()} Brandon Bayer y todos los colaboradores de
              Blitz.js
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

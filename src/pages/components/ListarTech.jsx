import Astro from './Astro.jsx'
import React from './React.jsx'
import Tailwind from './Tailwind.jsx'
import TypeScript from './TypeScript.jsx'
import Svelte from './Svelte.jsx'
import Vite from './Vite.jsx'
import JavaScript from './JavaScript.jsx'
import NextJs from './NextJs.jsx'

export default function ListarTech({ tech }) {
  return (
    <>
      {tech === 'NextJs' && (
        <span className='rounded-lg p-1 hover:bg-white/25'>
          <NextJs />
        </span>
      )}
      {tech === 'Astro' && (
        <span className='rounded-lg p-1 hover:bg-white/25'>
          <Astro class='size-7' />
        </span>
      )}
      {tech === 'React' && (
        <span className='rounded-lg p-1 hover:bg-white/25'>
          <React class='size-7' />
        </span>
      )}
      {tech === 'Tailwind' && (
        <span className='rounded-lg p-1 hover:bg-white/25'>
          <Tailwind class='size-7' />
        </span>
      )}
      {tech === 'TypeScript' && (
        <span className='rounded-lg p-1 hover:bg-white/25'>
          <TypeScript class='size-7' />
        </span>
      )}
      {tech === 'Svelte' && (
        <span className='rounded-lg p-1 hover:bg-white/25'>
          <Svelte class='size-7' />
        </span>
      )}
      {tech === 'Vite' && (
        <span className='rounded-lg p-1 hover:bg-white/25'>
          <Vite class='size-7' />
        </span>
      )}
      {tech === 'JavaScript' && (
        <span className='rounded-lg p-1 hover:bg-white/25'>
          <JavaScript class='size-7' />
        </span>
      )}
    </>
  )
}

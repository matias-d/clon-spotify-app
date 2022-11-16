import { Section } from '../components/Section'

export default function Home () {
  return (
    <div className='px-4 pt-20 pb-4 md:pl-72 md:pr-8 flex flex-col gap-8'>
      <Section title='Spotify Playlists' section='playlists' />
      <Section title='Para dormir' section='dormir' />
      <Section title='Concentración' section='concentracion' />
      <Section title='Estado de ánimo' section='mood' />
      <Section title='Novedades populares' section='lanzamiento' />
    </div>
  )
}

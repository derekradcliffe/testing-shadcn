// import { Link } from '@tanstack/react-router';

export default function Header() {
  return (
    <header className="p-2 flex gap-2 bg-white/90 text-black justify-between sticky top-0 z-10">
      <nav className="flex flex-row mx-auto p-[1rem]">
        {/* <div className="px-2 font-bold"> */}
          {/* <Link to="/">Home</Link> */}
        {/* </div> */}
        <div className='title'>
          <span className='text-4xl'>Menu This</span>
        </div>
      </nav>
    </header>
  )
}

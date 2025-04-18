// import { Link } from '@tanstack/react-router';
import Cart from "./ui/Cart"

export default function Header() {
  return (
    <header className="p-2 flex gap-2 bg-white/90 text-black justify-between sticky top-0 z-10">
      <nav className="flex flex-row mx-auto p-[0.5remrem] w-[100%]">
        <div className="title flex mx-auto justify-center">
          <h1 className='text-4xl font-lexend font-extralight mx-auto'>menu this</h1>
        </div>
        <Cart />
      </nav>
    </header>
  )
}

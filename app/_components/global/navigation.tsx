import Link from 'next/link'

const NavigationHeader = () => {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/docs', label: 'Docs' },
    { href: '/todos', label: 'Todos' },
    { href: '/blogs', label: 'Blogs' },
  ];
  return (
    <header className="mb-5 absolute z-10 text-white w-full">
      <nav className='container mx-auto'>
        <ul className="flex items-center">
          {links.map(({ href, label }) => (
            <li key={href} className="px-4 ">
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
};
export default NavigationHeader;

import './globals.css';
import Link from 'next/link';
export const metadata={title:'WORLD — Discover independent worlds',description:'A premium marketplace for independent fashion, vintage, reworked pieces, art and objects.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <>{children}</>}
export function Nav(){return <nav className="nav"><Link href="/" className="logo">WORLD</Link><div className="navlinks"><Link href="/">Discover</Link><Link href="/world/ficl">Stores</Link><Link href="/">Drops</Link><Link href="/">About</Link></div><div className="navright"><span className="icon">⌕</span><Link href="/dashboard" className="sell">SELL</Link><span className="icon">◯</span><span className="icon">□</span></div></nav>}

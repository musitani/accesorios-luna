import Image from 'next/image'
import { ArrowDown, AtSign, MessageCircle, Sparkles } from 'lucide-react'

const products = [
  { name: 'Aros Sol', type: 'Aros · Arcilla', price: '$ 18.500', image: '/products/aro-sol.png' },
  { name: 'Collar Luna', type: 'Collares · Dije', price: '$ 24.000', image: '/products/collar-luna.png' },
  { name: 'Aros Nube', type: 'Aros · Cerámica', price: '$ 19.800', image: '/products/aro-nube.png' },
  { name: 'Collar Tierra', type: 'Collares · Cuentas', price: '$ 26.500', image: '/products/collar-tierra.png' },
  { name: 'Aros Cobre', type: 'Aros · Metal', price: '$ 21.000', image: '/products/aro-cobre.png' },
  { name: 'Collar Lazo', type: 'Collares · Dije', price: '$ 22.500', image: '/products/collar-lazo.png' },
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f1e9] text-[#3f2d27]">
      <section className="relative min-h-[92vh] px-6 pb-16 pt-7 sm:px-10 lg:px-16">
        <nav className="mx-auto flex max-w-7xl items-center justify-between" aria-label="Navegación principal">
          <a href="#inicio" className="font-sans text-sm font-semibold tracking-[0.18em] text-[#9b4f3d]">LUNA ACCESORIOS</a>
          <div className="hidden items-center gap-8 text-xs uppercase tracking-[0.18em] text-[#806a5e] sm:flex">
            <a className="transition-colors hover:text-[#9b4f3d]" href="#coleccion">Colección</a>
            <a className="transition-colors hover:text-[#9b4f3d]" href="#contacto">Contacto</a>
          </div>
          <a href="#contacto" className="rounded-full border border-[#cba894] px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-[#9b4f3d] transition-colors hover:bg-[#ead9cc]">Hablemos</a>
        </nav>

        <div id="inicio" className="mx-auto grid max-w-7xl items-center gap-12 pt-20 lg:grid-cols-[1fr_0.9fr] lg:gap-20 lg:pt-24">
          <div className="max-w-xl">
            <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.26em] text-[#b36a55]"><span className="h-px w-10 bg-[#cc8f78]" /> Hecho a mano, con calma</div>
            <h1 className="font-sans text-[clamp(4.5rem,12vw,9.5rem)] font-light leading-[0.83] tracking-[-0.075em] text-[#a4513e]">Luna<span className="text-[#d09076]">.</span></h1>
            <p className="mt-9 max-w-sm text-lg font-light leading-relaxed text-[#6c554b] sm:text-xl">Pequeños objetos para llevar un pedacito de tierra y de cielo con vos.</p>
            <a href="#coleccion" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#a4513e] px-6 py-3.5 text-xs uppercase tracking-[0.16em] text-[#fff9f2] transition-transform hover:-translate-y-0.5">Ver la colección <ArrowDown size={15} strokeWidth={1.5} /></a>
          </div>
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -right-4 -top-6 h-24 w-24 rounded-full border border-[#d9a48c] opacity-70" />
            <div className="relative aspect-[0.9] overflow-hidden rounded-[48%_48%_8%_8%] bg-[#d8b19d]">
              <Image src="/products/collar-luna.png" alt="Collar Luna sobre papel artesanal" fill className="object-cover" priority sizes="(max-width: 1024px) 90vw, 45vw" />
            </div>
            <div className="absolute -bottom-5 -left-5 flex h-24 w-24 items-center justify-center rounded-full bg-[#e6c5b3] text-center text-[10px] uppercase leading-tight tracking-[0.12em] text-[#844332]">con amor<br />y oficio</div>
          </div>
        </div>
        <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#9b8174] sm:flex"><span className="h-8 w-px bg-[#cba894]" /> Scroll para descubrir</div>
      </section>

      <section id="coleccion" className="bg-[#efe3d7] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><p className="mb-4 text-xs uppercase tracking-[0.24em] text-[#b36a55]">La colección</p><h2 className="text-4xl font-light tracking-[-0.04em] text-[#573b32] sm:text-5xl">Piezas con alma</h2></div>
            <p className="max-w-xs text-sm font-light leading-relaxed text-[#806a5e]">Cada pieza nace despacio, entre manos, texturas y materiales elegidos con intención.</p>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-x-7 md:gap-y-16">
            {products.map((product, index) => <article key={product.name} className={index % 3 === 1 ? 'md:mt-12' : ''}>
              <div className="group relative aspect-[0.92] overflow-hidden rounded-[2px] bg-[#dfc2b0]"><Image src={product.image} alt={`${product.name}, ${product.type}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 45vw, 30vw" /><div className="absolute inset-0 bg-[#6d392c]/0 transition-colors group-hover:bg-[#6d392c]/10" /></div>
              <div className="mt-4 flex items-start justify-between gap-2"><div><h3 className="text-sm font-medium text-[#573b32]">{product.name}</h3><p className="mt-1 text-xs text-[#9b8174]">{product.type}</p></div><span className="text-xs text-[#a4513e]">{product.price}</span></div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-[#a4513e] px-6 py-24 text-[#fff7ef] sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div><Sparkles size={22} strokeWidth={1.2} className="mb-8 text-[#edc2ad]" /><p className="mb-4 text-xs uppercase tracking-[0.24em] text-[#edc2ad]">¿Hacemos algo juntas?</p><h2 className="max-w-lg text-5xl font-light leading-[0.95] tracking-[-0.05em] sm:text-7xl">Encontrá tu pieza favorita.</h2><p className="mt-8 max-w-md text-sm font-light leading-relaxed text-[#f0d9cc]">Escribinos para conocer disponibilidad, hacer un pedido especial o simplemente saludar.</p></div>
          <div className="border-t border-[#c37e69] pt-6"><a href="https://instagram.com/luna.accesorios" className="flex items-center justify-between border-b border-[#c37e69] py-5 text-sm transition-colors hover:text-[#edc2ad]" target="_blank" rel="noreferrer"><span className="flex items-center gap-4"><AtSign size={19} strokeWidth={1.4} /> @luna.accesorios</span><span>↗</span></a><a href="https://wa.me/5491100000000" className="flex items-center justify-between py-5 text-sm transition-colors hover:text-[#edc2ad]" target="_blank" rel="noreferrer"><span className="flex items-center gap-4"><MessageCircle size={19} strokeWidth={1.4} /> WhatsApp</span><span>↗</span></a></div>
        </div>
        <footer className="mx-auto mt-24 flex max-w-7xl justify-between border-t border-[#c37e69] pt-5 text-[10px] uppercase tracking-[0.18em] text-[#edc2ad]"><span>Luna Accesorios</span><span>Hecho con amor · Buenos Aires</span></footer>
      </section>
    </main>
  )
}

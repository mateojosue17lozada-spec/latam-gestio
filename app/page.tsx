'use client'

import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Globe,
  Menu,
  MoveUpRight,
  Sparkles,
  X,
} from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Levantamiento de procesos',
    category: 'Procesos & eficiencia',
    description: 'Exploramos y documentamos los procesos internos para detectar oportunidades reales de mejora.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85',
  },
  {
    number: '02',
    title: 'Implementación de ISO',
    category: 'Sistemas de gestión',
    description: 'Diseñamos e implementamos sistemas de gestión basados en normativas internacionales.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85',
  },
  {
    number: '03',
    title: 'Implementación de BPM',
    category: 'Calidad & operación',
    description: 'Convertimos la gestión de procesos en una práctica cotidiana, medible y sostenible.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85',
  },
  {
    number: '04',
    title: 'Preparación para auditorías',
    category: 'Cumplimiento normativo',
    description: 'Acompañamos a tu organización para llegar preparada, segura y con evidencia sólida.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85',
  },
  {
    number: '05',
    title: 'Definición de KPI',
    category: 'Resultados & control',
    description: 'Establecemos indicadores alineados con los objetivos que realmente mueven tu negocio.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
  },
  {
    number: '06',
    title: 'Obtención de permisos',
    category: 'Asesoría regulatoria',
    description: 'Simplificamos el camino regulatorio para que tu empresa avance con claridad y respaldo.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85',
  },
]

const values = [
  ['01', 'Excelencia', 'Hacemos las cosas bien, con rigor y atención a cada detalle.'],
  ['02', 'Compromiso', 'Nos involucramos de verdad en cada reto de nuestros clientes.'],
  ['03', 'Innovación', 'Buscamos nuevas formas de hacer que la gestión funcione mejor.'],
  ['04', 'Ética', 'Construimos relaciones transparentes, honestas y duraderas.'],
  ['05', 'Orientación al cliente', 'Cada solución parte de una necesidad concreta y humana.'],
]

const testimonials = [
  { quote: 'Gestión Integral nos ayudó a ordenar nuestros procesos y a ver la calidad como una herramienta de crecimiento.', name: 'Testimonio de cliente', role: 'Empresa asesorada' },
  { quote: 'El acompañamiento fue cercano, práctico y enfocado en resultados que nuestro equipo podía sostener.', name: 'Testimonio de cliente', role: 'Empresa asesorada' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [activeValue, setActiveValue] = useState(0)
  const [testimonial, setTestimonial] = useState(0)
  const [sent, setSent] = useState(false)

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" onClick={() => scrollTo('inicio')} aria-label="Gestión Integral, inicio">
          <span className="brand-mark"><img src="https://gestionintegrallatam.com/images/logo.png" alt="" /></span>
          <span><strong>Gestión Integral</strong><small>Transformando y mejorando para crecer</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {['nosotros', 'servicios', 'metodologia', 'valores', 'contacto'].map((item) => <button key={item} onClick={() => scrollTo(item)}>{item === 'nosotros' ? 'Quiénes somos' : item === 'metodologia' ? 'Metodología' : item[0].toUpperCase() + item.slice(1)}</button>)}
          <a className="nav-cta" href="https://wa.me/593987362286" target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        {menuOpen && <nav className="mobile-nav" aria-label="Menú móvil">{['nosotros', 'servicios', 'metodologia', 'valores', 'contacto'].map((item) => <button key={item} onClick={() => scrollTo(item)}>{item === 'nosotros' ? 'Quiénes somos' : item === 'metodologia' ? 'Metodología' : item[0].toUpperCase() + item.slice(1)} <ArrowUpRight /></button>)}<a href="https://wa.me/593987362286">Hablar por WhatsApp <ArrowUpRight /></a></nav>}
      </header>

      <section className="hero" id="inicio">
        <div className="hero-image" role="img" aria-label="Equipo de profesionales colaborando en una sesión estratégica" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="eyebrow"><span>01 — Gestión Integral Latam</span><span className="hero-location">Ecuador / Latam</span></div>
          <h1>Gestión que<br /><em>mueve</em> empresas.</h1>
          <div className="hero-bottom"><p>Soluciones estratégicas en sistemas de gestión, optimización de procesos y cumplimiento normativo.</p><div className="hero-actions"><button className="button button-light" onClick={() => scrollTo('contacto')}>Solicitar consultoría <ArrowUpRight /></button><button className="text-link light" onClick={() => scrollTo('servicios')}>Explorar servicios <ArrowDownRight /></button></div></div>
        </div>
        <div className="scroll-cue"><span>Scroll para explorar</span><ChevronDown /></div>
      </section>

      <section className="intro section" id="nosotros">
        <div className="section-label"><span>02</span><span>Quiénes somos</span></div>
        <div className="intro-grid"><h2>Convertimos la gestión en una <em>ventaja competitiva.</em></h2><div className="intro-copy"><p className="lead">En <strong>Gestión Integral</strong>, creemos que la calidad, la eficiencia y el cumplimiento normativo son los pilares del éxito empresarial.</p><p>Somos una consultora especializada en levantamiento de procesos, implementación de normas ISO, auditorías y asesoría regulatoria. Ayudamos a las empresas a optimizar su gestión, garantizar la conformidad legal y fortalecer su competitividad.</p><a className="text-link" href="#contacto">Conocer más sobre nosotros <ArrowUpRight /></a></div></div>
        <div className="mission-strip"><div><span className="mini-label">Nuestra misión</span><p>Brindamos soluciones estratégicas con un enfoque personalizado y práctico, asegurando resultados medibles y una cultura de mejora continua.</p></div><div className="mission-note">Desde Ecuador<br />para Latinoamérica <ArrowUpRight /></div></div><div className="intro-image"><img src="/images/gestion-integral-editorial.png" alt="Equipo de Gestión Integral revisando procesos y resultados" /><span>Personas, procesos<br />y propósito.</span></div>
      </section>

      <section className="stats section-dark"><div className="stats-intro"><span className="section-label light-label"><span>03</span><span>La diferencia en números</span></span><p>Experiencia que se convierte en resultados.</p></div><div className="stats-grid">{[['100+', 'Clientes satisfechos'], ['50+', 'Certificaciones ISO'], ['200+', 'Proyectos completados'], ['10+', 'Años de experiencia']].map(([number, label]) => <div className="stat" key={label}><strong>{number}</strong><span>{label}</span></div>)}</div></section>

      <section className="services section" id="servicios"><div className="section-label"><span>04</span><span>Lo que hacemos</span></div><div className="services-heading"><h2>Servicios para hacer que<br /><em>las cosas funcionen.</em></h2><p>Una mirada integral para ordenar, medir y hacer crecer tu organización.</p></div><div className="services-layout"><div className="service-list">{services.map((service, index) => <button className={`service-row ${activeService === index ? 'active' : ''}`} key={service.number} onMouseEnter={() => setActiveService(index)} onFocus={() => setActiveService(index)} onClick={() => setActiveService(index)}><span>{service.number}</span><strong>{service.title}</strong><ArrowUpRight /></button>)}</div><div className="service-feature"><img src={services[activeService].image} alt="Profesionales trabajando en gestión empresarial" /><div className="service-overlay"><span>{services[activeService].category}</span><h3>{services[activeService].title}</h3><p>{services[activeService].description}</p><a href="#contacto">Conocer servicio <ArrowUpRight /></a></div></div></div></section>

      <section className="iso-section section-dark" id="metodologia"><div className="iso-inner"><div className="section-label light-label"><span>05</span><span>Sistemas de gestión</span></div><div className="iso-heading"><h2>Sistemas de gestión que convierten la <em>calidad</em> en resultados.</h2><p>Implementamos metodologías que se integran a tu operación, no que se quedan en un documento.</p></div><div className="process-line">{[['01', 'Diagnóstico'], ['02', 'Diseño'], ['03', 'Implementación'], ['04', 'Auditoría'], ['05', 'Mejora continua']].map(([n, label]) => <div className="process-step" key={n}><span>{n}</span><strong>{label}</strong></div>)}</div></div></section>

      <section className="values section"><div className="section-label"><span>06</span><span>Nuestros valores</span></div><div className="values-grid"><div><h2>La forma en que<br /><em>hacemos las cosas.</em></h2><p className="values-note">Principios que se sienten en cada proyecto, cada conversación y cada resultado.</p></div><div className="value-selector">{values.map(([n, title, description], index) => <button key={n} onClick={() => setActiveValue(index)} className={activeValue === index ? 'selected' : ''}><span>{n}</span><strong>{title}</strong><ArrowUpRight /></button>)}<div className="value-description"><Sparkles /><p>{values[activeValue][2]}</p></div></div></div></section>

      <section className="quote-section"><div className="quote-mark">“</div><div className="quote-content"><span className="mini-label">Lo que dicen nuestros clientes</span><blockquote>{testimonials[testimonial].quote}</blockquote><div className="quote-author"><strong>{testimonials[testimonial].name}</strong><span>{testimonials[testimonial].role}</span></div><div className="quote-controls"><button onClick={() => setTestimonial((testimonial - 1 + testimonials.length) % testimonials.length)} aria-label="Testimonio anterior"><ChevronLeft /></button><span>0{testimonial + 1} / 0{testimonials.length}</span><button onClick={() => setTestimonial((testimonial + 1) % testimonials.length)} aria-label="Siguiente testimonio"><ChevronRight /></button></div></div></section>

      <section className="contact section" id="contacto"><div className="section-label"><span>07</span><span>Empecemos una conversación</span></div><div className="contact-grid"><div><h2>¿Listo para mejorar la gestión de tu <em>empresa?</em></h2><p>Más que consultores, somos tus aliados estratégicos.</p><div className="contact-details"><a href="mailto:asesoria@gestionintegrallatam.com"><span>Correo</span>asesoria@gestionintegrallatam.com <ArrowUpRight /></a><a href="tel:+593987362286"><span>Teléfono</span>+593 987 362 286 <ArrowUpRight /></a><a href="https://wa.me/593987362286" target="_blank" rel="noreferrer"><span>WhatsApp</span>Escríbenos directamente <ArrowUpRight /></a></div></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true) }}>{sent ? <div className="form-success"><Check /><h3>Gracias por escribirnos.</h3><p>Recibimos tu mensaje. Nos pondremos en contacto contigo pronto.</p><button type="button" className="text-link" onClick={() => setSent(false)}>Enviar otro mensaje</button></div> : <><label>Nombre completo<input required name="name" placeholder="Tu nombre" /></label><label>Correo electrónico<input required type="email" name="email" placeholder="tu@empresa.com" /></label><label>Empresa<input name="company" placeholder="Nombre de tu empresa" /></label><label>¿En qué podemos ayudarte?<textarea required name="message" rows={4} placeholder="Cuéntanos brevemente sobre tu proyecto" /></label><button className="button button-dark" type="submit">Enviar consulta <ArrowUpRight /></button></>}</form></div></section>

      <footer className="footer"><div className="footer-top"><a className="brand footer-brand" href="#inicio"><span className="brand-mark"><img src="https://gestionintegrallatam.com/images/logo.png" alt="" /></span><span><strong>Gestión Integral</strong><small>Transformando y mejorando para crecer</small></span></a><p>Consultoría integral para la excelencia organizacional.</p><div className="footer-social"><a href="https://www.instagram.com/gestionintegrallatam/" target="_blank" rel="noreferrer" aria-label="Instagram"><Globe /></a><a href="#contacto" aria-label="Contacto"><MoveUpRight /></a></div></div><div className="footer-bottom"><span>© 2026 Gestión Integral Latam</span><span>Ecuador / Latam</span><a href="#inicio">Volver arriba <MoveUpRight /></a></div></footer>
    </main>
  )
}

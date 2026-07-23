import { useEffect, useRef, useState } from 'react'
import logo from './assets/logo.png'
import care1 from './assets/pielegnacja/1.png'
import care2 from './assets/pielegnacja/2.png'
import care3 from './assets/pielegnacja/3.png'
import care4 from './assets/pielegnacja/4.png'
import care5 from './assets/pielegnacja/5.png'
import packingVideo from './assets/pakowanie.mp4'
import necklace1 from './assets/naszyjniki/1.png'
import necklace2 from './assets/naszyjniki/2.png'
import necklace3 from './assets/naszyjniki/3.png'
import brand1 from './assets/o-marce/1.jpg'
import brand2 from './assets/o-marce/2.jpg'
import brand3 from './assets/o-marce/3.jpg'
import bracelet1 from './assets/bransoletki/1.png'
import bracelet2 from './assets/bransoletki/2.jpg'
import bracelet3 from './assets/bransoletki/3.jpg'
import bracelet4 from './assets/bransoletki/4.jpg'
import occasion1 from './assets/zestawy-okazjonalne/1.png'
import occasion2 from './assets/zestawy-okazjonalne/2.png'
import occasion3 from './assets/zestawy-okazjonalne/3.png'
import './App.css'

const stones = [
  {
    name: 'Cytryn',
    tag: 'radość, energia, obfitość',
    color: '#c9a45c',
    desc: 'Symbolizuje optymizm, pewność siebie i pozytywne nastawienie — przypomina, aby dostrzegać dobre strony życia i odważnie realizować swoje cele.',
  },
  {
    name: 'Ametyst',
    tag: 'spokój, intuicja, harmonia',
    color: '#b3a0c7',
    desc: 'Pomaga wyciszyć emocje i wzmacnia intuicję, sprzyjając wewnętrznej równowadze i jasności myśli.',
  },
  {
    name: 'Kwarc różowy',
    tag: 'delikatność, miłość, czułość',
    color: '#e8b4b8',
    desc: 'Kojarzony z bezwarunkową miłością i czułością — otwiera serce na akceptację siebie i innych.',
  },
  {
    name: 'Sodalit',
    tag: 'spokój, harmonia, równowaga',
    color: '#3b4a78',
    desc: 'Symbolizuje pewność siebie, szczerość i jasność myśli. Pomaga wyciszyć emocje i przypomina, aby ufać swojej intuicji.',
  },
  {
    name: 'Szmaragd',
    tag: 'miłość, nadzieja, odrodzenie',
    color: '#2f6b4d',
    desc: 'Symbolizuje harmonię, lojalność i szczęście. Kojarzony z głębokimi uczuciami i siłą, która pozwala otwierać się na nowe początki.',
  },
  {
    name: 'Lapis Lazuli',
    tag: 'mądrość, prawda, siła',
    color: '#33578f',
    desc: 'Symbolizuje szczerość, pewność siebie i wewnętrzną harmonię. Przypomina, aby słuchać własnego głosu i rozwijać intuicję.',
  },
  {
    name: 'Tanzanit',
    tag: 'wyjątkowość, przemiana, intuicja',
    color: '#5b5ea6',
    desc: 'Symbolizuje nowe możliwości i odwagę do zmian — każda przemiana może prowadzić do odkrycia prawdziwej siły.',
  },
  {
    name: 'Akwamaryn',
    tag: 'spokój, odwaga, harmonia',
    color: '#8fc0ba',
    desc: 'Symbolizuje czystość uczuć i wewnętrzną równowagę — łagodność, która pomaga z większą pewnością podążać własną drogą.',
  },
  {
    name: 'Morganit',
    tag: 'miłość, delikatność, czułość',
    color: '#e2a99d',
    desc: 'Symbolizuje harmonię, subtelność i kobiecą energię — otwarte serce, spokój emocjonalny i piękno płynące z akceptacji siebie.',
  },
  {
    name: 'Perła słodkowodna',
    tag: 'kobiecość, elegancja, piękno',
    color: '#efe4cd',
    desc: 'Symbol kobiecości, elegancji i wewnętrznego piękna — subtelny dodatek, który podkreśla naturalny wdzięk.',
  },
]

const careTips = [
  { title: 'Unikaj wody i chemii', image: care1 },
  { title: 'Czyść miękką ściereczką', image: care2 },
  { title: 'Przechowuj osobno', image: care3 },
  { title: 'Unikaj słońca', image: care4 },
  { title: 'Zakładaj na końcu', image: care5 },
]

const collections = [
  {
    name: 'Naszyjniki',
    desc: 'Subtelne kompozycje z pereł, kamieni i złotych detali.',
    images: [necklace1, necklace2, necklace3],
    interval: 5000,
  },
  {
    name: 'Bransoletki',
    desc: 'Proste, naturalne formy — codzienna biżuteria z charakterem.',
    images: [bracelet1, bracelet2, bracelet3, bracelet4],
    interval: 6000,
  },
  {
    name: 'Zestawy okazjonalne',
    desc: 'Prezenty na Dzień Mamy, Dzień Taty i inne wyjątkowe chwile.',
    interval: 7000,
    images: [occasion1, occasion2, occasion3],
  },
]

const whatsappNumber = '48603885519'
const whatsappLink = `https://wa.me/${whatsappNumber}`

const orderSteps = [
  {
    title: 'Wybierz swój wymarzony model',
    desc: 'Przeglądaj nasze kolekcje na stronie lub napisz do nas na WhatsApp, jeśli masz własny pomysł — opisz go, a stworzymy go razem.',
  },
  {
    title: 'Ustalamy szczegóły',
    desc: 'Rozmiar, rodzaj kamienia, wycenę — wszystko ustalimy wspólnie w wiadomości.',
  },
  {
    title: 'Wybierz formę odbioru',
    desc: 'Paczkomat InPost — dostawa pod Twoje drzwi (+koszt wysyłki), albo odbiór osobisty w naszym salonie, ul. Trzebisławki 24.',
  },
  {
    title: 'Ciesz się swoją unikatową biżuterią',
    desc: 'Ręcznie wykonana, z sercem i pasją — stworzona właśnie dla Ciebie.',
  },
]

function CollectionVisual({ images, interval = 5000 }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, interval)
    return () => clearInterval(id)
  }, [images, interval])

  return (
    <div className="collection-card__visual collection-card__visual--photo">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className="collection-card__img"
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}
    </div>
  )
}

function App() {
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = (images, index = 0) => setLightbox({ images, index })
  const closeLightbox = () => setLightbox(null)
  const showLightboxImage = (direction) => {
    setLightbox((lb) => {
      if (!lb) return lb
      const total = lb.images.length
      return { ...lb, index: (lb.index + direction + total) % total }
    })
  }

  useEffect(() => {
    if (!lightbox) return
    function onKeyDown(e) {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') showLightboxImage(-1)
      if (e.key === 'ArrowRight') showLightboxImage(1)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightbox])

  const [careIndex, setCareIndex] = useState(0)

  const goCare = (direction) => {
    setCareIndex((i) => (i + direction + careTips.length) % careTips.length)
  }

  const stonesTrackRef = useRef(null)
  const stoneTimerRef = useRef(null)
  const stoneBase = stones.length
  const [stonePos, setStonePos] = useState(stoneBase)
  const [stoneStep, setStoneStep] = useState(0)
  const [stoneInstant, setStoneInstant] = useState(false)

  useEffect(() => {
    function measure() {
      const track = stonesTrackRef.current
      if (!track) return
      const first = track.querySelector('.stone-card')
      if (!first) return
      const gap = parseFloat(getComputedStyle(track).columnGap || '0')
      setStoneStep(first.getBoundingClientRect().width + gap)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const startStoneTimer = () => {
    if (stoneTimerRef.current) clearInterval(stoneTimerRef.current)
    stoneTimerRef.current = setInterval(() => {
      setStonePos((p) => p + 1)
    }, 7000)
  }

  useEffect(() => {
    startStoneTimer()
    return () => clearInterval(stoneTimerRef.current)
  }, [])

  const goStone = (direction) => {
    setStonePos((p) => p + direction)
    startStoneTimer()
  }

  const stoneActiveIndex = ((stonePos % stones.length) + stones.length) % stones.length

  useEffect(() => {
    const diff = stonePos - stoneBase
    if (Math.abs(diff) < stones.length) return
    const t = setTimeout(() => {
      setStoneInstant(true)
      setStonePos(stoneBase + (diff % stones.length))
    }, 800)
    return () => clearTimeout(t)
  }, [stonePos, stoneBase])

  useEffect(() => {
    if (!stoneInstant) return
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setStoneInstant(false))
    })
    return () => cancelAnimationFrame(id)
  }, [stoneInstant])

  return (
    <>
      <header className="nav">
        <img className="logo-mark" src={logo} alt="Maganda z pasji" />
        <nav>
          <a href="#o-marce">O marce</a>
          <a href="#kolekcje">Kolekcje</a>
          <a href="#kamienie">Kamienie</a>
          <a href="#pielegnacja">Pielęgnacja</a>
          <a href="#jak-zamowic">Jak zamówić</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Biżuteria z kamieni naturalnych</p>
          <h1>Piękno, które nosisz z sercem</h1>
          <p className="lead">
            Ręcznie tworzona biżuteria łącząca naturalne kamienie, perły i złote
            akcenty. Subtelna, kobieca, zawsze wyjątkowa.
          </p>
          <a className="cta" href="#kolekcje">Zobacz kolekcje</a>
        </div>
        <div className="hero-visual">
          <img className="swatch swatch--gold" src={brand1} alt="Maganda, twórca marki" />
          <img className="swatch swatch--blush" src={brand2} alt="Naszyjnik z opisem kamieni" />
          <img className="swatch swatch--sage" src={brand3} alt="Biżuteria Maganda noszona na co dzień" />
        </div>
      </section>

      <section className="manifesto" id="o-marce">
        <blockquote>
          Minera<span className="glyph-l">ł</span>y, które mają moc. Biżuteria tworzona sercem.
        </blockquote>
        <p className="manifesto-signature">— Maganda, twórca marki</p>
      </section>

      <section className="collections" id="kolekcje">
        <h2>Kolekcje</h2>
        <div className="collections-grid">
          {collections.map((c) =>
            c.images ? (
              <button
                type="button"
                className="collection-card collection-card--clickable"
                key={c.name}
                onClick={() => openLightbox(c.images, 0)}
              >
                <CollectionVisual images={c.images} interval={c.interval} />
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
              </button>
            ) : (
              <article className="collection-card" key={c.name}>
                <div className="collection-card__visual" />
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
              </article>
            )
          )}
        </div>
      </section>

      {lightbox && (
        <div className="lightbox" onClick={closeLightbox}>
          <button
            type="button"
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Zamknij"
          >
            ✕
          </button>
          <button
            type="button"
            className="lightbox-arrow lightbox-arrow--prev"
            onClick={(e) => {
              e.stopPropagation()
              showLightboxImage(-1)
            }}
            aria-label="Poprzednie zdjęcie"
          >
            ‹
          </button>
          <img
            key={lightbox.index}
            className="lightbox-image"
            src={lightbox.images[lightbox.index]}
            alt=""
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="lightbox-arrow lightbox-arrow--next"
            onClick={(e) => {
              e.stopPropagation()
              showLightboxImage(1)
            }}
            aria-label="Następne zdjęcie"
          >
            ›
          </button>
        </div>
      )}

      <section className="stones" id="kamienie">
        <h2>Znaczenie kamieni</h2>
        <p className="section-lead">
          Każdy kamień niesie swoją energię — dobierz ten, który mówi o Tobie.
        </p>
        <div className="stones-carousel">
          <button
            type="button"
            className="care-arrow care-arrow--prev"
            onClick={() => goStone(-1)}
            aria-label="Poprzedni kamień"
          >
            ‹
          </button>
          <div className="stones-viewport">
            <div
              className="stones-track"
              ref={stonesTrackRef}
              style={{
                transform: `translateX(-${stonePos * stoneStep}px)`,
                transition: stoneInstant ? 'none' : 'transform 0.7s ease',
              }}
            >
              {[...stones, ...stones, ...stones].map((s, i) => (
                <div className="stone-card" key={`${s.name}-${i}`}>
                  <span className="stone-dot" style={{ background: s.color }} />
                  <h3>{s.name}</h3>
                  <p className="stone-tag">{s.tag}</p>
                  <p className="stone-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="care-arrow care-arrow--next"
            onClick={() => goStone(1)}
            aria-label="Następny kamień"
          >
            ›
          </button>
        </div>

        <div className="stones-coverflow">
          <button
            type="button"
            className="care-arrow care-arrow--prev"
            onClick={() => goStone(-1)}
            aria-label="Poprzedni kamień"
          >
            ‹
          </button>
          <div className="care-stage">
            {stones.map((s, i) => {
              const n = stones.length
              let offset = i - stoneActiveIndex
              if (offset > n / 2) offset -= n
              if (offset < -n / 2) offset += n
              const abs = Math.abs(offset)
              const isActive = offset === 0
              return (
                <div
                  className={`stone-card care-card stone-coverflow-card${isActive ? ' care-card--active' : ''}`}
                  key={s.name}
                  style={{ '--offset': offset, '--abs': abs, zIndex: n - abs }}
                  onClick={() => !isActive && goStone(offset)}
                >
                  <span className="stone-dot" style={{ background: s.color }} />
                  <h3>{s.name}</h3>
                  <p className="stone-tag">{s.tag}</p>
                  <p className="stone-desc">{s.desc}</p>
                </div>
              )
            })}
          </div>
          <button
            type="button"
            className="care-arrow care-arrow--next"
            onClick={() => goStone(1)}
            aria-label="Następny kamień"
          >
            ›
          </button>
        </div>
      </section>

      <section className="care" id="pielegnacja">
        <h2>Jak dbać o kamienie naturalne</h2>
        <p className="section-lead">
          5 złotych zasad pielęgnacji, dzięki którym Twoja biżuteria zachowa
          blask na lata.
        </p>
        <div className="care-carousel">
          <button
            type="button"
            className="care-arrow care-arrow--prev"
            onClick={() => goCare(-1)}
            aria-label="Poprzednia zasada"
          >
            ‹
          </button>
          <div className="care-stage">
            {careTips.map((tip, i) => {
              const n = careTips.length
              let offset = i - careIndex
              if (offset > n / 2) offset -= n
              if (offset < -n / 2) offset += n
              const abs = Math.abs(offset)
              const isActive = offset === 0
              return (
                <div
                  className={`care-card${isActive ? ' care-card--active' : ''}`}
                  key={tip.title}
                  style={{
                    '--offset': offset,
                    '--abs': abs,
                    zIndex: n - abs,
                  }}
                  onClick={() => !isActive && setCareIndex(i)}
                >
                  <img src={tip.image} alt={tip.title} loading="lazy" />
                </div>
              )
            })}
          </div>
          <button
            type="button"
            className="care-arrow care-arrow--next"
            onClick={() => goCare(1)}
            aria-label="Następna zasada"
          >
            ›
          </button>
        </div>
        <div className="care-dots">
          {careTips.map((tip, i) => (
            <button
              type="button"
              key={tip.title}
              className={`care-dot${i === careIndex ? ' care-dot--active' : ''}`}
              onClick={() => setCareIndex(i)}
              aria-label={`Przejdź do: ${tip.title}`}
            />
          ))}
        </div>
      </section>

      <section className="order" id="jak-zamowic">
        <h2>Jak zamówić swoją wymarzoną biżuterię</h2>
        <p className="section-lead">To proste! Postępuj według tych kroków.</p>
        <div className="order-steps">
          {orderSteps.map((step, i) => (
            <div className="order-step" key={step.title}>
              <span className="order-number">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <a className="cta cta--whatsapp" href={whatsappLink} target="_blank" rel="noreferrer">
          Napisz na WhatsApp
        </a>
      </section>

      <section className="packing">
        <div className="packing-copy">
          <p className="eyebrow">Za kulisami</p>
          <h2>Jak pakujemy Twoje zamówienie</h2>
          <p className="section-lead">
            Każda paczka jest przygotowywana ręcznie, z taką samą starannością
            jak sama biżuteria.
          </p>
          <ul className="packing-features">
            <li>
              <span className="packing-features__title">Autorskie pudełko</span>
              <span className="packing-features__desc">Sygnowane logo Maganda, gotowe na prezent bez dodatkowego pakowania.</span>
            </li>
            <li>
              <span className="packing-features__title">Naturalne wypełnienie</span>
              <span className="packing-features__desc">Wiórki i papier zamiast plastiku — ekologicznie od pierwszego kroku.</span>
            </li>
            <li>
              <span className="packing-features__title">Osobista karta</span>
              <span className="packing-features__desc">Odręczne podziękowanie dołączone do każdego zamówienia.</span>
            </li>
          </ul>
        </div>
        <div className="packing-video">
          <video
            className="packing-video__bg"
            src={packingVideo}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            tabIndex={-1}
          />
          <video
            className="packing-video__fg"
            src={packingVideo}
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </div>
      </section>

      <section className="contact" id="kontakt">
        <h2>Skontaktuj się</h2>
        <p>
          Zapytaj o wybraną kolekcję lub zamówienie personalizowane —
          odpowiadam na wiadomości najszybciej jak mogę.
        </p>
        <div className="contact-links">
          <a href="https://www.instagram.com/maganda.kamienie_plomienie/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.facebook.com/people/Maganda-z-pasji/61564614957835/" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="mailto:Magandazpasji@gmail.com">Magandazpasji@gmail.com</a>
        </div>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Maganda z pasji</span>
      </footer>

      <a
        className="whatsapp-fab"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Napisz na WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
          <path d="M16.004 2.667c-7.363 0-13.333 5.97-13.333 13.333 0 2.353.615 4.66 1.784 6.687L2.667 29.333l6.79-1.78a13.27 13.27 0 0 0 6.547 1.72h.006c7.362 0 13.333-5.97 13.333-13.333 0-3.56-1.387-6.907-3.906-9.427a13.24 13.24 0 0 0-9.433-3.846Zm0 24.4h-.005a11.1 11.1 0 0 1-5.66-1.55l-.406-.242-4.03 1.057 1.076-3.928-.264-.403a11.06 11.06 0 0 1-1.7-5.9c0-6.117 4.977-11.093 11.096-11.093 2.964 0 5.75 1.155 7.845 3.252a11.02 11.02 0 0 1 3.246 7.848c0 6.117-4.977 11.093-11.098 11.093Zm6.086-8.31c-.334-.167-1.97-.972-2.276-1.083-.305-.111-.527-.167-.75.167-.222.333-.86 1.083-1.054 1.305-.194.223-.389.25-.722.084-.334-.167-1.409-.52-2.684-1.657-.992-.885-1.663-1.978-1.858-2.312-.194-.334-.02-.514.146-.68.15-.15.334-.39.5-.585.167-.195.223-.334.334-.556.111-.223.056-.417-.028-.584-.084-.167-.75-1.807-1.028-2.474-.27-.65-.545-.562-.75-.573l-.64-.011c-.222 0-.583.083-.889.417-.305.333-1.166 1.14-1.166 2.78s1.194 3.226 1.36 3.448c.166.222 2.35 3.588 5.694 5.032.795.343 1.416.548 1.9.702.798.254 1.524.218 2.098.132.64-.096 1.97-.805 2.248-1.583.278-.778.278-1.444.194-1.583-.083-.14-.305-.223-.639-.39Z" />
        </svg>
      </a>
    </>
  )
}

export default App

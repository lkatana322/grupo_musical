"use client";

import { useState, useRef, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { Guitar, Calendar, BookOpen, Megaphone } from "lucide-react";
import styles from "./page.module.css";

export default function StoreHome() {
  /* ───────── State & refs ───────── */
  const [bannerLoaded, setBannerLoaded] = useState(false);
  const [valuesVisible, setValuesVisible] = useState(false);
  const [testsVisible, setTestsVisible] = useState(false);

  const valuesRef = useRef<HTMLElement>(null);
  const testsRef  = useRef<HTMLElement>(null);

  /* ───────── Intersection observers ───────── */
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          if (e.target === valuesRef.current) setValuesVisible(true);
          if (e.target === testsRef.current)  setTestsVisible(true);
        });
      },
      { threshold: 0.25 }
    );

    if (valuesRef.current) obs.observe(valuesRef.current);
    if (testsRef.current)  obs.observe(testsRef.current);

    return () => obs.disconnect();
  }, []);

  /* ───────── Handlers ───────── */
  const handleImageLoad: ImageProps["onLoadingComplete"] = () =>
    setBannerLoaded(true);

  /* ───────── Static data ───────── */
  const cards = [
    {
      Icon: Guitar,
      label: "Tienda de Instrumentos",
      description: "Compra guitarras, zampoñas y más en línea.",
    },
    {
      Icon: Calendar,
      label: "Próximos Conciertos",
      description: "Fechas, sedes y entradas disponibles.",
    },
    {
      Icon: BookOpen,
      label: "Cursos",
      description: "Perfecciona tu técnica con nuestros maestros.",
    },
    {
      Icon: Megaphone,
      label: "Organización de Eventos",
      description: "Producción y logística a tu medida.",
    },
  ];

  const values = [
    {
      title: "Compromiso",
      description: "Siempre damos lo mejor para llevarte la mejor experiencia.",
    },
    {
      title: "Responsabilidad",
      description:
        "Cumplimos horarios y cuidamos cada detalle de nuestra presentación.",
    },
    {
      title: "Amor por la música",
      description:
        "Entregamos el alma en cada canción, porque es nuestra pasión.",
    },
  ];

  const testimonials = [
    {
      author: "Ana P.",
      text: "&ldquo;¡Felicidades chicos, lo hicieron genial, recomendado al 100%! :D&rdquo;",
    },
    {
      author: "Luis G.",
      text: "&ldquo;Los recomiendo para mi próximo evento, show de calidad.&rdquo;",
    },
    {
      author: "María S.",
      text: "&ldquo;Qué lindo show, me encantó &lt;3. ¿Cuándo vienen a La Paz?&rdquo;",
    },
  ];

  /* ───────── JSX ───────── */
  return (
    <div className={styles.container}>
      {/* ── Banner ── */}
      <div className={styles.banner}>
        {!bannerLoaded && <div className={styles.bannerPlaceholder} />}
        {/* capa difuminada */}
        <div className={styles.bannerBlur}>
          <Image
            src="/imagenes/baner.png"
            alt="Fondo difuminado"
            fill
            priority
            className={bannerLoaded ? styles.loaded : ""}
            style={{ objectFit: "cover", filter: "blur(24px)" }}
            onLoadingComplete={handleImageLoad}
          />
        </div>
        {/* imagen principal */}
        <div className={styles.bannerMain}>
          <Image
            src="/imagenes/baner.png"
            alt="Grupo Musical"
            fill
            priority
            className={bannerLoaded ? styles.loaded : ""}
            style={{ objectFit: "contain" }}
            onLoadingComplete={handleImageLoad}
          />
        </div>
        {/* degradados */}
        <div className={styles.gradientTop} />
        <div className={styles.gradientBottom} />

        <h1 className={styles.bannerTitle}>Título del Grupo</h1>
      </div>

      {/* ── Intro ── */}
      <p className={styles.introText}>
        Descubre la esencia de nuestra música: eventos, cursos y tienda de
        instrumentos.
      </p>

      {/* ── Cards ── */}
      <div className={styles.cards}>
        {cards.map(({ Icon, label, description }, i) => (
          <div key={i} className={styles.card} style={{ animationDelay: `${0.1 * i}s` }}>
            <Icon size={34} />
            <h2>{label}</h2>
            <p>{description}</p>
          </div>
        ))}
      </div>

      {/* ── Valores ── */}
      <section
        ref={valuesRef}
        className={`${styles.valuesSection} ${
          valuesVisible ? styles.visible : ""
        }`}
      >
        <h2 className={styles.sectionTitle}>Nuestros Valores</h2>
        <div className={styles.values}>
          {values.map((v, i) => (
            <div
              key={i}
              className={styles.valueCard}
              style={{ animationDelay: `${0.15 * i}s` }}
            >
              <h3>{v.title}</h3>
              <p>{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonios ── */}
      <section
        ref={testsRef}
        className={`${styles.testimonialsSection} ${
          testsVisible ? styles.visible : ""
        }`}
      >
        <h2 className={styles.sectionTitle}>Testimonios de clientes</h2>
        <div className={styles.testimonials}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={styles.testimonialCard}
              style={{ animationDelay: `${0.2 + 0.15 * i}s` }}
            >
              <p
                className={styles.testimonialText}
                dangerouslySetInnerHTML={{ __html: t.text }}
              />
              <p className={styles.testimonialAuthor}>— {t.author}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

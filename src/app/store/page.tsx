"use client";

import { useState, useRef, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { 
  Guitar, 
  Calendar, 
  BookOpen, 
  Megaphone 
} from "lucide-react";
import styles from "./page.module.css";

export default function StoreHome() {
  const [bannerLoaded, setBannerLoaded] = useState(false);
  const [valuesVisible, setValuesVisible] = useState(false);
  const [testsVisible, setTestsVisible] = useState(false);
  const valuesRef = useRef<HTMLElement>(null);
  const testsRef = useRef<HTMLElement>(null);

  // dispara la animación al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            if (e.target === valuesRef.current) setValuesVisible(true);
            if (e.target === testsRef.current) setTestsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );
    valuesRef.current && observer.observe(valuesRef.current);
    testsRef.current && observer.observe(testsRef.current);
    return () => observer.disconnect();
  }, []);

  const handleImageLoad: ImageProps["onLoadingComplete"] = () => {
    setBannerLoaded(true);
  };

  const testimonials = [
    { author: "Ana P.", text: "¡Felicidades chicos, lo hicieron genial, me gustó mucho, recomendado al 100%! :D" },
    { author: "Luis G.", text: "Los recomiendo para mi próximo evento, show de calidad." },
    { author: "María S.", text: "Qué lindo show, me encantó <3. ¿Cuándo vienen a La Paz?" },
  ];

  const values = [
    { title: "Compromiso", description: "Siempre damos lo mejor para llevarte la mejor experiencia." },
    { title: "Responsabilidad", description: "Cumplimos horarios y cuidamos cada detalle de nuestra presentación." },
    { title: "Amor por la música", description: "Entregamos el alma en cada canción, porque es nuestra pasión." },
  ];

  return (
    <div className={styles.container}>
      {/* Banner */}
      <div className={styles.banner}>
        {!bannerLoaded && <div className={styles.bannerPlaceholder} />}
        <div className={styles.bannerBlur}>
          <Image
            src="/imagenes/baner.png"
            alt="Fondo difuminado Grupo Musical"
            fill priority
            className={bannerLoaded ? styles.loaded : ""}
            style={{ objectFit: "cover", objectPosition: "center", filter: "blur(20px)" }}
            onLoadingComplete={handleImageLoad}
          />
        </div>
        <div className={styles.bannerMain}>
          <Image
            src="/imagenes/baner.png"
            alt="Grupo Musical"
            fill priority
            className={bannerLoaded ? styles.loaded : ""}
            style={{ objectFit: "contain", objectPosition: "center" }}
            onLoadingComplete={handleImageLoad}
            onError={() => setBannerLoaded(true)}
          />
        </div>
        <div className={styles.gradientTop} />
        <div className={styles.gradientBottom} />
        <div className={styles.bannerTitleContainer}>
          <h1 className={styles.bannerTitle}>Título del Grupo</h1>
        </div>
      </div>

      {/* Mensaje genérico */}
      <p className={styles.introText}>
        Descubre la esencia de nuestra música: eventos, cursos y tienda de instrumentos.
      </p>

      {/* Sección de tarjetas SIN enlaces */}
      <div className={styles.cards}>
        <div className={styles.card}>
          <Guitar size={32} />
          <h2>Tienda de Instrumentos</h2>
          <p>Compra guitarras, zampoñas y más en línea.</p>
        </div>
        <div className={styles.card}>
          <Calendar size={32} />
          <h2>Próximos Conciertos</h2>
          <p>Fechas, sedes y entradas disponibles.</p>
        </div>
        <div className={styles.card}>
          <BookOpen size={32} />
          <h2>Cursos</h2>
          <p>Perfecciona tu técnica con nuestros maestros.</p>
        </div>
        <div className={styles.card}>
          <Megaphone size={32} />
          <h2>Organización de Eventos</h2>
          <p>Producción y logística a tu medida.</p>
        </div>
      </div>

      {/* Valores */}
      <section
        ref={valuesRef}
        className={
          styles.valuesSection +
          (valuesVisible ? ` ${styles.visible}` : "")
        }
      >
        <h2 className={styles.valuesTitle}>Nuestros Valores</h2>
        <div className={styles.values}>
          {values.map((v, i) => (
            <div
              key={i}
              className={styles.valueCard}
              style={{ animationDelay: `${0.1 + i * 0.15}s` }}
            >
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueDesc}>{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section
        ref={testsRef}
        className={
          styles.testimonialsSection +
          (testsVisible ? ` ${styles.visible}` : "")
        }
      >
        <h2 className={styles.testimonialsTitle}>Testimonios de clientes</h2>
        <div className={styles.testimonials}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={styles.testimonialCard}
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              <p className={styles.testimonialText}>"{t.text}"</p>
              <p className={styles.testimonialAuthor}>— {t.author}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

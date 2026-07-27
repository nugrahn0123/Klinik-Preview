"use client";

import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const rise = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58 },
  },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressScaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  return (
    <div className="site-shell">
      <motion.div className="scroll-progress" style={{ scaleX: progressScaleX }} />

      <header className={`topbar ${menuOpen ? "open" : ""}`}>
        <div className="topbar-head">
          <div className="brand-wrap">
            <div className="brand">AZURE GLOW</div>
            <span className="brand-tag">Aesthetic Medicine</span>
          </div>

          <button
            className={`menu-btn ${menuOpen ? "open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className="topbar-panel">
          <nav className="topnav" aria-label="Navigasi utama">
            <a href="#layanan" onClick={() => setMenuOpen(false)}>Layanan</a>
            <a href="#dokter" onClick={() => setMenuOpen(false)}>Dokter</a>
            <a href="#hasil" onClick={() => setMenuOpen(false)}>Hasil</a>
            <a href="#lokasi" onClick={() => setMenuOpen(false)}>Lokasi</a>
            <a href="#kontak" onClick={() => setMenuOpen(false)}>Kontak</a>
          </nav>
          <a className="book-pill" href="https://wa.me/6281234567890">
            Booking Sekarang
          </a>
        </div>
      </header>

      <motion.main initial="hidden" animate="show" variants={stagger}>
        <section className="hero">
          <motion.div className="hero-copy" variants={rise}>
            <p className="eyebrow">Medical Aesthetic Clinic</p>
            <h1>
              Bukan Sekadar Cantik,
              <br />
              Tapi Kulit Sehat yang Terukur.
            </h1>
            <p className="lead">
              Program personal berbasis analisa kulit untuk hasil yang natural, aman,
              dan terukur.
            </p>

            <div className="proof-row" aria-label="Social proof klien">
              <div className="avatar-stack">
                <span>
                  <Image
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=300"
                    alt="Klien Azure Glow 1"
                    fill
                    sizes="36px"
                  />
                </span>
                <span>
                  <Image
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300"
                    alt="Klien Azure Glow 2"
                    fill
                    sizes="36px"
                  />
                </span>
                <span>
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300"
                    alt="Klien Azure Glow 3"
                    fill
                    sizes="36px"
                  />
                </span>
              </div>
              <p>
                600+ klien aktif setiap bulan dengan monitoring berkala.
              </p>
            </div>

            <div className="hero-actions">
              <a className="btn-primary" href="https://wa.me/6281234567890">
                Konsultasi via WhatsApp
              </a>
              <a className="btn-ghost" href="#layanan">
                Lihat Program
              </a>
            </div>
          </motion.div>

          <motion.aside className="hero-card" aria-label="Ringkasan klinik" variants={rise}>
            <div className="hero-media">
              <div className="hero-main-image">
                <Image
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1400"
                  alt="Perawatan facial di klinik"
                  fill
                  sizes="(max-width: 960px) 100vw, 35vw"
                />
              </div>
              <div className="hero-thumb-grid">
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=800"
                    alt="Konsultasi dokter kulit"
                    fill
                    sizes="(max-width: 960px) 45vw, 15vw"
                  />
                </div>
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800"
                    alt="Produk skincare klinik"
                    fill
                    sizes="(max-width: 960px) 45vw, 15vw"
                  />
                </div>
              </div>
            </div>

            <p className="metric-title">Client Outcome Snapshot</p>
            <div className="metric-grid">
              <div className="metric-row">
                <span>4.9/5</span>
                <small>Rating Konsultasi</small>
              </div>
              <div className="metric-row">
                <span>6.200+</span>
                <small>Klien Ditangani</small>
              </div>
              <div className="metric-row">
                <span>89%</span>
                <small>Peningkatan 12 Minggu</small>
              </div>
            </div>

            <div className="hero-extra-grid">
              <div className="mini-panel">
                <h3>Slot Konsultasi Hari Ini</h3>
                <div className="slot-list">
                  <span>10:30</span>
                  <span>13:00</span>
                  <span>15:45</span>
                  <span>18:20</span>
                </div>
                <p>Estimasi durasi konsultasi awal: 25-30 menit per sesi.</p>
              </div>

              <div className="mini-panel mini-grid">
                <article>
                  <h4>Treatment Paling Dicari</h4>
                  <p>Acne Protocol, Lift Contour, Brightening Reset.</p>
                </article>
                <article>
                  <h4>Clinical Safety</h4>
                  <p>Alat steril sekali pakai dan pengawasan dokter tiap tindakan.</p>
                </article>
              </div>
            </div>
          </motion.aside>
        </section>

        <motion.section className="signature-band" variants={rise}>
          <article className="signature-copy">
            <p className="eyebrow">Signature Experience</p>
            <h2>Nuansa Klinik yang Tenang, Proses yang Presisi</h2>
            <p>
              Dari konsultasi awal sampai follow-up, semua langkah dibuat ringkas,
              jelas, dan nyaman diikuti.
            </p>
            <div className="signature-points">
              <span>Private treatment room</span>
              <span>Doctor-led protocol</span>
              <span>Aftercare concierge</span>
            </div>
          </article>

          <article className="signature-media">
            <div className="signature-image">
              <Image
                src="https://images.unsplash.com/photo-1559599189-fe84dea4eb79?q=80&w=1600"
                alt="Interior premium Azure Glow"
                fill
                sizes="(max-width: 960px) 100vw, 42vw"
              />
            </div>
          </article>
        </motion.section>

        <motion.section className="trust-strip" aria-label="Keunggulan klinik" variants={stagger}>
          <motion.article variants={rise}>
            <h3>Diagnosa Kulit Berbasis Data</h3>
            <p>Analisa pori, pigmentasi, dan sensitivitas sebelum treatment.</p>
          </motion.article>
          <motion.article variants={rise}>
            <h3>Rencana Bertahap 4-12 Minggu</h3>
            <p>Target progres jelas di setiap fase dan dievaluasi rutin.</p>
          </motion.article>
          <motion.article variants={rise}>
            <h3>Homecare yang Nyambung</h3>
            <p>Rekomendasi harian selaras dengan prosedur klinik.</p>
          </motion.article>
        </motion.section>

        <motion.section className="pulse-strip" variants={rise} aria-label="Highlight klinik">
          <div className="pulse-track">
            <span>Doctor On-Site Daily</span>
            <span>Real Skin Progress Tracking</span>
            <span>Premium Sterile Protocol</span>
            <span>Aftercare Monitoring</span>
            <span>Doctor On-Site Daily</span>
            <span>Real Skin Progress Tracking</span>
          </div>
        </motion.section>

        <motion.section className="modern-bento" id="experience" variants={rise}>
          <article className="bento-main">
            <div className="bento-main-image">
              <Image
                src="https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=1800"
                alt="Ruang treatment Azure Glow"
                fill
                sizes="(max-width: 960px) 100vw, 56vw"
              />
            </div>
            <div className="bento-main-copy">
              <p className="eyebrow">Modern Experience</p>
              <h3>Design Klinis yang Calm dan Estetik</h3>
              <p>
                Ruang treatment dirancang tenang agar proses konsultasi dan tindakan terasa
                nyaman sejak sesi pertama.
              </p>
            </div>
          </article>

          <article className="bento-side-card">
            <p className="mini-label">Fast Intake</p>
            <h4>Check-in 5 Menit</h4>
            <p>Form digital singkat, konsultasi langsung fokus ke kondisi kulit Anda.</p>
          </article>

          <article className="bento-side-card">
            <p className="mini-label">Precision Plan</p>
            <h4>Roadmap 12 Minggu</h4>
            <p>Target treatment jelas per fase dengan evaluasi progres visual berkala.</p>
          </article>
        </motion.section>

        <motion.section className="services" id="layanan" variants={rise}>
          <div className="section-heading">
            <p className="eyebrow">Core Programs</p>
            <h2>Rangkaian Treatment yang Dirancang Bertahap</h2>
          </div>
          <div className="service-grid">
            <article className="service-card">
              <div className="card-image">
                <Image
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200"
                  alt="Acne recovery treatment"
                  fill
                  sizes="(max-width: 960px) 100vw, 33vw"
                />
              </div>
              <h3>Acne Recovery Blueprint</h3>
              <p>
                Kombinasi konsultasi dokter, laser bertahap, dan homecare untuk
                meredakan inflamasi.
              </p>
            </article>
            <article className="service-card">
              <div className="card-image">
                <Image
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200"
                  alt="Lift contour treatment"
                  fill
                  sizes="(max-width: 960px) 100vw, 33vw"
                />
              </div>
              <h3>Lift & Contour Program</h3>
              <p>
                Botox dan filler dengan pendekatan anatomi wajah untuk hasil
                yang tetap elegan.
              </p>
            </article>
            <article className="service-card">
              <div className="card-image">
                <Image
                  src="https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?q=80&w=1200"
                  alt="Glass skin regimen"
                  fill
                  sizes="(max-width: 960px) 100vw, 33vw"
                />
              </div>
              <h3>Glass Skin Regimen</h3>
              <p>
                Paket peeling dan hydration infusion untuk kulit lebih cerah,
                halus, dan sehat.
              </p>
            </article>
          </div>
        </motion.section>

        <motion.section className="doctor" id="dokter" variants={rise}>
          <div className="doctor-profile">
            <p className="eyebrow">Lead Dermatology Team</p>
            <h2>dr. Amanda Putri, M.Ked (Aest)</h2>
            <p>
              8+ tahun menangani anti-aging dan skin rejuvenation dengan pendekatan
              personal berbasis kondisi kulit.
            </p>

            <div className="doctor-points">
              <span>Face Mapping Analysis</span>
              <span>Customized Injection Plan</span>
              <span>Post-treatment Check</span>
            </div>
          </div>
          <div className="doctor-badge">
            <div className="doctor-image">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200"
                alt="Dokter estetika Azure Glow"
                fill
                sizes="(max-width: 960px) 100vw, 30vw"
              />
            </div>
            <p>Board Certified</p>
            <h3>8+ Tahun</h3>
            <small>Praktik Estetika Medis</small>
          </div>
        </motion.section>

        <motion.section className="results" id="hasil" variants={rise}>
          <div className="section-heading">
            <p className="eyebrow">Real Progress</p>
            <h2>Perubahan yang Terlihat, Bukan Janji Kosong</h2>
          </div>
          <div className="result-grid">
            <article>
              <div className="result-image">
                <Image
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200"
                  alt="Hasil acne scar smoothing"
                  fill
                  sizes="(max-width: 960px) 100vw, 33vw"
                />
              </div>
              <h3>Acne Scar Smoothing</h3>
              <p>Kedalaman scar berkurang dan tekstur tampak lebih rata.</p>
            </article>
            <article>
              <div className="result-image">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200"
                  alt="Hasil hyperpigmentation reset"
                  fill
                  sizes="(max-width: 960px) 100vw, 33vw"
                />
              </div>
              <h3>Hyperpigmentation Reset</h3>
              <p>Tone kulit lebih merata dengan protocol brightening bertahap.</p>
            </article>
            <article>
              <div className="result-image">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200"
                  alt="Hasil anti-aging definition"
                  fill
                  sizes="(max-width: 960px) 100vw, 33vw"
                />
              </div>
              <h3>Anti-aging Definition</h3>
              <p>Pipi dan jawline lebih tegas tanpa kesan berlebihan.</p>
            </article>
          </div>
        </motion.section>

        <motion.section className="journey" aria-label="Alur perawatan" variants={rise}>
          <div className="section-heading">
            <p className="eyebrow">Treatment Journey</p>
            <h2>Alur yang Jelas dari Konsultasi Sampai Evaluasi</h2>
          </div>
          <div className="journey-grid">
            <article>
              <span>01</span>
              <h3>Skin Assessment</h3>
              <p>Cek kondisi kulit, riwayat produk, dan target hasil.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Program Planning</h3>
              <p>Dokter menyusun urutan treatment dan interval sesi.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Action & Monitoring</h3>
              <p>Treatment berjalan bertahap dengan catatan progres.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Refinement</h3>
              <p>Program disesuaikan mengikuti respons kulit.</p>
            </article>
          </div>
        </motion.section>

        <motion.section className="map-section" id="lokasi" variants={rise}>
          <div className="section-heading">
            <p className="eyebrow">Lokasi Klinik</p>
            <h2>Kunjungi Azure Glow di Makassar</h2>
          </div>
          <div className="map-layout">
            <div className="map-info">
              <h3>Azure Glow</h3>
              <p>Jl. Premium No. 88, Makassar, Sulawesi Selatan</p>
              <ul>
                <li>Senin - Jumat: 09.00 - 20.00</li>
                <li>Sabtu: 09.00 - 18.00</li>
                <li>Minggu: Tutup</li>
              </ul>
              <a href="https://maps.google.com/?q=Makassar" target="_blank" rel="noreferrer">
                Buka di Google Maps
              </a>
            </div>

            <div className="map-frame">
              <iframe
                title="Lokasi Azure Glow"
                src="https://www.google.com/maps?q=Makassar&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </motion.section>

        <motion.section className="cta" id="kontak" variants={rise}>
          <h2>Mulai Konsultasi Pertama Anda Minggu Ini</h2>
          <p>
            Tim kami siap bantu pilih treatment yang sesuai kondisi kulit dan target hasil Anda.
          </p>
          <a href="https://wa.me/6281234567890">Chat Admin Klinik</a>
        </motion.section>
      </motion.main>
    </div>
  );
}

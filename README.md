# Atha Portfolio & Learning Platform

**Platform Portofolio Pribadi & E-Learning Interaktif**
>
> Website ini tidak hanya berfungsi sebagai *showcase* portofolio profesional, tetapi juga sebagai platform pembelajaran interaktif yang menyediakan kursus *Coding* dan *Photography* lengkap dengan sistem kuis dan pelacakan progres belajar.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🌟 Fitur Utama

### 🎨 Portofolio Profesional
* Desain responsif dan modern dengan animasi halus.
* Bagian khusus untuk menampilkan proyek, skill, dan pengalaman.
* Mode Gelap/Terang (jika diimplementasikan lewat Shadcn UI).

### 📚 Modul Pembelajaran (Learning Management)
* **Dua Jalur Kursus:** Materi lengkap untuk **Coding** (HTML, CSS, JS, React) dan **Photography** (Teknik dasar, Lighting, Editing).
* **Materi Terstruktur:** Konten disajikan per bab dengan ilustrasi visual.

### 🧠 Kuis & Evaluasi
* Sistem kuis interaktif di setiap akhir materi.
* Skor instan dan umpan balik jawaban.
* **Sertifikat:** (Opsional) Fitur generate sertifikat setelah menyelesaikan modul.

### 📊 Analitik & Riwayat (User Dashboard)
* **Quiz History:** Melacak riwayat nilai kuis yang pernah dikerjakan.
* **Visualisasi Data:** Grafik perkembangan belajar menggunakan *Recharts*.
* Backend terintegrasi dengan **Supabase** untuk menyimpan data pengguna.

### 🌍 Internasionalisasi (i18n)
* Mendukung **9 Bahasa**: Indonesia, Inggris, Arab, Jepang, Mandarin, Rusia, Perancis, Jerman, dan Spanyol.
* Deteksi bahasa otomatis atau manual switch.

---

## 🛠️ Tech Stack

Project ini dibangun menggunakan teknologi web modern:

* **Frontend Framework:** [React 18](https://reactjs.org/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **UI Components:** [Shadcn UI](https://ui.shadcn.com/) (berbasis Radix UI)
* **State Management & Data Fetching:** React Query (TanStack Query)
* **Internationalization:** i18next
* **Charts:** Recharts
* **Icons:** Lucide React

---

## 🚀 Cara Menjalankan Project (Local Development)

Ikuti langkah-langkah berikut untuk menjalankan project ini di komputer Anda:

### Prasyarat
Pastikan Anda sudah menginstal:
* Node.js (versi 18 atau terbaru)
* npm (atau yarn/bun)

### Langkah Instalasi

1.  **Clone repositori ini**
    ```bash
    git clone [https://github.com/username-anda/atha-portfolio.git](https://github.com/username-anda/atha-portfolio.git)
    cd atha-portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # atau jika menggunakan bun
    bun install
    ```


3.  **Jalankan server development**
    ```bash
    npm run dev
    ```

4.  **Buka di browser**
    Buka [http://localhost:8080](http://localhost:8080) (atau port lain yang muncul di terminal).

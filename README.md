# TokoKu — Company Profile & Katalog Harga (UTS)

Website company profile brand fashion **TokoKu** yang juga menampilkan **katalog harga** produknya.
Satu halaman publik yang di-scroll: Beranda (storefront) → Katalog → About Us. Menu **Katalog** dan **About Us** men-scroll ke section-nya, tanpa login.
Fitur toko (login simulasi, dashboard, pemesanan) tersedia lewat tombol **Masuk** untuk Administrator dan Client.

Stack: React + Vite + React Router + Tailwind, **data hardcoded** (tanpa backend/database/auth).

## Menjalankan

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # hasil build di dist/
npm run deploy    # build + publish dist/ ke branch gh-pages (GitHub Pages)
```

## Akun demo

| Username | Password | Role |
|---|---|---|
| admin | admin123 | Administrator |
| budi | budi123 | Client |
| sinta | sinta123 | Client |

## Halaman

| Route | Area | Isi |
|---|---|---|
| `#/` | Publik | **Satu halaman scroll:** Beranda storefront → Katalog → About Us |
| `#/about` | Publik | Halaman yang sama, otomatis scroll ke section About Us (company profile) |
| `#/katalog` | Publik | Halaman yang sama, otomatis scroll ke section Katalog (`?kategori=` / `?q=` untuk filter). Tombol **Pesan** → login → form pesanan |
| `#/login` | Toko | Login simulasi, loading & error state |
| `#/dashboard` | Toko | Admin: ringkasan, pesanan, produk terlaris, produk. Client: ringkasan, pesanan saya, katalog |
| `#/dashboard?view=statistik` | Toko | Admin: Statistik Penjualan — filter periode, KPI, grafik pendapatan harian, per kategori, status pesanan, produk terlaris |
| `#/form` | Toko | Admin: tambah/edit produk (`?id=`). Client: buat pesanan (`?productId=`) |

Isi company profile ada di `src/data/company.js`. Logo toko: `public/images/logo-mark.png` (lambang yang dipotong dari `Logo TokoKu.jpg`), dipakai lewat komponen `src/components/Logo.jsx`; favicon di `public/favicon.png`. Foto produk ada di `public/images/products/` — sumber & lisensinya di `CREDITS.md`. Data hasil form hanya disimpan di state dan hilang saat refresh — sesuai batasan UTS.

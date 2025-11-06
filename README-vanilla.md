# Lynk Manager Landing Page - Vanilla HTML/CSS/JS Version

Landing page yang telah dikonversi dari React/TypeScript ke HTML, CSS, dan JavaScript biasa.

## File Utama

- `index-vanilla.html` - File HTML utama
- `styles.css` - File CSS dengan semua styling
- `script.js` - File JavaScript untuk interaktivitas

## Fitur yang Telah Dikonversi

✅ Header dengan scroll effect  
✅ Hero section  
✅ Problem section dengan icons  
✅ Solution section dengan feature cards  
✅ Advantages section dengan checklist  
✅ Use cases section  
✅ Demo section  
✅ Pricing section dengan kartu pricing  
✅ FAQ section dengan accordion interaktif  
✅ CTA section  
✅ Footer dengan social links  
✅ Animasi scroll dengan Intersection Observer  
✅ Responsive design  

## Cara Menggunakan

1. Buka file `index-vanilla.html` di browser
2. Atau deploy ke web server (Apache, Nginx, dll)
3. Semua dependency external (fonts, icons) sudah linked via CDN

## Perubahan dari Versi React

- ✅ Tidak memerlukan Node.js atau build process
- ✅ Bisa langsung dibuka di browser
- ✅ Semua functionality React telah dikonversi ke vanilla JS
- ✅ Tailwind classes dikonversi ke CSS custom
- ✅ Icons dari React components dikonversi ke inline SVG
- ✅ State management diganti dengan DOM manipulation
- ✅ Event handlers menggunakan addEventListener
- ✅ Animations menggunakan CSS transitions dan Intersection Observer

## Dependencies

External dependencies yang digunakan:
- Google Fonts (Inter)
- Font Awesome icons
- Swiper.js (jika diperlukan untuk carousel - sudah diinclude tapi belum digunakan)

## Browser Support

Compatible dengan:
- Chrome (modern)
- Firefox (modern)  
- Safari (modern)
- Edge (modern)

Fallback disediakan untuk browser yang tidak support Intersection Observer.

## Struktur File

```
/
├── index-vanilla.html    # Main HTML file
├── styles.css           # Main CSS file  
├── script.js           # Main JavaScript file
└── README-vanilla.md   # This file
```

## Development

Untuk modifikasi:
1. Edit HTML di `index-vanilla.html`
2. Edit styling di `styles.css`
3. Edit interactivity di `script.js`
4. Test di browser langsung (no build step needed)

## Performance

- ✅ Tidak ada React bundle overhead
- ✅ Faster initial load
- ✅ Smaller total file size
- ✅ No JavaScript framework dependency
- ✅ Better SEO (server-side rendered HTML)

---

Converted from React/TypeScript/Vite to vanilla HTML/CSS/JavaScript while maintaining all original functionality and design.
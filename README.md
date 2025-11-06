# Lynk Manager Landing Page

Landing page untuk **Lynk Manager** - tool otomatisasi follow-up pelanggan Lynk.id berbasis Google AppScript yang memungkinkan pengelolaan data pembeli dan broadcast promosi otomatis langsung dari Gmail dan Spreadsheet.

## 🚀 Overview

Lynk Manager adalah solusi otomatis untuk kreator dan penjual digital yang menggunakan platform Lynk.id. Tool ini membantu mengotomatiskan proses pengambilan data pelanggan dari email notifikasi Lynk.id dan memungkinkan broadcast promosi langsung dari Google Spreadsheet.

## ✨ Fitur Utama

### 🎯 Landing Page Features
- **Responsive Design** - Optimized untuk desktop, tablet, dan mobile
- **Animated Sections** - Smooth scroll animations menggunakan Intersection Observer
- **Interactive FAQ** - Accordion-style FAQ section
- **Sticky Header** - Header muncul saat scroll melewati hero section
- **Modern UI/UX** - Clean design dengan Inter font dan konsisten color scheme
- **SEO Optimized** - Meta tags, structured content, dan semantic HTML

### 📱 Product Features (dijelaskan di landing page)
- **Auto Gmail Scraping** - Otomatis mengambil data dari email notifikasi Lynk.id
- **Spreadsheet Integration** - Data tersimpan rapi di Google Spreadsheet
- **Auto Broadcast** - Kirim email promosi massal dengan sekali klik
- **100% Secure** - Data tetap di ekosistem Google, tidak ke server pihak ketiga
- **Free & Open Source** - Kode tersedia gratis dengan opsi Pro version

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom CSS dengan CSS variables dan Flexbox/Grid
- **Vanilla JavaScript** - No framework dependencies
- **Font Awesome** - Icons
- **Google Fonts** - Inter font family
- **Swiper.js** - Ready for carousel functionality (included but not used)

## 📁 File Structure

```
├── index.html          # Main HTML file
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🎨 Design System

### Colors
```css
--brand-dark: #2D3E50    /* Primary dark color */
--brand-green: #2ECC71   /* Primary green/accent color */
--brand-light: #F8F9FA   /* Light background */
--slate-*: various       /* Gray scale colors */
```

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 400, 500, 600, 700
- **Responsive font sizes** dengan media queries

### Components
- **Cards** dengan hover effects dan shadows
- **Buttons** dengan hover animations
- **FAQ Accordion** dengan smooth transitions
- **Animated sections** dengan intersection observer

## 🚀 Installation & Setup

### Quick Start
1. Clone atau download project files
2. Buka `index.html` di browser
3. Atau deploy ke web server (Apache, Nginx, dll)

### Local Development
```bash
# Clone repository
git clone [repository-url]

# Navigate to project
cd Lynk-Manager-Landing-Page

# Open in browser (atau gunakan live server)
open index.html
```

### Deployment
- **Static Hosting**: Vercel, Netlify, GitHub Pages
- **Web Server**: Apache, Nginx
- **CDN**: CloudFlare, AWS CloudFront

## 📱 Browser Support

- ✅ Chrome (60+)
- ✅ Firefox (55+)
- ✅ Safari (12+)
- ✅ Edge (79+)

Fallback disediakan untuk browser yang tidak mendukung Intersection Observer.

## 🎯 Key Sections

### 1. Hero Section
- Main value proposition
- Clear call-to-action
- Responsive typography

### 2. Problem Section
- Identifikasi pain points target audience
- Visual icons untuk setiap masalah
- Responsive card layout

### 3. Solution Section
- Fitur utama dengan iconography
- 3-column grid layout
- Hover effects pada cards

### 4. Advantages Section
- Checklist benefits
- Emphasis pada security dan ownership

### 5. Use Cases
- Target audience examples
- Real-world applications

### 6. Pricing
- Free vs Pro comparison
- Clear pricing structure
- Multiple CTAs

### 7. FAQ
- Interactive accordion
- Common questions addressed
- Smooth animations

## ⚡ Performance Features

- **Fast Loading** - No framework overhead
- **Optimized Images** - SVG icons untuk scalability
- **Minimal Dependencies** - Hanya essential external resources
- **SEO Friendly** - Semantic HTML dan meta tags
- **Accessible** - ARIA labels dan keyboard navigation

## 🔧 Customization

### Mengubah Colors
Edit CSS variables di `styles.css`:
```css
:root {
    --brand-dark: #your-color;
    --brand-green: #your-color;
    /* ... */
}
```

### Menambah Sections
1. Tambah HTML structure di `index.html`
2. Tambah styling di `styles.css`
3. Tambah interactivity di `script.js` jika needed

### Mengubah Content
- Edit text content langsung di `index.html`
- Update meta tags untuk SEO
- Ganti links dan CTAs sesuai kebutuhan

## 🎪 JavaScript Features

### Implemented Functionality
- **Header scroll behavior** - Auto show/hide
- **Intersection Observer** - Section animations
- **FAQ accordion** - Interactive Q&A
- **Smooth scrolling** - Enhanced UX
- **Responsive interactions** - Touch and mouse events

### Key Functions
```javascript
initializeHeader()           // Header scroll behavior
initializeAnimatedSections() // Scroll animations
initializeFAQ()             // FAQ interactions
initializeCurrentYear()     // Dynamic footer year
```

## 📈 SEO Features

- ✅ Meta description dan keywords
- ✅ Semantic HTML structure
- ✅ Open Graph tags ready
- ✅ Schema markup ready
- ✅ Fast loading times
- ✅ Mobile-first responsive design

## 🔄 Future Enhancements

Potential improvements yang bisa ditambahkan:
- [ ] Contact form dengan validation
- [ ] Testimonials/reviews section
- [ ] Blog integration
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Advanced analytics
- [ ] Progressive Web App features

## 📞 Support & Contact

- **Website**: [Faydev](https://faynim.my.id)
- **Instagram**: [@faris.a.y](https://www.instagram.com/faris.a.y)
- **Threads**: [@faris.a.y](https://www.threads.net/@faris.a.y)

## 📄 License

Project ini menggunakan kode open-source. Silakan gunakan dan modifikasi sesuai kebutuhan.

---

**Built with ❤️ by Faydev**

*Professional landing page untuk Lynk Manager - tool otomatisasi yang membantu kreator digital mengelola pelanggan dan broadcast promosi dengan mudah dan aman.*
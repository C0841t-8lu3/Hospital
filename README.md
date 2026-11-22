# Docmed — Hospital & Healthcare Website

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-brightgreen?style=flat-square&logo=github)](https://c0841t-8lu3.github.io/Hospital/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-4.x-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![License: CC BY 3.0](https://img.shields.io/badge/License-CC%20BY%203.0-blue.svg?style=flat-square)](https://creativecommons.org/licenses/by/3.0/)

A responsive, multi-page website designed for hospitals, medical clinics, dental practices, and healthcare professionals. Built with clean, accessible HTML5, responsive CSS3/SCSS, Bootstrap, and lightweight JavaScript.

---

## 🌐 Live Preview

You can explore the live site hosted on GitHub Pages:

👉 **[https://c0841t-8lu3.github.io/Hospital/](https://c0841t-8lu3.github.io/Hospital/)**

---

## ✨ Features

- **Multi-Page Layout**: Dedicated pages for Home, About Us, Medical Departments, Doctor Directory, Individual Doctor Profiles, Appointment Booking, Health Blog, and Contact.
- **Appointment Booking UI**: Clean booking form with department selection and date pickers.
- **Doctor Directory**: Highlight staff physicians, specialists, and bios with direct links to doctor profile pages.
- **Interactive Location Map**: Embedded map on the contact page for patient navigation.
- **100% Static & Fast**: No database or server-side dependencies required. Hosts free on GitHub Pages, Vercel, Netlify, or Cloudflare Pages.
- **Mobile-First & Fully Responsive**: Tested across smartphones, tablets, and desktop displays with smooth navigation menus.
- **SEO & PWA Ready**: Includes `site.webmanifest`, `robots.txt`, `sitemap.xml`, and semantic HTML headings.

---

## 🛠️ Tech Stack

- **Markup & Styling**: HTML5, CSS3, SCSS, [Bootstrap 4](https://getbootstrap.com)
- **Scripting & Interactivity**: Vanilla JavaScript, [jQuery](https://jquery.com)
- **UI Components & Carousels**: Owl Carousel, Slick Slider, Nice Select, Magnific Popup
- **Icons**: FontAwesome 5, Flaticon, Themify Icons

---

## 📂 Project Structure

```text
Hospital/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow for automatic Pages deployment
├── assets/
│   ├── css/                    # Compiled stylesheets and vendor styles
│   ├── fonts/                  # Icon font packages
│   ├── img/                    # Images, doctor portraits, logos, and gallery assets
│   ├── js/                     # Site scripts and vendor plugins
│   └── scss/                   # SCSS source stylesheets
├── about.html                  # About the hospital, history & values
├── appointment.html            # Online appointment booking page
├── blog.html                   # Health news and articles
├── blog_details.html           # Individual article template
├── contact.html                # Contact info, emergency numbers & location map
├── department.html             # Medical departments & specialties
├── doctor.html                 # Doctors directory
├── doctor_details.html         # Individual doctor profile page
├── elements.html               # UI component elements reference
├── index.html                  # Homepage
├── robots.txt                  # Crawl directions for search engines
├── site.webmanifest            # Web app manifest for mobile home screens
├── sitemap.xml                 # Search engine sitemap
├── LICENSE                     # Licensing and attribution details
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/C0841t-8lu3/Hospital.git
cd Hospital
```

### 2. Preview locally

Run any simple static server from the project directory:

```bash
# With Python 3:
python3 -m http.server 8000

# Or with Node.js npx:
npx serve .
```

Open `http://localhost:8000` in your web browser.

---

## ⚙️ Customization

1. **Branding & Logos**: Replace `assets/img/logo/logo.png` and `assets/img/favicon.ico` with your hospital or clinic logo.
2. **Contact & Appointment Forms**: To receive emails directly from the contact or appointment forms without running a custom backend, set your form `action` attribute to [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com).
3. **Colors & Styles**: Modify theme color variables in `assets/scss/_variables.scss` or edit `assets/css/style.css`.

---

## 📄 License & Credits

- Template design originally created by [Colorlib](https://colorlib.com) and licensed under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).
- Enhancements, code cleanups, bug fixes, and workflow setup are open-source under the [MIT License](LICENSE).

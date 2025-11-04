# Personal Portfolio Website 🚀

A modern, responsive portfolio website with smooth scroll animations and interactive effects.

## ✨ Features

- 🎨 **Modern Design** - Clean and professional layout
- 📱 **Fully Responsive** - Works on all devices and screen sizes
- ⚡ **Smooth Animations** - Scroll-triggered animations using Intersection Observer API
- 🎭 **Interactive Elements** - Hover effects, animated skill bars, and counting stats
- 🎯 **SEO Friendly** - Semantic HTML5 structure
- 🌈 **Gradient Backgrounds** - Beautiful animated gradient hero section
- 📊 **Dynamic Content** - Projects showcase, skills display, and contact form

## 🛠️ Built With

- HTML5
- CSS3 (with CSS Grid & Flexbox)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons

## 📁 Project Structure

```
maxim.github.io/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript for interactivity
├── assets/
│   └── images/         # Images folder
│       └── README.md   # Image requirements
└── README.md          # This file
```

## 🚀 Getting Started

### 1. Customize Your Content

**Edit `index.html`:**
- Replace "Your Name" with your actual name
- Update the tagline and description
- Add your projects information
- Update contact details
- Add your social media links

### 2. Add Your Images

Place these images in the `assets/images/` folder:
- `profile.jpg` - Your profile photo
- `project1.jpg`, `project2.jpg`, `project3.jpg` - Project screenshots

### 3. Customize Colors (Optional)

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* ... more colors ... */
}
```

### 4. Deploy to GitHub Pages

1. Make sure your repository is named: `yourusername.github.io`
2. Push your code to GitHub:

```bash
git add .
git commit -m "Initial commit - Portfolio website"
git push origin main
```

3. Go to your repository settings on GitHub
4. Scroll to "GitHub Pages" section
5. Select `main` branch as source
6. Click Save

Your website will be live at: `https://yourusername.github.io`

## 🎨 Sections

1. **Home/Hero** - Eye-catching introduction with animated gradient background
2. **About** - Tell your story with animated statistics
3. **Projects** - Showcase your work with hover effects
4. **Skills** - Display your expertise with animated progress bars
5. **Contact** - Contact form and social media links

## 🎯 Scroll Animations

The website includes several animation types that trigger on scroll:

- **fade-in** - Elements fade in
- **reveal** - Slide up animation
- **reveal-right** - Slide from right
- **reveal-scale** - Scale up animation
- **reveal-bottom** - Slide from bottom

## 📱 Responsive Breakpoints

- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: 480px - 767px
- Small Mobile: below 480px

## 🔧 Optional Features (Commented Out)

The `script.js` file includes optional features you can enable:

1. **Cursor Trail Effect** - Animated mouse trail
2. **Typing Effect** - Typewriter animation for hero subtitle
3. **Scroll Progress Bar** - Visual progress indicator at top

To enable, uncomment the respective sections in `script.js`.

## 💡 Customization Tips

### Adding More Projects

Copy the project card structure in `index.html`:

```html
<div class="project-card reveal-scale">
    <!-- project content -->
</div>
```

### Adding More Skills

Add new skill items in the skills section:

```html
<div class="skill-item">
    <span class="skill-name">Skill Name</span>
    <div class="skill-bar">
        <div class="skill-progress" data-progress="85"></div>
    </div>
</div>
```

### Changing Animation Speed

Edit the transition duration in `styles.css`:

```css
:root {
    --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 🐛 Troubleshooting

**Images not showing?**
- Check file paths are correct
- Ensure images are in `assets/images/` folder
- Verify image file names match those in HTML

**Animations not working?**
- Check browser console for JavaScript errors
- Ensure `script.js` is properly linked
- Clear browser cache

**Mobile menu not opening?**
- Verify JavaScript is enabled
- Check for console errors

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📧 Contact

Update the contact section in `index.html` with your information.

---

**Happy Coding! 💻✨**

Made with ❤️ and lots of ☕

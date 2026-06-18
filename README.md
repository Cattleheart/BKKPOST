# Bangkok Post Subscription Website

Landing page สำหรับ Bangkok Post Epaper Subscription โดยมีหน้า Plan และ Payment แนวคิดในการพัฒนาคือการสร้าง Design System โดยอ้างอิงจาก Prototype ที่ได้รับมา มีการแบ่ง CSS
เป็นสัดส่วนแบบ Modular มีการใช้ Design Token เพื่อให้ง่ายต่อการขยายส่วนโปรเจค และการปรับแต่งในส่วนของการออกแบบในภายหลัง นอกจากนี้ในส่วนของ Layout ยังมีการพัฒนาโดยคำนึงถึง
หลักการ Mobile-first โดยเน้นไปที่การแสดงผลบนหน้าจอมือถือก่อนจากนั้นจึงต่อขยายออกมาเป็นหน้าจอที่ใหญ่ขึ้น

ในส่วนของการวาง Layout จะเป็นการอ้างอิงจาก Prototype ทั้งหมด จะมีเพียงการเพิ่มลูกเล่น Animation หรือการจัดวางในส่วนของ Padding, Margin และ Typography ที่มีการวางให้เหมาะสมกับมาตราฐานหน้าเว็บสมัยใหม่

## Features

- **Responsive Design**: หน้าเว็บมีความ Responsive รองรับหน้าจอหลากหลายขนาดโดย Breakpoint จะอยู่ที่
    - **Mobile**: < 769px width
    - **Desktop**: ≥ 769px width
- **Image Carousel**: สไลด์รูปภาพโดยการใช้ Vanilla JS
- **Subscription Plans**: ออกแบบการ์ดสำหรับแผนบริการต่าง ๆ โดยสไตล์ผ่าน Form
- **Checkout Flow**: รับค่าจาก URL Parameter เพื่อมาแสดงผลยืนยันแผนที่เลือก
- **Mobile Navigation**: เมนูแบบแฮมเบอร์เกอร์สำหรับหน้าจอขนาดเล็ก
- **Modern Styling**: Component-based CSS โดยมีการใช้ design tokens และ utilities

## Project Structure

```
BKKPOST/
├── index.html                 # Main landing page
├── checkout.html              # Checkout/payment page
├── style.css                  # Main stylesheet
├── assets/
│   ├── css/
│   │   ├── base.css          # Base/reset styles
│   │   ├── tokens.css        # Design tokens (colors, spacing, etc.)
│   │   ├── utilities.css     # Utility classes
│   │   └── components/       # Component-specific styles
│   │       ├── _button.css
│   │       ├── _card.css
│   │       ├── _checkout.css
│   │       ├── _content-section.css
│   │       ├── _faq-section.css
│   │       ├── _footer.css
│   │       ├── _header.css
│   │       ├── _hero-section.css
│   │       ├── _pricing-section.css
│   │       ├── _section-title.css
│   │       └── _subscription-section.css
│   ├── img/                  # Image assets
│   │   └── ico/              # Icon/logo files
│   └── js/
│       └── script.js         # JavaScript functionality
└── README.md
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: สำหรับการออกแบบ:
  - CSS Grid และ Flexbox
  - CSS transforms สำหรับลูกเล่นต่าง ๆ
  - Responsive media queries
- **JavaScript**: Vanilla JS:
  - Responsive hamburger menu
  - Image carousel สไลด์ภาพ
  - Event handling การส่งข้อมูล URL Parameter
- **Fonts**: Google Fonts (DM Sans, DM Serif Display, DM Serif Text, DM Mono)

## Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Open `index.html` in your web browser

## CSS Architecture

โปรเจคนี้มีการแบ่ง CSS ออกเป็นสัดส่วนแบบ Modular:

- **base.css**: Global styles
- **tokens.css**: Design system และ tokens (colors, spacing, typography)
- **utilities.css**: คลาสที่มีการใช้บ่อย
- **components/**: ส่วนประกอบต่าง ๆ ในหน้าเว็บเพื่อง่ายต่อการแก้ไขภายหลัง

---

**Last Updated**: June 2026

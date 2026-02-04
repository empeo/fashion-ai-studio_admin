# FABUSSE - Fashion AI Studio 🎨✨

<div align="center">

![FABUSSE Logo](https://via.placeholder.com/200x80/000000/FFFFFF?text=FABUSSE)

**Professional AI Prompt Generator for Fashion Photography**

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)](https://vitejs.dev/)

[Demo](#demo) • [Features](#features) • [Installation](#installation) • [Usage](#usage) • [Documentation](#documentation)

</div>

---

## 📖 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage Guide](#usage-guide)
- [Project Structure](#project-structure)
- [AI Integration](#ai-integration)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)

---

## 🌟 Overview

**FABUSSE** is a professional-grade AI prompt generator designed specifically for fashion photography. It helps photographers, designers, and AI artists create highly detailed, technically accurate prompts for AI image generation platforms like Midjourney, Stable Diffusion, and DALL-E.

### Why FABUSSE?

Creating the perfect AI-generated fashion image requires:
- ✅ Deep understanding of photography terminology
- ✅ Knowledge of fashion styling and composition
- ✅ Technical lighting and camera setup expertise
- ✅ Platform-specific optimization

**FABUSSE automates all of this** through an intuitive, step-by-step interface.

---

## ✨ Features

### 🎯 Core Features

#### 1. **7-Step Studio Workflow**
- **Environment Studio**: Scene type, mood, and atmosphere
- **Model Studio**: Physical features, age, body type, skin tone
- **Outfit Studio**: Garment type, fabric, color palette, cut, details
- **Pose & Attitude Studio**: 50+ professional poses with energy settings
- **Lighting & Camera**: Professional lighting setups and lens configurations
- **Quality & Style**: Realism level, photography style, output quality
- **Output Studio**: Final prompt generation with platform optimization

#### 2. **AI-Powered Image Analysis** 🤖
Upload reference images and get automatic analysis:
- **Environment Analysis**: Lighting, atmosphere, spatial depth
- **Model Analysis**: Facial features, skin texture, body proportions
- **Outfit Analysis**: Garment details, fabric, colors, cut
- **Pose Analysis**: Body posture, movement energy, composition
- **Lighting Analysis**: Light direction, shadow behavior, camera angles

*Powered by Google Gemini AI*

#### 3. **Visual Style Selection** 🖼️
- **160px high-resolution preview images** for all style options
- **192px extra-large images** for pose selection
- **Grayscale inactive states** with smooth color transitions
- **Hover animations** for better user experience
- **Unsplash fallback** for missing images

#### 4. **Platform-Specific Optimization** 🎛️
Automatically adds the right parameters for:
- **Midjourney**: `--style raw --stylize 200 --quality 2 --ar 2:3 --v 6.1`
- **Stable Diffusion**: `masterpiece, best quality, highly detailed, 8k uhd`
- **DALL-E**: `photorealistic, professional photography`

#### 5. **Comprehensive Prompt Generation** 📝
Every detail matters:
- ✅ All selected options included
- ✅ AI image analysis integrated
- ✅ Professional photography terminology
- ✅ Technical accuracy
- ✅ Negative prompts for quality control

#### 6. **Bilingual Support** 🌐
- English (EN)
- Arabic (AR) with RTL support

---

## 🎬 Demo

### Step-by-Step Walkthrough

```
Step 0: Project Setup
└── Project name + Platform selection

Step 1: Environment Studio
├── Scene Type: Studio, Runway, Street, Interior
├── Mood: Clean, Dramatic, Minimal, Luxury
└── Upload reference image (optional)

Step 2: Model Studio
├── Gender: Female, Male, Non-binary
├── Age Range: 18-25, 25-35, 35-45, 45+
├── Body Type: Slim, Athletic, Curvy, Plus Size
├── Skin Tone: Fair, Natural, Olive, Deep
├── Facial Style: Editorial, Commercial, Avant-Garde, Natural
├── Hair Style: Sleek Back, Flowing, Sculptural, Minimal
└── Upload reference image (primary)

Step 3: Outfit Studio
├── Garment Type: Gown, Suit, Streetwear, Avant-Garde
├── Color Palette: Monochrome Black, Pure White, Earth Tones, etc.
├── Fabric: Silk, Leather, Denim, Latex, Wool
├── Texture: Glossy, Matte, Metallic, Textured
├── Cut: Fitted, Oversized, Tailored, Flowing
├── Details: Intricate Drapery, Minimalist, Embellished, Structured
└── Upload reference image (primary)

Step 4: Pose & Attitude Studio
├── Choose from 50+ professional poses
├── Emphasis: Waist, Shoulders, Jawline, Legs, Neck
├── Energy: Calm, Confident, Powerful, Feminine, Dynamic
└── Upload reference image (optional)

Step 5: Lighting & Camera
├── Lighting Type: Soft Box, Hard Rim, High Key, Chiaroscuro
├── Shadow Intensity: Subtle, Moderate, Dramatic
├── Lens: 35mm, 50mm, 85mm, 135mm
├── Shot Type: Full Body, Medium Shot, Close-Up
└── Upload reference image (optional)

Step 6: Quality & Style
├── Realism Level: Hyper-realistic, Cinematic, Raw Photography
├── Style: Editorial, Commercial, Artistic, Documentary
└── Output Quality: 8K UHD, 4K Masterpiece, Ultra HD

Step 7: Output Studio
├── Master Prompt (copy to clipboard)
├── Negative Prompt (copy to clipboard)
└── Export project data (JSON)
```

### Example Output

**Master Prompt:**
```
Environment: professional fashion studio with controlled lighting, 
neutral seamless background, clean minimalist atmosphere,

Model: natural realistic skin texture with visible pores and fine details, 
soft subsurface scattering, healthy skin appearance, no plastic or waxy finish, 
Female model, age 25-35, Athletic body type with natural proportions, 
Natural skin tone with accurate color preservation, 
Editorial facial features with well-defined structure, Flowing hairstyle,

Outfit: Gown, Jewel Tones color palette, Silk fabric, Glossy finish, 
Fitted cut and tailoring, Intricate Drapery, 
high-end construction with precise details,

Pose: in a classic modeling pose, body slightly turned sideways, 
subtle torso twist, soft head tilt, looking off-camera, timeless elegance, 
emphasizing Shoulders, Neck, Confident energy and attitude, 
anatomically accurate posture with natural joint angles,

Lighting & Camera: soft diffused studio lighting with even illumination, 
gentle shadows, Subtle shadow intensity, shot with 85mm lens, 
Full Body framing, professional photography depth of field,

Quality: Hyper-realistic rendering quality, Editorial fashion photography style, 
8K UHD resolution, ultra high resolution, editorial magazine quality, 
cinematic color grading, professional retouching

--style raw --stylize 200 --quality 2 --ar 2:3 --v 6.1
```

**Negative Prompt:**
```
plastic skin, waxy skin, over-smoothed face, artificial skin texture, 
blurry, bad anatomy, distorted proportions, low quality, duplicate limbs, 
extra fingers, missing fingers, deformed hands, text, watermark, 
signature, logo, bad composition, amateur photography, unnatural lighting, 
cartoon, anime, illustration, painting, drawing, 3d render, unrealistic, fake, CGI
```

---

## 🛠️ Tech Stack

### Frontend
- **React 18.x** - UI library
- **TypeScript 5.x** - Type safety
- **Vite 5.x** - Build tool
- **Tailwind CSS 3.x** - Styling

### AI Integration
- **Google Gemini AI** - Image analysis
- **Gemini 3 Flash Preview** - Fast, accurate analysis

### Additional Libraries
- **React Hooks** - State management
- **Font Awesome** - Icons
- **Unsplash API** - Fallback images

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript ESLint** - TypeScript linting

---

## 📦 Installation

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x or **yarn** >= 1.22.x
- **Google Gemini API Key** ([Get one here](https://makersuite.google.com/app/apikey))

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/fabusse.git
cd fabusse
```

### Step 2: Install Dependencies

```bash
npm install
# or
yarn install
```

### Step 3: Configure Environment Variables

Create a `.env` file in the root directory:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### Step 4: Start Development Server

```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173`

---

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GEMINI_API_KEY` | Google Gemini API key for image analysis | Yes* |

*Required only if you want to use the image upload and AI analysis feature.

### Customizing Styles

The project uses Tailwind CSS. You can customize:

1. **Colors**: Edit `tailwind.config.js`
2. **Fonts**: Update `index.css`
3. **Spacing**: Modify Tailwind classes in components

### Adding More Options

To add new style options:

1. Update `types.ts` - Add to `ProjectState` interface
2. Update `translations.ts` - Add translations for EN and AR
3. Update `styleMap.ts` - Add image filename mappings
4. Update `App.tsx` - Add to the appropriate step
5. Add images to `public/styles/[folder]/`

---

## 📚 Usage Guide

### Basic Workflow

1. **Start a New Project**
   - Enter project name (e.g., "VOGUE SUMMER 2024")
   - Select target AI platform

2. **Configure Environment**
   - Choose scene type and mood
   - Optionally upload reference image

3. **Define Model**
   - Select all physical characteristics
   - Upload reference image for accurate representation

4. **Design Outfit**
   - Choose garment type, colors, fabric, etc.
   - Upload reference for exact garment matching

5. **Select Pose**
   - Browse 50+ professional poses
   - Add emphasis areas and energy level
   - Upload custom pose reference

6. **Setup Lighting**
   - Choose lighting type and intensity
   - Select camera lens and shot type

7. **Set Quality**
   - Pick realism level and photography style
   - Choose output resolution

8. **Generate & Export**
   - Copy master prompt to clipboard
   - Copy negative prompt
   - Export project data as JSON

### Pro Tips

#### For Best Results:

1. **Upload Reference Images**
   - Model: Face and body shots work best
   - Outfit: Clear, well-lit garment photos
   - Pose: Similar body position to desired output

2. **Midjourney Optimization**
   - Use "Hyper-realistic" realism
   - Select 85mm or 135mm lens
   - Choose "Soft Box" lighting

3. **Stable Diffusion Tips**
   - Add detail-heavy descriptions
   - Use "Raw Photography" style
   - Include specific fabric textures

4. **DALL-E Recommendations**
   - Keep prompts focused and clear
   - Use "Cinematic" realism
   - Specify exact colors

---

## 📁 Project Structure

```
fabusse/
├── public/
│   └── styles/                    # Style preview images
│       ├── sceneType/            # Studio, Runway, Street, Interior
│       ├── mood/                 # Clean, Dramatic, Minimal, Luxury
│       ├── gender/               # Female, Male, Non-binary
│       ├── skintone/             # Fair, Natural, Olive, Deep
│       ├── hairstyle/            # Sleek Back, Flowing, etc.
│       ├── garment/              # Gown, Suit, Streetwear, etc.
│       ├── fabric/               # Silk, Leather, Denim, etc.
│       ├── lighting/             # Soft Box, Hard Rim, etc.
│       ├── shotType/             # Full Body, Medium Shot, Close-Up
│       ├── realism/              # Hyper-realistic, Cinematic, Raw
│       ├── outputQuality/        # 8K, 4K, Ultra HD
│       ├── pose/                 # 50 pose images
│       ├── emphasis/             # Waist, Shoulders, Jawline, etc.
│       └── energy/               # Calm, Confident, Powerful, etc.
│
├── src/
│   ├── components/
│   │   ├── Layout.tsx            # Main layout with header/footer
│   │   ├── OptionGroup.tsx       # Reusable option selector
│   │   └── ImageUploader.tsx     # Image upload with AI analysis
│   │
│   ├── data/
│   │   └── styleMap.ts           # Maps values to image filenames
│   │
│   ├── utils/
│   │   └── styleImages.ts        # Image path resolver + Unsplash fallback
│   │
│   ├── App.tsx                   # Main application component
│   ├── types.ts                  # TypeScript interfaces
│   ├── translations.ts           # EN/AR translations
│   └── main.tsx                  # App entry point
│
├── .env                          # Environment variables
├── .gitignore                    # Git ignore rules
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── tailwind.config.js            # Tailwind config
├── vite.config.ts                # Vite config
└── README.md                     # This file
```

---

## 🤖 AI Integration

### Google Gemini API

FABUSSE uses Google's Gemini AI for intelligent image analysis.

#### How It Works:

1. **User uploads image**
2. **Image converted to base64**
3. **Sent to Gemini with specialized prompt**:
   - Environment: Analyzes lighting, atmosphere, spatial depth
   - Model: Analyzes facial features, skin texture, proportions
   - Outfit: Analyzes garment type, fabric, colors, details
   - Pose: Analyzes body posture, movement, energy
   - Lighting: Analyzes light direction, shadows, camera angle

4. **Response integrated into final prompt**

#### API Usage Example:

```typescript
const ai = new GoogleGenAI({ apiKey: GEMINI_KEY });

const response = await ai.models.generateContent({
  model: "gemini-3-flash-preview",
  contents: [
    { inlineData: { data: base64Data, mimeType: "image/jpeg" } },
    { text: "Analyze this model's physical features..." }
  ],
});

const analysis = response.text;
```

#### Rate Limits:

- **Free tier**: 60 requests per minute
- **Paid tier**: Higher limits available

#### Cost:

- **Gemini Flash**: Free for reasonable usage
- Check [Google AI Pricing](https://ai.google.dev/pricing) for details

---

## 🎨 Customization

### Adding Custom Poses

1. **Add pose image** to `public/styles/pose/`
   - Filename: `51CustomPose.webp`

2. **Update translations.ts**:
```typescript
poses: [
  // ... existing poses
  {
    id: "pose_51",
    name: "Custom Pose",
    prompt: "your detailed pose description here"
  }
]
```

3. **Update styleMap.ts**:
```typescript
pose: {
  // ... existing mappings
  pose_51: "51CustomPose"
}
```

### Adding New Style Categories

Example: Adding "Makeup" category

1. **Update types.ts**:
```typescript
model: WithImage<{
  // ... existing fields
  makeup: string;  // NEW
}>
```

2. **Update translations.ts**:
```typescript
labels: {
  makeup: "Makeup Style"
},
options: {
  makeup: {
    Natural: "Natural",
    Glamorous: "Glamorous",
    Editorial: "Editorial"
  }
}
```

3. **Update App.tsx** - Add to Step 2:
```typescript
{
  label: t.labels.makeup,
  options: [
    { value: "Natural", label: t.options.makeup.Natural },
    { value: "Glamorous", label: t.options.makeup.Glamorous },
    { value: "Editorial", label: t.options.makeup.Editorial },
  ],
  val: state.model.makeup,
  fn: (v: any) => setState({...state, model: {...state.model, makeup: v}})
}
```

4. **Update generatePrompt()** to include makeup in output

---

## 🐛 Troubleshooting

### Common Issues

#### 1. Images Not Loading

**Problem**: Style preview images show "No Image" placeholder

**Solutions**:
- ✅ Check that images exist in `public/styles/[folder]/`
- ✅ Verify image filenames match `styleMap.ts`
- ✅ Check browser console for 404 errors
- ✅ Ensure internet connection (for Unsplash fallbacks)

#### 2. AI Analysis Failing

**Problem**: "Failed to analyze image" error

**Solutions**:
- ✅ Verify `VITE_GEMINI_API_KEY` in `.env`
- ✅ Check API key is valid at [Google AI Studio](https://makersuite.google.com/)
- ✅ Ensure image is under 30MB
- ✅ Check browser console for detailed error
- ✅ Verify image format (JPEG, PNG, WEBP supported)

#### 3. Prompt Not Generating

**Problem**: Empty or incomplete prompt

**Solutions**:
- ✅ Ensure all required steps are completed
- ✅ Check browser console for errors
- ✅ Verify at least some options are selected
- ✅ Try refreshing the page

#### 4. Build Errors

**Problem**: `npm run build` fails

**Solutions**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for TypeScript errors
npm run type-check

# Build with verbose output
npm run build -- --mode development
```

#### 5. Styling Issues

**Problem**: Tailwind classes not working

**Solutions**:
- ✅ Restart dev server
- ✅ Check `tailwind.config.js` is correct
- ✅ Verify `@tailwind` directives in CSS
- ✅ Clear browser cache

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

Output will be in `dist/` folder.

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### Environment Variables in Production

Don't forget to set `VITE_GEMINI_API_KEY` in your hosting platform:

- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Build & Deploy → Environment
- **GitHub Pages**: Repository Settings → Secrets

---

## 🤝 Contributing

We welcome contributions! Here's how:

### Reporting Bugs

1. Check [existing issues](https://github.com/yourusername/fabusse/issues)
2. Create new issue with:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

### Suggesting Features

1. Open an issue with `[Feature Request]` prefix
2. Describe the feature and its use case
3. Explain why it would be valuable

### Pull Requests

1. Fork the repository
2. Create feature branch: `git checkout -b feature/AmazingFeature`
3. Make your changes
4. Test thoroughly
5. Commit: `git commit -m 'Add AmazingFeature'`
6. Push: `git push origin feature/AmazingFeature`
7. Open Pull Request

### Code Style

- Use TypeScript
- Follow existing code patterns
- Add comments for complex logic
- Use meaningful variable names
- Run `npm run lint` before committing

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2024 FABUSSE Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 Credits

### Technologies

- [React](https://reactjs.org/) - Facebook
- [TypeScript](https://www.typescriptlang.org/) - Microsoft
- [Tailwind CSS](https://tailwindcss.com/) - Tailwind Labs
- [Vite](https://vitejs.dev/) - Evan You
- [Google Gemini AI](https://ai.google.dev/) - Google

### Resources

- [Unsplash](https://unsplash.com/) - Free stock images
- [Font Awesome](https://fontawesome.com/) - Icons
- Fashion photography references from professional sources

### Team

- **Project Lead**: Abanoub Emad Felix
- **UI/UX Design**: Arsany Alkes Rafael - Gerges Emad Felix
- **AI Integration**: George Alkes Rafael - Abanoub Emad Felix
- **React + Vite**: George Alkes Rafael - Abanoub Emad Felix

---

## 🗺️ Roadmap

### Version 2.0 (Planned)

- [ ] Direct Midjourney integration
- [ ] Batch prompt generation
- [ ] Prompt history and favorites
- [ ] Collaboration features
- [ ] Mobile app (iOS/Android)
- [ ] Advanced pose editor
- [ ] Style transfer from uploaded images
- [ ] AI-powered style suggestions

### Version 3.0 (Future)

- [ ] Video prompt generation
- [ ] 3D model integration
- [ ] Community marketplace
- [ ] API for developers
- [ ] Plugin system

---

## ⭐ Show Your Support

If you find FABUSSE useful, please consider:

- ⭐ **Star this repository**
- 🐦 **Share on social media**
- 💬 **Tell your designer friends**
- 🤝 **Contribute to the project**

---

<div align="center">

**Made with 💙 by the FABUSSE Team**

*Designed for Excellence • Built for Professionals*

© 2025 FABUSSE. All rights reserved.

</div>
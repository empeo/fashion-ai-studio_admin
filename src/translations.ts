export const translations = {
  en: {
    options: {
      targetPlatform: {
        Midjourney: "Midjourney",
        "Stable Diffusion": "Stable Diffusion",
        "DALL-E": "DALL-E",
        Other: "Other",
      },
      emphasis: {
        Waist: "Waist",
        Shoulders: "Shoulders",
        Jawline: "Jawline",
        Legs: "Legs",
        Neck: "Neck",
      },
      poseEnergy: {
        Calm: "Calm",
        Confident: "Confident",
        Powerful: "Powerful",
        Feminine: "Feminine",
        Dynamic: "Dynamic",
      },
      sceneType: {
        Studio: "Studio",
        Runway: "Runway",
        Street: "Street",
        Interior: "Interior",
      },
      mood: {
        Clean: "Clean",
        Dramatic: "Dramatic",
        Minimal: "Minimal",
        Luxury: "Luxury",
      },
      gender: {
        Female: "Female",
        Male: "Male",
        "Non-binary": "Non-binary",
      },
      ageRange: {
        "18-25": "18-25 Years",
        "25-35": "25-35 Years",
        "35-45": "35-45 Years",
        "45+": "45+ Years",
      },
      bodyType: {
        Slim: "Slim",
        Athletic: "Athletic",
        Curvy: "Curvy",
        "Plus Size": "Plus Size",
      },
      skinTone: {
        Fair: "Fair",
        Natural: "Natural",
        Olive: "Olive",
        Deep: "Deep",
      },
      facialStyle: {
        Editorial: "Editorial",
        Commercial: "Commercial",
        "Avant-Garde": "Avant-Garde",
        Natural: "Natural",
      },
      hairStyle: {
        "Sleek Back": "Sleek Back",
        Flowing: "Flowing",
        Sculptural: "Sculptural",
        Minimal: "Minimal",
      },
      garmentType: {
        Gown: "Gown",
        Suit: "Suit",
        Streetwear: "Streetwear",
        "Avant-Garde": "Avant-Garde",
      },
      colorPalette: {
        "Monochrome Black": "Monochrome Black",
        "Pure White": "Pure White",
        "Earth Tones": "Earth Tones",
        "Jewel Tones": "Jewel Tones",
        Pastels: "Pastels",
        Neon: "Neon",
      },
      fabric: {
        Silk: "Silk",
        Leather: "Leather",
        Denim: "Denim",
        Latex: "Latex",
        Wool: "Wool",
      },
      texture: {
        Glossy: "Glossy",
        Matte: "Matte",
        Metallic: "Metallic",
        Textured: "Textured",
      },
      cut: {
        Fitted: "Fitted",
        Oversized: "Oversized",
        Tailored: "Tailored",
        Flowing: "Flowing",
      },
      details: {
        "Intricate Drapery": "Intricate Drapery",
        Minimalist: "Minimalist",
        Embellished: "Embellished",
        Structured: "Structured",
      },
      lightingType: {
        "Soft Box": "Soft Box",
        "Hard Rim": "Hard Rim",
        "High Key": "High Key",
        Chiaroscuro: "Chiaroscuro",
      },
      shadowIntensity: {
        Subtle: "Subtle",
        Moderate: "Moderate",
        Dramatic: "Dramatic",
      },
      lens: {
        "35mm": "35mm",
        "50mm": "50mm",
        "85mm": "85mm",
        "135mm": "135mm",
      },
      shotType: {
        "Full Body": "Full Body",
        "Medium Shot": "Medium Shot",
        "Close-Up": "Close-Up",
      },
      realism: {
        "Hyper-realistic": "Hyper-realistic",
        Cinematic: "Cinematic",
        "Raw Photography": "Raw Photography",
      },
      style: {
        Editorial: "Editorial",
        Commercial: "Commercial",
        Artistic: "Artistic",
        Documentary: "Documentary",
      },
      outputQuality: {
        "8K UHD": "8K UHD",
        "4K Masterpiece": "4K Masterpiece",
        "Ultra HD": "Ultra HD",
      },
    },

    title: "FABUSSE",
    subtitle: "Fashion AI Studio",
    progress: "Progress",
    step: "Step",
    of: "of",
    next: "Next Step",
    back: "Back",
    compile: "Compile Prompt",
    newProject: "New Project",
    exportData: "Export Studio Data",
    copyPrompt: "Copy Prompt",
    promptCopied: "Prompt copied to clipboard",
    masterPrompt: "Master Prompt",
    negativePrompt: "Negative Prompt",
    referencedAssets: "Referenced Assets",
    enterStudio: "Enter Studio",
    projectName: "Project Name",
    targetPlatform: "Target Platform",
    startNew: "Start New Project",
    projectPlaceholder: "E.G. VOGUE SUMMER 2024",
    uploadRef: "Upload Reference Image",
    change: "Change",
    remove: "Remove",
    optional: "(Optional)",
    crucial: "(Crucial)",
    primary: "(Primary)",
    choosePose: "Choose Model Pose",
    poseSubtitle: "Define body language, posture, and fashion attitude",
    emphasisLabel: "Emphasis on:",
    energyLabel: "Pose Energy:",

    poses: [
      {
        id: "pose_1",
        name: "Classic Model",
        prompt:
          "in a classic modeling pose, body slightly turned sideways, subtle torso twist, soft head tilt, looking off-camera, timeless elegance",
      },
      {
        id: "pose_2",
        name: "Leaning Forward",
        prompt:
          "leaning slightly forward toward the camera, one leg subtly forward, relaxed natural posture, candid elegance",
      },
      {
        id: "pose_3",
        name: "Power Pose",
        prompt:
          "standing in a power pose, feet shoulder-width apart, hands on hips, strong posture, bold expression",
      },
      {
        id: "pose_4",
        name: "Hip-Hop Vibes",
        prompt:
          "in a hip-hop inspired pose, weight shifted to one hip, dynamic body curve, confident playful attitude",
      },
      {
        id: "pose_5",
        name: "Hands on Hips",
        prompt:
          "posing with hands on hips, defined waistline, confident classic stance",
      },
      {
        id: "pose_6",
        name: "Hands in Pockets",
        prompt:
          "with hands casually placed in pockets, relaxed confident posture, minimalist vibe",
      },
      {
        id: "pose_7",
        name: "Playing with Hair",
        prompt:
          "gently playing with hair, natural feminine movement, beauty-focused posture",
      },
      {
        id: "pose_8",
        name: "Shoulders Forward",
        prompt:
          "with shoulders slightly forward, emphasized collarbones and neckline, intimate editorial mood",
      },
      {
        id: "pose_9",
        name: "Contrapposto",
        prompt:
          "in contrapposto pose, weight shifted to one leg, natural asymmetry, classical elegance",
      },
      {
        id: "pose_10",
        name: "Looking Away",
        prompt:
          "looking away from the camera, thoughtful mysterious expression, cinematic mood",
      },
      {
        id: "pose_11",
        name: "Over the Shoulder",
        prompt:
          "looking back over the shoulder, dramatic neck turn, mysterious gaze, emphasizing back details",
      },
      {
        id: "pose_12",
        name: "Seated Floor",
        prompt:
          "elegantly seated on the floor, legs gracefully folded, sophisticated relaxed posture",
      },
      {
        id: "pose_13",
        name: "Architectural Lean",
        prompt:
          "leaning against a wall, architectural body lines, geometric limb positioning",
      },
      {
        id: "pose_14",
        name: "Walking Dynamic",
        prompt:
          "in a dynamic walking pose, forward motion, natural leg extension, fabric flowing",
      },
      {
        id: "pose_15",
        name: "The S Curve",
        prompt:
          "with a dramatic S-curve body silhouette, highly editorial, emphasizing curves and fluidity",
      },
      {
        id: "pose_16",
        name: "Hand on Chin",
        prompt:
          "with one hand gently touching the chin, contemplative beauty pose, refined expression",
      },
      {
        id: "pose_17",
        name: "Back to Camera",
        prompt:
          "facing away from the camera, showing back silhouette, head turned slightly, strong spinal alignment",
      },
      {
        id: "pose_18",
        name: "Crouching Editorial",
        prompt:
          "in a high-fashion crouching position, knees bent, edgy avant-garde posture",
      },
      {
        id: "pose_19",
        name: "Arms Crossed High",
        prompt:
          "standing with arms crossed high, defensive yet powerful stance, intense gaze",
      },
      {
        id: "pose_20",
        name: "Running Motion",
        prompt:
          "captured mid-run, hair and fabric in motion, energetic and fast-paced editorial",
      },
      {
        id: "pose_21",
        name: "One Knee Up",
        prompt:
          "standing with one leg raised, knee bent, dynamic and playful fashion stance",
      },
      {
        id: "pose_22",
        name: "Lounging Luxury",
        prompt:
          "reclining on a luxury surface, relaxed effortless elegance, high-end lifestyle mood",
      },
      {
        id: "pose_23",
        name: "Tucked Chin",
        prompt:
          "with chin slightly tucked, looking up through lashes, mysterious and soft gaze",
      },
      {
        id: "pose_24",
        name: "Wide Arm Stretch",
        prompt:
          "with arms spread wide, capturing space, open and free editorial movement",
      },
      {
        id: "pose_25",
        name: "Static Statue",
        prompt:
          "standing perfectly still, neutral expression, minimalist high-fashion editorial",
      },
      {
        id: "pose_26",
        name: "Shoulder Shrug",
        prompt:
          "with shoulders slightly raised, playful and casual, effortless cool",
      },
      {
        id: "pose_27",
        name: "Holding Necklace",
        prompt:
          "delicately holding a necklace, jewelry-focused beauty shot, refined hand placement",
      },
      {
        id: "pose_28",
        name: "Dance Flow",
        prompt:
          "captured mid-movement, fluid dance-inspired pose, fabric swirling, graceful energy",
      },
      {
        id: "pose_29",
        name: "Leaning on Chair",
        prompt:
          "leaning casually on a chair back, relaxed editorial vibe, sophisticated ease",
      },
      {
        id: "pose_30",
        name: "Hands on Waist",
        prompt:
          "with both hands on the waist, defined silhouette, confident body language",
      },
      {
        id: "pose_31",
        name: "Side Profile",
        prompt:
          "in strict side profile, showcasing facial silhouette, strong jawline, editorial precision",
      },
      {
        id: "pose_32",
        name: "Elegant Kneeling",
        prompt:
          "kneeling gracefully, upright posture, refined and poised, high-fashion elegance",
      },
      {
        id: "pose_33",
        name: "Wind-Blown",
        prompt:
          "hair and fabric blowing in the wind, dynamic movement, cinematic outdoor energy",
      },
      {
        id: "pose_34",
        name: "Casual Cool",
        prompt:
          "standing casually, one hand in pocket, relaxed modern vibe, effortless style",
      },
      {
        id: "pose_35",
        name: "L-Pose Seated",
        prompt:
          "seated with legs extended in an L-shape, geometric composition, contemporary editorial",
      },
      {
        id: "pose_36",
        name: "Framing Face",
        prompt:
          "hands framing the face, fingers near cheekbones, beauty editorial focus",
      },
      {
        id: "pose_37",
        name: "Limb Extension",
        prompt:
          "with one arm or leg dramatically extended, architectural body lines, avant-garde posture",
      },
      {
        id: "pose_38",
        name: "Natural Laugh",
        prompt:
          "captured mid-laugh, genuine expression, lifestyle editorial authenticity",
      },
      {
        id: "pose_39",
        name: "Mirror Touch",
        prompt:
          "hand touching a mirror surface, reflective composition, artistic editorial mood",
      },
      {
        id: "pose_40",
        name: "Runway Spin",
        prompt:
          "captured mid-spin, fabric flowing outward, runway energy, dynamic rotation",
      },
      {
        id: "pose_41",
        name: "Formal Bow",
        prompt:
          "in a slight bow, respectful elegant posture, high-fashion grace",
      },
      {
        id: "pose_42",
        name: "Crossed Legs Standing",
        prompt:
          "standing with legs crossed at ankles, sophisticated stance, classic elegance",
      },
      {
        id: "pose_43",
        name: "Shadow Play",
        prompt:
          "interacting with dramatic shadows, artistic editorial, mysterious mood",
      },
      {
        id: "pose_44",
        name: "Head Back",
        prompt:
          "head tilted back, neck elongated, dramatic upward gaze, editorial intensity",
      },
      {
        id: "pose_45",
        name: "Self-Embrace",
        prompt:
          "arms wrapped around oneself, introspective mood, emotional editorial depth",
      },
      {
        id: "pose_46",
        name: "Floating Jump",
        prompt:
          "captured mid-jump, weightless moment, hair and fabric suspended, dynamic fashion",
      },
      {
        id: "pose_47",
        name: "One Arm Up",
        prompt:
          "one arm raised elegantly overhead, elongated silhouette, dance-inspired grace",
      },
      {
        id: "pose_48",
        name: "Adjusting Glasses",
        prompt: "fingers adjusting sunglasses, cool accessory-focused posture",
      },
      {
        id: "pose_49",
        name: "Tiptoe Lean",
        prompt: "leaning forward on tiptoes, sense of curiosity and tension",
      },
      {
        id: "pose_50",
        name: "Zen Minimal",
        prompt: "perfectly centered, hands at sides, calm and empty expression",
      },
    ],

    steps: [
      "Welcome",
      "01 — Environment Studio",
      "02 — Model Studio",
      "03 — Outfit Studio",
      "04 — Pose & Attitude Studio",
      "05 — Lighting & Camera",
      "06 — Quality & Style",
      "07 — FABUSSE Output Studio",
    ],

    labels: {
      sceneType: "Scene Type",
      mood: "Mood",
      gender: "Gender",
      ageRange: "Age Range",
      bodyType: "Body Type",
      skinTone: "Skin Tone",
      facialStyle: "Facial Style",
      hairStyle: "Hair Style",
      garment: "Garment",
      cut: "Cut",
      fabric: "Fabric",
      texture: "Texture",
      colorPalette: "Color Palette",
      details: "Details",
      bodyPose: "Body Pose",
      fabricMovement: "Fabric Movement",
      facialExpression: "Facial Expression",
      fashionMood: "Fashion Mood",
      lightingType: "Lighting Type",
      shadowIntensity: "Shadow Intensity",
      lens: "Lens",
      shotType: "Shot Type",
      realism: "Realism",
      style: "Style",
      outputQuality: "Output Quality",
    },
  },
  ar: {
    options: {
      emphasis: {
        Waist: "الخصر",
        Shoulders: "الكتفين",
        Jawline: "الفك",
        Legs: "الساقين",
        Neck: "الرقبة",
      },
      poseEnergy: {
        Calm: "هادئة",
        Confident: "واثقة",
        Powerful: "قوية",
        Feminine: "أنثوية",
        Dynamic: "ديناميكية",
      },
      targetPlatform: {
        Midjourney: "ميدجورني",
        "Stable Diffusion": "ستايبل ديفيوجن",
        "DALL-E": "دال-إي",
        Other: "أخرى",
      },
      sceneType: {
        Studio: "استوديو",
        Runway: "منصة عرض",
        Street: "شارع",
        Interior: "داخلي",
      },
      mood: {
        Clean: "نظيف",
        Dramatic: "درامي",
        Minimal: "مينيمال",
        Luxury: "فاخر",
      },
      gender: {
        Female: "أنثى",
        Male: "ذكر",
        "Non-binary": "غير ثنائي",
      },
      ageRange: {
        "18-25": "18-25 سنة",
        "25-35": "25-35 سنة",
        "35-45": "35-45 سنة",
        "45+": "45+ سنة",
      },
      bodyType: {
        Slim: "نحيف",
        Athletic: "رياضي",
        Curvy: "منحني",
        "Plus Size": "مقاس كبير",
      },
      skinTone: {
        Fair: "فاتح",
        Natural: "طبيعي",
        Olive: "زيتوني",
        Deep: "داكن",
      },
      facialStyle: {
        Editorial: "تحريري",
        Commercial: "تجاري",
        "Avant-Garde": "أفانت غارد",
        Natural: "طبيعي",
      },
      hairStyle: {
        "Sleek Back": "مشدود للخلف",
        Flowing: "منسدل",
        Sculptural: "نحتي",
        Minimal: "بسيط",
      },
      garmentType: {
        Gown: "فستان سهرة",
        Suit: "بدلة",
        Streetwear: "أزياء شارع",
        "Avant-Garde": "أفانت غارد",
      },
      colorPalette: {
        "Monochrome Black": "أسود أحادي",
        "Pure White": "أبيض نقي",
        "Earth Tones": "ألوان ترابية",
        "Jewel Tones": "ألوان المجوهرات",
        Pastels: "باستيل",
        Neon: "نيون",
      },
      fabric: {
        Silk: "حرير",
        Leather: "جلد",
        Denim: "دنيم",
        Latex: "لاتكس",
        Wool: "صوف",
      },
      texture: {
        Glossy: "لامع",
        Matte: "مطفي",
        Metallic: "معدني",
        Textured: "محبب",
      },
      cut: {
        Fitted: "ملائم",
        Oversized: "واسع",
        Tailored: "مفصل",
        Flowing: "منسدل",
      },
      details: {
        "Intricate Drapery": "طيات معقدة",
        Minimalist: "بسيط",
        Embellished: "مزخرف",
        Structured: "منظم",
      },
      lightingType: {
        "Soft Box": "سوفت بوكس",
        "Hard Rim": "حواف قوية",
        "High Key": "هاي كي",
        Chiaroscuro: "تباين قوي",
      },
      shadowIntensity: {
        Subtle: "خفيف",
        Moderate: "متوسط",
        Dramatic: "درامي",
      },
      lens: {
        "35mm": "35 ملم",
        "50mm": "50 ملم",
        "85mm": "85 ملم",
        "135mm": "135 ملم",
      },
      shotType: {
        "Full Body": "جسم كامل",
        "Medium Shot": "لقطة متوسطة",
        "Close-Up": "كلوز أب",
      },
      realism: {
        "Hyper-realistic": "واقعي جدًا",
        Cinematic: "سينمائي",
        "Raw Photography": "تصوير خام",
      },
      style: {
        Editorial: "تحريري",
        Commercial: "تجاري",
        Artistic: "فني",
        Documentary: "وثائقي",
      },
      outputQuality: {
        "8K UHD": "8K UHD",
        "4K Masterpiece": "تحفة 4K",
        "Ultra HD": "ألترا HD",
      },
    },
    title: "فابوس",
    subtitle: "استوديو أزياء الذكاء الاصطناعي",
    progress: "التقدم",
    step: "الخطوة",
    of: "من",
    next: "الخطوة التالية",
    back: "رجوع",
    compile: "تجميع البرومبت",
    newProject: "مشروع جديد",
    exportData: "تصدير بيانات الاستوديو",
    copyPrompt: "نسخ النص",
    promptCopied: "تم نسخ النص بنجاح",
    masterPrompt: "النص النهائي (برومبت)",
    negativePrompt: "النص السلبي (Negative)",
    referencedAssets: "الصور المرجعية",
    enterStudio: "دخول الاستوديو",
    projectName: "اسم المشروع",
    targetPlatform: "منصة الذكاء الاصطناعي",
    startNew: "بدء مشروع جديد",
    projectPlaceholder: "مثال: فوغ صيف 2024",
    uploadRef: "رفع صورة مرجعية",
    change: "تغيير",
    remove: "إزالة",
    optional: "(اختياري)",
    crucial: "(هام)",
    primary: "(أساسي)",
    choosePose: "اختر وضعية الموديل",
    poseSubtitle: "حدد لغة الجسد، الوقفة، والمزاج العام للموضة",
    emphasisLabel: "التركيز على:",
    energyLabel: "طاقة الوضعية:",

    poses: [
      { id: "pose_1", name: "كلاسيك موديل", prompt: "" },
      { id: "pose_2", name: "انحناء للأمام", prompt: "" },
      { id: "pose_3", name: "وضعية القوة", prompt: "" },
      { id: "pose_4", name: "هيب هوب", prompt: "" },
      { id: "pose_5", name: "يدين على الوركين", prompt: "" },
      { id: "pose_6", name: "يدان في الجيوب", prompt: "" },
      { id: "pose_7", name: "اللعب بالشعر", prompt: "" },
      { id: "pose_8", name: "الكتفان للأمام", prompt: "" },
      { id: "pose_9", name: "كونترابوستو", prompt: "" },
      { id: "pose_10", name: "النظر بعيداً", prompt: "" },
      { id: "pose_11", name: "فوق الكتف", prompt: "" },
      { id: "pose_12", name: "جلوس على الأرض", prompt: "" },
      { id: "pose_13", name: "ميل معماري", prompt: "" },
      { id: "pose_14", name: "مشي ديناميكي", prompt: "" },
      { id: "pose_15", name: "انحناء S", prompt: "" },
      { id: "pose_16", name: "يد على الذقن", prompt: "" },
      { id: "pose_17", name: "الظهر للكاميرا", prompt: "" },
      { id: "pose_18", name: "قرفصاء تحريرية", prompt: "" },
      { id: "pose_19", name: "أذرع متقاطعة", prompt: "" },
      { id: "pose_20", name: "حركة الجري", prompt: "" },
      { id: "pose_21", name: "ركبة مرفوعة", prompt: "" },
      { id: "pose_22", name: "استلقاء فاخر", prompt: "" },
      { id: "pose_23", name: "ذقن مدسوس", prompt: "" },
      { id: "pose_24", name: "أذرع ممتدة", prompt: "" },
      { id: "pose_25", name: "تمثال ساكن", prompt: "" },
      { id: "pose_26", name: "هز الكتف", prompt: "" },
      { id: "pose_27", name: "إمساك القلادة", prompt: "" },
      { id: "pose_28", name: "سيولة الرقص", prompt: "" },
      { id: "pose_29", name: "ميل على كرسي", prompt: "" },
      { id: "pose_30", name: "يدان على الخصر", prompt: "" },
      { id: "pose_31", name: "بروفايل جانبي", prompt: "" },
      { id: "pose_32", name: "ركوع أنيق", prompt: "" },
      { id: "pose_33", name: "عصف الرياح", prompt: "" },
      { id: "pose_34", name: "شياكة عفوية", prompt: "" },
      { id: "pose_35", name: "وضعية L", prompt: "" },
      { id: "pose_36", name: "تأطير الوجه", prompt: "" },
      { id: "pose_37", name: "تمدد أطراف", prompt: "" },
      { id: "pose_38", name: "ضحك طبيعي", prompt: "" },
      { id: "pose_39", name: "لمس المرآة", prompt: "" },
      { id: "pose_40", name: "دوران المنصة", prompt: "" },
      { id: "pose_41", name: "الانحناء الرسمي", prompt: "" },
      { id: "pose_42", name: "تقاطع أرجل", prompt: "" },
      { id: "pose_43", name: "لعب الظلال", prompt: "" },
      { id: "pose_44", name: "رأس للخلف", prompt: "" },
      { id: "pose_45", name: "حضن النفس", prompt: "" },
      { id: "pose_46", name: "قفزة طافية", prompt: "" },
      { id: "pose_47", name: "يد واحدة للأعلى", prompt: "" },
      { id: "pose_48", name: "تعديل النظارة", prompt: "" },
      { id: "pose_49", name: "ميل أطراف", prompt: "" },
      { id: "pose_50", name: "بساطة هادئة", prompt: "" },
    ],

    steps: [
      "مرحباً",
      "01 — استوديو البيئة",
      "02 — استوديو الموديل",
      "03 — استوديو الملابس",
      "04 — استوديو الوضعية والموقف",
      "05 — الإضاءة والكاميرا",
      "06 — الجودة والأسلوب",
      "07 — مخرجات فابوس",
    ],

    labels: {
      sceneType: "نوع المشهد",
      mood: "المزاج العام",
      gender: "الجنس",
      ageRange: "الفئة العمرية",
      bodyType: "نوع الجسم",
      skinTone: "لون البشرة",
      facialStyle: "أسلوب الوجه",
      hairStyle: "تصفيفة الشعر",
      garment: "نوع القطعة",
      cut: "القصة",
      fabric: "القماش",
      texture: "الملمس",
      colorPalette: "لوحة الألوان",
      details: "التفاصيل",
      bodyPose: "وضعية الجسم",
      fabricMovement: "حركة القماش",
      facialExpression: "تعبير الوجه",
      fashionMood: "مزاج الموضة",
      lightingType: "نوع الإضاءة",
      shadowIntensity: "شدة الظلال",
      lens: "العدسة",
      shotType: "نوع اللقطة",
      realism: "مستوى الواقعية",
      style: "الأسلوب",
      outputQuality: "جودة المخرجات",
    },
  },
};

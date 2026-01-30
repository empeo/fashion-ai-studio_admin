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
        name: "Three-Quarter Pose",
        prompt:
          "in a three-quarter pose, body angled at 45 degrees, showcasing dimension and depth, balanced composition",
      },
      {
        id: "pose_12",
        name: "Crossed Legs Pose",
        prompt:
          "standing with legs crossed at ankles, sophisticated stance, classic elegance and poise",
      },
      {
        id: "pose_13",
        name: "S-Curve Pose",
        prompt:
          "with a dramatic S-curve body silhouette, highly editorial, emphasizing curves and fluidity",
      },
      {
        id: "pose_14",
        name: "Hand Near Mouth Pose",
        prompt:
          "with hand delicately positioned near mouth, contemplative beauty shot, refined sensual gesture",
      },
      {
        id: "pose_15",
        name: "Sitting on the Floor Pose",
        prompt:
          "elegantly seated on the floor, legs gracefully folded, sophisticated relaxed posture",
      },
      {
        id: "pose_16",
        name: "Motion Pose",
        prompt:
          "captured in dynamic motion, fabric and hair flowing, energetic movement, kinetic editorial energy",
      },
      {
        id: "pose_17",
        name: "Defined Jawline Pose",
        prompt:
          "head positioned to emphasize jawline, chin slightly lifted, strong facial definition, editorial precision",
      },
      {
        id: "pose_18",
        name: "Arched Back Pose",
        prompt:
          "with back gracefully arched, spine elongated, dramatic body curve, avant-garde posture",
      },
      {
        id: "pose_19",
        name: "Hand on Shoulder Pose",
        prompt:
          "with one hand resting on opposite shoulder, elegant arm positioning, refined beauty shot",
      },
      {
        id: "pose_20",
        name: "Head Tilt Pose",
        prompt:
          "head tilted to one side, soft neck angle, gentle contemplative expression, natural charm",
      },
      {
        id: "pose_21",
        name: "Walking Pose",
        prompt:
          "in a dynamic walking pose, forward motion, natural leg extension, fabric flowing with movement",
      },
      {
        id: "pose_22",
        name: "Arms Raised Pose",
        prompt:
          "with arms raised elegantly overhead, elongated silhouette, dance-inspired grace and freedom",
      },
      {
        id: "pose_23",
        name: "Environmental Interaction Pose",
        prompt:
          "interacting naturally with surroundings, leaning on props, authentic lifestyle editorial mood",
      },
      {
        id: "pose_24",
        name: "Face Touch Pose",
        prompt:
          "fingers delicately touching face, hand near cheekbone or chin, beauty-focused intimate gesture",
      },
      {
        id: "pose_25",
        name: "Reclining Pose",
        prompt:
          "reclining on a surface, relaxed elongated body position, luxurious editorial elegance",
      },
      {
        id: "pose_26",
        name: "Casual Sitting Pose",
        prompt:
          "sitting casually, relaxed natural posture, effortless lifestyle editorial vibe",
      },
      {
        id: "pose_27",
        name: "Back Pose",
        prompt:
          "facing away from camera, showing back silhouette, head may turn slightly, emphasizing spinal alignment and garment back details",
      },
      {
        id: "pose_28",
        name: "Leaning Against the Wall Pose",
        prompt:
          "leaning casually against a wall, architectural body lines, relaxed confident attitude",
      },
      {
        id: "pose_29",
        name: "Hands Clasped in Front Pose",
        prompt:
          "with hands clasped together in front of body, composed elegant stance, refined posture",
      },
      {
        id: "pose_30",
        name: "One Leg Forward Pose",
        prompt:
          "standing with one leg stepped forward, dynamic weight distribution, editorial movement suggestion",
      },
      {
        id: "pose_31",
        name: "Chin Down Eyes Up Pose",
        prompt:
          "chin tucked down while eyes look up through lashes, mysterious soft gaze, intimate beauty shot",
      },
      {
        id: "pose_32",
        name: "Elbow on Knee Pose",
        prompt:
          "sitting with elbow resting on knee, thoughtful casual posture, editorial ease",
      },
      {
        id: "pose_33",
        name: "Knees Up Sitting Pose",
        prompt:
          "sitting with knees drawn up, arms wrapped around legs, intimate relaxed editorial mood",
      },
      {
        id: "pose_34",
        name: "One Leg Bent Sitting Pose",
        prompt:
          "sitting with one leg bent and one extended, asymmetrical composition, natural elegance",
      },
      {
        id: "pose_35",
        name: "Couch Sitting Pose",
        prompt:
          "sitting on couch or sofa, relaxed luxury lifestyle pose, sophisticated ease",
      },
      {
        id: "pose_36",
        name: "Elegant Reclining Pose",
        prompt:
          "reclining with refined posture, elongated body lines, high-fashion luxury mood",
      },
      {
        id: "pose_37",
        name: "Back View with Arms Behind Pose",
        prompt:
          "back to camera with arms positioned behind body, elegant back details, mysterious silhouette",
      },
      {
        id: "pose_38",
        name: "Mirror Pose",
        prompt:
          "interacting with mirror, hand touching reflective surface, artistic editorial composition",
      },
      {
        id: "pose_39",
        name: "Legs Apart Sitting Pose",
        prompt:
          "sitting with legs positioned apart, strong confident seated posture, editorial power",
      },
      {
        id: "pose_40",
        name: "Stair Sitting Pose",
        prompt:
          "sitting on stairs or steps, casual architectural setting, relaxed editorial vibe",
      },
      {
        id: "pose_41",
        name: "Arms Crossed Pose",
        prompt:
          "standing with arms crossed, confident defensive stance, strong body language",
      },
      {
        id: "pose_42",
        name: "Stretching Pose",
        prompt:
          "body in stretching position, arms or legs extended, dynamic athletic editorial energy",
      },
      {
        id: "pose_43",
        name: "Elegant Hand Pose",
        prompt:
          "hands positioned elegantly, refined finger placement, beauty and jewelry-focused shot",
      },
      {
        id: "pose_44",
        name: "Profile Pose",
        prompt:
          "in strict side profile, showcasing facial silhouette, strong jawline and nose line, editorial precision",
      },
      {
        id: "pose_45",
        name: "Elbow Lean Pose",
        prompt:
          "leaning on elbow, relaxed editorial posture, casual sophisticated ease",
      },
      {
        id: "pose_46",
        name: "Leg Up Against the Wall Pose",
        prompt:
          "with one leg raised against wall, dynamic playful pose, editorial energy and movement",
      },
      {
        id: "pose_47",
        name: "Angled Shoulder Pose",
        prompt:
          "shoulders positioned at angle, one shoulder forward, dynamic composition and dimension",
      },
      {
        id: "pose_48",
        name: "Hand on Outfit Pose",
        prompt:
          "hand touching or adjusting outfit, fashion detail focus, refined gesture",
      },
      {
        id: "pose_49",
        name: "Over-the-Shoulder Look Pose",
        prompt:
          "looking back over shoulder, dramatic neck turn, mysterious gaze, emphasizing back and shoulder details",
      },
      {
        id: "pose_50",
        name: "Relaxed Arm Pose",
        prompt:
          "arms hanging naturally and relaxed, effortless natural posture, minimalist editorial ease",
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
      { id: "pose_11", name: "ثلاثة أرباع", prompt: "" },
      { id: "pose_12", name: "ساقين متقاطعين", prompt: "" },
      { id: "pose_13", name: "منحنى S", prompt: "" },
      { id: "pose_14", name: "يد قرب الفم", prompt: "" },
      { id: "pose_15", name: "جلوس أرضي", prompt: "" },
      { id: "pose_16", name: "حركة ديناميكية", prompt: "" },
      { id: "pose_17", name: "خط فك محدد", prompt: "" },
      { id: "pose_18", name: "ظهر مقوس", prompt: "" },
      { id: "pose_19", name: "يد على الكتف", prompt: "" },
      { id: "pose_20", name: "إمالة الرأس", prompt: "" },
      { id: "pose_21", name: "مشي", prompt: "" },
      { id: "pose_22", name: "ذراعين مرفوعين", prompt: "" },
      { id: "pose_23", name: "تفاعل بيئي", prompt: "" },
      { id: "pose_24", name: "لمس الوجه", prompt: "" },
      { id: "pose_25", name: "استلقاء", prompt: "" },
      { id: "pose_26", name: "جلوس عفوي", prompt: "" },
      { id: "pose_27", name: "الظهر", prompt: "" },
      { id: "pose_28", name: "ميل على الحائط", prompt: "" },
      { id: "pose_29", name: "يدين مشبوكين", prompt: "" },
      { id: "pose_30", name: "ساق للأمام", prompt: "" },
      { id: "pose_31", name: "ذقن لأسفل عيون لأعلى", prompt: "" },
      { id: "pose_32", name: "كوع على ركبة", prompt: "" },
      { id: "pose_33", name: "ركب مرفوعة", prompt: "" },
      { id: "pose_34", name: "ساق واحدة مثنية", prompt: "" },
      { id: "pose_35", name: "جلوس كنبة", prompt: "" },
      { id: "pose_36", name: "استلقاء أنيق", prompt: "" },
      { id: "pose_37", name: "ظهر مع ذراعين خلف", prompt: "" },
      { id: "pose_38", name: "مرآة", prompt: "" },
      { id: "pose_39", name: "ساقين متباعدين", prompt: "" },
      { id: "pose_40", name: "جلوس على سلالم", prompt: "" },
      { id: "pose_41", name: "ذراعين متقاطعين", prompt: "" },
      { id: "pose_42", name: "تمدد", prompt: "" },
      { id: "pose_43", name: "يد أنيقة", prompt: "" },
      { id: "pose_44", name: "بروفايل جانبي", prompt: "" },
      { id: "pose_45", name: "ميل على كوع", prompt: "" },
      { id: "pose_46", name: "ساق على الحائط", prompt: "" },
      { id: "pose_47", name: "كتف بزاوية", prompt: "" },
      { id: "pose_48", name: "يد على الزي", prompt: "" },
      { id: "pose_49", name: "نظرة فوق الكتف", prompt: "" },
      { id: "pose_50", name: "ذراع مسترخي", prompt: "" },
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

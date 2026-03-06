export interface ProductVariant {
  label: string;
  weight: string;
  price: number;
  originalPrice?: number;
}

export interface Recipe {
  title: string;
  description: string;
  prepTime: string;
  servings: number;
  ingredients: string[];
  steps: string[];
}

export interface ProductDetail {
  id: string;
  name: string;
  tagline: string;
  description: string;
  images: string[];
  category: "Mango" | "Rice";
  rating: number;
  reviewCount: number;
  variants: ProductVariant[];
  healthBenefits: { icon: string; title: string; desc: string }[];
  organicPoints: { title: string; desc: string }[];
  recipe: Recipe;
  similarProductIds: string[];
}

export const PRODUCTS: Record<string, ProductDetail> = {
  "1": {
    id: "1",
    name: "Alphonso Premium Mango",
    tagline: "The King of Mangoes. Naturally Ripened.",
    description:
      "Grown in the volcanic soils of Ratnagiri by fourth-generation farmers, our GI-tagged Alphonso mangoes are the pinnacle of the mango world. Each fruit is allowed to ripen naturally on the tree, developing unparalleled sweetness, a silky fibre-free pulp, and a rich saffron hue. No Calcium Carbide. No shortcuts. Just pure summer, delivered to your door.",
    images: [
      "/images/mango-1.png",
      "/images/mango-2.png",
      "/images/coming-soon-mango.png",
      "/images/farm-2.png",
    ],
    category: "Mango",
    rating: 4.9,
    reviewCount: 2341,
    variants: [
      { label: "Small Box", weight: "3 kg (10-12 pcs)", price: 950, originalPrice: 1100 },
      { label: "Standard Box", weight: "6 kg (20-24 pcs)", price: 1500, originalPrice: 1800 },
      { label: "Family Box", weight: "12 kg (40-46 pcs)", price: 2800, originalPrice: 3200 },
    ],
    healthBenefits: [
      { icon: "🛡️", title: "Immunity Booster", desc: "Rich in Vitamin C — one mango provides 67% of your daily recommended intake." },
      { icon: "👁️", title: "Eye Health", desc: "High Vitamin A and lutein content supports healthy vision and prevents macular degeneration." },
      { icon: "🫀", title: "Heart Friendly", desc: "Contains mangiferin, a powerful antioxidant that protects heart cells and reduces inflammation." },
      { icon: "🦠", title: "Gut Health", desc: "Rich in digestive enzymes like amylase that help break down carbohydrates effectively." },
    ],
    organicPoints: [
      { title: "No Artificial Ripeners", desc: "Ripened naturally using the traditional hay-box method. Strictly zero Calcium Carbide." },
      { title: "GI Certified (Ratnagiri)", desc: "Grown exclusively in Ratnagiri, authenticated by the Geographical Indication registry." },
      { title: "Zero Chemical Pesticides", desc: "Our orchards follow strict biodynamic practices. External input is purely neem-based." },
      { title: "Hand-harvested at Peak Ripeness", desc: "Picked by experienced hands at the optimal maturity stage to lock in maximum nutrients." },
    ],
    recipe: {
      title: "Alphonso Mango Milkshake",
      description: "A rich, creamy milkshake that lets the pure sweetness of Alphonso do all the heavy lifting. No added sugar needed.",
      prepTime: "10 minutes",
      servings: 2,
      ingredients: [
        "2 ripe Alphonso mangoes (peeled & cubed)",
        "1.5 cups chilled whole milk",
        "½ cup thick yoghurt (optional for creaminess)",
        "4-5 saffron strands soaked in 1 tbsp warm milk",
        "Ice cubes as needed",
        "Pinch of cardamom powder",
      ],
      steps: [
        "Peel, stone, and roughly cube the Alphonso mangoes into a blender jar.",
        "Add the chilled milk and yoghurt to the blender.",
        "Pour in the saffron-infused milk and add the cardamom powder.",
        "Blend on high speed for 45 seconds until completely smooth and frothy.",
        "Taste and adjust — genuine Alphonso needs no added sugar.",
        "Pour over ice cubes into tall glasses. Garnish with a saffron strand and serve immediately.",
      ],
    },
    similarProductIds: ["2", "3", "4"],
  },
  "2": {
    id: "2",
    name: "Kesar Organic Sweet",
    tagline: "The Saffron Queen — Gujarat's Heritage.",
    description:
      "Cultivated in the semi-arid soils of Gir, Gujarat, Kesar mangoes earn their name from their brilliant saffron-orange pulp. A distinct floral aroma, naturally high sugar content, and a velvety texture make this the go-to choice for aamras. Certified organic and naturally ripened — no post-harvest chemical treatments, ever.",
    images: ["/images/mango-2.png", "/images/mango-1.png", "/images/farm-1.png", "/images/farm-2.png"],
    category: "Mango",
    rating: 4.7,
    reviewCount: 1823,
    variants: [
      { label: "Tasting Box", weight: "2 kg (6-8 pcs)", price: 750 },
      { label: "Standard Box", weight: "5 kg (16-20 pcs)", price: 1200, originalPrice: 1400 },
    ],
    healthBenefits: [
      { icon: "🌿", title: "Anti-inflammatory", desc: "Contains quercetin and kaempferol which naturally suppress inflammation at the cellular level." },
      { icon: "🧠", title: "Brain Health", desc: "Vitamin B6 content supports neurotransmitter synthesis, aiding mood and memory." },
      { icon: "⚡", title: "Natural Energy", desc: "Natural fructose provides a clean, instant energy boost without the crash of refined sugar." },
      { icon: "💧", title: "Hydration", desc: "82% water content with electrolytes helps keep you hydrated through summer." },
    ],
    organicPoints: [
      { title: "Gir Forest Organic Farm", desc: "Grown adjacent to Gir, surrounded by a protected forest ecosystem — naturally pest-free." },
      { title: "Zero Synthetic Fertilisers", desc: "Nourished exclusively with composted cow dung, green manure, and vermicompost." },
      { title: "Ethylene-Free Packaging", desc: "Packed using traditional paddy hay to induce slow, even ripening during transit." },
      { title: "Annual Soil Certification", desc: "Soil health independently verified for pesticide residue annually by NABCB accredited labs." },
    ],
    recipe: {
      title: "Kesar Aamras",
      description: "The quintessential summer dessert of Gujarat — pure, uncluttered mango pulp served with hot puris.",
      prepTime: "15 minutes",
      servings: 4,
      ingredients: [
        "6 ripe Kesar mangoes",
        "3 tablespoons warm milk",
        "½ teaspoon cardamom powder",
        "Pinch of saffron strands",
        "Sugar to taste (usually not needed)",
      ],
      steps: [
        "Wash the mangoes and gently massage them to loosen the pulp from the seed.",
        "Squeeze out all the pulp into a large bowl through your hands.",
        "Alternatively, peel and stone the mangoes and blend briefly.",
        "Soak saffron in warm milk for 5 minutes. Stir into the pulp.",
        "Add cardamom powder and mix gently. Taste before adding any sugar.",
        "Chill for 30 minutes and serve cold alongside fresh puris.",
      ],
    },
    similarProductIds: ["1", "3", "4"],
  },
  "3": {
    id: "3",
    name: "Black Kavuni Rice",
    tagline: "The Antioxidant Powerhouse of Tamil Heritage.",
    description:
      "A sacred rice revered for centuries in South Indian temple kitchens, Black Kavuni is among the most antioxidant-rich foods on earth. Its deep purple-black colour comes from anthocyanins, the same pigment found in blueberries. Grown without a single chemical input on our certified organic paddies in the Cauvery delta, it offers a nutty aroma and a delightful chewiness that white rice simply cannot match.",
    images: ["/images/rice-1.png", "/images/rice-2.png", "/images/farm-1.png", "/images/farm-2.png"],
    category: "Rice",
    rating: 4.8,
    reviewCount: 987,
    variants: [
      { label: "Trial Pack", weight: "500 g", price: 250 },
      { label: "Standard Pack", weight: "1 kg", price: 450, originalPrice: 500 },
      { label: "Family Pack", weight: "3 kg", price: 1200, originalPrice: 1400 },
    ],
    healthBenefits: [
      { icon: "🫐", title: "Antioxidant Rich", desc: "Anthocyanin content is 6x higher than that of blueberries — combats oxidative stress powerfully." },
      { icon: "📉", title: "Diabetic Friendly", desc: "Low Glycemic Index (42 GI) — dramatically slower glucose release than white rice (GI 72)." },
      { icon: "💪", title: "Iron-Rich", desc: "Naturally chelated iron helps address iron-deficiency anaemia, especially in women." },
      { icon: "🧬", title: "Anti-Cancer Properties", desc: "Studies show anthocyanins actively inhibit the spread of cancer cells in lab environments." },
    ],
    organicPoints: [
      { title: "Heirloom Seed Variety", desc: "We cultivate the same seed strain documented in 3rd century Tamil Sangam literature." },
      { title: "Flood-Irrigated Naturally", desc: "Paddies are fed by seasonal Cauvery floodwaters — zero groundwater extraction." },
      { title: "100% Unpolished", desc: "The bran layer is retained, preserving all of its fibre, minerals, and antioxidant pigment." },
      { title: "Certified Organic (NPOP)", desc: "Independently certified under India's National Programme for Organic Production." },
    ],
    recipe: {
      title: "Black Kavuni Rice Pudding (Kavuni Arisi Halwa)",
      description: "A famous temple dessert from Tamil Nadu — rich, indulgent, and good for you. The ultimate guilt-free treat.",
      prepTime: "Soak overnight + 30 mins cooking",
      servings: 6,
      ingredients: [
        "1 cup Black Kavuni Rice (soaked overnight)",
        "2 cups thick coconut milk",
        "¾ cup jaggery (adjust to taste)",
        "2 tablespoons coconut oil or ghee",
        "1 teaspoon cardamom powder",
        "2 tablespoons cashews and raisins",
      ],
      steps: [
        "Drain the soaked Kavuni rice and pressure cook with 2.5 cups water for 4-5 whistles until soft.",
        "In a heavy-bottomed pan, combine the cooked rice with coconut milk over medium heat.",
        "Add dissolved jaggery and stir continuously to prevent sticking.",
        "Cook for 15–20 minutes until the mixture thickens and leaves the sides of the pan.",
        "Stir in cardamom and half the coconut oil for gloss.",
        "In a small pan, fry cashews and raisins in remaining oil. Pour over the halwa. Serve warm.",
      ],
    },
    similarProductIds: ["4", "1", "2"],
  },
  "4": {
    id: "4",
    name: "Sona Masuri Heritage",
    tagline: "Lightweight. Aromatic. Unpolished Perfection.",
    description:
      "Sona Masuri is the everyday staple of South Indian households — now brought to you in its unpolished, nutrient-rich form. Our single-estate variety is grown using traditional transplantation methods in Andhra Pradesh's Krishna district. Lower in calories, fluffier in texture, and vastly more nutritious than polished counterparts, this is the rice your grandmother knew.",
    images: ["/images/rice-2.png", "/images/rice-1.png", "/images/farm-1.png", "/images/farm-2.png"],
    category: "Rice",
    rating: 4.6,
    reviewCount: 1456,
    variants: [
      { label: "Small Bag", weight: "2 kg", price: 250 },
      { label: "Standard Bag", weight: "5 kg", price: 350, originalPrice: 420 },
      { label: "Bulk Bag", weight: "10 kg", price: 650, originalPrice: 750 },
    ],
    healthBenefits: [
      { icon: "🍃", title: "Light & Easily Digestible", desc: "Lower starch content than Basmati — significantly easier on the digestive system." },
      { icon: "🌾", title: "High Fibre (Unpolished)", desc: "Bran intact means 3x more fibre than polished rice, supporting long-term gut health." },
      { icon: "🦴", title: "Bone Strength", desc: "Contains natural magnesium and phosphorus critical for bone density maintenance." },
      { icon: "⚖️", title: "Weight Management", desc: "Naturally lower in calories and glycaemic load compared to other common rice varieties." },
    ],
    organicPoints: [
      { title: "Single-Estate Sourced", desc: "Every grain originates from a single certified farm in Krishna district — full traceability." },
      { title: "Traditional Transplantation", desc: "Seeds are hand-transplanted as saplings into flooded fields — the old-school way." },
      { title: "Free from Enrichment", desc: "We never add artificial vitamins, calcium phosphate, or other polish-era supplements." },
      { title: "Sun-Dried Post Harvest", desc: "Dried under natural sunlight on raised beds — no industrial drum dryers or additives." },
    ],
    recipe: {
      title: "Curd Rice with Pomegranate",
      description: "A South Indian comfort food classic — cooling, probiotic-rich, and infinitely satisfying.",
      prepTime: "25 minutes",
      servings: 3,
      ingredients: [
        "1.5 cups Sona Masuri Heritage Rice (cooked soft)",
        "1.5 cups thick, fresh homemade curd (yoghurt)",
        "½ cup milk",
        "Salt to taste",
        "For tempering: mustard seeds, curry leaves, ginger, green chilli, oil",
        "Pomegranate seeds and coriander for garnish",
      ],
      steps: [
        "Cook Sona Masuri rice with slightly more water than usual until very soft and almost mushy.",
        "While warm, mash gently and mix in milk. Allow to cool to room temperature.",
        "Beat curd smooth and fold into the rice. Add salt generously.",
        "In a small pan, heat oil. Splutter mustard seeds, then add curry leaves, ginger, and green chilli.",
        "Pour the tempering over the rice and mix well.",
        "Garnish liberally with pomegranate seeds and fresh coriander. Serve chilled.",
      ],
    },
    similarProductIds: ["3", "1", "2"],
  },
};

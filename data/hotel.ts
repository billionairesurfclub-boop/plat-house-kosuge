export const hotel = {
  id: "plat-house-kagurazaka2",
  name: {
    ja: "ぷらっとハウス神楽坂Ⅱ",
    en: "Plat House Kagurazaka II",
  },
  catchcopy: {
    ja: "牛込神楽坂駅3分。80㎡の3LDK戸建てで最大10名。3つの客室とリビングで、グループ旅行を贅沢に",
    en: "3 min from Ushigome-Kagurazaka Station. Spacious 80㎡ 3LDK house for up to 10 guests in charming Kagurazaka.",
  },
  address: {
    postalCode: "162-0805",
    ja: "東京都新宿区矢来町８３－２",
    en: "83-2 Yaraicho, Shinjuku-ku, Tokyo 162-0805",
  },
  area: "神楽坂",
  phone: "08070583086",
  category: "民泊",
  website: "https://kagurazaka2.plat-house.jp",
  checkIn: "16:00",
  checkOut: "11:00",
  price: {
    min: 35000,
    max: 70000,
    currency: "JPY",
  },
  cancelPolicy: "7日前まで無料キャンセル可能",
  languages: ["ja", "en"],
  googleMapUrl: "",
  bookingUrl: "https://beds24.com/booking.php?propid=325166&referer=BookingLink",
  rating: {
    google: 0,
    bookingCom: 0,
  },
  access: [
    { station: "牛込神楽坂駅", line: "都営大江戸線", walk: 3 },
    { station: "神楽坂駅", line: "東京メトロ東西線", walk: 4 },
  ],
  floors: "戸建て",
  parking: 0,
  capacity: 10,
  size: "80㎡（3LDK）",
};

export const amenities = [
  { name: "Netflix", nameEn: "Netflix", icon: "🎬", highlight: true },
  { name: "Nintendo Switch", nameEn: "Nintendo Switch", icon: "🎮", highlight: true },
  { name: "カードゲーム", nameEn: "Card Games", icon: "🃏", highlight: true },
  { name: "ポケットWi-Fi", nameEn: "Pocket Wi-Fi", icon: "📶", highlight: true },
  { name: "インターネット（Wi-Fi）", nameEn: "Wi-Fi Internet", icon: "🌐", highlight: true },
  { name: "浴槽", nameEn: "Bathtub", icon: "🛁", highlight: true },
  { name: "キッチン", nameEn: "Kitchen", icon: "🍳", highlight: true },
  { name: "ソファー・リビング", nameEn: "Sofa & Living Space", icon: "🛋️", highlight: true },
  { name: "ボタニスト（アメニティ）", nameEn: "Botanist Amenities", icon: "🌿", highlight: false },
  { name: "空気清浄機・加湿器", nameEn: "Air Purifier & Humidifier", icon: "💨", highlight: false },
  { name: "洗濯機", nameEn: "Washing Machine", icon: "🫧", highlight: false },
  { name: "冷蔵庫", nameEn: "Refrigerator", icon: "🧊", highlight: false },
  { name: "電子レンジ", nameEn: "Microwave", icon: "♨️", highlight: false },
  { name: "電気ケトル", nameEn: "Electric Kettle", icon: "☕", highlight: false },
  { name: "調理器具・食器", nameEn: "Cookware & Tableware", icon: "🍽️", highlight: false },
  { name: "エアコン", nameEn: "Air Conditioning", icon: "❄️", highlight: false },
  { name: "大型TV", nameEn: "Large TV", icon: "📺", highlight: false },
  { name: "独立トイレ", nameEn: "Separate Toilet", icon: "🚽", highlight: false },
  { name: "ウォシュレット", nameEn: "Washlet", icon: "✨", highlight: false },
  { name: "ヘアドライヤー", nameEn: "Hair Dryer", icon: "💨", highlight: false },
  { name: "コテ＆カールアイロン", nameEn: "Curling Iron", icon: "💅", highlight: false },
  { name: "アイロン", nameEn: "Iron", icon: "👔", highlight: false },
];

export const rooms = [
  {
    id: "room-a",
    floor: "",
    name: { ja: "客室A", en: "Room A" },
    bedType: { ja: "ダブルベッド×2", en: "2 Double Beds" },
    maxGuests: 4,
    description: {
      ja: "ダブルベッド2台を備えた広い客室。最大4名様でご利用いただけます。",
      en: "Room A with 2 double beds. Accommodates up to 4 guests.",
    },
    images: [],
  },
  {
    id: "room-b",
    floor: "",
    name: { ja: "客室B", en: "Room B" },
    bedType: { ja: "ダブルベッド×1", en: "1 Double Bed" },
    maxGuests: 2,
    description: {
      ja: "ダブルベッド1台の落ち着いた客室。最大2名様でご利用いただけます。",
      en: "Room B with 1 double bed. Accommodates up to 2 guests.",
    },
    images: [],
  },
  {
    id: "room-c",
    floor: "",
    name: { ja: "客室C", en: "Room C" },
    bedType: { ja: "ダブルベッド×1", en: "1 Double Bed" },
    maxGuests: 2,
    description: {
      ja: "ダブルベッド1台の落ち着いた客室。最大2名様でご利用いただけます。",
      en: "Room C with 1 double bed. Accommodates up to 2 guests.",
    },
    images: [],
  },
  {
    id: "room-living",
    floor: "",
    name: { ja: "リビング", en: "Living Room" },
    bedType: { ja: "シングル布団×2", en: "2 Single Futons" },
    maxGuests: 2,
    description: {
      ja: "広々としたリビングスペース。シングル布団2組で最大2名様がご利用いただけます。",
      en: "Spacious living area with 2 single futons. Accommodates up to 2 guests.",
    },
    images: [],
  },
];

export const faqs = [
  {
    q: { ja: "チェックインは何時ですか？", en: "What time is check-in?" },
    a: { ja: "チェックインは16時、チェックアウトは11時です。セルフチェックイン対応のため、深夜・早朝でも安心です。", en: "Check-in is at 16:00, check-out is at 11:00. Self check-in is available anytime." },
  },
  {
    q: { ja: "何名まで宿泊できますか？", en: "How many guests can stay?" },
    a: { ja: "最大10名様までご宿泊いただけます。客室A（ダブル×2・最大4名）・客室B（ダブル×1・最大2名）・客室C（ダブル×1・最大2名）・リビング（シングル布団×2・最大2名）をご用意しています。", en: "Up to 10 guests. Room A (2 double beds, max 4), Room B (1 double bed, max 2), Room C (1 double bed, max 2), Living room (2 single futons, max 2)." },
  },
  {
    q: { ja: "最寄り駅はどこですか？", en: "What is the nearest station?" },
    a: { ja: "牛込神楽坂駅（都営大江戸線）徒歩3分、神楽坂駅（東京メトロ東西線）徒歩4分です。2路線利用可能で非常に便利です。", en: "3 min walk from Ushigome-Kagurazaka Station (Toei Oedo Line), 4 min from Kagurazaka Station (Tokyo Metro Tozai Line)." },
  },
  {
    q: { ja: "キッチンは使えますか？", en: "Is the kitchen available?" },
    a: { ja: "はい、調理器具・食器完備のキッチンをご利用いただけます。大人数での自炊も楽しんでいただけます。", en: "Yes, a fully equipped kitchen with cookware and tableware is available." },
  },
  {
    q: { ja: "駐車場はありますか？", en: "Is there parking?" },
    a: { ja: "専用駐車場はございません。近隣のコインパーキングをご利用ください。", en: "There is no on-site parking. Please use nearby coin parking facilities." },
  },
  {
    q: { ja: "キャンセルポリシーを教えてください。", en: "What is the cancellation policy?" },
    a: { ja: "ご予約日の7日前まで無料でキャンセルいただけます。", en: "Free cancellation is available up to 7 days before check-in." },
  },
];

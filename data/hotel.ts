export const hotel = {
  id: "plat-house-higashishinjuku",
  name: {
    ja: "クリエイトスペース東新宿 新宿歌舞伎町Ⅱ",
    en: "Create Space Higashi-Shinjuku Shinjuku Kabukicho II",
  },
  catchcopy: {
    ja: "東新宿駅5分。38㎡の2タイプ客室で最大5名。新宿・歌舞伎町エリアへのアクセス抜群のプライベートステイ",
    en: "5 min from Higashi-Shinjuku Station. Spacious 38㎡ rooms for up to 5 guests near Kabukicho.",
  },
  address: {
    postalCode: "160-0022",
    ja: "東京都新宿区新宿７－１１－１１",
    en: "7-11-11 Shinjuku, Shinjuku-ku, Tokyo 160-0022",
  },
  area: "東新宿",
  phone: "08070583086",
  category: "民泊",
  website: "https://higashishinjuku.create-space.jp",
  checkIn: "16:00",
  checkOut: "11:00",
  price: {
    min: 15000,
    max: 35000,
    currency: "JPY",
  },
  cancelPolicy: "7日前まで無料キャンセル可能",
  languages: ["ja", "en"],
  googleMapUrl: "",
  bookingUrl: "https://beds24.com/booking.php?propid=294198&referer=BookingLink",
  rating: {
    google: 0,
    bookingCom: 0,
  },
  access: [
    { station: "東新宿駅", line: "東京メトロ副都心線・都営大江戸線", walk: 5 },
  ],
  floors: "3階建て",
  parking: 0,
  capacity: 10,
  size: "38㎡×2客室",
};

export const amenities = [
  { name: "Netflix", nameEn: "Netflix", icon: "🎬", highlight: true },
  { name: "Nintendo Switch", nameEn: "Nintendo Switch", icon: "🎮", highlight: true },
  { name: "ポケットWi-Fi", nameEn: "Pocket Wi-Fi", icon: "📶", highlight: true },
  { name: "インターネット（Wi-Fi）", nameEn: "Wi-Fi Internet", icon: "🌐", highlight: true },
  { name: "浴槽", nameEn: "Bathtub", icon: "🛁", highlight: true },
  { name: "キッチン", nameEn: "Kitchen", icon: "🍳", highlight: true },
  { name: "ソファーベッド", nameEn: "Sofa Bed", icon: "🛋️", highlight: true },
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
    name: { ja: "客室A（寝室＋リビング）", en: "Room A (Bedroom + Living)" },
    bedType: { ja: "寝室：クイーンベッド×1 ／ リビング：ダブルベッド×1・ソファーベッド×1", en: "Bedroom: 1 Queen Bed / Living: 1 Double Bed + 1 Sofa Bed" },
    maxGuests: 5,
    description: {
      ja: "38㎡の広々とした客室。寝室にクイーンベッド、リビングにダブルベッドとソファーベッドを備え、最大5名様でご利用いただけます。",
      en: "Spacious 38㎡ room with queen bed in bedroom, double bed and sofa bed in living area. Up to 5 guests.",
    },
    images: [],
  },
  {
    id: "room-b",
    floor: "",
    name: { ja: "客室B（寝室＋ソファーベッド）", en: "Room B (Bedroom + Sofa Bed)" },
    bedType: { ja: "寝室：ダブルベッド×2 ／ ソファーベッド×1", en: "Bedroom: 2 Double Beds + 1 Sofa Bed" },
    maxGuests: 5,
    description: {
      ja: "38㎡の広々とした客室。ダブルベッド2台とソファーベッドを備え、最大5名様でご利用いただけます。グループ旅行に最適。",
      en: "Spacious 38㎡ room with 2 double beds and 1 sofa bed. Accommodates up to 5 guests. Perfect for groups.",
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
    a: { ja: "各客室最大5名様です。2室ご利用の場合は最大10名様まで対応可能です。", en: "Each room accommodates up to 5 guests. Both rooms together accommodate up to 10 guests." },
  },
  {
    q: { ja: "最寄り駅はどこですか？", en: "What is the nearest station?" },
    a: { ja: "東新宿駅（東京メトロ副都心線・都営大江戸線）徒歩5分です。新宿駅・歌舞伎町へも徒歩圏内でアクセス抜群です。", en: "5 min walk from Higashi-Shinjuku Station (Tokyo Metro Fukutoshin Line / Toei Oedo Line). Walking distance to Shinjuku Station and Kabukicho." },
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

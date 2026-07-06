export const hotel = {
  id: "plat-house-kosuge",
  name: {
    ja: "ぷらっとハウス小菅",
    en: "Plat House Kosuge",
  },
  catchcopy: {
    ja: "小菅駅徒歩7分。35㎡・最大4名。足立　小菅エリアのプライベートステイ",
    en: "7 min from 小菅駅. Plat House Kosuge — private stay in 足立　小菅.",
  },
  address: {
    postalCode: "120-0015",
    ja: "東京都足立区足立2-17-5",
    en: "東京都足立区足立2-17-5",
  },
  area: "足立　小菅",
  phone: "08070583086",
  category: "民泊",
  website: "https://kosuge.plat-house.jp",
  checkIn: "16:00",
  checkOut: "11:00",
  price: {
    min: 19800,
    max: 19800,
    currency: "JPY",
  },
  cancelPolicy: "7日前まで無料キャンセル可能",
  languages: ["ja", "en"],
  googleMapUrl: "",
  bookingUrl: "https://beds24.com/booking.php?propid=240672&referer=BookingLink",
  rating: {
    google: 0,
    bookingCom: 0,
  },
  access: [
    { station: "小菅駅", line: "東京メトロ千代田線", walk: 7 }
  ],
  floors: "3階建て",
  parking: 0,
  capacity: 4,
  size: "35㎡",
};

export const amenities = [
  { name: "Netflix", nameEn: "Netflix", icon: "🎬", highlight: true },
  { name: "Nintendo Switch", nameEn: "Nintendo Switch", icon: "🎮", highlight: true },
  { name: "ポケットWi-Fi", nameEn: "ポケットWi-Fi", icon: "📶", highlight: true },
  { name: "インターネット（Wi-Fi）", nameEn: "インターネット（Wi-Fi）", icon: "🌐", highlight: true },
  { name: "洗濯機", nameEn: "洗濯機", icon: "🫧", highlight: false },
  { name: "冷蔵庫", nameEn: "冷蔵庫", icon: "🧊", highlight: false },
  { name: "電子レンジ", nameEn: "電子レンジ", icon: "♨️", highlight: false },
  { name: "電気ケトル", nameEn: "電気ケトル", icon: "☕", highlight: false },
  { name: "シャワー", nameEn: "シャワー", icon: "🚿", highlight: false },
  { name: "独立トイレ", nameEn: "独立トイレ", icon: "🚽", highlight: false },
  { name: "ウォシュレット", nameEn: "ウォシュレット", icon: "✨", highlight: false },
  { name: "掃除機", nameEn: "掃除機", icon: "🧹", highlight: false },
  { name: "エアコン", nameEn: "エアコン", icon: "❄️", highlight: false },
  { name: "大型TV", nameEn: "大型TV", icon: "📺", highlight: false },
  { name: "コテ＆カールドライヤー", nameEn: "コテ＆カールドライヤー", icon: "💅", highlight: false },
  { name: "ヘアドライヤー", nameEn: "ヘアドライヤー", icon: "💨", highlight: false },
  { name: "アイロン", nameEn: "アイロン", icon: "👔", highlight: false },
  { name: "キッチン", nameEn: "キッチン", icon: "🍳", highlight: true },
  { name: "アメニティ一式", nameEn: "アメニティ一式", icon: "🧴", highlight: false },
  { name: "ボタニスト（アメニティ）", nameEn: "ボタニスト（アメニティ）", icon: "🌿", highlight: false },
  { name: "バスタオル・フェイスタオル", nameEn: "バスタオル・フェイスタオル", icon: "🏩", highlight: false },
  { name: "空気清浄機", nameEn: "空気清浄機", icon: "💨", highlight: false },
  { name: "サーキュレータ", nameEn: "サーキュレータ", icon: "✅", highlight: false },
  { name: "ダイニングテーブル", nameEn: "ダイニングテーブル", icon: "✅", highlight: false },
  { name: "クローゼット", nameEn: "クローゼット", icon: "✅", highlight: false },
  { name: "洋服掛け", nameEn: "洋服掛け", icon: "✅", highlight: false },
  { name: "ハンガー", nameEn: "ハンガー", icon: "✅", highlight: false },
  { name: "洗剤関係", nameEn: "洗剤関係", icon: "✅", highlight: false },
  { name: "浴槽", nameEn: "浴槽", icon: "🛁", highlight: true },
  { name: "洗面台", nameEn: "洗面台", icon: "✅", highlight: false },
  { name: "調理器具", nameEn: "調理器具", icon: "✅", highlight: false },
  { name: "皿・グラス関係", nameEn: "皿・グラス関係", icon: "✅", highlight: false },
  { name: "ダイニング", nameEn: "ダイニング", icon: "✅", highlight: false }
];

export const rooms = [
  {
    id: "room-a",
    floor: "",
    name: { ja: "ぷらっとハウス小菅（35㎡・1LDK）", en: "Plat House Kosuge (35㎡ 1LDK)" },
    bedType: { ja: "ダブルベッド×2", en: "2 Double Beds" },
    maxGuests: 4,
    description: {
      ja: "35㎡の1LDK一棟貸切。ダブルベッド2台を備え、最大4名様でご利用いただけます。小菅駅から徒歩7分の好立地です。",
      en: "Entire 35㎡ 1LDK. Features 2 double beds. Accommodates up to 4 guests. 7 min walk from Kosuge Station.",
    },
    images: [],
  }
];

export const faqs = [
  {
    q: { ja: "チェックインは何時ですか？", en: "What time is check-in?" },
    a: { ja: "チェックインは16:00、チェックアウトは11:00です。セルフチェックイン対応のため、深夜・早朝でも安心です。", en: "Check-in is at 16:00, check-out is at 11:00. Self check-in is available anytime." },
  },
  {
    q: { ja: "何名まで宿泊できますか？", en: "How many guests can stay?" },
    a: { ja: "最大4名様までご宿泊いただけます。", en: "Up to 4 guests." },
  },
  {
    q: { ja: "最寄り駅はどこですか？", en: "What is the nearest station?" },
    a: { ja: "小菅駅（東京メトロ千代田線）徒歩7分です。", en: "小菅駅 (東京メトロ千代田線) is a 7 min walk." },
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

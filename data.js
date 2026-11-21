// data.js : Part A 배열 및 Part B 영화 객체 데이터 / 강동현(2651001)

// ===== Part A 배열 (내 영화 5편 + 박스오피스 5편 = 10칸) =====
const titles = [
  "인터스텔라",
  "기생충",
  "쇼생크탈출",
  "어벤져스 앤드게임",
  "센과치이로의 행방불명",
  "박스오피스 1위",
  "박스오피스 2위",
  "박스오피스 3위",
  "박스오피스 4위",
  "박스오피스 5위"
];

const ratings = [8.4, 8.5, 8.7, 8.2, 8.5, 7.2, 7.6, 6.8, 7.4, 7.0];

const years = [2014, 2019, 1994, 2019, 2001, 2026, 2026, 2026, 2026, 2026];

// 내 인생 영화 5편은 0, 박스오피스 영화는 KOBIS 누적 관객 수(숫자) 입력
const audiences = [0, 0, 0, 0, 0, 1850000, 1120000, 640000, 390000, 150000];

// ===== Part B 객체 배열 (키 8개, Part A와 동일 순서) =====
const movies = [
  {
    title: "인터스텔라",
    year: 2014,
    date: "2014-11-06",
    rating: 8.4,
    audience: 0,
    poster: null,
    type: "mine",
    rank: null
  },
  {
    title: "기생충",
    year: 2019,
    date: "2019-05-30",
    rating: 8.5,
    audience: 0,
    poster: null,
    type: "mine",
    rank: null
  },
  {
    title: "쇼생크탈출",
    year: 1994,
    date: "1995-02-04",
    rating: 8.7,
    audience: 0,
    poster: null,
    type: "mine",
    rank: null
  },
  {
    title: "어벤져스 앤드게임",
    year: 2019,
    date: "2019-04-24",
    rating: 8.2,
    audience: 0,
    poster: null,
    type: "mine",
    rank: null
  },
  {
    title: "센과치이로의 행방불명",
    year: 2001,
    date: "2002-06-28",
    rating: 8.5,
    audience: 0,
    poster: null,
    type: "mine",
    rank: null
  },
  {
    title: "박스오피스 1위",
    year: 2026,
    date: "2026-10-01",
    rating: 7.2,
    audience: 1850000,
    poster: null,
    type: "boxoffice",
    rank: 1
  },
  {
    title: "박스오피스 2위",
    year: 2026,
    date: "2026-10-05",
    rating: 7.6,
    audience: 1120000,
    poster: null,
    type: "boxoffice",
    rank: 2
  },
  {
    title: "박스오피스 3위",
    year: 2026,
    date: "2026-10-08",
    rating: 6.8,
    audience: 640000,
    poster: null,
    type: "boxoffice",
    rank: 3
  },
  {
    title: "박스오피스 4위",
    year: 2026,
    date: "2026-10-12",
    rating: 7.4,
    audience: 390000,
    poster: null,
    type: "boxoffice",
    rank: 4
  },
  {
    title: "박스오피스 5위",
    year: 2026,
    date: "2026-10-15",
    rating: 7.0,
    audience: 150000,
    poster: null,
    type: "boxoffice",
    rank: 5
  }
];

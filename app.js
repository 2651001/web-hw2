// app.js : 영화 데이터 처리 및 분석 로직 / 강동현(2651001)

// ===== Part A =====
let sumA = 0;
let maxA = 0;
let highCountA = 0;
let count2020sA = 0;
let count2010sA = 0;
let count2000sA = 0;
let countBefore2000sA = 0;
let millionTitlesA = "";

for (let idx = 0; idx < titles.length; idx++) {
  sumA += ratings[idx];

  if (ratings[idx] > ratings[maxA]) {
    maxA = idx;
  }

  if (ratings[idx] >= 8) {
    highCountA += 1;
  }

  const decade = years[idx] - (years[idx] % 10);
  switch (decade) {
    case 2020:
      count2020sA += 1;
      break;
    case 2010:
      count2010sA += 1;
      break;
    case 2000:
      count2000sA += 1;
      break;
    default:
      countBefore2000sA += 1;
      break;
  }

  if (audiences[idx] >= 1000000) {
    millionTitlesA = millionTitlesA ? `${millionTitlesA} ${titles[idx]}` : titles[idx];
  }
}

if (millionTitlesA === "") {
  millionTitlesA = "없음";
}

console.log("A1 평균 평점:", sumA / ratings.length);
console.log("A2 최고 평점:", titles[maxA], ratings[maxA]);
console.log("A3 8점 이상:", `${highCountA}편`);
console.log(
  `A4 2020년대 ${count2020sA}편, 2010년대 ${count2010sA}편, 2000년대 ${count2000sA}편, 그 이전 ${countBefore2000sA}편`
);
console.log("A5 관객 100만 이상:", millionTitlesA);


// ===== Part B =====

// average : 영화 배열 ⇒ 평균 평점(숫자)
function average(list) {
  return averageBy(list, "rating");
}

// best : 영화 배열 ⇒ 최고 평점 영화 객체
function best(list) {
  let topRated = list[0];
  for (const item of list) {
    if (item.rating > topRated.rating) {
      topRated = item;
    }
  }
  return topRated;
}

// filterByRating : 영화 배열, 최소 평점(숫자) ⇒ 기준 이상 영화 새 배열
function filterByRating(list, min) {
  return list.filter((item) => item.rating >= min);
}

// sortBy : 영화 배열, 정렬 키, 내림차순 여부 ⇒ 정렬된 새 배열(원본 유지)
function sortBy(list, key, desc) {
  const direction = desc ? -1 : 1;
  return [...list].sort((first, second) => {
    if (typeof first[key] === "string") {
      return first[key].localeCompare(second[key]) * direction;
    }
    return (first[key] - second[key]) * direction;
  });
}

// search : 영화 배열, 검색어 문자열 ⇒ 제목 포함 영화 새 배열
function search(list, keyword) {
  const normalized = keyword.trim().toLowerCase();
  return list.filter((item) => item.title.toLowerCase().includes(normalized));
}

// formatNumber : 숫자 또는 숫자 문자열 ⇒ 세 자리 콤마 문자열
function formatNumber(n) {
  return Number(n).toLocaleString("ko-KR");
}

// yearsSince : 날짜 문자열("YYYY-MM-DD") ⇒ 올해 기준 경과 연수(숫자)
function yearsSince(dateStr) {
  return new Date().getFullYear() - new Date(dateStr).getFullYear();
}

const bestMovie = best(movies);
const topAudience = sortBy(movies, "audience", true)[0];

const summaryLine1 = `전체 ${movies.length}편, 평균 평점 ${average(movies).toFixed(1)}점`;
const summaryLine2 = `최고 평점 ${bestMovie.title} (${bestMovie.rating}점, 개봉한 지 ${yearsSince(bestMovie.date)}년)`;
const summaryLine3 = `관객 1위 ${topAudience.title} (누적 ${formatNumber(topAudience.audience)}명)`;

document.getElementById("out").textContent = `${summaryLine1}\n${summaryLine2}\n${summaryLine3}`;


// ===== Part C =====

// getList : TMDB 응답 객체 ⇒ 영화 목록 배열
function getList(data) {
  return data.results;
}

// averageBy : 객체 배열, 숫자 키 이름 ⇒ 해당 키 값 평균(숫자)
function averageBy(list, key) {
  if (list.length === 0) return 0;
  const sum = list.reduce((acc, cur) => acc + cur[key], 0);
  return sum / list.length;
}

const tmdbMovies = getList(TMDB);

console.log(
  `C1 page ${TMDB.page}, total_pages ${TMDB.total_pages}, total_results ${TMDB.total_results}, 이번 응답 ${tmdbMovies.length}편`
);
console.log("C2 상영작 평균 평점:", averageBy(tmdbMovies, "vote_average").toFixed(1));
console.table(
  sortBy(tmdbMovies, "vote_average", true).slice(0, 5),
  ["title", "release_date", "vote_average"]
);

const sampleKeyword = "상영작";
console.log(`C4 '${sampleKeyword}' 검색:`, `${search(tmdbMovies, sampleKeyword).length}편`);


// ===== Step 5. 보너스 =====

// formatDate : 날짜 문자열("YYYY-MM-DD") ⇒ "YYYY년 M월 D일 (요일)" 문자열
function formatDate(dateStr) {
  const target = new Date(dateStr);
  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
  const y = target.getFullYear();
  const m = target.getMonth() + 1;
  const d = target.getDate();
  const day = weekDays[target.getDay()];
  return `${y}년 ${m}월 ${d}일 (${day})`;
}

console.log("formatDate 테스트:", formatDate("2014-11-06"));

// loadJson : tmdb.json 비동기 로드 ⇒ 평점 상위 5편 콘솔 표 출력
async function loadJson() {
  try {
    const response = await fetch("tmdb.json");
    const jsonData = await response.json();
    console.table(
      sortBy(getList(jsonData), "vote_average", true).slice(0, 5),
      ["title", "vote_average"]
    );
  } catch (error) {
    console.warn("tmdb.json 불러오기 실패(Live Server 또는 GitHub Pages에서 실행 필요):", error.message);
  }
}

loadJson();

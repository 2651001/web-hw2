# 실습과제 #2: 영화 데이터를 자바스크립트로

- 이름/학번 : 강동현 / 2651001
- 사이트 주소 : https://아이디.github.io/web-hw2/
- 사용한 API: TMDB (영화 정보, now_playing 응답), KOBIS 일별 박스오피스 (기준일 YYYY-MM-DD)

## 구현 항목 체크
- [o] 1. Part A: `data.js`에 10칸 배열 4종 구성 및 `app.js`에서 `A1`~`A5` 콘솔 출력 (`console-a.png`)
- [o] 2. Part B 함수 7개: 8개 키를 가진 영화 객체 10건 구성, 함수 7개 구현 및 자가 테스트 검증
- [o] 3. Part C 응답 구조: `tmdb.js`에 `now_playing` 응답 저장, `getList`·`averageBy` 작성 및 `C1`~`C4`·상위 5편 표 출력 (`console-c.png`)
- [o] 4. 출력: 캡처 이미지 2장 준비 및 웹페이지 `<pre id="out">`에 요약 3줄 표시
- [o] 5. 코드 품질: 함수별 입출력 주석 작성, `const`/`let` 사용, 원본 배열 불변 유지, `average`가 `averageBy`를 재사용
- [o] 6. 제출 형식: Public 저장소 `web-hw2` 루트에 파일 배치, GitHub Pages 활성화, API 키 미포함
- [o] 보너스: `reduce` 기반 평균 계산, `formatDate` 요일 표기, `fetch`로 `tmdb.json` 읽기 (`bonus.png`)

## 자가 테스트 표

| 번호 | 호출 | 기대 결과 | 실제 결과 |
|---|---|---|---|
| 1 | `formatNumber("1234567")` | `'1,234,567'` | |
| 2 | `average(movies).toFixed(1)` | `'7.9'` | |
| 3 | `best(movies).title` | `'쇼생크탈출'` | |
| 4 | `sortBy(movies, "rating", true)[0].title` | `'쇼생크탈출'` | |
| 5 | `filterByRating(movies, 8).length` | `5` | |
| 6 | `search(movies, "인터 ").length` | `1` | |
| 7 | `yearsSince("2014-11-06")` | `12` | |
| 8 | 4번 실행 뒤 `movies[0].title` | `'인터스텔라'` | |

## 어려웠던 점 3가지와 해결
- 배열 정렬 시 원본 순서가 뒤바뀌는 현상: `Array.prototype.sort()`를 직접 쓰면 `movies` 배열 순서가 변해 이후 결과에 영향을 주므로, 스프레드 문법(`[...list]`)으로 복사한 배열을 정렬하도록 구현해 원본을 지켰습니다.
- 정렬 기준값의 자료형 차이 처리: 영화 제목처럼 문자열인 속성은 `localeCompare`로 비교하고, 평점·연도·관객 수처럼 숫자인 속성은 뺄셈으로 비교한 뒤 `desc` 값에 따라 부호(`-1` 또는 `1`)를 곱해 오름차순과 내림차순을 모두 처리했습니다.
- 데이터 소스마다 다른 평점 키 이름: `movies` 객체에서는 `rating`을 쓰지만 TMDB `results` 항목에서는 `vote_average`를 사용하므로, 평균 계산 로직을 `averageBy(list, key)`로 일반화하고 `average`는 `averageBy(list, "rating")`을 호출하도록 묶었습니다.

## 참고한 자료
- 웹개발기초 교재 8장~11장
- MDN Web Docs — `Array.prototype.sort()`, `Array.prototype.reduce()`, `String.prototype.localeCompare()`, `Number.prototype.toLocaleString()`, `fetch()`

## 생성형 AI 사용 내역
- 질문 요지 : 강동현(2651001)과 지정 영화 5편을 반영한 실습과제 #2 전체 코드 및 새로 구성한 README 작성 요청
- 답변 요약 : `index.html`, `data.js`, `tmdb.js`, `app.js` 코드와 별도 서술로 작성한 `README.md` 초안을 받음
- 채택 여부 : 채택 (실제 박스오피스·TMDB 응답 데이터 및 콘솔 검증 결과를 반영해 마무리함)

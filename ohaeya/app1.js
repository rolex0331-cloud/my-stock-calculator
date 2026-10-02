const KEYS={products:'ohaeya.products.v1',favorites:'ohaeya.favorites.v1',candidates:'ohaeya.candidates.v1',clicks:'ohaeya.clicks.v1'};
const categories=['전체','식품','생활','가전·디지털','패션','뷰티','육아','기타'];
const nowISO=()=>new Date().toISOString();
const daysAgo=n=>new Date(Date.now()-n*86400000).toISOString();
const uid=()=>`oh_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,7)}`;
const money=n=>`${Math.round(Number(n)||0).toLocaleString('ko-KR')}원`;
const pct=(a,b)=>b>0?Math.max(0,Math.round((1-a/b)*100)):0;
const defaultProducts=[
{id:'p1',name:'탐사 강력 배수관 세정제 2L 6개',source:'쿠팡',category:'생활',price:11990,normalPrice:17430,shipping:0,medianPrice:15900,observedDays:12,url:'https://www.coupang.com/',affiliateUrl:'',note:'쿠팡 API 승인 전 샘플 데이터입니다. 실제 구매 전 판매 페이지의 가격과 배송 조건을 확인하세요.',updatedAt:daysAgo(1),priceHistory:[15900,14900,13900,11990]},
{id:'p2',name:'순둥이 베이직 무향 엠보싱 물티슈 캡형 80매 10팩',source:'11번가',category:'육아',price:21530,normalPrice:22900,shipping:0,medianPrice:22400,observedDays:8,url:'https://www.11st.co.kr/',affiliateUrl:'',note:'샘플 데이터. 실시간 가격이 아니므로 구매 전 확인이 필요합니다.',updatedAt:daysAgo(2),priceHistory:[22900,22400,21900,21530]},
{id:'p3',name:'몽베스트 위드어스 무라벨 2L 24개',source:'11번가',category:'식품',price:24100,normalPrice:25900,shipping:0,medianPrice:24900,observedDays:7,url:'https://www.11st.co.kr/',affiliateUrl:'',note:'샘플 데이터. 가격 이력 테스트용입니다.',updatedAt:daysAgo(3),priceHistory:[24900,24800,24500,24100]},
{id:'p4',name:'마이어 무선 블렌더 BL250MR',source:'신세계몰',category:'가전·디지털',price:39050,normalPrice:40670,shipping:0,medianPrice:39900,observedDays:4,url:'https://www.ssg.com/',affiliateUrl:'',note:'관측일수가 짧아 점수 신뢰도를 낮게 반영합니다.',updatedAt:daysAgo(4),priceHistory:[40670,39900,39050]},
{id:'p5',name:'오혜야 테스트 생활용품 세트',source:'수동등록',category:'생활',price:9900,normalPrice:15900,shipping:3000,medianPrice:14900,observedDays:14,url:'',affiliateUrl:'',note:'관리자 등록·점수 계산 동작 확인용 샘플입니다.',updatedAt:daysAgo(0),priceHistory:[14900,13900,12900,9900]}
];
const defaultCandidates=[{id:'c1',name:'쿠팡 API 연결 전 테스트 후보',source:'수동수집',price:12900,normalPrice:19900,url:'',status:'pending',createdAt:nowISO()}];
const load=(k,f)=>{try{const v=JSON.parse(localStorage.getItem(k));return Array.isArray(v)||typeof v==='object'&&v!==null?v:f}catch{return f}};
let products=load(KEYS.products,defaultProducts), favorites=load(KEYS.favorites,[]), candidates=load(KEYS.candidates,defaultCandidates), clicks=load(KEYS.clicks,{});
let state={query:'',quick:'all',category:'전체',sort:'score',view:'home'};
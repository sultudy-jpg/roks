import { useState } from 'react';
import logo from './ROK_SHIPPING_logo_option_1_transparent.png';
import transhipPhoto from './홈페이지용사진/TRANSHIP.jpg';
import './App.css';

const projectPhotoModules = import.meta.glob([
  './홈페이지용사진/*.{jpg,JPG,jpeg,JPEG}',
  '!./홈페이지용사진/img_solution_02.jpg',
  '!./홈페이지용사진/TRANSHIP.jpg',
], {
  eager: true,
  query: '?url',
  import: 'default',
});

const projectPhotos = Object.entries(projectPhotoModules)
  .sort(([a], [b]) => a.localeCompare(b, 'ko'))
  .map(([path, src]) => ({
    src,
    name: path.split('/').pop().replace(/\.[^.]+$/, '').replace(/[_-]/g, ' '),
  }));

const services = [
  { no: '01', icon: 'project', en: 'PROJECT SUPPORT', title: '프로젝트 지원 · 보증 화물', text: '보증 교체품, 긴급 예비 부품, 수리·반송 등 프로젝트 운영을 멈추지 않게 하는 운송을 지원합니다.' },
  { no: '02', icon: 'air', en: 'URGENT AIR FREIGHT', title: '긴급 항공 운송', text: 'Next Flight Out부터 Door-to-Door까지, 시간에 민감한 화물을 가장 빠른 경로로 연결합니다.' },
  { no: '03', icon: 'health', en: 'PHARMA & HEALTHCARE', title: '제약 · 헬스케어 물류', text: '의약품 원료와 온도·문서 관리가 중요한 헬스케어 화물을 세심하게 취급합니다.' },
  { no: '04', icon: 'precision', en: 'PRECISION & HIGH-VALUE', title: '정밀 · 고가 화물', text: '정밀 기계, 제어 장비 등 특별 취급이 필요한 민감 화물을 면밀하게 관리합니다.' },
];
const projects = [
  { place: 'CHILE', name: 'Angamos I & II', detail: '240MW Transformer · Steam Drum' },
  { place: 'CHILE', name: 'Ventanas · Campiche', detail: 'Steam Turbine · Condenser' },
  { place: 'KOREA', name: 'KEPCO Bucheon CCPP', detail: '147t Gas Turbine Unit' },
  { place: 'KOREA', name: 'FINEX · Forging Press', detail: '250t Columns Package · 150t Press Shaft' },
];
function Icon({ name }) {
  const paths = {
    project: <><path d="M4 8h16v11H4zM8 8V5h8v3M9 13h6"/></>, air: <><path d="m3 13 18-8-7 14-3-5-4 2 1-5Z"/><path d="m8 11 6 3"/></>,
    health: <><path d="M8 3h8v18H8zM3 8h18v8H3z"/></>, precision: <><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
  }; return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}
function Brand({ footer = false }) { return <a className={`brand ${footer ? 'footer-brand' : ''}`} href="#top" aria-label="ROK Shipping 홈"><img src={logo} alt="ROK Shipping" /></a>; }
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };
  return <main>
    <header className="nav-wrap"><Brand/><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="메뉴 열기"><span></span><span></span></button><nav className={menuOpen ? 'open' : ''}><button onClick={() => scrollTo('about')}>회사소개</button><button onClick={() => scrollTo('service')}>전문 서비스</button><button onClick={() => scrollTo('heritage')}>프로젝트 경험</button><button onClick={() => scrollTo('network')}>글로벌 네트워크</button></nav><button className="quote" onClick={() => scrollTo('contact')}>운송 문의 <Icon name="arrow"/></button></header>
    <section className="hero" id="top"><div className="hero-grid"></div><div className="hero-glow"></div><div className="hero-copy"><p className="eyebrow"><span></span> CRITICAL & SPECIALIZED LOGISTICS</p><h1>결정적인 순간,<br/><em>가장 정확한 물류.</em></h1><p className="lead">긴급 부품부터 의약품, 정밀 장비까지.<br className="desktop"/> 시간과 안전이 중요한 화물을 빠르고 세심하게 연결합니다.</p><div className="hero-actions"><button className="primary" onClick={() => scrollTo('service')}>전문 서비스 보기 <Icon name="arrow"/></button><button className="text-link" onClick={() => scrollTo('about')}>ROK SHIPPING 소개 <span>↘</span></button></div></div><div className="cargo-visual" aria-hidden="true"><div className="orbit o1"></div><div className="orbit o2"></div><div className="cargo-card"><span>TIME CRITICAL</span><strong>NEXT<br/>FLIGHT<br/>OUT</strong><i>24 / 7 RESPONSE</i></div><div className="route-dot d1"></div><div className="route-dot d2"></div><div className="route-dot d3"></div></div><div className="scroll">SCROLL TO EXPLORE <span>↓</span></div></section>
    <section className="about section" id="about"><div className="section-label">01 &nbsp; INTRODUCTION</div><div className="about-copy"><p className="kicker">SPECIALIZED LOGISTICS FOR CRITICAL CARGO</p><h2>중요한 화물에는<br/>더 정교한 물류가<br/>필요합니다.</h2></div><div className="about-detail"><p>ROK SHIPPING CO., LTD.는 시간에 민감한 고가·특수 화물을 위한 전문 물류 서비스를 제공하기 위해 설립된 NeoKorTrans Co., Ltd.의 자매회사입니다.</p><p>대형 플랜트·프로젝트 물류를 뒷받침하는 보증 화물과 긴급 교체 부품, 수리·반송, 긴급 항공 운송을 비롯해 의약품, 정밀 기계, 고가 장비를 전문적으로 다룹니다.</p></div><div className="numbers"><div><strong>Speed</strong><span>긴급 상황에 빠른 대응</span></div><div><strong>Safety</strong><span>민감 화물의 세심한 취급</span></div><div><strong>Control</strong><span>운송 전 과정의 긴밀한 관리</span></div></div></section>
    <section className="services section" id="service"><div className="section-head"><div><div className="section-label light">02 &nbsp; CORE SERVICES</div><h2>Critical Cargo,<br/>Handled Precisely.</h2></div><p>속도, 안전, 정확한 문서와 커뮤니케이션이<br/>필수적인 운송에 집중합니다.</p></div><div className="service-list">{services.map(item => <article key={item.no}><span className="service-no">{item.no}</span><div className="service-icon"><Icon name={item.icon}/></div><div><small>{item.en}</small><h3>{item.title}</h3><p>{item.text}</p></div><span className="service-arrow"><Icon name="arrow"/></span></article>)}</div></section>
    <section className="heritage section" id="heritage"><div className="heritage-intro"><div><div className="section-label">03 &nbsp; PROJECT HERITAGE</div><h2>대형 프로젝트에서 이어진<br/><em>실전 물류 경험.</em></h2></div><p>ROK SHIPPING은 NeoKorTrans와 그 전신인 KorTrans가 쌓아온 발전소, 제철소, 석유화학 플랜트 및 중공업 프로젝트 경험과 글로벌 네트워크를 기반으로 합니다.</p></div><div className="project-grid">{projects.map((project, i) => <article key={project.name}><span>0{i + 1} / {project.place}</span><h3>{project.name}</h3><p>{project.detail}</p></article>)}</div><div className="heritage-band"><strong>PLANT</strong><i></i><strong>POWER</strong><i></i><strong>STEEL</strong><i></i><strong>MULTIMODAL</strong></div><div className="project-gallery-head"><div><span>FIELD ARCHIVE</span><h3>현장에서 증명된<br/>프로젝트 수행 역량</h3></div><p>육상 운송부터 선적, 하역, 현장 인도까지<br/>프로젝트 물류의 모든 순간을 기록합니다.</p></div><div className="project-gallery">{projectPhotos.map((photo, i) => <figure className={`photo-${(i % 10) + 1}`} key={photo.src}><img src={photo.src} alt={`ROK Shipping 프로젝트 현장 — ${photo.name}`} loading="lazy"/><figcaption><span>{String(i + 1).padStart(2, '0')}</span><small>PROJECT LOGISTICS</small></figcaption></figure>)}</div></section>
    <section className="network section" id="network"><div><div className="section-label">04 &nbsp; GLOBAL NETWORK</div><h2>어디에서든,<br/><em>가장 실용적인 경로로.</em></h2><p>항공, 해상, 복합운송을 유연하게 조합해 한국과 일본, 중국, 동남아시아, 유럽, 미주 및 전 세계 프로젝트 현장을 연결합니다.</p><div className="network-tags"><span>AIR</span><span>OCEAN</span><span>MULTIMODAL</span></div></div><div className="network-visual"><figure><img src={transhipPhoto} alt="선박 간 환적 작업 현장" loading="lazy"/><figcaption><small>OCEAN NETWORK</small><strong>Transshipment<br/>& Multimodal</strong></figcaption></figure><div className="map" aria-label="글로벌 서비스 네트워크"><span className="line l1"></span><span className="line l2"></span><span className="line l3"></span><i className="port p1"></i><i className="port p2"></i><i className="port p3"></i><i className="port p4"></i><i className="port p5"></i><b>KOREA</b><b>ASIA</b><b>EUROPE</b><b>AMERICAS</b><b>WORLDWIDE</b></div></div></section>
    <section className="promise"><div className="section-label light">OUR PROMISE</div><p>FAST · SAFE · ACCURATE</p><h2>모든 중요 화물을<br/>안전하고, 빠르고, 정확하게.</h2></section>
    <section className="contact" id="contact"><p>YOUR CRITICAL SHIPMENT, OUR PRIORITY</p><h2>시간이 중요한 운송,<br/>ROK SHIPPING과 상의하세요.</h2><a href="mailto:info@rokshipping.com">운송 문의하기 <Icon name="arrow"/></a></section>
    <footer><Brand footer/><p>Project Support · Urgent Air Freight · Pharmaceutical · Precision & High-Value Cargo</p><span>© 2026 ROK SHIPPING CO., LTD.</span></footer>
  </main>;
}
export default App;

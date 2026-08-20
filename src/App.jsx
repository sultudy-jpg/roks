import { useState } from 'react';
import './App.css';
import rokShippingLogo from './ROK_SHIPPING_logo_option_1_transparent.png';

const services = [
  { no: '01', icon: 'ship', title: '해상 화물 운송', en: 'OCEAN FREIGHT', text: '국내외 주요 항만을 연결하는 안정적인 해상 운송 서비스를 제공합니다.' },
  { no: '02', icon: 'box', title: '벌크·프로젝트 화물', en: 'PROJECT CARGO', text: '화물의 특성과 규모에 맞춘 전문 선적 계획과 운송 솔루션을 제안합니다.' },
  { no: '03', icon: 'route', title: '통합 물류 관리', en: 'TOTAL LOGISTICS', text: '선적부터 통관, 내륙 운송까지 전 과정을 한 번에 관리합니다.' },
];

function Icon({ name }) {
  const paths = {
    ship: <><path d="M3 18h18M5 18l2 3h10l2-3M6 18l1-8h10l1 8M9 10V6h6v4M12 6V3"/><path d="M8 14h8"/></>,
    box: <><path d="m4 7 8-4 8 4v10l-8 4-8-4Z"/><path d="m4 7 8 4 8-4M12 11v10M8 5l8 4"/></>,
    route: <><circle cx="5" cy="18" r="2"/><circle cx="19" cy="6" r="2"/><path d="M7 18h3a3 3 0 0 0 3-3V9a3 3 0 0 1 3-3h1"/><path d="m17 18 2 2 3-4"/></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };
  return (
    <main>
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="ROK Shipping 홈"><img src={rokShippingLogo} alt="ROK Shipping Co., Ltd." /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="메뉴 열기"><span></span><span></span></button>
        <nav className={menuOpen ? 'open' : ''}><button onClick={() => scrollTo('about')}>회사소개</button><button onClick={() => scrollTo('service')}>사업영역</button><button onClick={() => scrollTo('network')}>운항 네트워크</button><button onClick={() => scrollTo('contact')}>문의하기</button></nav>
        <button className="quote" onClick={() => scrollTo('contact')}>운송 문의 <Icon name="arrow" /></button>
      </header>
      <section className="hero" id="top"><div className="hero-grid"></div><div className="hero-glow"></div>
        <div className="hero-copy"><p className="eyebrow"><span></span> BEYOND THE HORIZON</p><h1>바다를 넘어,<br/><em>신뢰를 운송합니다.</em></h1><p className="lead">ROK SHIPPING은 전문성과 책임감을 바탕으로<br className="desktop"/> 고객의 화물을 세계 곳곳에 안전하게 연결합니다.</p><div className="hero-actions"><button className="primary" onClick={() => scrollTo('service')}>서비스 알아보기 <Icon name="arrow" /></button><button className="text-link" onClick={() => scrollTo('about')}>ROK SHIPPING 소개 <span>↘</span></button></div></div>
        <div className="ship-art" aria-hidden="true"><div className="sun"></div><div className="ship"><div className="containers"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div className="bridge"><span></span></div><div className="hull"><b>ROK SHIPPING</b></div></div><div className="wave one"></div><div className="wave two"></div></div><div className="scroll">SCROLL TO EXPLORE <span>↓</span></div>
      </section>
      <section className="about section" id="about"><div className="section-label">01 &nbsp; ABOUT US</div><div className="about-copy"><p className="kicker">대한민국을 대표하는 신뢰의 해운 파트너</p><h2>고객의 비즈니스가<br/>멈추지 않도록.</h2></div><div className="about-detail"><p>ROK SHIPPING CO., LTD.는 축적된 해운 경험과 글로벌 네트워크를 기반으로 정확하고 효율적인 물류 서비스를 제공합니다.</p><p>항상 고객의 입장에서 고민하며, 어떤 항로에서도 흔들림 없는 운송 품질을 약속합니다.</p><button className="under-link">회사 소개 자세히 보기 <Icon name="arrow" /></button></div><div className="numbers"><div><strong>24/7</strong><span>실시간 운송 지원</span></div><div><strong>Global</strong><span>주요 항만 네트워크</span></div><div><strong>Safety</strong><span>안전을 최우선으로</span></div></div></section>
      <section className="services section" id="service"><div className="section-head"><div><div className="section-label light">02 &nbsp; OUR SERVICES</div><h2>최적의 물류 솔루션</h2></div><p>화물의 출발부터 도착까지,<br/>ROK SHIPPING이 함께합니다.</p></div><div className="service-list">{services.map((item) => <article key={item.no}><span className="service-no">{item.no}</span><div className="service-icon"><Icon name={item.icon}/></div><div><small>{item.en}</small><h3>{item.title}</h3><p>{item.text}</p></div><button aria-label={`${item.title} 자세히 보기`}><Icon name="arrow"/></button></article>)}</div></section>
      <section className="network section" id="network"><div><div className="section-label">03 &nbsp; GLOBAL NETWORK</div><h2>세계의 항만을<br/><em>하나의 항로로.</em></h2><p>아시아를 중심으로 전 세계 주요 항만과 연결된<br/>ROK SHIPPING의 물류 네트워크를 만나보세요.</p><button className="primary navy">운항 네트워크 보기 <Icon name="arrow"/></button></div><div className="map" aria-label="글로벌 운항 네트워크 지도"><span className="line l1"></span><span className="line l2"></span><i className="port p1"></i><i className="port p2"></i><i className="port p3"></i><i className="port p4"></i><b>BUSAN</b><b>SHANGHAI</b><b>SINGAPORE</b><b>LOS ANGELES</b></div></section>
      <section className="contact" id="contact"><p>READY TO MOVE?</p><h2>당신의 화물을 위한<br/>새로운 항해를 시작하세요.</h2><a href="mailto:info@rokshipping.com">운송 문의하기 <Icon name="arrow"/></a></section>
      <footer><a className="brand footer-brand" href="#top" aria-label="ROK Shipping 홈"><img src={rokShippingLogo} alt="ROK Shipping Co., Ltd." /></a><p>※ 본 페이지는 홈페이지 제작을 위한 시안이며, 회사 정보와 연락처는 실제 자료로 교체가 필요합니다.</p><span>© 2026 ROK SHIPPING CO., LTD.</span></footer>
    </main>
  );
}
export default App;

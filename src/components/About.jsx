import React from 'react'
import webDevelop from '../images/web_development.jpg'; 

function About() {
  return (
    <section className="section" id="about">
        <div className="section-title">
            <h2>關於<span>網站開發</span></h2>
        </div>
        <div className="section-center about-center">
            <div className="about-img">
                <img src={webDevelop } className="about-photo" alt="awesome landscape"/>
            </div>
            <article className="about-info">
                <h3>網站開發</h3>
                <p>在網站開發的初期階段，通常需要進行需求分析和設計規劃，以確定網站的目標、功能和用戶體驗。接著，開發人員會根據這些需求和設計規劃來進行編碼工作，這包括前端開發（負責用戶界面和互動）和後端開發（負責伺服器端和資料庫）</p><p>

                    為了確保網站的品質和功能性，開發團隊會進行測試階段，包括功能測試、性能測試、安全測試等。一旦網站開發完成並通過測試，就會進行部署，將網站上線讓用戶訪問。</p><p>
                    
                    網站開發是一個不斷演進和改進的過程，隨著技術的發展和用戶需求的變化，開發團隊需要不斷更新和優化網站，以確保其功能和性能能夠滿足用戶的需求。因此，網站開發是一個複雜而持續的工作，需要開發人員具備廣泛的技能和知識來應對各種挑戰和需求。</p>
            <a href="#" className="btn">網站開發</a>
            </article>
        </div>
    </section>
  )
}

export default About
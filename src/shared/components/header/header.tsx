export default function Header() {
   return (
      <section className="header-wrapper">
         <header className="header">
            <div className="frame">
               <div className="header-content">
                  <img className="purple-white-1-icon" loading="lazy" alt="" src="./logo.svg" />
               </div>
               <div className="title-content-wrapper">
                  <div className="title-content">
                     <div className="title-alignment">
                        <nav className="title-row">
                           <div className="nav-link">Features</div>
                           <div className="nav-link">Enterprise</div>
                           <div className="nav-link">Company</div>
                           <div className="nav-link">Docs</div>
                           <div className="nav-link">Blog</div>
                           <button className="button">
                              <div className="get-started-btn">Get Started</div>
                           </button>
                        </nav>
                        {/* <div className="burger-menu">
                     <img loading="lazy" alt="" src="./list.svg" />
                   </div> */}
                     </div>
                  </div>
               </div>
            </div>
         </header>
      </section>
   );
}

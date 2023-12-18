import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="base">
          <section className="main_page section">
            <div className="main_page__in section_in">
              <div className="main_page__block">
                <Sidebar />
                <Content />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;

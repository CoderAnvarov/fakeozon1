import "../styles/main1.css";

function Main1() {
  return (
    <div className="sell_div">
      <h2 className="sell_title">O'zbekistondan mahsulotlar</h2>

      <div className="sell_grid">
        {Array.from({ length: 30 }).map((_, i) => (
          <div className="card" key={i}>
            <div className="card-img">
              <img
                src="https://ir-3.ozone.ru/s3/multimedia-1-v/wc500/8351007511.jpg"
                alt="SLADUS"
              />
              <span className="card-badge">Hafta chegirmalari</span>
            </div>
            <div className="card-price">
              48 756 so‘m <s>12</s> <small>-61%</small>
            </div>
            <div className="card-left">143 birlik qolgan</div>
            <div className="card-title">
              SLADUS Shirinliklar Drenajlar,400 g 12 dona qadoqda
            </div>
            <div className="card-btn">5 oktyabr</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main1;
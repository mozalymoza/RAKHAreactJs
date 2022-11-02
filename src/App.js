import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Parentbox">
    <div className="Foto">
      <img src="baju btr.jpg"/>
    </div>
    <div className="Deskripsi">
      <p className="Cate">Jersey</p>
      <h1 className="Title">Red Swagg</h1>
      <p className="Price">IDR 149.999.000</p>
      <p className="Info">
      Baju jersey dari prduk Bigetron kini hadir 
      di tokoh online bukalapak dan lazada silahkan berkunjung bila pengen yang ada diskon ikuti live IG kami!!
      </p>
      <div>
        <h2>Ukuran</h2> 
      <button className="S">S</button>
      <button className="L">L</button>
      <button className="XL">XL</button>
      <button className="XXL">XXL</button>
      </div>
      <button className="buy">Buy Now</button>
      <button className="Add">Add to wishlist</button>
    </div>
   </div>
  );
}

export default App;

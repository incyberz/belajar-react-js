import "./App.css";

function App() {
  const judul = "Lat 02 Dynamic Values";
  const jumlahLat = 30;

  return (
    <div className="App">
      <div className="content">
        <h1>{judul}</h1>

        <p>Jumlah latihan sebanyak {jumlahLat} latihan.</p>
        <p>Interpolasi 3 + 5 = {3 + 5}</p>
        <p>Array: {[1, 2, 3, 4, 5]}</p>
        <p>Random: {Math.random() * 10}</p>
      </div>
    </div>
  );
}

export default App;

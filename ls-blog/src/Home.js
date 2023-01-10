const Home = () => {
  const handleClick = () => {
    alert("Anda menekan sebuah tombol.");
  };

  const alertNama = (nama) => {
    alert(`Halo! nama saya ${nama}. \n\nSaya sedang belajar React.`);
  };

  return (
    <nav className="Home">
      <h2>Homepage / Landing Page</h2>
      <p>Welcome to Luar Sekolah Blog Page... !!</p>
      <code>Click Event Handler</code>
      <div className="mt-2">
        <button className="btn btn-primary" onClick={handleClick}>
          Click me!!
        </button>
        <hr />
        <button
          className="btn btn-success"
          onClick={() => {
            alertNama("Iin Sholihin");
          }}
        >
          Alert Nama
        </button>
      </div>
      <hr />
      <p>
        onclick adalah atribut HTML untuk menentukan aksi saat event klik pada
        sebuah elemen. Atribut ini bisa diisi dengan nama fungsi atau ekspresi
        javascript. Selain event onclick ada juga event lainnya seperti onchange
        , onmouseover , onkeyup , onload , dll
      </p>
    </nav>
  );
};

export default Home;

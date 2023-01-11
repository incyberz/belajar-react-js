import { useState } from "react";

const Home = () => {
  // hook syntax:
  // const [varName, functionName] = useState(defaultValue)
  // varName : nama variabel
  // functionName : fungsi untuk mengubah isi variabel
  // defaultValue : nilai awal saat form-load
  const [nama, setNama] = useState("Pengunjung");
  const [latNo, setLatNo] = useState(1);
  const [latKet, setLatKet] = useState("");
  const [arrHook, setArrHook] = useState([]);

  const [btnCaption, setBtnCaption] = useState("Click me!!");
  const [disableBtn, setDisableBtn] = useState("");

  const handleClick = () => {
    const namaBaru = "Iin Sholihin";

    // penggunaan hook function saat tombol di klik
    setNama(namaBaru);
    setLatNo(8);
    setLatKet(
      "React Hooks adalah fungsi JavaScript yang diimpor dari React untuk menambahkan kemampuan khusus untuk component yang dibuat. macam-macam hook diantaranya:"
    );
    setArrHook([
      "useState",
      "useEffect",
      "useReducer",
      "useRef",
      "useLayoutEffect",
      "useContext",
      "useImperativeHandle",
      "useMemo",
      "useCallback",
    ]);
    setBtnCaption("Button Clicked and Disabled");
    setDisableBtn("disabled");
  };

  return (
    <nav className="Home">
      <h2>React Tutorial Homepage</h2>
      <p>Welcome to Luar Sekolah Blog Page... !!</p>
      <code>
        Hallo {nama}! <br />
        Sekarang kita sedang latihan ke {latNo}
      </code>
      <div className="mt-2">
        <button
          className="btn btn-primary"
          onClick={handleClick}
          disabled={disableBtn}
        >
          {btnCaption}
        </button>
      </div>
      <div>{latKet}</div>
      <div>
        <code>{arrHook.join(" ")}</code>
      </div>
    </nav>
  );
};

export default Home;

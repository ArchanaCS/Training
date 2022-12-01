import "./Randomselect.css";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TbArrowsShuffle } from "react-icons/tb";
export default function Randomselect() {
  const [count, setCount] = useState(0);
  const [temparr, setTemparr] = useState([]);
  const [arr, setArr] = useState([
    { value: 1, selected: false },
    { value: 2, selected: false },
    { value: 3, selected: false },
    { value: 4, selected: false },
    { value: 5, selected: false },
    { value: 6, selected: false },
    { value: 7, selected: false },
    { value: 8, selected: false },
    { value: 9, selected: false },
    { value: 10, selected: false },
    { value: 11, selected: false },
    { value: 12, selected: false },
    { value: 13, selected: false },
    { value: 14, selected: false },
    { value: 15, selected: false },
    { value: 16, selected: false },
    { value: 17, selected: false },
    { value: 18, selected: false },
    { value: 19, selected: false },
    { value: 20, selected: false },
    { value: 21, selected: false },
    { value: 22, selected: false },
    { value: 23, selected: false },
    { value: 24, selected: false },
    { value: 25, selected: false },
    { value: 26, selected: false },
    { value: 27, selected: false },
    { value: 28, selected: false },
    { value: 29, selected: false },
    { value: 30, selected: false },
    { value: 31, selected: false },
    { value: 32, selected: false },
    { value: 33, selected: false },
    { value: 34, selected: false },
    { value: 35, selected: false },
    { value: 36, selected: false },
    { value: 37, selected: false },
    { value: 38, selected: false },
    { value: 39, selected: false },
    { value: 40, selected: false },
    { value: 41, selected: false },
    { value: 42, selected: false },
    { value: 43, selected: false },
    { value: 44, selected: false },
    { value: 45, selected: false },
    { value: 46, selected: false },
    { value: 47, selected: false },
    { value: 48, selected: false },
    { value: 49, selected: false },
  ]);

  const handleClick = (itm, indx) => {
    let temp = [...arr];

    temp[indx].selected = temp[indx].selected ? false : true;

    setArr(temp);
    console.log(temp);
  };
  for (var i = 0; i <= 49; i++) {
    if (arr.selected == true) setCount(count + 1);
  }

  const shuffle = () => {
    let ta = [];
    let test = [];
    let r;
    console.log(test);

    while (ta.length < 5) {
      r = Math.floor(Math.random() * 49) + 1;
      if(ta.indexOf(r) === -1)
      ta.push({ value: r, selected: true });
    }
    for(const t of ta)
    {
        var i=t.value;
        console.log("i",i)
    }

    const tempa = [...arr];
    for (const eleent of tempa) {
      eleent.selected = false;
    }
    for (const eleent of tempa) {
      for (const elt of ta) {
        if (eleent.value == elt.value) {
          eleent.selected = true;
          test.push({ value: eleent.value, selected: true });
        }
      }
    }

    setTemparr(tempa);

    console.log(test);
  };
  return (
    <div className="Lineselector">
      <div className="Header">Unit1</div>
      <div className="Middle">
        <>
          {arr.map((itm, indx) => {
            return (
              <>
                <button
                  key={itm}
                  onClick={() => {
                    handleClick(itm, indx);
                  }}
                  className={itm.selected ? "clicked" : "button"}
                >
                  {indx + 1}
                </button>
              </>
            );
          })}
          {/* {count} */}
        </>
      </div>
      <div className="Footer">
        <button>
          {" "}
          <TbArrowsShuffle onClick={shuffle} />
        </button>
        <button>
          {" "}
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
}

import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

import "./style/styles.css";
function Sample1() {
  const [list, setList] = useState({
    main: [
      {
        id: 1,
        name: "abc",
        level: "one",
        isExpaned: false,
        list: {
          data: [
            { id: 21, name: "pqr", level: "two", isExpaned: false },
            { id: 22, name: "stu", level: "two", isExpaned: false },
          ],
          count: 2,
        },
      },
      {
        id: 2,
        name: "efg",
        level: "one",
        isExpaned: false,
        list: {
          data: [
            { id: 23, name: "pqr", level: "two", isExpaned: false },
            { id: 24, name: "stu", level: "two", isExpaned: false },
          ],
          count: 2,
        },
      },
    ],
    maincount: 2,
  });

  const handleExpand = (e, item, index) => {
    e.preventDefault();
    var temp = list;
    temp.main[index].isExpaned = temp.main[index].isExpaned ? false : true;
    setList({ main: temp.main, maincount: temp.main.length });
  };
  const handleChildExpand = (e, item, index) => {
    e.preventDefault();
  };
  return (
    <div>
      <table>
        <tr>
          <th className="withborder constant"></th>
          <th className="withborder constant">id</th>
          <th className="withborder">Name</th>
          <th className="withborder">Level</th>
          <th className="withborder"></th>
        </tr>
        {list.main.map((item, index) => {
          return (
            <>
              <tr key={item.id}>
                <td className="right constant">
                  {item.isExpaned ? (
                    <FaAngleDown
                      onClick={(e) => handleExpand(e, item, index)}
                    />
                  ) : (
                    <FaAngleRight
                      onClick={(e) => handleExpand(e, item, index)}
                    />
                  )}
                </td>
                <td className="parentbg constant">{item.id}</td>
                <td className="parentbg">{item.name}</td>
                <td className="parentbg">{item.level}</td>
                <td className="parentbg"></td>
              </tr>
              {item.list.data.map((childItem, childIndex) => {
                return (
                  <tr className={item.isExpaned ? "none" : "display"}>
                    <td className="constant"></td>
                    <td className="right constant">
                      {childItem.isExpaned ? (
                        <FaAngleDown
                          onClick={(e) => handleChildExpand(e, item, index)}
                        />
                      ) : (
                        <FaAngleRight
                          onClick={(e) => handleChildExpand(e, item, index)}
                        />
                      )}
                    </td>
                    <td className="childbg">{childItem.id}</td>
                    <td className="childbg">{childItem.name}</td>
                    <td className="childbg">{childItem.level}</td>
                  </tr>
                );
              })}
            </>
          );
        })}
      </table>
    </div>
  );
}
export default Sample1;
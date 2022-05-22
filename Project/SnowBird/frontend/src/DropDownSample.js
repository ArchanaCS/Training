import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

import "./style/styles.css";
function DropDownSample() {
  const [list, setList] = useState([
    {
      id: 1,
      name: "abc",
      level: "one",
      isExpaned: false,
      list: [
        {
          id: 21,
          name: "pqr",
          level: "two",
          isExpaned: false,
          innerlist: [5, 6, 7],
        },
        {
          id: 22,
          name: "stu",
          level: "two",
          isExpaned: false,
          innerlist: [9, 8],
        },
      ],
    },
    {
      id: 2,
      name: "efg",
      level: "one",
      isExpaned: false,
      list: [
        {
          id: 23,
          name: "pqr",
          level: "two",
          isExpaned: false,
          innerlist: [1, 2, 3],
        },
        {
          id: 24,
          name: "stu",
          level: "two",
          isExpaned: false,
          innerlist: [1, 2],
        },
      ],
    },
  ]);

  const handleExpand = (e, item, index) => {
    e.preventDefault();
    var temp = [...list];
    temp[index].isExpaned = temp[index].isExpaned ? false : true;
    setList(temp);
  };
  const handleChildExpand = (e, item, index, childIndex) => {
    e.preventDefault();
    var temp = [...list];
    console.log(childIndex);
    console.log(temp[index].list);
    temp[index].list[childIndex].isExpaned = temp[index].list[childIndex]
      .isExpaned
      ? false
      : true;
    setList(temp);
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
        {list.map((item, index) => {
          return (
            <>
              <tr key={item.id}>
                <td className="right constant">
                  {item.isExpaned ? (
                    <FaAngleRight
                      onClick={(e) => handleExpand(e, item, index)}
                    />
                  ) : (
                    <FaAngleDown
                      onClick={(e) => handleExpand(e, item, index)}
                    />
                  )}
                </td>
                <td className="parentbg constant">{item.id}</td>
                <td className="parentbg">{item.name}</td>
                <td className="parentbg">{item.level}</td>
                <td className="parentbg"></td>
              </tr>
              {item.list.map((childItem, childIndex) => {
                return (
                  <>
                    <tr
                      className={
                        item.isExpaned 
                          ? "none"
                          : "display"
                      }
                    >
                      <td className="constant"></td>
                      <td className="right constant">
                        {childItem.isExpaned ? (
                          <FaAngleRight
                            onClick={(e) =>
                              handleChildExpand(e, item, index, childIndex)
                            }
                          />
                        ) : (
                          <FaAngleDown
                            onClick={(e) =>
                              handleChildExpand(e, item, index, childIndex)
                            }
                          />
                        )}
                      </td>
                      <td className="childbg">{childItem.id}</td>
                      <td className="childbg">{childItem.name}</td>
                      <td className="childbg">{childItem.level}</td>
                    </tr>
                  </>
                );
              })}
            </>
          );
        })}
      </table>
    </div>
  );
}
export default DropDownSample;
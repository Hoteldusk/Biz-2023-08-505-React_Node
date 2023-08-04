import BBsItem from "./BBsItems";
import { useState, useEffect } from "react";
import "../css/Bbs.css";

const BBsList = () => {
  const [bbs, setBbs] = useState([]);

  useEffect(() => {
    const getBBsListAll = async () => {
      // proxy 설정해놓으면 proxy 주소를 사용하여 server에 요청 CORS 오류 방지할수 있음
      const res = await fetch("/bbs");
      const result = await res.json();
      setBbs([...result]);
    };
    getBBsListAll();
  });

  const bbsItemList = bbs.map((item) => {
    return <BBsItem item={item} key={item.b_seq} />;
  });

  return (
    <>
      <h1>게시판</h1>
      <table>
        <thead>
          <tr>
            <th>일련번호</th>
            <th>제목</th>
            <th>내용</th>
          </tr>
        </thead>
        <tbody>{bbsItemList}</tbody>
      </table>
    </>
  );
};
export default BBsList;

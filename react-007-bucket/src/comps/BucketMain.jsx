import styled from "styled-components";
import BucketSearch from "./BucketSearch";
import { useLoaderData, NavLink, Outlet } from "react-router-dom";
import { getBucketList, newBucket } from "../modules/bucketFetch";

const ASideBar = styled.aside`
  width: 22rem;
  background-color: #f7f7f7;
  border-right: solid 2px #cccc;
  display: flex;
  flex-direction: column;
`;

/**
 * 다른 tag 로 감싸진 a tag 의 속성 지정하기
 * a tag는 다른 tag 와 달리 상당히 독자적인 성질을 많이 갖는다
 * 다른 tag(여기에서는 li tag)로 감싸는 구조일 경우
 * 실제 a tag 가 지정된 문자열을 클릭하면 a tag 의 해 URL 이 변화되는데
 * 만약 a tag 바깥쪽을 클릭하면 실제로 URL 변화등이 없다
 * <li><a href="#">text</a></li>
 * 위 고조에서 <a href="#"><li>text</li></a> 처럼 만들 수 있지만 이는 HTML 5 문법구조에 어긋나는 패턴이다
 * 이럴때는 a tag 의 display를 inline-block 으로 설정하고,
 * width, padding 을 설정하여 li tag 에 가득 채워지도록 만드는 것이 좋다
 */
const UL = styled.ul`
  list-style: none;
  margin: 5px;
  margin-right: 10px;
  & li {
    margin: 10px;
    padding: 0;
    text-align: left;

    &:hover {
      background-color: #ddd;
      cursor: pointer;
      color: skyblue;
    }
  }
  & a {
    text-decoration: none;
    display: inline-block;
    width: 100%;
    /* border: 1px solid blue; */

    margin: 0;
    padding: 12px 16px;

    box-shadow: 2px 2px 2px 2px rgba(7, 7, 7, 0.3),
      2px 3px 3px 3px rgba(0, 0, 0, 0.2);

    color: inherit;
  }
`;

export const mainLoader = async () => {
  const bucketList = await getBucketList();
  return { bucketList };
};

export const mainAction = async () => {
  const bucket = await newBucket();
  return "";
};

const BucketMain = () => {
  const { bucketList } = useLoaderData();
  const bucketItemListView = bucketList.map((item) => {
    return (
      <li>
        <NavLink to={`content/${item.id}`}>{item.bucket}</NavLink>
      </li>
    );
  });
  return (
    <>
      <ASideBar>
        <BucketSearch />
        <UL>{bucketItemListView}</UL>
      </ASideBar>
      <div>
        <h1>
          <Outlet />
        </h1>
      </div>
    </>
  );
};
export default BucketMain;

// export default BucketMain = () => {
//     return <h1>여기는 Bucket Main</h1>;
//   };

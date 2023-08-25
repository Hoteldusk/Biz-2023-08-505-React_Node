import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  justify-content: center;

  & div {
    border: 5px solid coral;
    margin-right: 20%;
    margin-top: 20px;
    width: 25%;
    height: 20%;
    display: flex;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0px;

    & h1 {
      color: coral;
      /* text-shadow: 1px 1px 1px black; */
      font-size: 40px;
    }
  }
`;

const BucketIndex = () => {
  return (
    <Container>
      <div>
        <h1>나의 버킷 리스트</h1>
      </div>
    </Container>
  );
};
export default BucketIndex;

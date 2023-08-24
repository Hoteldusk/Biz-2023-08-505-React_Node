import styled from "styled-components";

const Container = styled.div`
  /* width: 100%; */
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;

  & div {
    width: 80%;
    & h1 {
      color: blue;
      text-shadow: 1px 1px 1px black;
    }
  }
`;

const BucketIndex = () => {
  return (
    <Container className="container">
      <div>
        <h1>나의 버킷 리스트</h1>
      </div>
    </Container>
  );
};
export default BucketIndex;

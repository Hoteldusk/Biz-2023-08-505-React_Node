import { Button, Form, InputDiv } from "../styled/BBsStyled";
const BBsInput = ({ bbsDto, setBbsDto }) => {
  const inputOnChange = (e) => {
    const { name, value } = e.target;

    setBbsDto({ ...bbsDto, [name]: value });
  };

  return (
    <Form>
      <InputDiv>
        <label htmlFor="">작성자</label>
        <input
          type="text"
          value={bbsDto.bWriter}
          name="bWriter"
          onChange={inputOnChange}
        />
      </InputDiv>
      <InputDiv>
        <label htmlFor="">제목</label>
        <input
          type="text"
          value={bbsDto.bSubject}
          name="bSubject"
          onChange={inputOnChange}
        />
      </InputDiv>
      <InputDiv>
        <label htmlFor="">내용</label>
        <textarea
          rows={10}
          value={bbsDto.bContent}
          name="bContent"
          onChange={inputOnChange}
        />
      </InputDiv>
      <Button type="button" />
    </Form>
  );
};

export default BBsInput;

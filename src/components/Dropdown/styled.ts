import styled from "styled-components";

const DropdownStyledComponents = {
  Container: styled.div`
    display: inline-flex;
    flex-direction: column;
    gap: 4px;
    width: 119px;
  `,

  DropdownInput: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 119px;
    height: 40px;
    padding: 9.5px 18px 9.5px 16px;
    border-radius: 6px;
    border: 1px solid #eee;
    background: #fff;

    cursor: pointer;
  `,

  DropdownOptions: styled.ul`
    list-style-type: none;

    height: 128px;
    padding: 4px 0;
    margin: 0;

    border: 1px solid #eee;
    border-radius: 6px;

    overflow-y: auto;

    li {
      display: flex;
      align-items: center;
      padding: 0 16px;
      height: 40px;
      cursor: pointer;
    }
  `,

  Text: styled.span`
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    line-height: 150%;

    word-break: break-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
};

export default DropdownStyledComponents;

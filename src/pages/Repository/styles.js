import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }
  h1 {
    font-size: 24px;
    margin-top: 10px;
  }
  p {
    max-width: 400px;
    text-align: center;
    line-height: 1.4;
    color: #666;
    font-size: 14px;
    margin-top: 5px;
  }
`;

export const IssuesList = styled.ul`
  list-style: none;
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    & + li {
      margin-top: 10px;
    }
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #eee;
  }

  div {
    flex: 1;
    margin-left: 15px;

    strong {
      font-size: 16px;

      a {
        text-decoration: none;
        color: #333;

        &:hover {
          color: #7159c1;
        }
      }
      span {
        background: #eee;
        color: #333;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
        margin-left: 10px;
      }
    }
    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }
`;
export const ListBox = styled.form`
  display: flex;
  margin-top: 25px;
  background-image: linear-gradient(105deg, #7159c1, violet);
  align-items: center;
  padding: 5px;
  border-radius: 4px;

  div {
    margin-left: 15px;
    display: flex;
    padding: 8px 20px;
    align-items: center;
    border-radius: 8px;
    background-color: #fff;
  }

  label,
  h2 {
    margin: 0 8px;
    font-weight: 600;
    font-size: 18px;
    color: #000;
  }
  h2 {
    color: #fff;
  }
`;

export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;

  button {
    color: #fff;
    padding: 5px 10px;
    background-image: linear-gradient(105deg, #7159c1, violet);
    border-radius: 7px;
    border: 0;

    & + button {
      margin-left: 10px;
      background-image: linear-gradient(105deg, #7159c1, violet);
    }
  }
`;

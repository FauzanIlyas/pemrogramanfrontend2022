import styled from "styled-components";

const StyledHero = styled.div`
  margin: 5rem auto;
  padding: 1rem;

  section {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  h2 {
    color: #000000;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }

  h3 {
    color: #b22222;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  p {
    color: #000000;
    margin-bottom: 1rem;
  }

  button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    color: #fffafa;
    background-color: #000000;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }

  @media screen and (min-width: 768px) {
    /*
     * Nothing TODO Here.
     * We dont change style Hero. 
     */
  }

  @media screen and (min-width: 992px) {
    /* .container {
      max-width: 1200px;
    } */

    section {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }
  }
`;

export default StyledHero;

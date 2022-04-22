import styled from 'styled-components';

function Character(props) {

  const { name, eyeColor, height, mass } = props;

  const StyledCharacter = styled.div`
    color: ${eyeColor==='blue-gray'?'lightblue':eyeColor};
    height: ${height}px;
    width: ${mass**3/height/10}px;
    background-color: rgba(4,10,17,90%);
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 1% auto;
    font-size: ${mass>50?'1rem':'0.8rem'};
    border-radius: 10px;
    border: 2px solid ${eyeColor==='blue-gray'?'lightblue':eyeColor};
    padding: 1%;
`

  const StyledCharacterInfo = styled.p`
    color: white;
    font-size: ${mass>50?'0.8rem':'0.5rem'};
`

  return (
    <StyledCharacter id={name}>
      <p>{name}</p>
      <StyledCharacterInfo>Height: {height} | Mass: {mass} | Eye color: {eyeColor}</StyledCharacterInfo>
    </StyledCharacter>
        );
}

export default Character

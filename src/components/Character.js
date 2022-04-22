import styled from 'styled-components';

function Character(props) {

  const { name } = props;

  const StyledCharacter = styled.div`
    background-color: blue;
    color: white;
`

  return (
    <StyledCharacter id={name}>
      <p>{name}</p>
    </StyledCharacter>
        );
}

export default Character

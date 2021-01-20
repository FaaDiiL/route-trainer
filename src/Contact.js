import styled from 'styled-components'

const StyledDiv = styled.div`
height:150px;
background-color:green;
h1 {
     background-color:darkgreen;
}
ul{
     list-style-type:none;
     
}
li {
     color: white;
     display: inline;
}
`

function Contact() {
     return (
          <StyledDiv>
               <h1>Contact! </h1>
               <p>Test text paragraf! </p>
               <ul>
                    <li>Hej </li>
                    <li>På </li>
                    <li>Er!</li>
               </ul> 
          </StyledDiv>
     )
}

export default Contact

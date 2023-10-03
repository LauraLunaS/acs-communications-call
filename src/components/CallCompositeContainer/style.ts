import styled from 'styled-components';

export const Font = styled.div `
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: black;

    :nth-child(1) {
        font-family: Montserrat, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        color: black;
        

        .ms-Button.ms-Button--primary {
            background-color: var(--pink);
            color: #fff;
            border: none;
            border-radius: 10px;
            box-shadow: 0px 1.57895px 1.57895px 0px rgba(0, 0, 0, 0.25);

            span {
                color: #fff;
            }

            svg {
                path {
                    color: #fff;
                }
            }
        }

    }

    

`
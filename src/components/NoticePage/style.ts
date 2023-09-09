import styled from 'styled-components';

export const Container = styled.div`
    .title {
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        font-size: 1.1rem;
        margin-bottom: 10px;
    }

    .subtitle {
        font-family: 'Montserrat', sans-serif;
        font-size: 0.9rem;
    }
    
    @media screen and (min-width: 1025px) and (max-width: 1920px) {
        .title {
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        font-size: 1.3rem;
        margin-bottom: 10px;
    }

    .subtitle {
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;
    }
    }
`;
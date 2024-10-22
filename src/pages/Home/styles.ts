import styled from "styled-components";




export const Container = styled.div`
    display: flex;
    padding: 0 40px;
    height: 100%;
    min-height: 100vh;
    flex-direction: column;
    align-items: center; 
    background: linear-gradient(to bottom, #00BEB6, #004816);
    
`;

export const Logo = styled.img`
    max-width: 30%; 
    height: auto; 
    margin:  30px 0 40px; 
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    justify-items: center;
    grid-row-gap: 45px;
    grid-column-gap: 45px;
    margin-bottom: 40px;
    justify-content: center;
    width: 100%; 

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const RefetchButton = styled.button`
    margin-top: 20px; 
    padding: 10px 20px; 
    font-size: 16px; 
`;



export const ErrorMessage = styled.p`
    color: white; 
    font-weight: 700;
    text-align: center; 
`;


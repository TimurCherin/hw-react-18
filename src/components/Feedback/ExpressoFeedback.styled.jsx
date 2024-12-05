import styled from "styled-components";

export const Wrap = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
 
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    li {
        margin: 5px 0;
    }
    button {
        margin: 5px;
        padding: 5px 10px;
        border: 1px solid #ccc;
        border-radius: 3px;
        cursor: pointer;

        &:hover {
            background-color: #f0f0f0;
        }
    }
`;
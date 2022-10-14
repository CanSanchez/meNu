import styled from "styled-components";
import {InputSimpleUsageShowcase} from '/Users/shaelynlorch/meNu/components/form/index.js';
import {FaUserAlt} from 'react-icons/fa';

const Layout = styled.div`
    display:flex;
    padding:10px;


`;

export default function LoginForm(){

    return <Layout>
        <InputSimpleUsageShowcase></InputSimpleUsageShowcase>


    </Layout>
}
import React from 'react';
import { Container, Content } from './styles';
import { FiMail, FiLock } from 'react-icons/fi';

import Button from '../../components/Button';
import Input from '../../components/Input';

const Login: React.FC = () => {
    return (
        <Container>
            <Content>
                <form>
                    <h1>Faça seu login</h1>

                    <Input
                        icon={FiMail}
                        name="email"
                        type="text"
                        placeholder="E-mail"
                        autoComplete="false"
                    />

                    <Input
                        icon={FiLock}
                        name="password"
                        type="password"
                        placeholder="Senha"
                    />

                    <Button />

                    <a href="forgot">Esqueci minha senha</a>
                </form>
            </Content>
        </Container>
    )
}

export default Login;

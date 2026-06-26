import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import {
  Column,
  Container,
  Row,
  SubtitleRegister,
  Title,
  TitleRegister,
  Wrapper,
  FazerLogin,
  TenhoConta,
} from "./styles";

const schema = yup
  .object({
    fullName: yup
      .string()
      .required("Nome completo obrigatório!"),

    email: yup
      .string()
      .email("Email não é valido!")
      .required("Campo Obrigatório"),
    password: yup
      .string()
      .min(4, "No mínimo 4 caracteres")
      .required("Campo Obrigatório"),
  })
  .required();

const Register = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(`/users?email=${formData.email}`);
  
      if (data.length > 0) {
        alert("Este e-mail já está cadastrado.");
        return;
      }
  
      await api.post("/users", {
        id: formData.id,
        name: formData.fullName,
        email: formData.email,
        senha: formData.password,
      });
  
      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      alert("Erro ao cadastrar usuário.");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <TitleRegister>Comece agora grátis</TitleRegister>
          <SubtitleRegister>
            Crie sua conta e make the change._
          </SubtitleRegister>
          <Wrapper>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="fullName"
                errorMessage={errors?.fullName?.message}
                control={control}
                placeholder="Nome completo"
                leftIcon={<MdPerson />}
              />
              <Input
                name="email"
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="E-mail"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                errorMessage={errors?.password?.message}
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button title="Confirmar" variant="secondary" type="submit" />
            </form>
            <Row>
              <TenhoConta>Já tenho conta.</TenhoConta>
              <FazerLogin as={Link} to="/login">
                Fazer Login
              </FazerLogin>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Register };

import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { useUser } from "../../hooks/UseContext"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import Logo from "../../../images/Tela de login.jpg"
import * as Yup from "yup"

import api from "../../services/api"
import {
  Button,
  Container,
  ContainerItens,
  ErrorMessage,
  Input,
  Label,
  LoginImg,
  SingLink,
  Title,
} from "./style"

function Login() {
  const {putUserData} = useUser()

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Digite um email valido")
      .required("O e-mail é obrigatório"),
    password: Yup.string()
      .required("A senha é obrigatório")
      .min(6, "A senha deve ter no minimo 6 caracteristicas"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (clientData) => {
    const { data } = await toast.promise(
      api.post("sessions", {
        email: clientData.email,
        password: clientData.password,
      }),
      {
        pending: "Verificando seus dados",
        success: "Tudo certo, seja bem-vindo 👌",
        error: "Verfique seu e-mail e senha 🤯",
      },
    )

    putUserData(data)
  }

  return (
    <Container>
      <LoginImg src={Logo} />

      <ContainerItens>
        <Title>
          <b>H</b>otel.Book
        </Title>

        <h1>Welcome !</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.email?.message}>Email</Label>
          <Input
            typer="email"
            {...register("email")}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.name?.email}</ErrorMessage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input
            typer="password"
            {...register("password")}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.email}</ErrorMessage>

          <Button>Entrar</Button>
        </form>

        <SingLink>
          Não tem conta? <a>Sing up</a>{" "}
        </SingLink>
      </ContainerItens>
    </Container>
  )
}

export default Login

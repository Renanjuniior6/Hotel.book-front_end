import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import * as Yup from "yup"

import { useUser } from "../../hooks/UserContext"
import api from "../../services/api"
import {
  Button,
  Container,
  ContainerItens,
  ErrorMessage,
  Input,
  Label,
  SignLink,
  Title,
} from "./style"

function Login() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("O e-mail é invalido")
      .required("O e-mail é obrigatório"),
    password: Yup.string()
      .required("A senha é obrigatória")
      .min(6, "A senha deve ter no minimo 6 dígitos"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const { putUserData } = useUser()

  const navigate = useNavigate()

  const onSubmit = async (clientData) => {
    try {
      const { status, data } = await api.post(
        "session",
        {
          email: clientData.email,
          password: clientData.password,
        },
        { validateStatus: () => true },
      )

      console.log(status)

      if (status === 200 || status === 201) {
        putUserData(data)
        toast.success("Login efetuado")

        setTimeout(() => {
          navigate("/")
        }, 1000)
      } else if (status === 401) {
        toast.error("Verifique seu email ou senha!")
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error("Falha no sistema, tente novamente!")
    }
  }

  return (
    <Container>
      <ContainerItens>
        <Title>
          <b>H</b>otel.Book
        </Title>

        <h1>Welcome !</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.email?.message}>Email</Label>
          <Input
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit">Entrar</Button>
        </form>

        <SignLink>
          Não tem conta? <a>Sign up</a>{" "}
        </SignLink>
      </ContainerItens>
    </Container>
  )
}

export default Login

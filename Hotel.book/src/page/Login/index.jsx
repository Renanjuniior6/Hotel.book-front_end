import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { useForm } from "react-hook-form"
import { useNavigate, Link } from "react-router-dom"
import { toast } from "react-toastify"
import * as Yup from "yup"

import { Button, Logo, Slider } from "../../components"
import { useUser } from "../../hooks/UserContext"
import api from "../../services/api"
import {
  Container,
  ContainerItens,
  ErrorMessage,
  Input,
  Label,
  SignLink,
  Content,
} from "./style"

export function Login() {
  const { putUserData } = useUser()

  const navigate = useNavigate()

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Digite um email válido")
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

  const onSubmit = async (clientData) => {
    console.log(clientData)

    try {
      const { status, data } = await api.post(
        "session",
        {
          email: clientData.email,
          password: clientData.password,
        },
        { validateStatus: () => true },
      )

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
      <Content>
        <Slider />
        <ContainerItens>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Logo styles="true" />
            <h1>Bem vindo !</h1>
            <Label>Email</Label>
            <Input
              type="email"
              {...register("email")}
              error={errors.email?.message}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>

            <Label>Senha</Label>
            <Input
              type="password"
              {...register("password")}
              error={errors.password?.message}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>

            <Button type="submit">Entrar</Button>
          </form>

          <SignLink>
            Não tem conta? <Link to={"/cadastro"}>Cadastre-se</Link>{" "}
          </SignLink>
        </ContainerItens>
      </Content>
    </Container>
  )
}

import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import * as Yup from "yup"

import { Button } from "../../components/Button"
import api from "../../services/api"
import {
  Container,
  ContainerItens,
  Input,
  Label,
  ErrorMessage,
  Title,
  SignLink,
} from "./style"

function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required("Seu nome é obrigatorio"),
    email: Yup.string().required("O seu email é obrigatorio"),
    password: Yup.string()
      .required("A senha é obrigatoria")
      .min(6, "A senha deve ter no minimo 6 dígitos"),
    confirmPassword: Yup.string()
      .required("A senha é obrigatoria")
      .oneOf([Yup.ref("password")], "As senhas devem ser iguais"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const navigate = useNavigate()

  const onSubmit = async (clientData) => {
    try {
      const { status } = await api.post(
        "users",
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password,
        },
        { validateStatus: () => true },
      )

      if (status === 200 || status === 201) {
        toast.success("Cadastro realizado!")

        setTimeout(() => {
          navigate("/login")
        }, 1000)
      } else if (status === 409) {
        toast.error("Email já cadastrado")
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error("Falha no sistema! Tente novamente")
    }
  }

  return (
    <Container>
      <ContainerItens>
        <Title>
          <b>H</b>otel.Book
        </Title>

        <h1>Log in or create an account</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome</Label>
          <Input
            type="text"
            {...register("name")}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

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

          <Label error={errors.confirmPassword?.message}>
            Confirme sua senha
          </Label>
          <Input
            type="password"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit">Cadastrar</Button>
        </form>

        <SignLink>
          Já tem conta?{" "}
          <Link style={{ color: "#ffff" }} to="/Login">
            Entrar
          </Link>{" "}
        </SignLink>
      </ContainerItens>
    </Container>
  )
}

export default Register

import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { useForm } from "react-hook-form"

import { Container, ContainerItens, Input, Label, ErrorMessage, Title, SingLink } from "./style"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from "react-toastify"

import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import * as Yup from "yup"

import api from "../../services/api"
import {
  Container,
  ContainerItens,
  Input,
  Label,
  ErrorMessage,
  Title,
  SingLink,
} from "./style"

function Cadastro() {
  const schema = Yup.object().shape({
    name: Yup.string().required("Seu nome é obrigatorio"),
    email: Yup.string().required("O seu email é obrigatorio"),
    password: Yup.string().required("A senha é obrigatoria").min(6, "A senha deve ter no minimo 6 caracteristicas"),
    confirmPassoword: Yup.string().required("A senha é obrigatoria").oneOf([Yup.ref("password")]
      , "As senhas devem ser parecida"),
    name: Yup.string("Coloque seu nome").required("Seu nome é obrigatorio"),
    email: Yup.string("Coloque seu email").required(
      "O seu email é obrigatorio",
    ),
    password: Yup.string("coloque sua senha")
      .required("A senha é obrigatoria")
      .min(6, "A senha deve ter no minimo 6 caracteristicas"),
    confirmPassoword: Yup.string()
      .required("A senha é obrigatoria")
      .oneOf([Yup.ref("password")], "As senhas devem ser parecida"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (clientData) => {
    try {
      const { status } = await api.get(
        "session",
        {
          name: clientData.name,
          emial: clientData.email,
          password: clientData.password,
        },
        {
          validityStatus: () => true,
        },
      )

      if (status === 200 || status === 201) {
        toast.promise("Parabéns, cadastro realizado com sucesso!")
      } else if (status === 409) {
        toast.error("O email já esta registrado, faça login")
      } else {
        throw new Error()
      }
    } catch (erros) {
      toast.error("O sistema está fora do ar")
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
            typer="text"
            {...register("name")}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

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
          <ErrorMessage>{errors.name?.email}</ErrorMessage>

          <Label error={errors.password?.message}>Confimar sua senha</Label>
          <Input
            typer="password"
            {...register("password")}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.name?.email}</ErrorMessage>
        </form>

        <SingLink>
          Já tem conta?{" "}
          <Link style={{ color: "#FFFf" }} to="/Login">
            Entrar
          </Link>{" "}
        </SingLink>
      </ContainerItens>
    </Container>
  )
}

export default Cadastro

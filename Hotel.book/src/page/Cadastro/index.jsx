import React from "react"
import { useForm } from "react-hook-form"
//import { Button } from "../../components/Button"
import { Container, ContainerItens, Input, Label, ErrorMessage, Title } from "./style"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

function Cadastro() {

  const schema = Yup.object().shape({
    name: Yup.string().required("Seu nome é obrigatorio"),
    email: Yup.string().required("O seu email é obrigatorio"),
    password: Yup.string().required("A senha é obrigatoria").min(6, "A senha deve ter no minimo 6 caracteristicas"),
    confirmPassoword: Yup.string().required("A senha é obrigatoria").oneOf([Yup.ref("password")]
      , "As senhas devem ser parecida"),
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const response = await api.get('session', {
      name: clientData.name,
      emial: clientData.emial,
      password: clientData.password
    })
  }

  return (
    <Container>
      <Title>
        <b>H</b>otel.Book
      </Title>

      <ContainerItens>
        <h1>Cadrastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)} >
          <Label error={errors.name?.message}>Nome</Label>
          <Input typer="text" {...register("name")} error={errors.name?.message} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message}>Email</Label>
          <Input typer="email" {...register("email")} error={errors.email?.message} />
          <ErrorMessage>{errors.name?.email}</ErrorMessage>


          <Label error={errors.password?.message}>Senha</Label>
          <Input typer="password" {...register("password")} error={errors.password?.message} />
          <ErrorMessage>{errors.name?.email}</ErrorMessage>

          <Label error={errors.password?.message}>Confimar sua senha</Label>
          <Input typer="password" {...register("password")} error={errors.password?.message} />
          <ErrorMessage>{errors.name?.email}</ErrorMessage>
        </form>

      </ContainerItens>
    </Container>
  )
}

export default Cadastro
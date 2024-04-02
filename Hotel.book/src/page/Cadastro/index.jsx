import React from "react"
import { useForm } from "react-hook-form"
//import { Button } from "../../components/Button"
import { Container, ContainerItens, Input, Label, ErrorMessage } from "./style"

function Cadastro() {
  return (
    <Container>
      // colocar img de "hotel.book"

      <ContainerItens>
      //colocar img
        <h1>Cadrastre-se</h1>

        <form onSubmit={handleSubmit(onsubmit)} >
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
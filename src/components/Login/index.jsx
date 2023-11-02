import { Container, Form, H2, Label, Input, Button, ErrorP  } from './styles'
import { toast } from 'react-toastify';
import axios from 'axios'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"


const schema = z.object({
   email: z.string().nonempty({message: "campo obrigatório"})
   .email({message: "Digite um e-mail válido"}),
   password: z.string().nonempty({message: "campo obrigatório"})
   
   
   
})

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
       resolver: zodResolver(schema)
      })

      const onSubmit =  async (data) => {
        try {
            const response =  axios.post('http://localhost:9000/login', data).then(res =>{
            console.log(res.data)
        })
        toast.success('Entrada com sucesso', {
            position: "top-right",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        } catch (error) {
            toast.error('Dados incorretos', {
                position: "top-right",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }

       
       
      }



    return (
        <Container>
            <Form>
                <H2>Login</H2>
                
                <form  noValidate onSubmit={handleSubmit(onSubmit)}>
                <Label>E-mail</Label>
                <Input  {...register("email")}   type='email' placeholder='Digite seu e-mail'/>
                {errors.email?.message && <ErrorP>{errors.email?.message}</ErrorP>}

                <Label>Password</Label>
                <Input  {...register("password")}  type='password' placeholder='Digite sua senha' />
                {errors.password?.message && <ErrorP>{errors.password?.message}</ErrorP>}

                <Button type='submit' >Entrar</Button>
                </form>
            </Form>


        </Container>
    )
}

export default Login
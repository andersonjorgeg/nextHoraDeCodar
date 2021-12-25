import Link from 'next/link'

import { useRouter } from 'next/router'

export default function Todo() {

  // useRouter() retorna um objeto com métodos para manipular o navegador e o URL da página atual do usuário 
  const router = useRouter()

  // router.query é um objeto com os parâmetros da rota atual (ex: /todos/1).
  const todoId = router.query.todoId

  return (
    <>
      <Link href="/todos">
        <a>Voltar</a>
      </Link>
      <h1>Exibindo o todo: {todoId}</h1>
      <p>Comentário: la la la... 
        <Link href={`/todos/${todoId}/comments/1`}>
          <a>Detalhes</a>
        </Link>
      </p>
      <p>Comentário: le le le... 
        <Link href={`/todos/${todoId}/comments/2`}>
          <a>Detalhes</a>
        </Link>
      </p>
      <p>Comentário: li li li... 
        <Link href={`/todos/${todoId}/comments/3`}>
          <a>Detalhes</a>
        </Link>
      </p>
    </>
  )
}
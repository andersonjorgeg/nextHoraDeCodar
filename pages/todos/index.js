import Head from 'next/Head'
import style from '../../styles/Todos.module.css'

// a função getStaticProps é chamada pelo Next.js antes de renderizar a página e retorna um objeto com os dados da página
export async function getStaticProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos = await data.json()
  return {
    props: { todos },
  }
}

export default function Todos({ todos }) {
  return (
    <>
      <Head>
        <title>Todos</title>
      </Head>
      <div>
        <h1>Tarefas para fazer:</h1>
        <ul className={style.todolist}>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

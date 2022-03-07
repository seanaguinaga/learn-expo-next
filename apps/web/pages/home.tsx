import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()
  router.push('/')
  return null
}

export default Home
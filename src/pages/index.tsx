import type { NextPage } from 'next'

import { useSynchronize } from '../api/auth/access-synchronize.api'
import { Content } from '../components/home/content'

const Home: NextPage = () => {
  const synchronize = useSynchronize()

  console.log(synchronize)

  return <Content />
}

export default Home

import { useNavigate } from 'react-router-dom'

import { Head } from '@/components/Head'
import { MainLayout } from '@/components/Layout/MainLayout'
import { useAuth } from '@/lib/auth'

export const Landing = () => {
  const navigate = useNavigate()
  const { user } = useAuth()

  const handleStart = () => {
    if (user) {
      navigate('/app')
    } else {
      navigate('/auth/login')
    }
  }

  return (
    <MainLayout>
      <Head description="Welcome to bulletproof react" />
      <div className="flex h-[100vh] items-center bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block text-[red]">Bulletproof React</span>
          </h2>

          <p>Showcasing Best Practices For Building React Applications</p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <button onClick={handleStart}>Get started</button>
            </div>

            <div className="ml-3 inline-flex">
              <a
                href="https://github.com/alan2207/bulletproof-react"
                target="_blank"
                rel="noreferrer"
              >
                <button>Github Repo</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

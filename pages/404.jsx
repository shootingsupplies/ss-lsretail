import Link from 'next/link'
import Layout from '../components/layout/Layout'

const ErrorPage = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <h1 className="mt-12 text-4xl text-gray-900 font-black">404 - Page not Found</h1>
        <p className="mt-8 text-xl">Oops - It looks like we have lost or moved a page</p>
        <p className="mt-4 text-xl">Click <span className="underline text-ssblue"><Link href="/"><a>here</a></Link></span> to return to the home page and start again.
      </p>
      </div>
    </Layout>
  )
}

export default ErrorPage
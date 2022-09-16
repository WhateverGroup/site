import Head from 'next/head'
import { Container } from '@/components/Container'

export default function Privacy() {
  return(
    <>
      <Head>
        <title>Whatever – Privacy Policy</title>
        <meta name="description"
         content="Whatever Group Ltd's privacy policy."
         />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl pt-6">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Whatever – Privacy Policy
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Your privacy is important to us. 
          </p>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            It is Whatever's policy to respect your privacy regarding any information we may collect from you across our website, https://whatever.xyz, and other sites we own and operate.
          </p>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
          </p>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.
          </p>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
          </p>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
          </p>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
          </p>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
          </p>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            This policy is effective as of 1 November 2020.
          </p>
        </div>
      </Container>
    </>
  )
}
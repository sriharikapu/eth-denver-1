// import Link from 'next/link'
import Layout from '../src/layouts'
import Head from '../src/components/head'
import RegulatorServiceForm from '../src/components/forms/regulator-service.js'

export default () => (
  <Layout>
    <div className='center measure'>
      <RegulatorServiceForm />
    </div>
  </Layout>
)
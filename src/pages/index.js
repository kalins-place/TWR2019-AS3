import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p><strong>This is an example installation of Docusaurus for Assignment 3. It has been edited locally and deployed on Github.</strong></p>
        <p>Donec sollicitudin tortor in eros vulputate, quis laoreet nibh ornare. Aenean turpis libero, pretium in mattis quis, finibus quis dolor. Nulla facilisi. Suspendisse potenti. Nam gravida rhoncus augue et suscipit. Cras dignissim tempus lectus. Etiam egestas pellentesque magna, a ornare nulla luctus elementum. Curabitur efficitur aliquam magna vel suscipit. Vestibulum viverra ligula vitae ipsum tincidunt egestas. Sed neque nulla, varius eu lectus et, finibus elementum mi.</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`K's ${siteConfig.title}`}
      description="K's Docusaurus assignment meta description.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

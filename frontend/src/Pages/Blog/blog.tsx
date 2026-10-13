import styles from './blog.module.scss';
import Hero from '../../Components/HeroPricing/hero-pricing';
import BlogSection from './BlogSection/blog-section';

export default function Blog() {
    return (
        <>
            <main className={styles.main}>
                <Hero label="BLOG" title={'Get precise knowledge wherever you are'} />

                <BlogSection />
            </main>
        </>
    );
}

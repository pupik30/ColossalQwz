import styles from './terms.module.scss';

export default function Terms() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.header}>
                <span className={styles.label}>Legal</span>
                <h1 className={styles.title}>Terms &amp; Conditions</h1>
                <span className={styles.updated}>Updated at 20.03.2021</span>
            </div>

            <div className={styles.content}>
                <p>
                    By accessing and placing an order with QwzCollos, you confirm that you are in
                    agreement with and bound by the terms of service contained in the Terms &amp;
                    Conditions outlined below. These terms apply to the entire website and any email
                    or other type of communication between you and QwzCollos.
                </p>

                <p>
                    Under no circumstances shall QwzCollos team be liable for any direct, indirect,
                    special, incidental or consequential damages, including, but not limited to,
                    loss of data or profit, arising out of or in any way connected with the use or
                    inability to use, the materials on this site, even if QwzCollos team or an
                    authorized representative has been advised of the possibility of such damages.
                    If your use of materials from this site results in the need for servicing,
                    repair or correction of equipment or data, you assume any costs thereof.
                </p>

                <p>
                    QwzCollos will not be responsible for any outcome that may occur during the
                    course of usage of our resources. We reserve the rights to change prices and
                    revise the resources usage policy in any moment.
                </p>

                <h2 className={styles.subtitle}>License</h2>

                <p>
                    QwzCollos grants you a revocable, non-exclusive, non-transferable, limited
                    license to download, install and use the website strictly in accordance with the
                    terms of this Agreement.
                </p>

                <p>
                    These Terms &amp; Conditions are a contract between you and QwzCollos (referred
                    to in these Terms &amp; Conditions as "QwzCollos", "us", "we" or "our"), the
                    provider of the QwzCollos website and the services accessible from the QwzCollos
                    website (which are collectively referred to in these Terms &amp; Conditions as
                    the "QwzCollos Service").
                </p>

                <p>
                    You are agreeing to be bound by these Terms &amp; Conditions. If you do not
                    agree to these Terms &amp; Conditions, please do not use the QwzCollos Service.
                    In these Terms &amp; Conditions, "you" refers both to you as an individual and
                    to the entity you represent. If you violate any of these Terms &amp; Conditions,
                    we reserve the right to cancel your account or block access to your account
                    without notice.
                </p>
            </div>
        </section>
    );
}

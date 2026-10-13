import styles from '../../Pages/Home/Testimonials/testimonials.module.scss';
import type { TestimonialType } from '../../Pages/Home/Testimonials/testimonial-type';
import { Photos } from '../../../Photos';

const avatarMap: Record<string, string> = {
    Avatar1: Photos.Avatar.Avatar1,
    Avatar2: Photos.Avatar.Avatar2,
    Avatar3: Photos.Avatar.Avatar3,
};

interface Props {
    data: TestimonialType;
    isActive?: boolean;
}

export default function Testimonial({ data, isActive }: Props) {
    return (
        <article className={`${styles.card} ${isActive ? styles.cardActive : ''}`}>
            <div className={styles.avatarWrap}>
                <img
                    src={avatarMap[data.avatar] ?? Photos.Avatar.Avatar1}
                    alt={data.name}
                    className={styles.avatar}
                />
                <span className={styles.rating}>"</span>
            </div>

            <h3 className={styles.name}>{data.name}</h3>
            <p className={styles.company}>{data.company}</p>
            <p className={styles.text}>{data.text}</p>
        </article>
    );
}

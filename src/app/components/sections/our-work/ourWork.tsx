import styles from '../../../styles/ourWork.module.scss';

import ClothingSketch1 from '../../../../../public/assets/images/ClothingSketch1.jpg';
import ClothingSketch2 from '../../../../../public/assets/images/ClothingSketch2.jpg';
import ClothingSketch3 from '../../../../../public/assets/images/ClothingSketch3.jpg';
import ClothingSketch4 from '../../../../../public/assets/images/ClothingSketch4.jpg';
import ClothingSketch5 from '../../../../../public/assets/images/ClothingSketch5.jpg';

import ClothingDrafts from '../../../../../public/assets/images/ClothingDrafts.jpg';

import { DesignImages } from './designImages';
import { useLanguage } from '../../../../app/contexts/languageContext';

export const OurWorkSection = () => {
    const { translations } = useLanguage();

    return (
        <section id={styles.ourWorksSection}>
            <h2>{translations['home.ourWorks.designsTitle']}</h2>
            <div className={styles.container}>
                <DesignImages images={[ClothingSketch3, ClothingSketch2, ClothingSketch1, ClothingDrafts, ClothingSketch4, ClothingSketch5]} />
            </div>
        </section>
    )
}
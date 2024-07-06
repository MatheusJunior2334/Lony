import styles from '../../styles/home/corePrinciples.module.scss';

import { AnimatedComponent } from '../animations/animatedComponent';

import lonyMission from '../../../../public/assets/images/home/LonyMembersMission.png';
import lonyVision from '../../../../public/assets/images/home/LonyMembersVision.png';
import lonyValueKeys from '../../../../public/assets/images/home/LonyMembersValues.png';

import { ResponsibilityIcon } from '../../../../public/assets/icons/responsibilityIcon';
import { AuthenticityIcon } from '../../../../public/assets/icons/authenticityIcon';
import { InnovationIcon } from '../../../../public/assets/icons/innovationIcon';
import { EmpowermentIcon } from '../../../../public/assets/icons/empowermentIcon';
import { InclusionIcon } from '../../../../public/assets/icons/inclusionIcon';
import { useLanguage } from '@/app/contexts/languageContext';
import { lazy } from 'react';

const Image = lazy(() => import('next/image'));

interface ValueKeysContentProps {
    icon: React.ReactNode;
    valueKey: string;
}

const valueKeysContent: ValueKeysContentProps[] = [
    { icon: <ResponsibilityIcon />, valueKey: 'responsibility' },
    { icon: <AuthenticityIcon />, valueKey: 'authenticity' },
    { icon: <InnovationIcon />, valueKey: 'innovation' },
    { icon: <EmpowermentIcon />, valueKey: 'empowerment' },
    { icon: <InclusionIcon />, valueKey: 'inclusion' },
]

export const CorePrinciples = () => {
    const { translations } = useLanguage();
 
    const valueKeysLeftSide = valueKeysContent.slice(0, 3);
    const valueKeysRightSide = valueKeysContent.slice(3);

    const getText = (key: string) => {
        switch (key) {
            case 'responsibility':
                return translations['home.corePrinciples.valuesText.responsibility'];
            case 'authenticity':
                return translations['home.corePrinciples.valuesText.authenticity'];
            case 'innovation':
                return translations['home.corePrinciples.valuesText.innovation'];
            case 'empowerment':
                return translations['home.corePrinciples.valuesText.empowerment'];
            case 'inclusion':
                return translations['home.corePrinciples.valuesText.inclusion'];
            default:
                return '';
        }
    }

    return (
        <section id={styles.corePrinciples}>
            <div className={styles.pageTitle}>
                <h2>{translations['home.corePrinciples.whatDoWeBelieveInTitle']}</h2>
                <hr />
            </div>

            <div className={styles.missionDiv}>
                <div className={styles.textSide}>
                    <p>{translations['home.corePrinciples.missionText.part1']}</p>
                    <p>{translations['home.corePrinciples.our']} <span>{translations['home.corePrinciples.missionText.mission']}</span> {translations['home.corePrinciples.missionText.part2']}</p>
                </div>
                <AnimatedComponent initialTranslateX={100} transitionDuration={2} className={styles.imageSide}>
                    <Image
                        src={lonyMission}
                        alt='Equipe do Lony - Missão'
                        width={900}
                        height={600}
                        loading='lazy'
                    />
                </AnimatedComponent>
            </div>

            <div className={styles.visionDiv}>
                <div className={styles.textSide}>
                    <p>{translations['home.corePrinciples.visionText.part1']}</p>
                    <p>{translations['home.corePrinciples.our']} <span>{translations['home.corePrinciples.visionText.vision']}</span> {translations['home.corePrinciples.visionText.part2']}</p>
                </div>

                <AnimatedComponent initialTranslateX={-100} transitionDuration={2} className={styles.imageSide}>
                    <Image
                        src={lonyVision}
                        alt='Equipe do Lony - Visão'
                        width={900}
                        height={600}
                        loading='lazy'
                    />
                </AnimatedComponent>
            </div>

            <div className={styles.valuesDiv}>
                <div className={styles.leftSide}>
                    <ul>
                        {valueKeysLeftSide.map((value, index) => (
                            <li key={index}>
                                {value.icon}
                                {getText(value.valueKey)}
                            </li>
                        ))}
                    </ul>
                </div>

                <AnimatedComponent opacity={0} transitionDuration={2} className={styles.middleSide}>
                    <Image
                        src={lonyValueKeys}
                        alt='Equipe do Lony - Valores'
                        width={900}
                        height={600}
                        loading='lazy'
                    />
                </AnimatedComponent>
                
                <div className={styles.rightSide}>
                    <ul>
                        {valueKeysRightSide.map((value, index) => (
                            <li key={index}>
                                {value.icon}
                                {getText(value.valueKey)}
                            </li>
                        ))}
                    </ul>  
                </div>

                <div className={styles.valuesText}>
                    <p>{translations['home.corePrinciples.valuesText']} <span>{translations['home.corePrinciples.valuesText.values']}</span></p>
                </div>
            </div>
        </section>
    )
}
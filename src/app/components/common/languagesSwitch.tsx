import styles from '../../styles/layout/languagesSwitch.module.scss';

import { BrazilFlag } from '../../../../public/assets/icons/brazilFlag';
import { UKFlag } from '../../../../public/assets/icons/ukFlag';
import { GermanyFlag } from '../../../../public/assets/icons/germanyFlag';
import { useLanguage } from '../../contexts/languageContext';

interface SwitchLanguagesIconProps {
    languageCode: string;
    onClick: () => void;
    ariaLabel: string;
}

const SwitchLanguagesIcon = ({ languageCode, onClick, ariaLabel } : SwitchLanguagesIconProps) => {
    const { language } = useLanguage();

    return (
        <button aria-label={ariaLabel} onClick={onClick} className={`${language === languageCode && languageCode ? styles.selected : ''}`}>
            {languageCode === 'pt' && <BrazilFlag />}
            {languageCode === 'en' && <UKFlag />}
            {languageCode === 'de' && <GermanyFlag />}
        </button>
    )
}

export const LanguagesSwitch = () => {
    const { changeLanguage, confirmLanguage } = useLanguage();

    const handleLanguageClick = (newLanguage: string) => {
        changeLanguage(newLanguage);
        confirmLanguage();
    }

    return (
        <div id={styles.languagesSwitch}>
            <SwitchLanguagesIcon
                languageCode='pt'
                onClick={() => handleLanguageClick('pt')}
                ariaLabel='Mudar para português'
            />
            <SwitchLanguagesIcon
                languageCode='en'
                onClick={() => handleLanguageClick('en')}
                ariaLabel='Mudar para inglês'
            />
            <SwitchLanguagesIcon
                languageCode='de'
                onClick={() => handleLanguageClick('de')}
                ariaLabel='Mudar para alemão'
            />
        </div>
    )
}
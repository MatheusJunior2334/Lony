import styles from '../../styles/languagesSwitch.module.scss';

import { BrazilFlag } from '../../../../public/assets/icons/brazilFlag';
import { UKFlag } from '../../../../public/assets/icons/ukFlag';
import { GermanyFlag } from '../../../../public/assets/icons/germanyFlag';
import { useLanguage } from '../../contexts/languageContext';

interface SwitchLanguagesIconProps {
    languageCode: string;
    onClick: () => void;
}

const SwitchLanguagesIcon = ({ languageCode, onClick } : SwitchLanguagesIconProps) => {
    const { language } = useLanguage();

    return (
        <div onClick={onClick} className={`${language === languageCode && languageCode ? styles.selected : ''}`}>
            {languageCode === 'pt' && <BrazilFlag />}
            {languageCode === 'en' && <UKFlag />}
            {languageCode === 'de' && <GermanyFlag />}
        </div>
    )
}

export const LanguagesSwitch = () => {
    const { changeLanguage, confirmLanguage } = useLanguage();

    const handleLanguageClick = (newLanguage: string) => {
        changeLanguage(newLanguage);
        confirmLanguage();
    }

    return (
        <button id={styles.languagesSwitch}>
            <SwitchLanguagesIcon languageCode='pt' onClick={() => handleLanguageClick('pt')} />
            <SwitchLanguagesIcon languageCode='en' onClick={() => handleLanguageClick('en')} />
            <SwitchLanguagesIcon languageCode='de' onClick={() => handleLanguageClick('de')} />
        </button>
    )
}
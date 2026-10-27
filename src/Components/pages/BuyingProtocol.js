import React , {useEffect} from 'react';
import './BuyingProtocol.css'
import { useTranslation } from 'react-i18next';
import { Button } from '../Button';
import CardItem from '../CardItem';
import '../Cards.css';
import '../Navbar';

export default function HowItWorks() {
    const [t, i18n] = useTranslation('global');

    // Set default language to French on load
    useEffect(() => {
        i18n.changeLanguage('fr');
    }, [i18n]);

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div id="aboutMe" className="about">
            <h1>{t('BuyingProtocol.title')}</h1>

            <div className="lang-box-me">
                <Button
                    buttonStyle="btn--outline-2"
                    buttonSize="btn--medium"
                    onClick={() => handleChangeLanguage('en')}
                >
                    EN
                </Button>

                <Button
                    buttonStyle="btn--outline-2"
                    buttonSize="btn--medium"
                    onClick={() => handleChangeLanguage('es')}
                >
                    ES
                </Button>

                <Button
                    buttonStyle="btn--outline-2"
                    buttonSize="btn--medium"
                    onClick={() => handleChangeLanguage('fr')}
                >
                    FR
                </Button>
            </div>

            <div className="text-container">
                <div className="text__wrapper">
                    <p
                        dangerouslySetInnerHTML={{
                            __html: t('BuyingProtocol.message1'),
                        }}
                    />

                    <h2
                        className="collection-heading"
                        dangerouslySetInnerHTML={{
                            __html: t('BuyingProtocol.chooseCollection'),
                        }}
                    />
                    <div className="buying-protocol-cards">
                        <div className="cards__container">
                            <div className="cards__wrapper">
                                <ul className="cards__items">
                                    <CardItem
                                        src="Dibujos/libertad(1).jpg"
                                        text={t('BuyingProtocol.hands')}
                                        path="/galleryOne"
                                    />

                                    <CardItem
                                        src="Dibujos/ensoi2.jpg"
                                        text={t('BuyingProtocol.body')}
                                        path="/galleryFive"
                                    />

                                    <CardItem
                                        src="Dibujos/frijoles.JPG"
                                        text={t('BuyingProtocol.pastels')}
                                        path="/galleryFour"
                                    />
                                </ul>
                            </div>
                        </div>
                    </div>

                    <p
                        dangerouslySetInnerHTML={{
                            __html: t('BuyingProtocol.message2'),
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
import React, { useState } from 'react';
import Images from './Images.tsx';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Fullscreen, Zoom } from 'yet-another-react-lightbox/plugins';

export default function Grid(props) {
    const [index, setIndex] = useState(-1);
    const [showForm, setShowForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const closeLightbox = () => {
        setIndex(-1);
        setShowForm(false);
        setIsSubmitted(false);
        setSubmitError('');
    };

    const selectedSlide = props.slides[index];
    const artworkTitle = selectedSlide?.title || 'cette œuvre';

    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsSubmitting(true);
        setSubmitError('');

        try {
            const form = event.currentTarget;
            const formData = new FormData(form);

            const response = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData).toString(),
            });

            if (!response.ok) {
                throw new Error('Submission failed');
            }

            setIsSubmitted(true);
        } catch (error) {
            setSubmitError(
                'Une erreur est survenue. Veuillez réessayer dans quelques instants.'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Images
                data={props.slides}
                onClick={(currentIndex) => {
                    setIndex(currentIndex);
                    setShowForm(false);
                    setIsSubmitted(false);
                    setSubmitError('');
                }}
            />

            <Lightbox
                toolbar={{
                    buttons: [
                        ...(selectedSlide?.price
                            ? [
                                <button
                                    key="acquire"
                                    type="button"
                                    onClick={() => {
                                        setShowForm(!showForm);
                                        setIsSubmitted(false);
                                        setSubmitError('');
                                    }}
                                    style={{
                                        background: 'transparent',
                                        border: '1px solid white',
                                        color: 'white',
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        fontSize: '14px',
                                        marginRight: '8px',
                                        transition:
                                            'background-color 0.2s ease, color 0.2s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor =
                                            'white';
                                        e.currentTarget.style.color = 'black';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor =
                                            'transparent';
                                        e.currentTarget.style.color = 'white';
                                    }}
                                >
                                    {showForm ? 'Retour à l’œuvre' : 'Acquérir'}
                                </button>,
                            ]
                            : []),
                        'zoom',
                        'fullscreen',
                        'close',
                    ],
                }}
                plugins={[Fullscreen, Zoom]}
                index={index}
                open={index >= 0}
                close={closeLightbox}
                slides={props.slides}
                render={{
                    slide: ({ slide, offset }) => {
                        if (offset !== 0) return null;

                        // Acquisition form
                        if (showForm) {
                            return (
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '100%',
                                        height: '100%',
                                        overflowY: 'auto',
                                        padding: '20px',
                                        boxSizing: 'border-box',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '100%',
                                            maxWidth: '440px',
                                            maxHeight: '100%',
                                            overflowY: 'auto',
                                            boxSizing: 'border-box',
                                            padding: '28px',
                                            backgroundColor: '#fff',
                                            color: '#222',
                                            borderRadius: '3px',
                                            fontFamily: 'inherit',
                                        }}
                                    >
                                        {!isSubmitted ? (
                                            <>
                                                <h2
                                                    style={{
                                                        fontSize: '22px',
                                                        fontWeight: '400',
                                                        margin: '0 0 12px',
                                                    }}
                                                >
                                                    Acquérir cette œuvre
                                                </h2>

                                                <p
                                                    style={{
                                                        fontSize: '14px',
                                                        margin: '0 0 24px',
                                                        lineHeight: '1.6',
                                                    }}
                                                >
                                                    Œuvre : <em>{artworkTitle}</em>
                                                </p>

                                                <form
                                                    name="acquisition"
                                                    method="POST"
                                                    data-netlify="true"
                                                    netlify-honeypot="bot-field"
                                                    onSubmit={handleSubmit}
                                                >
                                                    <input
                                                        type="hidden"
                                                        name="form-name"
                                                        value="acquisition"
                                                    />

                                                    <input
                                                        type="hidden"
                                                        name="artwork"
                                                        value={artworkTitle}
                                                    />

                                                    <div
                                                        style={{
                                                            position: 'absolute',
                                                            left: '-9999px',
                                                        }}
                                                        aria-hidden="true"
                                                    >
                                                        <label>
                                                            Ne pas remplir :
                                                            <input
                                                                name="bot-field"
                                                                tabIndex="-1"
                                                                autoComplete="off"
                                                            />
                                                        </label>
                                                    </div>

                                                    <div
                                                        style={{
                                                            marginBottom: '18px',
                                                        }}
                                                    >
                                                        <label
                                                            htmlFor="acquisition-name"
                                                            style={{
                                                                display: 'block',
                                                                fontSize: '13px',
                                                                marginBottom: '7px',
                                                            }}
                                                        >
                                                            Votre nom
                                                        </label>

                                                        <input
                                                            id="acquisition-name"
                                                            type="text"
                                                            name="name"
                                                            autoComplete="name"
                                                            required
                                                            style={inputStyle}
                                                        />
                                                    </div>

                                                    <div
                                                        style={{
                                                            marginBottom: '18px',
                                                        }}
                                                    >
                                                        <label
                                                            htmlFor="acquisition-email"
                                                            style={{
                                                                display: 'block',
                                                                fontSize: '13px',
                                                                marginBottom: '7px',
                                                            }}
                                                        >
                                                            Votre adresse e-mail
                                                        </label>

                                                        <input
                                                            id="acquisition-email"
                                                            type="email"
                                                            name="email"
                                                            autoComplete="email"
                                                            required
                                                            style={inputStyle}
                                                        />
                                                    </div>

                                                    <div
                                                        style={{
                                                            marginBottom: '22px',
                                                        }}
                                                    >
                                                        <label
                                                            htmlFor="acquisition-message"
                                                            style={{
                                                                display: 'block',
                                                                fontSize: '13px',
                                                                marginBottom: '7px',
                                                            }}
                                                        >
                                                            Votre message
                                                        </label>

                                                        <textarea
                                                            id="acquisition-message"
                                                            name="message"
                                                            defaultValue={`Bonjour, je suis intéressé par l’œuvre « ${artworkTitle} ».`}
                                                            required
                                                            rows={4}
                                                            style={{
                                                                ...inputStyle,
                                                                resize: 'vertical',
                                                                minHeight: '90px',
                                                            }}
                                                        />
                                                    </div>

                                                    {submitError && (
                                                        <p
                                                            role="alert"
                                                            style={{
                                                                fontSize: '13px',
                                                                color: '#a12626',
                                                                lineHeight: '1.5',
                                                            }}
                                                        >
                                                            {submitError}
                                                        </p>
                                                    )}

                                                    <button
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                        style={{
                                                            width: '100%',
                                                            padding: '12px 16px',
                                                            backgroundColor: '#222',
                                                            color: '#fff',
                                                            border: '1px solid #222',
                                                            borderRadius: '2px',
                                                            fontSize: '14px',
                                                            cursor: isSubmitting
                                                                ? 'wait'
                                                                : 'pointer',
                                                            opacity: isSubmitting
                                                                ? 0.7
                                                                : 1,
                                                        }}
                                                    >
                                                        {isSubmitting
                                                            ? 'Envoi en cours…'
                                                            : 'Envoyer ma demande'}
                                                    </button>

                                                    <p
                                                        style={{
                                                            margin: '16px 0 0',
                                                            fontSize: '12px',
                                                            lineHeight: '1.6',
                                                            textAlign: 'center',
                                                            color: '#666',
                                                        }}
                                                    >
                                                        Je vous répondrai dans les
                                                        meilleurs délais.
                                                    </p>
                                                </form>
                                            </>
                                        ) : (
                                            <div
                                                role="status"
                                                style={{
                                                    textAlign: 'center',
                                                    padding: '24px 0',
                                                }}
                                            >
                                                <h2
                                                    style={{
                                                        fontSize: '22px',
                                                        fontWeight: '400',
                                                        margin: '0 0 16px',
                                                    }}
                                                >
                                                    Merci pour votre intérêt.
                                                </h2>

                                                <p
                                                    style={{
                                                        fontSize: '14px',
                                                        lineHeight: '1.7',
                                                        margin: '0 0 24px',
                                                    }}
                                                >
                                                    Votre demande a bien été
                                                    envoyée. Je vous répondrai
                                                    dans les meilleurs délais.
                                                </p>

                                                <button
                                                    type="button"
                                                    onClick={closeLightbox}
                                                    style={{
                                                        padding: '10px 18px',
                                                        backgroundColor: '#222',
                                                        color: '#fff',
                                                        border: '1px solid #222',
                                                        borderRadius: '2px',
                                                        fontSize: '14px',
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    Fermer
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        }

                        // Original artwork display
                        return (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100%',
                                    height: '100%',
                                }}
                            >
                                <img
                                    src={slide.src}
                                    alt={slide.title || ''}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: 'calc(100% - 90px)',
                                        objectFit: 'contain',
                                    }}
                                />

                                <div
                                    style={{
                                        textAlign: 'center',
                                        padding: '12px 16px',
                                        color: 'white',
                                        fontSize: '14px',
                                        lineHeight: 1.5,
                                    }}
                                >
                                    <div>
                                        {slide.title && <em>{slide.title}</em>}
                                        {slide.title && slide.description && ', '}
                                        {slide.description}
                                    </div>

                                    {slide.price && (
                                        <div style={{ fontWeight: 'bold' }}>
                                            {slide.price}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    },
                }}
            />
        </>
    );
}

const inputStyle = {
    display: 'block',
    width: '100%',
    boxSizing: 'border-box',
    padding: '10px 11px',
    border: '1px solid #ccc',
    borderRadius: '2px',
    backgroundColor: '#fff',
    color: '#222',
    fontFamily: 'inherit',
    fontSize: '14px',
    outlineOffset: '2px',
};
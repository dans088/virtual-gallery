import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Images from './Images.tsx';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Fullscreen, Zoom } from 'yet-another-react-lightbox/plugins';

export default function Grid(props) {
    const { t } = useTranslation('global');
    const [index, setIndex] = useState(-1);
    const [showForm, setShowForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [framedArtworkSrc, setFramedArtworkSrc] = useState(null);

    const closeLightbox = () => {
        setIndex(-1);
        setShowForm(false);
        setIsSubmitted(false);
        setSubmitError('');
    };

    const selectedSlide = props.slides[index];
    const artworkTitle = selectedSlide?.title || t('Grid.fallbackArtwork');

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

            if (typeof window.fbq === 'function') {
                window.fbq('track', 'Lead', {
                    content_name: artworkTitle,
                });
            }

            setIsSubmitted(true);

        } catch (error) {
            setSubmitError(
                t('Grid.submissionError')
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
                    const artwork = props.slides[currentIndex];

                    if (typeof window.fbq === 'function') {
                        window.fbq('track', 'ViewContent', {
                            content_name: artwork?.title || 'Untitled artwork',
                            content_type: 'product',
                        });
                    }

                    setIndex(currentIndex);
                    setShowForm(false);
                    setIsSubmitted(false);
                    setSubmitError('');
                }}
            />

            <Lightbox
                toolbar={{
                    buttons: ['zoom', 'fullscreen', 'close'],
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
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setShowForm(false);
                                                        setIsSubmitted(false);
                                                        setSubmitError('');
                                                    }}
                                                    style={{
                                                        background: 'transparent',
                                                        border: 'none',
                                                        color: '#555',
                                                        padding: '0',
                                                        marginBottom: '18px',
                                                        fontSize: '13px',
                                                        cursor: 'pointer',
                                                        fontFamily: 'inherit',
                                                    }}
                                                >
                                                    {t('Grid.backToArtwork')}
                                                </button>

                                                <h2
                                                    style={{
                                                        fontSize: '22px',
                                                        fontWeight: '400',
                                                        margin: '0 0 12px',
                                                    }}
                                                >
                                                    {t('Grid.acquireArtwork')}
                                                </h2>

                                                <p
                                                    style={{
                                                        fontSize: '14px',
                                                        margin: '0 0 24px',
                                                        lineHeight: '1.6',
                                                    }}
                                                >
                                                    {t('Grid.artworkLabel')} <em>{artworkTitle}</em>
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
                                                            {t('Grid.honeypotLabel')}
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
                                                            {t('Grid.name')}
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
                                                            {t('Grid.email')}
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
                                                            {t('Grid.message')}
                                                        </label>

                                                        <textarea
                                                            id="acquisition-message"
                                                            name="message"
                                                            defaultValue={t('Grid.defaultMessage', { title: artworkTitle })}
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
                                                            ? t('Grid.sending')
                                                            : t('Grid.sendRequest')}
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
                                                        {t('Grid.responseTime')}
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
                                                    {t('Grid.thankYou')}
                                                </h2>

                                                <p
                                                    style={{
                                                        fontSize: '14px',
                                                        lineHeight: '1.7',
                                                        margin: '0 0 24px',
                                                    }}
                                                >
                                                    {t('Grid.requestSent')}
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
                                                    {t('Grid.close')}
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
                                    src={
                                        slide.framedSrc && framedArtworkSrc === slide.src
                                            ? slide.framedSrc
                                            : slide.src
                                    }
                                    alt={slide.title || ''}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: slide.framedSrc
                                            ? 'calc(100% - 130px)'
                                            : 'calc(100% - 90px)',
                                        objectFit: 'contain',
                                    }}
                                />

                                {slide.framedSrc && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setFramedArtworkSrc(
                                                framedArtworkSrc === slide.src
                                                    ? null
                                                    : slide.src
                                            );
                                        }}
                                        style={{
                                            marginTop: '10px',
                                            padding: '7px 12px',
                                            background: 'transparent',
                                            border: '1px solid rgba(255, 255, 255, 0.65)',
                                            color: 'white',
                                            fontSize: '18px',
                                            fontFamily: 'inherit',
                                            cursor: 'pointer',
                                            borderRadius: '2px',
                                        }}
                                    >
                                        {framedArtworkSrc === slide.src
                                            ? t('Grid.viewDrawing')
                                            : t('Grid.viewFramed')}
                                    </button>
                                )}

                                <div
                                    style={{
                                        textAlign: 'center',
                                        padding: '12px 16px',
                                        color: 'white',
                                        fontSize: '18px',
                                        lineHeight: 1.5,
                                    }}
                                >
                                    <div>
                                        {slide.title && <em>{slide.title}</em>}
                                        {slide.title && slide.description && ', '}
                                        {slide.description}
                                    </div>

                                    {slide.price && (
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '12px',
                                                marginTop: '4px',
                                            }}
                                        >
                                            <span style={{ fontWeight: 'bold' }}>
                                                {slide.price}
                                            </span>

                                            <button
                                                type="button"
                                                onClick={() => {
                                                    if (
                                                        typeof window.fbq === 'function'
                                                    ) {
                                                        window.fbq(
                                                            'trackCustom',
                                                            'AcquisitionFormOpen',
                                                            {
                                                                content_name: artworkTitle,
                                                            }
                                                        );
                                                    }

                                                    setShowForm(true);
                                                    setIsSubmitted(false);
                                                    setSubmitError('');
                                                }}
                                                style={{
                                                    backgroundColor: '#f2e8d5',
                                                    color: '#222',
                                                    border: 'none',
                                                    borderRadius: '2px',
                                                    padding: '6px 14px',
                                                    fontSize: '18px',
                                                    fontWeight: '600',
                                                    letterSpacing: '0.8px',
                                                    cursor: 'pointer',
                                                    fontFamily: 'inherit',
                                                }}
                                            >
                                                {t('Grid.buy')}
                                            </button>
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
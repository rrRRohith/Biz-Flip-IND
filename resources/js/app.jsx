import { createRoot } from 'react-dom/client';
import { createInertiaApp, router } from '@inertiajs/react'; 
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import React, { useState, useEffect } from 'react';
import Spinner from './Components/Spinner';
import {getImageAsset, formatTime, capitalize, formatPrice, formatDate, truncateText, formatDateTime, statusIcon }  from '@/Components/Helpers';

import './app.css'; // Import the CSS file for styling the spinner

const appName = import.meta.env.VITE_APP_NAME || 'Bizflip';

// Attach the functions to the global window object
window.getImageAsset    = getImageAsset;
window.formatTime       = formatTime;
window.capitalize       = capitalize;
window.formatPrice      = formatPrice;
window.formatDate       = formatDate;
window.truncateText     = truncateText;
window.formatDateTime   = formatDateTime;
window.statusIcon       = statusIcon;

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        const AppWrapper = (props) => {
            const [loading, setLoading] = useState(false);

            useEffect(() => {
                const handleStart = () => setLoading(true);
                const handleFinish = () => setLoading(false);

                // Use router.on() and router.off() to listen to start and finish events
                router.on('start', handleStart);
                router.on('finish', handleFinish);

                return () => {
                    router.off('start', handleStart); // Make sure router.off() is correctly defined
                    router.off('finish', handleFinish); // Make sure router.off() is correctly defined
                };
            }, []);

            return (
                <React.Fragment>
                    {loading && <Spinner />}
                    <App {...props} />
                </React.Fragment>
            );
        };

        root.render(<AppWrapper {...props} />);
    },
    progress: false,
});

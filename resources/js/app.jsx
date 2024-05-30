// import './bootstrap';
// import '../css/app.css';
import { createRoot } from 'react-dom/client';
import { createInertiaApp, router } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import React, { useState, useEffect } from 'react';
import Spinner from './Components/Spinner';
import './app.css';  // Import the CSS file for styling the spinner

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

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

                router.on('start', handleStart);
                router.on('finish', handleFinish);

                return () => {
                    router.off('start', handleStart);
                    router.off('finish', handleFinish);
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
        root.render(<App {...props} />);
    },
    progress: false,
});

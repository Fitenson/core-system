import '../css/app.css';

import { createInertiaApp, router } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';
import { store } from '@/core/presentation/store/index';
import { setLoading } from './core/presentation/store/loadingSlice';
import { Toaster } from './components/ui/sonner';


const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

router.on('start', () => {
    store.dispatch(setLoading(true));
});

router.on('finish', () => {
    store.dispatch(setLoading(false));
});


createInertiaApp({
    title: (title) => title ? `${title} - ${appName}` : appName,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <Provider store={store}>
                <ThemeProvider attribute={"class"} defaultTheme='system' enableSystem>
                    <App {...props} />
                    <Toaster/>
                </ThemeProvider>
            </Provider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();

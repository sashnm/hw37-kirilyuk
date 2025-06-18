import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../utils/paths';

const ErrorPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        (window as any).isOnErrorPage = true;

        const checkNavigation = () => {
            const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
            if (navigationEntries.length > 0 && navigationEntries[0].type === 'reload') {
                navigate(Paths.HOME, { replace: true });
            }
        };

        const timer = setTimeout(checkNavigation, 100);

        return () => {
            clearTimeout(timer);
            delete (window as any).isOnErrorPage;
        };
    }, [navigate]);

    const handleGoHome = () => {
        navigate(Paths.HOME);
    };

    return (
        <div style={{
            padding: '2rem',
            textAlign: 'center',
            minHeight: '50vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h1>404 - Страница не найдена!!!</h1>
            <p>Извините, запрашиваемая страница не существует.</p>
            <button
                onClick={handleGoHome}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop: '1rem'
                }}
            >
                Вернуться на главную
            </button>
        </div>
    );
};

export default ErrorPage;
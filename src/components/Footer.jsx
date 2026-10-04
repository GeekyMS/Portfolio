import { Link } from 'react-router-dom';

const Footer = () => {
    const year = new Date().getFullYear();

    const links = [
        { label: 'ABOUT', to: '/about', internal: true },
        { label: 'GITHUB', to: 'https://github.com/GeekyMS', internal: false },
        { label: 'LINKEDIN', to: 'https://linkedin.com/in/razaalaqaband', internal: false },
        { label: 'EMAIL', to: 'mailto:ralaqaband@umass.edu', internal: false },
    ];

    return (
        <footer className="py-10 px-4 border-t-2 border-current">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
                <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 font-mono text-sm font-bold">
                    {links.map((link) =>
                        link.internal ? (
                            <Link
                                key={link.label}
                                to={link.to}
                                className="no-underline text-current hover:text-accent"
                            >
                                {link.label}
                            </Link>
                        ) : (
                            <a
                                key={link.label}
                                href={link.to}
                                target={link.to.startsWith('http') ? '_blank' : undefined}
                                rel={link.to.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="no-underline text-current hover:text-accent"
                            >
                                {link.label}
                            </a>
                        )
                    )}
                </nav>
                <p className="text-xs text-fg/60">
                    &copy; {year} Raza Alaqaband.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
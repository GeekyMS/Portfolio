const Footer = ({ theme }) => {
    const year = new Date().getFullYear();

    return (
        <footer className={`py-6 px-4 border-t ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
            <div className="max-w-4xl mx-auto text-center">
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    &copy; {year} Raza Alaqaband. Built with React, Vite & Tailwind CSS.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
import Hero from '../components/Hero';
import useDocumentTitle from '../components/useDocumentTitle';
import FeaturedWork from '../components/FeaturedWork';
import WorkExperience from '../components/WorkExperience';
import CurrentWork from '../components/CurrentWork';
import AboutPreview from '../components/AboutPreview';

// NotesPreview is temporarily hidden — re-add once Notes content is ready.
const Home = ({ theme }) => {
    useDocumentTitle();
    return (
        <>
            <Hero theme={theme} />
            <WorkExperience />
            <FeaturedWork />
            <CurrentWork />
            <AboutPreview />
        </>
    );
};

export default Home;

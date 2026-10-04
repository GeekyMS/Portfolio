// Bullet text with an optional phrase set in the accent color, e.g. the "SSO" in a sentence.
const BulletText = ({ text, accent }) => {
    const at = accent ? text.indexOf(accent) : -1;
    if (at === -1) return text;

    return (
        <>
            {text.slice(0, at)}
            <span className="font-black text-accent">{accent}</span>
            {text.slice(at + accent.length)}
        </>
    );
};

export default BulletText;

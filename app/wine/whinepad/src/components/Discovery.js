import Excel from './Excel';
import Logo from './Logo';
import Header from './Header';
import Body from './Body';

function Discovery() {
    return (
        <div className="Discovery">
            <h2>Logo</h2>
            <div style={{
                background: '#f6f6f6',
                display: 'inline-block'
            }}>
                <Logo />
            </div>
            <h2>Body</h2>
            <Body>I am content inside the body</Body>
            {/* и т. д. */}
        </div>
    );
}

export default Discovery;
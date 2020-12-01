export default function DarkModeToggle() {
    return <label htmlFor="dark-mode-switch" id="dark-mode-toggle">
                <div className="toggle"></div>
                <div className="names">
                    <p className="light-toggle">Light</p>
                    <p className="dark-toggle">Dark</p>
                </div>
            </label>
}
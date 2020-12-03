import IconMoon from '../svg/IconMoon'
import IconSun from '../svg/IconSun'

export default function DarkModeToggle() {
    return <label htmlFor="dark-mode-switch" id="dark-mode-toggle" title="darkmode">
            <IconMoon/>
            <IconSun/>
        </label>
}
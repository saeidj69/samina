import React from 'react'
import { LANGUAGES } from '../../constants'
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
const isActive = ({ isActive }: any) => `link ${isActive ? "active" : ""}`;
const Navbar = () => {
    const { i18n, t } = useTranslation()

    const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang_code = e.target.value
        i18n.changeLanguage(lang_code)

    }
  return (
    <nav>
    <div>
        <NavLink className={isActive} to='/'>{t('home')}</NavLink>
        <NavLink className={isActive} to='/about'>{t('about')}</NavLink>
    </div>

    <select defaultValue={i18n.language} onChange={onChangeLang}  >
        {
            LANGUAGES.map(({ code, label }) => (
                <option
                    key={code}
                    value={code}
                >{label}</option>
            ))
        }
    </select>
</nav>
  )
}

export default Navbar
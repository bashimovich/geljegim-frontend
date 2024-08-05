import React, { useState } from 'react'
import Logo from './../../assets/images/Geljegim.png'
import './Navigation.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function Navigation() {
    const {t} =useTranslation()
    const navigate = useNavigate()
    const [MenuBarIsOpen, setMenuBarIsOpen] = useState(false)
    function MenuOpenClose() {
        setMenuBarIsOpen(!MenuBarIsOpen)
    }
    function goHome() {
        navigate('/')
    }
    function goNews() {
        navigate('/news')
    }

    function goSearch() {
        navigate('/search')
    }
    function goMedia() {
        navigate('/media')
    }
    function goDocs() {
        navigate('/docs')
    }
    function goLaws() {
        navigate('/laws')
    }
    function goList(typear) {
        navigate('/articles', {state:typear})
    }
  return (
    <div className="navigation__wrapper">
        <div className="container">
            <div className="navigation">
                <div className="navigation__logo">
                    <img onClick={() => goHome()} src={Logo} alt="" />
                </div>
                <div className="navigation__menu">
                    <ul className={MenuBarIsOpen ? 'active':''}>
                        <li className='parent__category'>
                            <a href="" className='nav__link' onClick={() => goHome()}>
                                {t('home')}
                            </a>
                        </li>
                        <li className='parent__category'>
                            <a className='nav__link'>
                                {t('school')}
                            </a>
                            <div className='sub__category'>
                                <p onClick={() => {goList("univer")}}  className='sub_parent_category'>
                                {t('university')}
                                    <div className='child_category'>
                                        <p onClick={() => {goList("univer")}} >
                                            {t('university')}
                                        </p>
                                        <p onClick={() => {goList("uni_news")}} >
                                            {t('news')}
                                        </p>
                                    </div>
                                </p>
                                <p onClick={() => {goList("vacational")}}  className='sub_parent_category' >
                                    {t('vacational')}
                                    <div className='child_category'>
                                        <p onClick={() => {goList("vacational")}} >
                                            {t('vacational')}
                                        </p>
                                        <p onClick={() => {goList("vac_news")}} >
                                            {t('news')}
                                        </p>
                                    </div>
                                </p>
                                <p onClick={() => {goList("lycee")}}  className='sub_parent_category' >
                                    {t('lyceum')}
                                    <div className='child_category'>
                                        <p onClick={() => {goList("lycee")}} >
                                            {t('lyceum')}
                                        </p>
                                        <p onClick={() => {goList("vac_news")}} >
                                            {t('news')}
                                        </p>
                                    </div>
                                </p>
                            </div>
                        </li>
                        <li className='parent__category'>
                            <a href="https://korpe.ticit.edu.tm" target='_blank'>
                                {t('korpe')}
                            </a>
                        </li>
                        <li className='parent__category'>
                            <a className='nav__link'  onClick={() => {goNews()}} id='news'>
                                {t('news')}
                            </a>
                        </li>
                        <li className='parent__category'>
                            <a className='nav__link'  onClick={() => {goMedia()}} id='media'>
                                {t('media')}
                            </a>
                        </li>
                        <li className='parent__category'>
                            <a href="https://kesgitle.ticit.edu.tm/" target='_blank'>
                                {t('kesgitle')}
                            </a>
                        </li>
                        <li className='parent__category'>
                            <a href="#" target='_blank'>
                                {t('work')}
                            </a>
                        </li>
                        <li className='parent__category'>
                            <a className='nav__link'>
                                {t('hukuk')}
                            </a>
                            <div className='sub__category'>
                                <p onClick={() => {goLaws()}} >
                                    {t('laws')}
                                </p>
                                <p onClick={() => {goDocs()}}>
                                    {t('documents')}
                                </p>
                            </div>
                        </li>
                        <li onClick={()=>goSearch()} className='parent__category'>
                            <SearchIcon />
                        </li>
                    </ul>
                    <div className="menu__icon" onClick={MenuOpenClose}>
                        { MenuBarIsOpen ? <span><CloseIcon /></span> : <span><MenuIcon /></span> }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navigation

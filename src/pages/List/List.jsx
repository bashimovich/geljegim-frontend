import React, { useEffect, useState } from 'react';
import InfoPanel from '../../components/Info/InfoPanel';
import Navigation from '../../components/Navigation/Navigation';
import '../../App.css';
import Footer from '../../components/Footer/Footer';
import './List.css';
import { useLocation } from 'react-router-dom';
import { axiosInstance } from '../../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';
import HumanReadableDate from '../../utils/HumanReadableDate';
import DOMPurify from "dompurify";
import CircularProgress from '@mui/material/CircularProgress';
import { useTranslation } from 'react-i18next';
import { ShimmerDiv, ShimmerTitle } from 'shimmer-effects-react';


function List() {
    const {t, i18n} = useTranslation()
    const navigate = useNavigate();
    const location = useLocation();
    const typear = location.state;
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scroll(0, 0);
        setLoading(true);
        axiosInstance
            .get(`articles/via/${typear}/`)
            .then((res) => {
                setArticles(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [typear]);

    function handleClick(id) {
        navigate('/article/', { state: id });
    }

    return (
        <>
            <InfoPanel />
            <Navigation />
            <div className="list__wrapper container">
                {loading ? (
                    <>
                        <div>
                            <ShimmerDiv mode="light" rounded={1} className='daily_four_img_shimmer_in_list' />
                            <ShimmerTitle mode="light" line={2} gap={8} />  
                        </div>
                        <div>
                            <ShimmerDiv mode="light" rounded={1} className='daily_four_img_shimmer_in_list' />
                            <ShimmerTitle mode="light" line={2} gap={8} />  
                        </div>
                        <div>
                            <ShimmerDiv mode="light" rounded={1} className='daily_four_img_shimmer_in_list' />
                            <ShimmerTitle mode="light" line={2} gap={8} />  
                        </div>
                        <div>
                            <ShimmerDiv mode="light" rounded={1} className='daily_four_img_shimmer_in_list' />
                            <ShimmerTitle mode="light" line={2} gap={8} />  
                        </div>
                        <div>
                            <ShimmerDiv mode="light" rounded={1} className='daily_four_img_shimmer_in_list' />
                            <ShimmerTitle mode="light" line={2} gap={8} />  
                        </div>
                        <div>
                            <ShimmerDiv mode="light" rounded={1} className='daily_four_img_shimmer_in_list' />
                            <ShimmerTitle mode="light" line={2} gap={8} />  
                        </div>
                        <div>
                            <ShimmerDiv mode="light" rounded={1} className='daily_four_img_shimmer_in_list' />
                            <ShimmerTitle mode="light" line={2} gap={8} />  
                        </div>
                        <div>
                            <ShimmerDiv mode="light" rounded={1} className='daily_four_img_shimmer_in_list' />
                            <ShimmerTitle mode="light" line={2} gap={8} />  
                        </div>
                        <div>
                            <ShimmerDiv mode="light" rounded={1} className='daily_four_img_shimmer_in_list' />
                            <ShimmerTitle mode="light" line={2} gap={8} />  
                        </div>
                        <div>
                            <ShimmerDiv mode="light" rounded={1} className='daily_four_img_shimmer_in_list' />
                            <ShimmerTitle mode="light" line={2} gap={8} />  
                        </div>
                        <div>
                            <ShimmerDiv mode="light" rounded={1} className='daily_four_img_shimmer_in_list' />
                            <ShimmerTitle mode="light" line={2} gap={8} />  
                        </div>
                        <div>
                            <ShimmerDiv mode="light" rounded={1} className='daily_four_img_shimmer_in_list' />
                            <ShimmerTitle mode="light" line={2} gap={8} />  
                        </div>
                    </>
                ) : (
                    articles?.map((item, index) => (
                        <div className="article__card" key={index}>
                            <div
                                className="article__card__image"
                                style={{ backgroundImage: `url(${item.images_for_web[0].src})` }}
                            >
                                <div className="article__card__date">
                                    <p>{item.views}</p>
                                    <p>
                                        <HumanReadableDate date={item.created_at} />
                                    </p>
                                </div>
                            </div>
                            <div className="article__card__title">
                                <p
                                    onClick={() => { handleClick(item.id); }}
                                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(
                                        i18n.language === 'tm'?
                                        item.description_tm:
                                        i18n.language === 'en'?
                                        item.description_en:
                                        i18n.language === 'ru'?
                                        item.description_ru:null
                                        ) }}
                                ></p>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <Footer />
        </>
    );
}

export default List;

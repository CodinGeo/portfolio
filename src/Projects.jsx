import loPage from './assets/17loPage.mp4';
import spPage from './assets/sp37Page.mp4';
import zsoPage from './assets/zso8Page.mp4';
import loPagePoster from './assets/17loPagePoster.webp';
import spPagePoster from './assets/sp37PagePoster.webp';
import zsoPagePoster from './assets/zso8PagePoster.webp';
import './Projects.css';
import {React, useEffect, useState} from 'react';

function Projects({projectsRef, currentSection})
{
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const breakpoint = 750;
    useEffect(() => {
        const handleWindowResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    },[]);
    if(screenWidth > breakpoint)
    {
        const ProjectItem = (props) => {
            return(
                <div className='projectsListItemContainer' style={{width: props.size==='large'?'min(40.9dvw, 90.8dvh)':'min(20dvw, 44.45dvh)'}}>
                    <video className='projectsListItem' style={{height: props.size==='large'?'min(23.07dvw, 51.1dvh)':'min(11.29vw, 25.12dvh)'}} src={props.src} poster={props.poster} type='video/mp4' autoPlay='autoplay' muted loop/>
                    <div className='projectsListItemTitleContainer'>
                        <h3 className='projectsListItemTitle' style={{fontSize: props.size==='large'?'min(6dvw, 11dvh)':'min(2.75vw, 5.25dvh)'}}>{props.title}</h3>
                    </div>
                </div>
            );
        }
        return(
            <section ref={projectsRef} className='scrollSnapItem projectsContainer'>
                <h2 className={'projectsTitle hiddenCenter'+`${currentSection==='projects'?' visible':''}`}>Projekty z moim udziałem</h2>
                <div className='projectsListContainer'>
                    <div className={'projectsListLeftColumn hiddenRight'+`${currentSection==='projects'?' visible':''}`}>
                        <a href='http://17logdynia.pl/' target='_blank'>
                            <ProjectItem title='17 LO Gdynia' size='large' src={loPage} poster={loPagePoster}/>
                        </a>
                    </div>
                    <div className={'projectsListRightColumn hiddenRight'+`${currentSection==='projects'?' visible':''}`}>
                        <a href='http://sp37gdynia.pl/' target='_blank'>
                            <ProjectItem title='SP 37 Gdynia' size='small' src={spPage} poster={spPagePoster}/>
                        </a>
                        <a href='http://zso8gdynia.pl/' target='_blank'>
                            <ProjectItem title='ZSO 8 Gdynia' size='small' src={zsoPage} poster={zsoPagePoster}/>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
    else
    {
        const ProjectItem = (props) => {
            return(
                <div className='projectsListItemContainer'>
                    <video className='projectsListItem' style={{width: props.size==='large'?'min(75dvw, 70dvh)':'min(37dvw, 35dvh)'}} src={props.src} poster={props.poster} type='video/mp4' autoPlay='autoplay' muted loop/>
                    <div className='projectsListItemTitleContainer'>
                        <h3 className='projectsListItemTitle'>{props.title}</h3>
                    </div>
                </div>
            );
        }
        return(
            <section ref={projectsRef} className='scrollSnapItem projectsContainer'>
                <h2 className={'projectsTitle hiddenCenter'+`${currentSection==='projects'?' visible':''}`}>Projekty z moim udziałem</h2>
                <div className='projectsListContainer'>
                    <div className={'projectsListMobileTop hiddenRight'+`${currentSection==='projects'?' visible':''}`}>
                        <a href='http://17logdynia.pl/' target='_blank'>
                            <ProjectItem title='17 LO Gdynia' size='large' src={loPage} poster={loPagePoster}/>
                        </a>
                    </div>
                    <div className={'projectsListMobileBottom hiddenRight'+`${currentSection==='projects'?' visible':''}`}>
                        <a href='http://sp37gdynia.pl/' target='_blank'>
                            <ProjectItem title='SP 37 Gdynia' size='small' src={spPage} poster={spPagePoster}/>
                        </a>
                        <a href='http://zso8gdynia.pl/' target='_blank'>
                            <ProjectItem title='ZSO 8 Gdynia' size='small' src={zsoPage} poster={zsoPagePoster}/>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}
export default Projects;
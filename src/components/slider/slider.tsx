import { FC, useRef } from 'react';
import {SlideInfo} from '../../type/slider'
import { gsap, MotionPathPlugin } from "gsap/all";
import {NavigationOptions} from 'swiper/types/modules/navigation';
import { useGSAP } from '@gsap/react';
import { SwiperSlide, SwiperRef} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import {StyledMain, StyledGlobalWrapper, StyledPageContent, 
  StyledPageTitle, StyledPageYear, StyledPageYearStart, StyledPageYearEnd, 
  StyledPageControls, StyledPageControlsFraction, StyledPageControlsButtons,
  StyledPageControlsButtonPrev, StyledPageControlsButtonNext, 
  StyledPagePaginationBlock,StyledPagePagination,
  StyledPagePaginationLayer, StyledPagePaginationSvg, StyledPagePaginationCircle,
  StyledSwiper, StyledSlideSwiper, StyledSlideYear, StyledSlideText} from './styles'
import Swiper from 'swiper';

type SlideProps = {
  slides: SlideInfo[];
}
type motionPathProps = {
  path: SVGPathElement,
  align: SVGPathElement
  alignOrigin: number[] | undefined,
  start: number | undefined
  end: number | undefined
}

const Slider:FC<SlideProps> = ({slides}) => {
    const svg = useRef<SVGSVGElement | null>(null);
    const navigationPrevRef = useRef<HTMLButtonElement>(null);
    const navigationNextRef = useRef<HTMLButtonElement>(null);
    const paginationFractionRef = useRef<HTMLDivElement | null>(null);
    const startYearRef = useRef<HTMLDivElement | null>(null);
    const endYearRef = useRef<HTMLDivElement | null>(null);
    const swiperRef = useRef<SwiperRef>(null);
    let mm = gsap.matchMedia();

    useGSAP(() => {  
        mm.add("(min-width: 768px)", () => {
          gsap.registerPlugin(MotionPathPlugin);
          const circlePath = MotionPathPlugin.convertToPath("#holder", false)[0];
          
          circlePath.id = "circlePath";
          svg?.current?.prepend(circlePath);
    
          let items = gsap.utils.toArray(".item"),
            numItems = items.length,
            itemStep = 1 / numItems,
            wrapProgress = gsap.utils.wrap(0, 1),
            snap = gsap.utils.snap(itemStep),
            wrapTracker = gsap.utils.wrap(0, numItems),
            tracker = { item: 0 };
    
          gsap.set(items, { 
            // @ts-ignore
            motionPath: {
              path: circlePath,
              align: circlePath,
              alignOrigin: [0.5, 0.5],
              start: -0.165,
              end: (i: number) => (i / items.length) - 0.165,
            }, scale: 0.9 
          });
    
          const tl = gsap.timeline({ paused:true, reversed: true });
    
          tl.to('.animation', {
            rotation: 360, 
            transformOrigin: 'center', 
            duration: 1, 
            ease: 'none'
          });
    
          tl.to(items, {
            rotation: "-=360", 
            transformOrigin: 'center', 
            duration: 1, 
            ease: 'none',
          }, 0);
    
          tl.to(tracker, {
            item: numItems,
            duration: 1, 
            ease: 'none',
            modifiers: {
              item(value) {
                return wrapTracker(numItems - Math.round(value))
              }
            }
          }, 0);
          swiperRef?.current?.on('activeIndexChange', function (swiper: Swiper) {      

            if (startYearRef.current?.textContent) {
              startYearRef.current.textContent = slides[swiper.realIndex]["start"].toString();
            }   
            if (endYearRef.current?.textContent) {
              endYearRef.current.textContent = slides[swiper.realIndex]["end"].toString();
            }  
            gsap.fromTo(startYearRef.current, 
              { textContent: slides[swiper.realIndex  == 0 ? (slides.length - 1) : (swiper.realIndex - 1)]["start"]}, 
              {
                textContent: slides[swiper.realIndex]["start"], 
                duration: 0.3, 
                snap: { textContent: 1 }, 
              }
            );
            gsap.fromTo(endYearRef.current, 
              { textContent: slides[swiper.realIndex  == 0 ? (slides.length - 1) : (swiper.realIndex - 1)]["end"]}, 
              {
                textContent: slides[swiper.realIndex]["end"], 
                duration: 0.3, 
                snap: { textContent: 1 },
              }
            );
            let current = tracker.item;
            if (swiper.realIndex === current) {
              return;
            }
            let diff = current - swiper.realIndex;
            if (Math.abs(diff) < numItems / 2) {
              moveWheel(diff * itemStep);
            } else {
              var amt = numItems - Math.abs(diff);
              if (current > swiper.realIndex) {
                moveWheel(amt * -itemStep);
              } else {
                moveWheel(amt * itemStep);
              }
            }
    
          });
          function moveWheel(amount:number) {
            
            let progress = tl.progress();
            tl.progress(wrapProgress(snap(tl.progress() + amount)))
            tl.progress(progress);
    
            gsap.to(tl, {
              progress: snap(tl.progress() + amount),
              modifiers: {
                progress: wrapProgress
              }
            });
          }
        });
        mm.add("(max-width: 767px)", () => {
          swiperRef?.current?.on('slideChange', function (swiper: Swiper) {              
            if (startYearRef.current?.textContent) {
              startYearRef.current.textContent = slides[swiper.realIndex]["start"].toString();
            }   
            if (endYearRef.current?.textContent) {
              endYearRef.current.textContent = slides[swiper.realIndex]["end"].toString();
            }   
            gsap.fromTo(startYearRef.current, 
              { textContent: slides[swiper.realIndex  == 0 ? (slides.length - 1) : (swiper.realIndex - 1)]["start"]}, 
              {
                textContent: slides[swiper.realIndex]["start"], 
                duration: 0.3, 
                snap: { textContent: 1 }, 
              }
            );
            gsap.fromTo(endYearRef.current, 
              { textContent: slides[swiper.realIndex  == 0 ? (slides.length - 1) : (swiper.realIndex - 1)]["end"]}, 
              {
                textContent: slides[swiper.realIndex]["end"], 
                duration: 0.3, 
                snap: { textContent: 1 },
              }
            );
          });
        });
        },[]  
    );
    
    return (
        <StyledMain>
          <StyledGlobalWrapper>
            <StyledPageContent>
              <StyledPageTitle>Исторические даты</StyledPageTitle>
              <StyledPageYear>
                <StyledPageYearStart ref={startYearRef}></StyledPageYearStart>
                <StyledPageYearEnd ref={endYearRef}></StyledPageYearEnd>
              </StyledPageYear>
              <StyledPagePaginationBlock>
                <StyledPagePaginationLayer className="animation">
                  <StyledPagePagination className="swiper-pagination"></StyledPagePagination>
                  <StyledPagePaginationSvg ref={svg} viewBox="0 0 530 530">
                      <StyledPagePaginationCircle id="holder" className="st0" cx="265" cy="265" r="265"/>
                  </StyledPagePaginationSvg>
                </StyledPagePaginationLayer>
              </StyledPagePaginationBlock>
              <StyledPageControls>
                <StyledPageControlsFraction ref={paginationFractionRef}></StyledPageControlsFraction>
                <StyledPageControlsButtons>
                    <StyledPageControlsButtonPrev ref={navigationPrevRef}>Prev</StyledPageControlsButtonPrev>
                    <StyledPageControlsButtonNext ref={navigationNextRef}>Next</StyledPageControlsButtonNext>
                </StyledPageControlsButtons>
              </StyledPageControls>
              <StyledSwiper
                spaceBetween={50}
                loop={true}
                effect={'fade'}
                slidesPerView={1}
                modules={[Navigation, Pagination, EffectFade]}
                updateOnWindowResize={false}
                noSwiping={true}
                navigation={{
                  prevEl: navigationPrevRef.current ? navigationPrevRef.current : undefined,
                  nextEl: navigationNextRef.current ? navigationNextRef.current : undefined,
                }}
                onActiveIndexChange={(swiperCore: Swiper) => {  
                  let totalSlidersCount = swiperCore.slides.length < 10 ? '0' + swiperCore.slides.length : swiperCore.slides.length;
                  let currentSliderIndex = (swiperCore.realIndex + 1) < 10 ? '0' + (swiperCore.realIndex + 1) : (swiperCore.realIndex + 1);
                  if (paginationFractionRef?.current?.textContent) {
                    paginationFractionRef.current.textContent = `${currentSliderIndex} / ${totalSlidersCount}`;
                  }                  
                }}
                onBeforeInit={(swiper: Swiper) => {          
                  (swiper.params.navigation as NavigationOptions).prevEl = navigationPrevRef.current;
                  (swiper.params.navigation as NavigationOptions).nextEl = navigationNextRef.current;
                }}
                pagination={{
                  el: ".swiper-pagination",
                  type: "bullets",
                  clickable: true,
                  renderBullet: (index: number, className:string) => {
                    return `<div class="${className} item ${index + 1} ${index === 0 ? 'swiper-pagination-bullet-active' : ''}"><span data-title=${slides[index]["title"]}></span></div>`;
                  },  
                }}
                onSwiper={(swiper: Swiper) =>  {
                  swiperRef.current = swiper;
                  if (startYearRef.current) {
                    startYearRef.current.textContent = slides[swiper.activeIndex]["start"].toString();
                  }  
                  if (endYearRef.current) {
                    endYearRef.current.textContent = slides[swiper.activeIndex]["end"].toString(); 
                  }                
                                 
                  let totalSlidersCount = swiper.slides.length < 10 ? '0' + swiper.slides.length : swiper.slides.length;
                  let currentSliderIndex = (swiper.activeIndex + 1) < 10 ? '0' + (swiper.activeIndex + 1) : (swiper.activeIndex + 1);
                  if (paginationFractionRef.current?.textContent) {
                    paginationFractionRef.current.textContent = `${currentSliderIndex} / ${totalSlidersCount}`;
                  }                      
                }}
              >
                {
                  slides.map(slide => {
                    return(
                      <SwiperSlide key={slide["start"]} className='swiper-no-swiping'>                      
                        <StyledSlideSwiper
                          spaceBetween={20}
                          slidesPerView={2}
                          modules={[Navigation]}
                          navigation={true}
                          cssMode={true}
                          breakpoints= {{
                            320: {
                              slidesPerView: 2,
                            },
                            1024: {
                              slidesPerView: 3,
                            }
                          }}
                        >
                          {
                            slide.articles.map(article => {
                              return (
                                <SwiperSlide key={article.year}>
                                  <StyledSlideYear>{article.year}</StyledSlideYear> 
                                  <StyledSlideText>{article.text}</StyledSlideText>
                                </SwiperSlide>
                              )
                            })
                          }
                        </StyledSlideSwiper>
                      </SwiperSlide>
                    )
                  })
                }
              </StyledSwiper>            
            </StyledPageContent>
          </StyledGlobalWrapper>
        </StyledMain>
      );
}

export default Slider;
"use client"

import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'
import { useMediaQuery } from 'react-responsive';

const Grid = () => {
  
  const isMdScreen = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <section id='about' className={!isMdScreen ? 'mt-[10rem]' : 'mt-0'}>
        <BentoGrid>
            {gridItems.map
            (({ id, title, description, className, img, imgDark, imgClassName, titleClassName, spareImg, spareImgDark }) => (
                <BentoGridItem 
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    className={className}
                    img={img}
                    imgDark={imgDark}
                    imgClassName={imgClassName}
                    titleClassName={titleClassName}
                    spareImg={spareImg}
                    spareImgDark={spareImgDark}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid
"use client"

import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  
  return (
    <section id='about'>
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
// src/components/ui/MomentsCarousel.tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import type { Moment } from "@/types/profile"
import { useState, useCallback, useEffect } from "react"
import Autoplay from "embla-carousel-autoplay"
import { type CarouselApi } from "@/components/ui/carousel"

interface MomentsCarouselProps {
  moments: Moment[]
}

export function MomentsCarousel({ moments }: MomentsCarouselProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index)
  }, [api])

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {moments.map((moment, index) => (
            <CarouselItem key={index} className="pl-4">
              <Card className="bg-[#1E2124] border-gray-800/50 overflow-hidden">
                <div className="relative">
                  <div className="aspect-[16/9] w-full bg-[#2A2D31]">
                    <Image
                      src={moment.image}
                      alt={moment.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      quality={90}
                      priority={index === 0}
                    />
                  </div>
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="space-y-2">
                      <span className="inline-block px-3 py-1 bg-blue-600/80 backdrop-blur-sm text-xs font-medium rounded-full">
                        {moment.date}
                      </span>
                      <h4 className="text-xl font-semibold leading-tight">
                        {moment.title}
                      </h4>
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <div className="p-6 space-y-3">
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {moment.description}
                  </p>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="bg-[#1E2124] border-gray-700 text-gray-200 hover:bg-gray-800 hover:text-white -left-12 hidden sm:flex" />
        <CarouselNext className="bg-[#1E2124] border-gray-700 text-gray-200 hover:bg-gray-800 hover:text-white -right-12 hidden sm:flex" />
      </Carousel>

      {/* Dots indicator */}
      <div className="flex justify-center items-center gap-2">
        {moments.map((_, index) => (
          <button
            key={index}
            className={`transition-all duration-300 rounded-full ${
              current - 1 === index
                ? "bg-blue-500 w-8 h-2"
                : "bg-gray-600 hover:bg-gray-500 w-2 h-2"
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="flex justify-center">
        <span className="text-sm text-gray-400 bg-[#1E2124] px-3 py-1 rounded-full border border-gray-700">
          {current} / {count}
        </span>
      </div>
    </div>
  )
}
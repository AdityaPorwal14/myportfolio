"use client"

export function Hero() {
  return (
    <section className="py-8">
      <div className="max-w-2xl">
        <div className="mb-8">
          <h1 className="text-[20px] font-medium text-black dark:text-white mb-1">Aditya Porwal</h1>
          <p className="text-[16px] font-normal text-[#4A4A4A] dark:text-gray-400">Full Stack Developer</p>
        </div>

        <div className="flex items-center gap-4 sm:gap-4">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aditya%20profile%20photo.jpg-7Wgs65c93atp3BdwzmLGVg00ZGtZH9.jpeg"
                alt="Aditya Porwal"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <p className="text-[15px] leading-[1.6] text-[#333] dark:text-gray-300 text-left">
              Focused on creating intuitive and performant web experiences. Bridging the gap between design and
              development.
            </p>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 600px) {
            .flex {
              flex-direction: column;
              align-items: flex-start;
              gap: 12px;
            }
          }
        `}</style>
      </div>
    </section>
  )
}

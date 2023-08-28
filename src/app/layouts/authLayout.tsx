import dynamic from 'next/dynamic'

const FooterRegion = dynamic(() => import('@/components/Footer/FooterRegion'), { ssr: false })

export default function authLayout({
  children,
  lng
}: {
  children: React.ReactNode
  lng: string
}) {
  return (
    <>
      <div className="relative bg-pink-50 w-full min-h-screen">
        <div className="w-full h-full">
          <button className="absolute top-5 right-5 text-sm rounded-lg border border-black-alpha-100 text-black-alpha-900 font-bold h-10 w-20 z-20">Cancel</button>
          <img
            src="/images/auth/Group-96.svg"
            className="absolute hidden md:block top-0 left-0"
          />
          <img
            src="/images/auth/Group-44.svg"
            className="absolute hidden md:block bottom-0 right-0"
          />
        </div>
        <div className="w-full min-h-screen relative flex flex-col justify-between z-10">
          {children}
          <div className="order-last">
            <FooterRegion lng={lng} />
          </div>
        </div>
      </div>
    </>
  )
}

import { Seo } from '@/components/common'
import { FeatureWorks, HeroSection, RecentPosts } from '@/components/home'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models'
import { Box } from '@mui/material'

const Home: NextPageWithLayout = () => {
  return (
    <>
    <Seo 
    data={{
      title: "Kiếm tiền online | Ứng Dụng Hay",
    description: "Kiếm tiền online cùng với những Ứng Dụng Hay và đơn giản",
    url: "https://www.ungdunghay.tech/",
    thumbnailUrl: "https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
    }}
  />
    <Box>
      <HeroSection />
      <RecentPosts />
      <FeatureWorks />
    </Box>
    </>
  )
}

Home.Layout = MainLayout

export default Home

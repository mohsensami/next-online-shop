import Image from 'next/image';
import Header from './_components/Header';
import Slider from './_components/Slider';
import GlobalApi from './_utils/GlobalApi';
import CategoryList from './_components/CategoryList';
import ProductList from './_components/ProductList';
import Footer from './_components/Footer';

export default async function Home() {
    const sliderList = await GlobalApi.getSliders();
    const categoryList = await GlobalApi.getCategoryList();
    const productList = await GlobalApi.getAllProducts();
    return (
        <>
            <Header />
            {/* Sliders  */}
            <div className="p-10 px-5 md:px-16">
                <Slider sliderList={sliderList} />

                <CategoryList categoryList={categoryList} />
                <ProductList productList={productList} />
                {/* Banner  */}
                <Image
                    src="/banner.png"
                    width={1000}
                    height={300}
                    alt="banner"
                    className="w-full h-[400px] object-contain"
                />
                <Footer />
            </div>
        </>
    );
}

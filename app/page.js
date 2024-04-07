import Image from 'next/image';
import Header from './_components/Header';
import Slider from './_components/Slider';
import GlobalApi from './_utils/GlobalApi';
import CategoryList from './_components/CategoryList';

export default async function Home() {
    const sliderList = await GlobalApi.getSliders();
    const categoryList = await GlobalApi.getCategoryList();
    return (
        <>
            <Header />
            {/* Sliders  */}
            <div className="p-10 px-5 md:px-16">
                <Slider sliderList={sliderList} />

                <CategoryList categoryList={categoryList} />
            </div>
        </>
    );
}

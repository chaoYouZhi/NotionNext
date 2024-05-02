import { Home } from '@/components/HeroIcons'
import LazyImage from '@/components/LazyImage'
import Link from 'next/link'
import { useState } from 'react';
import { siteConfig } from '@/lib/config'

const Logo = props => {
  const { siteInfo } = props;
  const [imageLoaded, setImageLoaded] = useState(false);  // 添加状态来跟踪图像加载状态

  return (
        <Link href='/' passHref legacyBehavior>
            <div className='flex flex-nowrap justify-center items-center cursor-pointer font-extrabold'>
                <LazyImage src={siteInfo?.icon} width={24} height={24} alt={siteConfig('AUTHOR')} className='mr-4 hidden md:block' 
                    onLoad={() => setImageLoaded(true)}  // 当图像加载完成时，更新状态
                />
                <div id='logo-text' className={`group rounded-2xl flex-none relative ${imageLoaded ? 'visible' : 'invisible'}`}>
                    <div className={`opacity-${imageLoaded ? '100' : '0'} text-lg my-auto rounded dark:border-white duration-200`}>
                        {siteConfig('TITLE')}
                    </div>
                    <div className='flex justify-center rounded-2xl group-hover:bg-indigo-600 w-full group-hover:opacity-100 opacity-0 invisible group-hover:visible absolute top-0 py-1 duration-200'>
                        <Home className={'w-6 h-6 stroke-white stroke-2 '}/>
                    </div>
                </div>
            </div>
        </Link>
  )
}
export default Logo

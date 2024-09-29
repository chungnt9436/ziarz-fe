'use client'
import Link from 'next/link';
export default function Wishlist() {
    const Items = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        name: 'Áo măng tô',
        price: '1,699,999đ',
        image: '7.1b.webp',
    }));
      return (
        <div>
            <h2 className="title-page">Danh sách yêu thích</h2>
            <div className="inner_row justify-center">
                <div className="w-full flex -mx-3 flex-wrap">
                    {Items.map((item) => (
                        <div key={item.id}  className="md:w-3/12 w-6/12 p-3">
                            <Link href="">
                                <img className="w-full mb-2" src="7.1b.webp" alt=""/>
                                <h3 className="text-xl my-1">Áo măng tô</h3>
                                <div className="text-bodydark2">3,290,000đ</div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      )
}

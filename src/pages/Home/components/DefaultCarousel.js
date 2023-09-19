
import { Carousel } from "flowbite-react"
import star from "../../../assets/star.png"
import play from "../../../assets/play-button.png"
import bookmark from "../../../assets/bookmark-white.png"



export const DefaultCarousel = () => {
   
  return (
    <div className=" CarouselContain">
        <Carousel className="m-0 p-0 ">
            {/* Slide 1 */}
            <figure className="relative w-full">
                <img  className="w-full" src="https://www.slashfilm.com/img/gallery/al-pacino-was-almost-fired-two-weeks-into-filming-the-godfather/l-intro-1670452428.jpg" alt="..."/>
                <figcaption className="carouselCaption font-sans">
                    <h1 className="font-semibold text-gray-200 text-6xl max-lg:text-4xl ">Movie Title</h1>
                    <aside className="text-md mt-4 max-w-4xl  flex">
                        <span className="font-semibold text-sm px-2 rounded-lg bg-primary-blue">HD</span>
                        <span className="font-semibold text-sm ml-3 px-2 rounded-lg border border-gray-200 text-gray-200">PG-13</span>
                        <span className=" ml-2 flex items-center">
                            <img src={star} className="h-4 w-2" alt="" />
                            <p className="ml-2 text-sm text-gray-200">9.5</p>
                        </span>
                        <span className=" ml-2 flex">
                            <p className="ml-2 text-sm text-gray-200">2023</p>
                            <p className="ml-2 text-sm text-gray-200">114 min</p>
                            <p className="ml-2 text-sm text-gray-200">comedy</p>
                            <p className="ml-2 text-sm text-gray-200">romance</p>
                            <p className="ml-2 text-sm text-gray-200">action</p>
                        </span>
                    </aside>
                    <aside className="max-w-4xl mt-4 ">
                        <p className="text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, amet. Ullam nisi totam tenetur rerum a maiores in illo blanditiis unde tempora omnis quisquam soluta repellendus provident quidem alias, id deserunt suscipit sunt voluptatibus veritatis quod aut asperiores quia. Voluptatem totam est commodi, enim magni ea. Quibusdam, itaque explicabo. Deleniti!</p>
                    </aside>

                    {/* Buttons */}
                    <aside className="mt-2 max-w-2xl flex">
                        <button className="bg-primary-blue rounded-xl p-2 flex items-center"> 
                            <img src={play} className="h-6" alt="" />
                            <p className="font-semibold text-md ml-2">Watch Now</p> 
                        </button>
                        <button className="ml-3 rounded-xl p-2 flex items-center"> 
                            <img src={bookmark} className="h-6" alt="" />
                            <p className="font-semibold text-md ml-2 text-gray-200">Bookmark</p> 
                        </button>
                    </aside>

                </figcaption>
            </figure>
            {/* Slide 2 */}
            <figure className=" relative  w-full">
                <img  className="w-full" src="https://raisingworldchildren.com/wp-content/uploads/2018/11/the-pursuit-of-happyness.jpg" alt="..."/>
                <figcaption className="carouselCaption font-sans    ">
                    <h1 className="font-semibold text-gray-200 text-6xl max-lg:text-4xl ">Movie Title</h1>
                    <aside className="text-md mt-4 max-w-4xl flex ">
                        <span className="font-semibold text-sm px-2 rounded-lg bg-primary-blue">HD</span>
                        <span className="font-semibold text-sm ml-3 px-2 rounded-lg border border-gray-200 text-gray-200">PG-13</span>
                        <span className=" ml-2 flex items-center">
                            <img src={star} className="h-4" alt="" />
                            <p className="ml-2 text-sm text-gray-200">9.5</p>
                        </span>
                        <span className=" ml-2 flex">
                            <p className="ml-2 text-sm text-gray-200">2023</p>
                            <p className="ml-2 text-sm text-gray-200">114 min</p>
                            <p className="ml-2 text-sm text-gray-200">comedy</p>
                            <p className="ml-2 text-sm text-gray-200">romance</p>
                            <p className="ml-2 text-sm text-gray-200">action</p>
                        </span>
                    </aside>
                    <aside className="max-w-4xl mt-4">
                        <p className="text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, amet. Ullam nisi totam tenetur rerum a maiores in illo blanditiis unde tempora omnis quisquam soluta repellendus provident quidem alias, id deserunt suscipit sunt voluptatibus veritatis quod aut asperiores quia. Voluptatem totam est commodi, enim magni ea. Quibusdam, itaque explicabo. Deleniti!</p>
                    </aside>

                    {/* Buttons */}
                    <aside className="mt-2 max-w-2xl flex">
                        <button className="bg-primary-blue rounded-xl p-2 flex items-center"> 
                            <img src={play} className="h-6" alt="" />
                            <p className="font-semibold text-md ml-2">Watch Now</p> 
                        </button>
                        <button className="ml-3 rounded-xl p-2 flex items-center"> 
                            <img src={bookmark} className="h-6" alt="" />
                            <p className="font-semibold text-md ml-2 text-gray-200">Bookmark</p> 
                        </button>
                    </aside>

                </figcaption>
            </figure>
            {/* Slide 3 */}
            <figure className=" relative w-full">
                <img  className="w-full" src="https://m.media-amazon.com/images/M/MV5BMTgyMDUzMDYxNl5BMl5BanBnXkFtZTcwMzAzNDQyNw@@._V1_.jpg" alt="..."/>
                <figcaption className="carouselCaption font-sans   ">
                    <h1 className="font-semibold text-gray-200 text-6xl max-lg:text-4xl ">Movie Title</h1>
                    <aside className="text-md mt-4 max-w-4xl flex ">
                        <span className="font-semibold text-sm px-2 rounded-lg bg-primary-blue">HD</span>
                        <span className="font-semibold text-sm ml-3 px-2 rounded-lg border border-gray-200 text-gray-200">PG-13</span>
                        <span className=" ml-2 flex items-center">
                            <img src={star} className="h-4" alt="" />
                            <p className="ml-2 text-sm text-gray-200">9.5</p>
                        </span>
                        <span className=" ml-2 flex">
                            <p className="ml-2 text-sm text-gray-200">2023</p>
                            <p className="ml-2 text-sm text-gray-200">114 min</p>
                            <p className="ml-2 text-sm text-gray-200">comedy</p>
                            <p className="ml-2 text-sm text-gray-200">romance</p>
                            <p className="ml-2 text-sm text-gray-200">action</p>
                        </span>
                    </aside>
                    <aside className="max-w-4xl mt-4">
                        <p className="text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, amet. Ullam nisi totam tenetur rerum a maiores in illo blanditiis unde tempora omnis quisquam soluta repellendus provident quidem alias, id deserunt suscipit sunt voluptatibus veritatis quod aut asperiores quia. Voluptatem totam est commodi, enim magni ea. Quibusdam, itaque explicabo. Deleniti!</p>
                    </aside>

                    {/* Buttons */}
                    <aside className="mt-2 max-w-2xl flex">
                        <button className="bg-primary-blue rounded-xl p-2 flex items-center"> 
                            <img src={play} className="h-6" alt="" />
                            <p className="font-semibold text-md ml-2">Watch Now</p> 
                        </button>
                        <button className="ml-3 rounded-xl p-2 flex items-center"> 
                            <img src={bookmark} className="h-6" alt="" />
                            <p className="font-semibold text-md ml-2 text-gray-200">Bookmark</p> 
                        </button>
                    </aside>

                </figcaption>
            </figure>
            {/* Slide 4 */}
            <figure className=" relative  w-full">
                <img  className="w-full" src="https://a.ltrbxd.com/resized/sm/upload/ho/gl/t1/5p/ex%20machina-1200-1200-675-675-crop-000000.jpg?v=ae03cd4b51" alt="..."/>
                <figcaption className="carouselCaption font-sans   ">
                    <h1 className="font-semibold text-gray-200 text-6xl max-lg:text-4xl ">Movie Title</h1>
                    <aside className="text-md mt-4 max-w-4xl flex ">
                        <span className="font-semibold text-sm px-2 rounded-lg bg-primary-blue">HD</span>
                        <span className="font-semibold text-sm ml-3 px-2 rounded-lg border border-gray-200 text-gray-200">PG-13</span>
                        <span className=" ml-2 flex items-center">
                            <img src={star} className="h-4" alt="" />
                            <p className="ml-2 text-sm text-gray-200">9.5</p>
                        </span>
                        <span className=" ml-2 flex">
                            <p className="ml-2 text-sm text-gray-200">2023</p>
                            <p className="ml-2 text-sm text-gray-200">114 min</p>
                            <p className="ml-2 text-sm text-gray-200">comedy</p>
                            <p className="ml-2 text-sm text-gray-200">romance</p>
                            <p className="ml-2 text-sm text-gray-200">action</p>
                        </span>
                    </aside>
                    <aside className="max-w-4xl mt-4">
                        <p className="text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, amet. Ullam nisi totam tenetur rerum a maiores in illo blanditiis unde tempora omnis quisquam soluta repellendus provident quidem alias, id deserunt suscipit sunt voluptatibus veritatis quod aut asperiores quia. Voluptatem totam est commodi, enim magni ea. Quibusdam, itaque explicabo. Deleniti!</p>
                    </aside>

                    {/* Buttons */}
                    <aside className="mt-2 max-w-2xl flex">
                        <button className="bg-primary-blue rounded-xl p-2 flex items-center"> 
                            <img src={play} className="h-6" alt="" />
                            <p className="font-semibold text-md ml-2">Watch Now</p> 
                        </button>
                        <button className="ml-3 rounded-xl p-2 flex items-center"> 
                            <img src={bookmark} className="h-6" alt="" />
                            <p className="font-semibold text-md ml-2 text-gray-200">Bookmark</p> 
                        </button>
                    </aside>

                </figcaption>
            </figure>
            {/* Slide 5 */}
            <figure className=" relative  w-full">
                <img  className="w-full" src="https://m.media-amazon.com/images/S/pv-target-images/86dfd3549f93ed320fa617005385b59dbcb9fa801fc78cf4752c479a0a1e936c.jpg" alt="..."/>
                <figcaption className="carouselCaption font-sans   ">
                    <h1 className="font-semibold text-gray-200 text-6xl max-lg:text-4xl ">Movie Title</h1>
                    <aside className="text-md mt-4 max-w-4xl flex ">
                        <span className="font-semibold text-sm px-2 rounded-lg bg-primary-blue">HD</span>
                        <span className="font-semibold text-sm ml-3 px-2 rounded-lg border border-gray-200 text-gray-200">PG-13</span>
                        <span className=" ml-2 flex items-center">
                            <img src={star} className="h-4" alt="" />
                            <p className="ml-2 text-sm text-gray-200">9.5</p>
                        </span>
                        <span className=" ml-2 flex">
                            <p className="ml-2 text-sm text-gray-200">2023</p>
                            <p className="ml-2 text-sm text-gray-200">114 min</p>
                            <p className="ml-2 text-sm text-gray-200">comedy</p>
                            <p className="ml-2 text-sm text-gray-200">romance</p>
                            <p className="ml-2 text-sm text-gray-200">action</p>
                        </span>
                    </aside>
                    <aside className="max-w-4xl mt-4">
                        <p className="text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, amet. Ullam nisi totam tenetur rerum a maiores in illo blanditiis unde tempora omnis quisquam soluta repellendus provident quidem alias, id deserunt suscipit sunt voluptatibus veritatis quod aut asperiores quia. Voluptatem totam est commodi, enim magni ea. Quibusdam, itaque explicabo. Deleniti!</p>
                    </aside>

                    {/* Buttons */}
                    <aside className="mt-2 max-w-2xl flex">
                        <button className="bg-primary-blue rounded-xl p-2 flex items-center"> 
                            <img src={play} className="h-6" alt="" />
                            <p className="font-semibold text-md ml-2">Watch Now</p> 
                        </button>
                        <button className="ml-3 rounded-xl p-2 flex items-center"> 
                            <img src={bookmark} className="h-6" alt="" />
                            <p className="font-semibold text-md ml-2 text-gray-200">Bookmark</p> 
                        </button>
                    </aside>

                </figcaption>
            </figure>
        </Carousel>
    </div>
  
  )
}

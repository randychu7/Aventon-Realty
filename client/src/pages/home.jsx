import Rating from '../components/rating'
import Cards from '../components/cards'
export default function Home() {

    const cards = [
        {
        title:"Coastal Charm in Santorini, Greece",
        rating:"4.5",
        description:"Immerse yourself in coastal beauty with this charming Birdbox in Santorini. Experience nature and comfort blending seamlessly. Marvel at the Aegean Sea's allure and the breathtaking vistas of Santorini's landscape.",
        price:"$100",
        images:[
            'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
          ]
        },
        {
            title:"Alpine Escape in Aspen, Colorado",
        rating:"4.8",
        description:"Unwind and recharge in this alpine Birdbox retreat in Aspen. Enjoy a harmonious blend of nature and modernity. Take in the sweeping views of the majestic Rocky Mountains.",
        price:"$230",
        images:[
            'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
          ]

        },
        {
            title:"Forde, Norway",
        rating:"4.78",
        description:"Relax, rejuvenate and unplug in this unique contemporary Birdbox. Feel close to nature in ultimate comfort. Enjoy the view of the epic mountain range of Blegja and the Førdefjor",
        price:"$397",
        images:[
            'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
          ]
        }

        ]

        const renderCards = cards.map(card => {
            return (
                <Cards 
                title = {card.title}
                rating = {card.rating}
                description = {card.description}
                price = {card.price}
                images = {card.images}
                >
                </Cards>
            )
        })

    
   




    return (
        <div className="h-screen w-full">
                <div
                className="h-[70%] w-full flex justify-center items-start absolute left-0 top-0 right-0 bg-gray-400"
                style={{
                    backgroundImage: "url(/house1.jpg)", // Update the image URL here
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover",
                    backgroundPosition: "center",
                   
                }}
                >
                    <div className="flex flex-col items-center">
                    <div className="font-poppins font-extrabold text-white text-7xl text-center mt-[90px]">
                        Discover Your <br/> Oasis.
                        
                    </div>
                    </div>
                </div>
                <section className="h-[47em]"></section>

                <section className="w-full h-[5em] -translate-y-[30px] bg-white "   style={{
                WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
                maskImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
    }}>

                </section>
                <section>
                    <div className="flex p-12 flex-col md:flex-row">
                        <div className=" md:w-[40%] flex justify-center md:justify-start mb-5"><h3 className="text-3xl">Enjoy Quality Life <br/> in Aventon Realty</h3></div>
                        <div className=" md:w-[60%]"><p className='text-center md:text-start'>Indulge in the epitome of quality living at Aventon Realty, where every moment is a celebration of comfort, elegance, and community. Discover a harmonious blend of modern convenience and timeless charm, creating the perfect backdrop for a life well-lived.</p>
                        <div className='w-full flex justify-start'>
                            <Rating />
                            </div>
                            
                    </div>
                    </div>
                  

                </section>

                <section className="h-screen p-12 mt-[5em]">

        <div className='w-full flex md:flex-row gap-7 flex-col'>
            <div className='md:w-1/2'>
                <div>
                    <h3 className='text-3xl mb-5 font-bold text-center md:text-left'>Find Your Dream <br/> Home Here</h3>
                    <p className='text-center md:text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga excepturi dolorem veniam, distinctio accusamus veritatis hic velit neque nemo eaque laborum doloribus perspiciatis amet dicta voluptates, error soluta aperiam ipsa.</p>
                </div>
                <div className='w-full mt-10 rounded-lg h-[30em] '  style={{
                    backgroundImage: "url(/house-interior2.jpg)", // Update the image URL here
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover",
                    backgroundPosition: "center",
                   
                }}></div>
                        </div>


                <div className='md:w-2/3'>
                    <div className='w-full mt-5 rounded-lg h-[35em] ' style={{
                        backgroundImage: "url(/house-interior4.jpg)", // Update the image URL here
                        backgroundRepeat:"no-repeat",
                        backgroundSize:"cover",
                        backgroundPosition: "center",
                    
                    }} ></div>
                    
                    <div className='md:w-2/3 mt-12 rounded-lg h-[35em] md:h-[23em] ' style={{
                        backgroundImage: "url(/house-interior3.jpg)", // Update the image URL here
                        backgroundRepeat:"no-repeat",
                        backgroundSize:"cover",
                        backgroundPosition: "center",
                    
                    }}></div>

                </div>
                    </div>
                    </section>

                    <section className="h-screen p-12 mt-[5em]">
                        <div className='w-full  rounded-3xl'>
                            <h3 className='text-3xl font-bold'>Featured Homes</h3>
                            <div className='w-full flex gap-5 flex-col md:flex-row  h-full mt-5'>
                                
                                {renderCards}
                            

                            </div>
                        </div>
                        </section>


        </div>
    )
}
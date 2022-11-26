import React from 'react'
import Category from '../Components/Category'

export default function HomePage() {
  return (
    <div className='bg-primary'>
      <div className='h-screen container m-auto'>
        <Category title="Black Friday" items={[
      {name:'Marvel\'s Spider-Man Remastered',src:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRNQJvtMQ--Ghj8hVjeaOEjfbTDCGa5G_dOkJ2KJorWETrsKF4g&usqp=CAc",price:"59.99"},
      {name:'Marvel\'s Spider-Man Miles Morales',src:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR6oEpLYXiXmVoknWLWvekXwiLrMXpm1xhwrfpYRIQ7iujHJVY&usqp=CAc",price:"39.99"},
      {name:'God Of War',src:"https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7",price:"49.99"}]}/>
      </div>
    </div>
  )
}

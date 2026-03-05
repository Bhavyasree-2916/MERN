import { useState } from 'react'

const Conditional = () => {
    const [isVisible,setIsVisible]=useState(true)
    return(
        <div>
            <button onClick={()=>setIsVisible(!isVisible)}>Toggle</button>
            {isVisible && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum doloremque omnis adipisci voluptate voluptas voluptatem nulla voluptatum corrupti ullam accusantium id consequatur odio ut quae cumque dignissimos, ea est doloribus.</p>}
        </div>
    )
}

export default Conditional
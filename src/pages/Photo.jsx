
import img4 from '../../public/item-4.jpg'
import img5 from '../../public/item-5.jpg'
import img6 from '../../public/item-6.jpg'

const Photo = () => {
    return (
        <div className="flex justify-between flex-wrap items-center">
           
            <div className='w-[31%] mb-8'>
                <img src={img4} alt="img" />
            </div>
            <div className='w-[31%] mb-8'>
                <img src={img5} alt="img" />
            </div>
            <div className='w-[31%] mb-8'>
                <img src={img6} alt="img" />
            </div>
            
        </div>
    );
};

export default Photo;
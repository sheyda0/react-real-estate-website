import React from 'react';
import { housesData } from '../data';
import { useParams } from 'react-router-dom';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Input from './Input';
import PropertyBadge from './PropertyBadge';
import HouseInfo from './HouseInfo';


const PropertyDetails = () => {
  const { id } = useParams();

  const house = housesData.find(house => {
    return house.id === parseInt(id);
  });

  return (
    <section>
      <div className='container mx-auto min-h-[800px] mb-14'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between '>
          <div>
            <h2 className='text-2xl font-semibold'>{house.name}</h2>
            <h3 className='text-lg mb-4'>{house.address}</h3>
          </div>
          <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
            <PropertyBadge color='green' text={house.name} />
            <PropertyBadge color='violet' text={house.country} />
          </div>
          <div className='text-3xl font-semibold text-violet-600'>$ {house.price}</div>
        </div>
        <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between'>
          <div className='max-w-[768px]'>
            <div className='mb-8'>
              <img src={house.imageLg} alt="" />
            </div>
            <div className='flex gap-x-6 text-violet-700 mb-6'>
              <HouseInfo icon={<BiBed />} text={house.bedrooms} />
              <HouseInfo icon={<BiBath />} text={house.bathrooms} />
              <HouseInfo icon={<BiArea />} text={house.surface} />
            </div>
            <div>{house.description}</div>
          </div>
          <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg ml-6 px-6 py-8'>
            <div className='flex items-center gap-x-4 mb-8'>
              <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                <img src={house.agent.image} alt="" />
              </div>
              <div>
                <div className='font-bold text-lg'>{house.agent.name}</div>
                <Link to='' className='text-violet-700 text-sm'>View Listings</Link>
              </div>
            </div>
            {/* form */}
            <form className='flex flex-col gap-y-4'>
              <Input placeholder='Name' />
              <Input placeholder='Email' />
              <Input placeholder='Phone' />
              <textarea className='border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400'
              placeholder='Message*'
              defaultValue='Hello, I am interested in [Modern apartment]'
              ></textarea>
              <div className='flex gap-x-2'>
                <button className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'>Send message</button>
                <button className='border border-violet-700 hover:border-violet-800 hover:text-violet-500 rounded p-4 text-sm w-full transition'>Call</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
};

export default PropertyDetails;

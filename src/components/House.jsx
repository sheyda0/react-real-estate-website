import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import PropertyBadge from './PropertyBadge';
import HouseInfo from './HouseInfo';

const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } = house;

  return (
    <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img className='mb-8' src={image} alt="" />
      <div className='mb-4 flex gap-x-2 text-sm'>
        <PropertyBadge color='green' text={type} />
        <PropertyBadge color='violet' text={country} />
      </div>
      <div className="text-lg font-semibold max-w-[260px]">{address}</div>
      <div className='flex gap-x-4 my-4'>
        <HouseInfo icon={<BiBed />} text={bedrooms} />
        <HouseInfo icon={<BiBath />} text={bathrooms} />
        <HouseInfo icon={<BiArea />} text={surface} />
      </div>
      <div className="text-lg font-semibold text-violet-600 mb-4">{price}</div>
    </div>
  )
};

export default House;

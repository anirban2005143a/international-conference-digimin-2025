"use client"
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';

const MemberCard = ({ member }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-60 overflow-hidden">
        <Image
          width={200}
          height={200}
          loading='lazy'
          src={member.image}
          alt={`Photo of ${member.name}`}
          className="w-full h-full object-contain object-center transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-semibold">{member.name}</h3>
          <p className="text-gray-100 font-normal text-sm">{member.title}</p>
        </div>
      </div>

      <div className="p-4">
        <p className="text-blue-800 font-medium text-sm mb-3">{member.affiliation}</p>

        <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-96' : 'max-h-24'}`}>
          <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 flex items-center text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors"
        >
          {expanded ? (
            <>
              <span>Read less</span>
              <ChevronUp size={16} className="ml-1" />
            </>
          ) : (
            <>
              <span>Read more</span>
              <ChevronDown size={16} className="ml-1" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default MemberCard;
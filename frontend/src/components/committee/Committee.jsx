"use client"
import React from 'react';
import { committeeMembers } from './allMembersData';
import MemberCard from './MemberCard';
import { Users } from 'lucide-react';

const CommitteePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-25">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
            <Users size={24} className="text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
            Our Committee
          </h1>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-blue-700 max-w-2xl mx-auto">
            Meet our distinguished committee members from the Department of Mining Engineering at IIT (ISM) Dhanbad, 
            leading innovation and excellence in mining education and research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {committeeMembers.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommitteePage;
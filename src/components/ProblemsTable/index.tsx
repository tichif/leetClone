import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import Link from 'next/link';

import { problems } from '@/mockProblems/problems';

type Props = {};

const ProblemsTable = (props: Props) => {
  return (
    <tbody className='text-white'>
      {problems.map((doc, index) => {
        const difficulyColor =
          doc.difficulty === 'Easy'
            ? 'text-dark-green-s'
            : doc.difficulty === 'Medium'
            ? 'text-dark-yellow'
            : 'text-dark-pink';

        return (
          <tr
            className={`${index % 2 === 1 ? 'bg-dark-layer-1' : ''}`}
            key={doc.id}
          >
            <th className='px-2 py-4 font-medium whitespace-nowrap text-dark-green-s'>
              <BsCheckCircle fontSize={'18'} width='18' />
            </th>
            <td className='px-6 py-4'>
              <Link
                className='hover:text-blue-600 cursor-pointer'
                href={`/problems/${doc.id}`}
              >
                {doc.title}
              </Link>
            </td>
            <td className={`px-6 py-4 ${difficulyColor}`}>{doc.difficulty}</td>
            <td className='px-6 py-4'>{doc.category}</td>
            <td className='px-6 py-4'>
              {doc.videoId ? (
                <AiFillYoutube
                  fontSize={28}
                  className='cursor-pointer hover:text-red-600'
                />
              ) : (
                <p className='text-gray-400'>Coming soon</p>
              )}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default ProblemsTable;

import t1 from '../assets/trainer1.jpg';
import t2 from '../assets/trainer2.jpg';
import t3 from '../assets/trainer3.jpg';
import t4 from '../assets/trainer4.jpg';
import t5 from '../assets/trainer5.jpg';
import t6 from '../assets/nut1.jpg';
import t7 from '../assets/nut2.jpg';
import t8 from '../assets/nut4.jpg';
import t9 from '../assets/nut3.jpg';
import t10 from '../assets/r7.jpg';

import React, { useState, createContext } from 'react'

export const TrainerContext = createContext();

const TrainerContextProvider = (props) => {
    const trainer_data = [
        {
            id: 1,
            name: 'Manish Advilkar',
            gender: `male`,
            pic: t1,
            type: 'gym',
            qualification: 'Personal Trainer (ACE-CPT)',
            experience: 6,
            slug: 'michelle'  
         },
        {
            id: 2,
            name: 'Anupriya Kapur',
            gender: `female`,
            pic: t2,
            type: 'gym',
            qualification: 'Personal Trainer (ACE-CPT)',
            experience: 4,
            slug: 'Anupriya'  
       },
        {
            id: 3,
            name: 'Christy Rhoades',
            gender: `female`,
            pic: t3,
            type: 'gym',
            qualification: 'ACSM Certified Personal Trainer (CPT)',
            experience: 5,
            slug: 'christy'        
        },
        {
            id: 4,
            name: 'Samir Jaura',
            gender: `male`,
            pic: t4,
            type: 'gym',
            qualification: 'Certified Personal Fitness Trainer (CPFT)',
            experience: 6,
            slug: 'Samir'        
        },
        {
            id: 5,
            name: 'David Phelps',
            gender: `male`,
            pic: t5,
            type: 'gym',
            qualification: 'International Fitness Professionals Association Personal Fitness Training Certification (IFPA - PFT)',
            experience: 7,
            slug: 'juan'        
        },
        {
            id: 6,
            name: 'Yuvraj Bhavnagar',
            gender: `male`,
            pic: t6,
            type: 'nut',
            qualification: 'MS Nutrition and Food Science from University of California-Berkeley',
            experience: 5,
            slug: 'Yuvraj'  
        },
        {
            id: 7,
            name: 'Rujuta Diwekar',
            gender: `female`,
            pic: t7,
            type: 'nut',
            qualification: 'PhD in Applied Nutrition from Cornell University',
            experience: 7,
            slug: 'Rujuta'        
        },
        {
            id: 8,
            name: 'Rohan Sharma',
            gender: `male`,
            pic: t8,
            type: 'nut',
            qualification: 'MS in Nutrition and Food Science from University of Georgia',
            experience: 3,
            slug: 'Rohan'        
        },
        {
            id: 9,
            name: 'Isabella Munez',
            gender: `female`,
            pic: t9,
            type: 'nut',
            qualification: 'BS in Clinical Nutrition from Syracuse University',
            experience: 2,
            slug: 'isabella' 
        },
        {
            id: 10,
            name: 'Tarun Bhatia',
            gender: `male`,
            pic: t10,
            type: 'gym',
            qualification: 'Certified Personal Fitness Trainer (CPFT)',
            experience: 12,
            slug:'Tarun'
        }
    ]

    const [trainers] = useState(trainer_data);

    return (
        <TrainerContext.Provider value={[...trainers]}>
            {props.children}
        </TrainerContext.Provider>
    )
}

export default TrainerContextProvider


import React, { useState, useEffect, useRef } from 'react';
import PageTitle from '../components/Nav/Meta/PageTitle';
import PricingCard from '../components/pricing/PricingCard';

const Pricing = () => {
    const [isActive, setIsActive] = useState('is-month');
    const [price, setPrice] = useState([
        {
            id: '1',
            type: 'free',
            currencyType: 'NGN',
            amount: '0.00',
            features: [
                'Single users',
                'Personal projects',
                'Social media account',
            ]
        },
        {
            id: '2',
            type: 'commercial',
            currencyType: 'NGN',
            amount: '100.00',
            features: [
                'Single users',
                'Personal projects',
                'Social media account',
            ]
        },
        {
            id: '3',
            type: 'Extended',
            currencyType: 'NGN',
            amount: '1000.00',
            features: [
                'Single users',
                'Personal projects',
                'Social media account',
                'Digital advertisements for local, national and global markets'
            ]
        }
    ]);

    const useEffectAfterMount = (cb, dependencies) => {
        const mounted = useRef(false);
        useEffect(() => {
            if (mounted.current) {
               cb();
            }else{
               mounted.current = true
            }
        }, dependencies);// eslint-disable-line react-hooks/exhaustive-deps
    };
    
    useEffectAfterMount(() => {
        setPrice(prevPrice => prevPrice.map(item => {
            if (isActive === 'is-month') {
                return { ...item, amount: (parseFloat(item.amount) / 12).toFixed(2) };
            } else if (isActive === 'is-year') {
                return { ...item, amount: (parseFloat(item.amount) * 12).toFixed(2) };
            }
            return item;
        }));
    }, [isActive]);

    const paymentFrequency = (val) => {
        switch (val) {
            case 'per-month':
                setIsActive('is-month');
                break;
            case 'per-year':
                setIsActive('is-year');
                break;
            default:
                setIsActive('is-month');
        }
    };

    return (
        <>
            <PageTitle title='Pricing' />
            <div className='pricing-tag'>
                <small>Choose the plan that's right for your brand. Whether you are just getting started with task management or you are creating tasks for a team, there's a plan for you.</small>
            </div>
            <div className='pricing-setter button'>
                <div className='price-setter-main'>
                    <button onClick={() => paymentFrequency('per-month')} className={isActive === 'is-month' ? 'active' : ''}>monthly</button>
                    <button onClick={() => paymentFrequency('per-year')} className={isActive === 'is-year' ? 'active' : ''}>yearly</button>
                </div>
            </div>
            <div className='pricing-page'>
                {price.map((item) => (
                    <PricingCard key={item.id} details={item} />
                ))}
            </div>
        </>
    );
};

export default Pricing;

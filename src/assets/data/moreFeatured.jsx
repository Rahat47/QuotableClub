import audioCollection from '../images/audiocollection.jpeg';
// import audible from '../images/audible.png';
import audibleNew from '../images/audibleNew.jpeg';
import poster from '../images/poster.jpeg';
import kindle from '../images/kindle.jpeg';
import kindleUnlimited from '../images/kindleUnlimited.png';
import greatestHits from '../images/greatesthits.jpeg';
import primeMusic from '../images/primemusic.jpeg';

export const moreFeatured = [
    {
        id: 1,
        title: 'The Best Of Les Brown: Audio Collection',
        image: audioCollection,
        link: 'https://www.google.com/url?q=https%3A%2F%2Fgeni.us%2FBest_of_Les&sa=D&sntz=1&usg=AOvVaw08ThZgPxnKBfw35lNgw9jW',
        children: () => (
            <>
                Study the science of achievement through the wisdom of the
                world's leading motivational speaker, Les Brown.
                <br />
                <br />
                <a
                    href='https://www.google.com/url?q=https%3A%2F%2Fgeni.us%2FBest_of_Les&sa=D&sntz=1&usg=AOvVaw08ThZgPxnKBfw35lNgw9jW'
                    className='text-yellow-400 hover:text-yellow-500'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    In this collection of live keynote speeches,{' '}
                </a>
                Les Brown's straight-from-the-heart approach will change your
                belief in what you can achieve. This popular collection of audio
                recordings includes Les Brown's most powerful speeches.
            </>
        ),
    },
    {
        id: 2,
        title: 'Join Audible',
        image: audibleNew,
        link: 'https://www.google.com/url?q=https%3A%2F%2Famzn.to%2F3McZnyq&sa=D&sntz=1&usg=AOvVaw0aSF8_BjifMTsS07KxiqZv',
        children: () => (
            <>
                <a
                    href='https://www.google.com/url?q=https%3A%2F%2Famzn.to%2F3McZnyq&sa=D&sntz=1&usg=AOvVaw0aSF8_BjifMTsS07KxiqZv'
                    className='text-yellow-400 hover:text-yellow-500'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Sign up for Audible Plus,{' '}
                </a>
                <br />
                <br />a brand new all-you-can-listen membership that offers
                access to thousands of titles.
                <br />
                <br />
                <a
                    href='https://www.google.com/url?q=https%3A%2F%2Famzn.to%2F3McZnyq&sa=D&sntz=1&usg=AOvVaw0aSF8_BjifMTsS07KxiqZv'
                    className='text-yellow-400 hover:text-yellow-500'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    including a vast array of audiobooks,{' '}
                </a>
                podcasts and originals that span genres, lengths, and formats
            </>
        ),
    },
    {
        id: 3,
        title: 'You’ve Got To Be HUNGRY:',
        image: poster,
        link: 'https://www.google.com/url?q=https%3A%2F%2Fgeni.us%2FLes_BookHungry&sa=D&sntz=1&usg=AOvVaw2x0VN2oKLgo5dV3RJcxDRN',
        children: () => (
            <>
                As one of the world’s most renowned motivational speakers,{' '}
                <a
                    href='https://www.google.com/url?q=https%3A%2F%2Fgeni.us%2FLes_BookHungry&sa=D&sntz=1&usg=AOvVaw2x0VN2oKLgo5dV3RJcxDRN'
                    className='text-yellow-400 hover:text-yellow-500'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Les Brown is a dynamic personality and highly-sought-after
                    resource in business{' '}
                </a>{' '}
                and professional circles for Fortune 500 CEOs, small business
                owners, non-profit and community leaders from all sectors of
                society looking to expand opportunity.
            </>
        ),
    },
    {
        id: 4,
        title: 'Join Kindle Unlimited',
        image: kindleUnlimited,
        link: 'https://www.amazon.com/kindle-dbs/hz/subscribe/ku?linkCode=pf4&linkId=43c9173cd454eb57c0185f4a1d04113d&_encoding=UTF8&ref_=assoc_tag_ph_1454291293420&tag=fnbooster-20&creative=9325&camp=1789&shoppingPortalEnabled=true',
        children: () => (
            <>
                {/* <a
                    href='https://www.google.com/url?q=https%3A%2F%2Famzn.to%2F3Ofcpxj&sa=D&sntz=1&usg=AOvVaw2npFplC07hMkEOoYahjBUc'
                    className='text-yellow-400 hover:text-yellow-500'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    See Kindle Unlimited 6, 12 and 24-month membership plans{' '}
                </a>{' '}
                <br />
                <br />
                *Unlimited reading from over 1 million ebooks *Unlimited
                <br />
                <br />
                listening to thousands of audiobooks *Read on any device
                <br />
                <br />
                *Membership plans are also giftable */}
                <img
                    src={kindle}
                    alt='kindle details'
                    className='mx-auto w-1/2 object-contain'
                />
            </>
        ),
    },

    {
        id: 5,
        title: 'Listen to Les Brown: Greatest Hits',
        image: greatestHits,
        link: 'https://www.google.com/url?q=https%3A%2F%2Fgeni.us%2FBest_of_Les_Music&sa=D&sntz=1&usg=AOvVaw3Vt7UoTyeXcMJsuRW5EIKL',
        children: () => (
            <>
                Feeding your mind with Les Brown's unique brand of positive
                motivation will empower you to shed your excuses and unwrap your
                greatness.
                <br />
                <br />
                <a
                    href='https://www.google.com/url?q=https%3A%2F%2Famzn.to%2F3Ofcpxj&sa=D&sntz=1&usg=AOvVaw2npFplC07hMkEOoYahjBUc'
                    className='text-yellow-400 hover:text-yellow-500'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Through this extraordinary collection
                </a>
                , you will learn the importance of attitude, setting goals, and
                creating a powerful personal vision to guide you on your
                journey.
                <br />
                <br />
                With the tools you'll gain in this program, your life of
                greatness is just one step away.
            </>
        ),
    },
    {
        id: 6,
        title: 'Join Prime Music',
        image: primeMusic,
        link: 'https://www.google.com/url?q=https%3A%2F%2Famzn.to%2F3Mduudd&sa=D&sntz=1&usg=AOvVaw2uwXi-O2YU5AX6-q26FHDW',
        children: () => (
            <>
                sign up for Amazon Prime Music 30-day Free Trials. Our
                membership program offers special benefits including:
                <br />
                <br />
                *Unlimited, ad-free streaming of over a million songs
                <br />
                <br />
                *Instant streaming of thousands of movies and TV shows
                <br />
                <br />
                *FREE two-day shipping (no minimum order size)
                <br />
                <br />
                *Borrow Kindle books
            </>
        ),
    },
];

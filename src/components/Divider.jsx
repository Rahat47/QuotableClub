const Divider = () => {
    return (
        <div className='relative py-4'>
            <div
                className='absolute inset-x-6 inset-y-0 flex items-center'
                aria-hidden='true'
            >
                <div className='w-full border-t border-yellow-300' />
            </div>
        </div>
    );
};

export default Divider;

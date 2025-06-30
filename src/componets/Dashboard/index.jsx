import Users from '../../pages/users'
const DashBorad = () => {
    return (

        <div className='grid'>
            <div className='grid grid-cols-4 gap-2'>
                <div className='bg-white rounded-lg h-30'>
                    salam
                </div>
                <div className='bg-white rounded-lg h-30'>
                    salam
                </div>
                <div className='bg-white rounded-lg h-30'>
                    salam
                </div>
                <div className='bg-white rounded-lg h-30'>
                    salam
                </div>
            </div>
            <div className='bg-white mt-4 h-86 p-3 overflow-y-scroll rounded-xl'>
                <Users />
            </div>
        </div>
    )
}

export default DashBorad

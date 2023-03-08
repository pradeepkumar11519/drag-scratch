import React from 'react'
import Box from './Box'
import DustBin from './DustBin'
export default function Container() {
    return (
        <div>
            <div>
                <div className='w-[150px] border-2 border-black  '>
                    <div className=''>
                        <ul className=''>
                            <Box name="Home" />
                            <Box name="Events" />
                            <Box name="Projects" />
                            <Box name="Team" />

                        </ul>

                    </div>

                </div>
                <div style={{ overflow: 'hidden', clear: 'both' }}>
                    <DustBin />
                </div>
            </div>


        </div>
    )
}

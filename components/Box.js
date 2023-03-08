import { useRouter } from 'next/navigation'

import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
const style = {
  border: '1px solid white',
  backgroundColor: 'black',
  cursor: 'move',
  color:"white",
  padding:"0.5rem",
  margin:"0.25rem",
}
export default function Box({name}) {
  const router = useRouter()
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.BOX,
        item: { name },
        end: (item, monitor) => {
          const dropResult = monitor.getDropResult()
          if (item && dropResult) {
            if(item.name=="Home"){
              router.push(`/`)
            }
            else{
              router.push(`/${item.name}`)
            }
            
          }
        },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
          handlerId: monitor.getHandlerId(),
        }),
      }))
      const opacity = isDragging ? 0.4 : 1
  return (
    <div ref={drag} style={{ ...style, opacity }} data-testid={`box`}>
      {name}
    </div>
  )
}

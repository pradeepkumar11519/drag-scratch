"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { DndProvider } from 'react-dnd'
import DustBin from './DustBin';
import { HTML5Backend } from 'react-dnd-html5-backend'
import Container from './Container';
import Router from 'next/router'
import { useEffect } from 'react';
export default function Navbar() {
    const router = useRouter()
    useEffect(()=>{
        if (window.performance) {
            if (performance.navigation.type == 1) {
              router.push('/')
            } 
          }
    },[])
    const CloseOffCanvasNavbar = () => {

    }
    return (
        <div>
            <div className="App">
				<DndProvider backend={HTML5Backend}>
					<Container />
				</DndProvider>
			</div>
        </div>
    )
}

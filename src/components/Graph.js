import React from 'react'
import { Chart, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import Labels from './Labels'
Chart.register(ArcElement)

const config = {
    data: {

        datasets: [{

            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4,
            borderRadius: 30,
            spacing: 10

        }]
    },
    options: {
        cutout: 115
    }
}
export default function Graph() {
    return (
        <div className='flex justify-center max-w-xs mx-auto'>
            <div className='item'>
                <div className='chart relative'>
                    <Doughnut {...config}></Doughnut>
                    <h3 className='mb-4 capitalize font-bold absolute left-0 right-0 top-[40%] ml-auto mr-auto px-5 '>
                        total
                        <span className='block text-3xl text-emerald-400 absolute left-0 right-0 top-[40%] ml-auto mr-auto py-5'>฿(0)</span>
                    </h3>
                </div>
                <div className='flex flex-col py-10 gap-4'>
                    {/* label */}
                    <Labels></Labels>
                </div>
            </div>
        </div>
    )
}

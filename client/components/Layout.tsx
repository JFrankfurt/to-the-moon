import React from 'react'

type LayoutProps = {
    children: React.ReactChild | React.ReactChildren;
}

export default (props: LayoutProps) =>
    <div className='root'>
        <div className='container'>
            {props.children}
        </div>
        <style jsx>{`
            .root {
                align-items: center;
                background-color: black;
                display: flex;
                height: 100vh;
                justify-content: center;
                width: 100vw;
            }
            .container {
                display: flex;
                min-height: 600px;
                min-width: 375px;
                width: 50vw;
            }
        `}</style>
    </div>

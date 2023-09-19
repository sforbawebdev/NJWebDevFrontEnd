import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head />
            <body>
                <div className="site-loader">
                    <div className="site-loader__content">
                        <svg className="site-loader__logo" xmlns="http://www.w3.org/2000/svg" width="353.98" height="353.98" viewBox="0 0 353.98 353.98">
                            <g>
                                <circle fill="#fff" className="a" cx="176.99" cy="176.99" r="176.99"/>
                                <path fill="#141414" fillRule='evenodd' clipRule='evenodd'  className="s"d="m230.94,169.89v47.13c0,2.5-.56,4.4-1.68,5.72-1.12,1.31-2.69,1.97-4.73,1.97-2.23,0-3.94-.74-5.13-2.22-1.18-1.48-1.77-3.66-1.77-6.56h-16.76c0,7.62,2.2,13.51,6.61,17.65s10.25,6.21,17.55,6.21,12.5-1.97,16.61-5.92,6.16-9.56,6.16-16.86v-47.13h-16.86Z"/>
                                <path fill="#141414" fillRule='evenodd' clipRule='evenodd' className="f" d="m165.24,83.03h-16.43v41.79l-27.48-41.79h-16.43v67.45h16.43v-41.6l27.48,41.6h16.43v-67.45Z"/>
                                <line stroke="#141414" strokeWidth="6" fill="#141414" className="line" x1="101.2" y1="246.05" x2="265.22" y2="82.03"/>
                            </g>
                        </svg>
                    </div>
                </div>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}